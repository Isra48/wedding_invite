"use client";
import { useEffect, useState } from "react";

function getRemaining(target: Date) {
  const now = Date.now();
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

export default function Countdown({ dateISO }: { dateISO: string }) {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const target = new Date(dateISO);
    const tick = () => setT(getRemaining(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [dateISO, mounted]);

  const cells = mounted
    ? [["Días", t.d], ["Horas", t.h], ["Min", t.m], ["Seg", t.s]]
    : [["Días", "--"], ["Horas", "--"], ["Min", "--"], ["Seg", "--"]];

  return (
    <div className="grid gap-8 text-center">
      {/* ✨ Texto de introducción */}
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-base sm:text-lg italic text-slate-700 leading-relaxed">
          “Mi primer amor fue todo al mismo tiempo. Un amor que nunca olvidas, 
          ni siquiera tratas, tampoco quieres; un amor tan grande, tan fuerte 
          que nunca muere, no se desvanece, no pierde electricidad, la clase 
          de amor por el que luchas…”
        </p>
        <p className="text-sm sm:text-base text-slate-500">— Endless Love</p>
        <p className="text-base sm:text-lg text-slate-700">
          Nos encontramos en el instante perfecto…<br />
          Ocho años después, seguimos viviendo la magia del primer amor.<br />
          Y en 2026, celebraremos que nuestras almas se eligen para siempre.
        </p>
      </div>

      {/* ⏳ Contador */}
      <div className="grid grid-cols-4 gap-3 text-center">
        {cells.map(([label, val]) => (
          <div key={String(label)} className="card py-4">
            <div className="text-2xl font-semibold">{String(val)}</div>
            <div className="text-xs text-slate-500">{String(label)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
