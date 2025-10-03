"use client";
import { useState } from "react";
import Heading from "@atoms/Heading";
import Button from "@atoms/Button";
export default function RSVPForm(){
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [guests,setGuests]=useState(1); const [message,setMessage]=useState(""); const [submitted,setSubmitted]=useState(false);
  const onSubmit=(e:React.FormEvent)=>{ e.preventDefault(); setSubmitted(true); };
  if(submitted){ return (<div className="card p-6"><Heading as="h3" size="h3">Gracias por confirmar</Heading><p className="mt-2 text-slate-600">Hemos registrado tu respuesta.</p></div>); }
  return (<form onSubmit={onSubmit} className="card p-6 grid gap-4">
    <Heading as="h3" size="h3">Confirma tu asistencia</Heading>
    <label className="grid gap-1"><span className="text-sm text-slate-600">Nombre completo</span><input required value={name} onChange={e=>setName(e.target.value)} className="rounded-xl border px-4 py-2" /></label>
    <label className="grid gap-1"><span className="text-sm text-slate-600">Correo</span><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="rounded-xl border px-4 py-2" /></label>
    <label className="grid gap-1"><span className="text-sm text-slate-600">Número de acompañantes</span><input type="number" min={0} max={10} value={guests} onChange={e=>setGuests(parseInt(e.target.value||"1"))} className="rounded-xl border px-4 py-2 w-32" /></label>
    <label className="grid gap-1"><span className="text-sm text-slate-600">Mensaje</span><textarea value={message} onChange={e=>setMessage(e.target.value)} rows={4} className="rounded-xl border px-4 py-2" /></label>
    <Button>Enviar</Button>
  </form>);
}
