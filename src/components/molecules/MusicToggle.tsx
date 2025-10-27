"use client";
import { useEffect, useRef, useState } from "react";

/** Ajustes */
const TARGET_GAIN = 0.6;          // volumen final (0–1)
const FADE_IN_MS = 1200;          // duración del fade-in
const FADE_OUT_MS = 600;          // duración del fade-out
const SRC = "/music/bg.mp3";      // coloca tu mp3 en public/music/bg.mp3

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Web Audio
  const ctxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // UI
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);

  /** Helpers */
  const ensureAudioGraph = async () => {
    const a = audioRef.current;
    if (!a) return;

    if (!ctxRef.current) {
      const Ctx = (window.AudioContext || (window as any).webkitAudioContext);
      ctxRef.current = new Ctx();
    }
    const ctx = ctxRef.current!;
    if (ctx.state === "suspended") {
      await ctx.resume().catch(() => {});
    }

    if (!gainRef.current) {
      gainRef.current = ctx.createGain();
      gainRef.current.gain.setValueAtTime(0, ctx.currentTime);
    }
    if (!sourceRef.current) {
      sourceRef.current = ctx.createMediaElementSource(a);
      sourceRef.current.connect(gainRef.current);
      gainRef.current.connect(ctx.destination);
    }
  };

  const now = () => (ctxRef.current ? ctxRef.current.currentTime : 0);

  const fadeTo = (target: number, ms: number) => {
    const g = gainRef.current;
    const ctx = ctxRef.current;
    if (!g || !ctx) return;
    const t0 = now();
    g.gain.cancelScheduledValues(t0);
    const current = g.gain.value;
    g.gain.setValueAtTime(current, t0);
    g.gain.linearRampToValueAtTime(target, t0 + ms / 1000);
  };

  const safePlay = async () => {
    const a = audioRef.current;
    if (!a) return false;
    try {
      if (a.paused) await a.play();
      return true;
    } catch {
      return false;
    }
  };

  /** Armado de listeners robusto (window + document + body, varios gestos) */
  const targets: (Window | Document | HTMLElement)[] = [];
  const armTargets = () => {
    if (typeof window !== "undefined") targets.push(window);
    if (typeof document !== "undefined") {
      targets.push(document);
      if (document.body) targets.push(document.body);
    }
  };

  const armedEvents = [
    "touchstart",
    "touchend",
    "pointerdown",
    "click",
    "keydown",
    "wheel",
    "scroll",
  ] as const;

  const userActivate = async () => {
    await ensureAudioGraph();
    const a = audioRef.current;
    if (!a) return;

    a.muted = false; // desmuteo tras gesto
    const ok = await safePlay();
    if (ok) {
      // empezar desde 0 para un fade consistente
      if (gainRef.current) {
        gainRef.current.gain.setValueAtTime(0, now());
      }
      fadeTo(TARGET_GAIN, FADE_IN_MS);
      setOn(true);
      localStorage.setItem("bgmEnabled", "1");
      removeArmedListeners();
    }
  };

  const addArmedListeners = () => {
    armTargets();
    targets.forEach((t) =>
      armedEvents.forEach((ev) =>
        t.addEventListener(ev, userActivate as any, { passive: true, once: true })
      )
    );
  };

  const removeArmedListeners = () => {
    targets.forEach((t) =>
      armedEvents.forEach((ev) => t.removeEventListener(ev, userActivate as any))
    );
  };

  /** Montaje: autoplay silencioso + preparación + reintentos */
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const onCanPlay = () => setReady(true);
    a.addEventListener("canplay", onCanPlay);

    // Autoplay silencioso permitido en mobile
    a.muted = true;
    a.loop = true;
    a.preload = "auto";

    // Intento inicial: reproducir en silencio y preparar AudioContext
    safePlay().then(() => {
      ensureAudioGraph();
      addArmedListeners();
      if (localStorage.getItem("bgmEnabled") === "1") {
        // igualmente en iOS necesitamos un gesto para resume/desmuteo
        addArmedListeners();
      }
    });

    // Reintento suave al volver a primer plano
    const vis = () => {
      if (document.visibilityState === "visible") {
        ensureAudioGraph();
        safePlay();
      }
    };
    document.addEventListener("visibilitychange", vis);

    // Reintento suave a los 2.5s por si algo quedó colgado
    const retry = setTimeout(() => {
      ensureAudioGraph();
      safePlay();
    }, 2500);

    return () => {
      a.removeEventListener("canplay", onCanPlay);
      document.removeEventListener("visibilitychange", vis);
      clearTimeout(retry);
      removeArmedListeners();
      try {
        sourceRef.current?.disconnect();
        gainRef.current?.disconnect();
      } catch {}
      sourceRef.current = null;
      gainRef.current = null;
      // no cerramos ctxRef para no interferir con otros sonidos del sitio
    };
  }, []);

  /** Toggle manual (botón) */
  const toggle = async () => {
    await ensureAudioGraph();
    const a = audioRef.current;
    if (!a) return;

    if (on) {
      fadeTo(0, FADE_OUT_MS);
      setOn(false);
      localStorage.setItem("bgmEnabled", "0");
      setTimeout(() => a.pause(), FADE_OUT_MS + 30);
    } else {
      a.muted = false;
      const ok = await safePlay();
      if (ok) {
        if (gainRef.current) {
          gainRef.current.gain.setValueAtTime(0, now());
        }
        fadeTo(TARGET_GAIN, FADE_IN_MS);
        setOn(true);
        localStorage.setItem("bgmEnabled", "1");
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src={SRC}
        autoPlay
        muted        // clave para permitir autoplay en mobile
        playsInline  // evita fullscreen de iOS
      />

      <button
        aria-label={on ? "Pausar música" : "Reproducir música"}
        onClick={toggle}
        className="h-12 w-12 rounded-full shadow-md border border-black/10
                   bg-neutral-800 text-white grid place-items-center
                   hover:opacity-90 active:scale-95 transition"
        title={on ? "Pausar" : (ready ? "Reproducir" : "Cargando…")}
      >
        {on ? (
          // pause
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect x="6" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
            <rect x="14" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
          </svg>
        ) : (
          // nota musical
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 0V6l10-2v12.5"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
            <circle cx="19" cy="18.5" r="2.5" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
