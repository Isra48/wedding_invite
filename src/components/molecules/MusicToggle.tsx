"use client";
import { useRef, useState } from "react";
export default function MusicToggle(){
  const audioRef = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  const toggle = () => { const a = audioRef.current; if(!a) return; if(on){a.pause(); setOn(false);} else { a.play().catch(()=>{}); setOn(true);} };
  return (<div className="fixed bottom-4 right-4 z-50">
    <audio ref={audioRef} src="/music-sample.mp3" loop />
    <button onClick={toggle} className="rounded-full px-4 py-2 text-sm shadow-md bg-white/80 backdrop-blur border">
      {on ? "Pausar música" : "Reproducir música"}
    </button>
  </div>);
}
