"use client";
import { useEffect, useState } from "react";
type Wish = { name: string; message: string; date: string };
export default function GuestBook(){
  const [wishes,setWishes]=useState<Wish[]>([]);
  const [name,setName]=useState(""); const [message,setMessage]=useState("");
  useEffect(()=>{ const raw=localStorage.getItem("guestbook"); if(raw) setWishes(JSON.parse(raw)); },[]);
  const submit=(e:React.FormEvent)=>{ e.preventDefault(); const next=[{name,message,date:new Date().toISOString()},...wishes].slice(0,50);
    setWishes(next); localStorage.setItem("guestbook", JSON.stringify(next)); setName(""); setMessage(""); };
  return (<div className="grid md:grid-cols-2 gap-6">
    <form onSubmit={submit} className="card p-6 grid gap-3">
      <div className="text-xl font-medium">Deja tus buenos deseos</div>
      <input required placeholder="Tu nombre" value={name} onChange={e=>setName(e.target.value)} className="rounded-xl border px-4 py-2" />
      <textarea required placeholder="Tu mensaje" rows={4} value={message} onChange={e=>setMessage(e.target.value)} className="rounded-xl border px-4 py-2" />
      <button className="rounded-full bg-primary text-white px-5 py-2">Enviar</button>
      <p className="text-xs text-slate-500">Guardado localmente. Conéctalo a tu backend para persistir.</p>
    </form>
    <div className="grid gap-3 max-h-[420px] overflow-auto pr-2">
      {wishes.length===0 && <div className="text-sm text-slate-500">Aún no hay mensajes. Sé el primero.</div>}
      {wishes.map((w,i)=> (<div key={i} className="card p-4"><div className="text-sm text-slate-500">{new Date(w.date).toLocaleString()}</div>
        <div className="font-medium">{w.name}</div><div className="text-slate-700">{w.message}</div></div>))}
    </div>
  </div>);
}
