"use client";
import { useState } from "react";
import Button from "@atoms/Button";
import { cx } from "@utils/cx";
const links = [
  { href: "#countdown", label: "Cuenta regresiva" },
  { href: "#detalles", label: "Detalles" },
  { href: "#itinerario", label: "Itinerario" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#galeria", label: "Galería" },
  { href: "#regalos", label: "Regalos" },
  { href: "#deseos", label: "Deseos" },
  { href: "#rsvp", label: "RSVP" },
];
export default function Navbar(){
  const [open,setOpen]=useState(false); const toggle=()=>setOpen(o=>!o); const close=()=>setOpen(false);
  return (<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
    <div className="container-wide flex items-center justify-between h-16">
      <a href="#" className="font-display text-lg">B&nbsp;&amp;&nbsp;E</a>
      <nav className="hidden lg:flex gap-6">{links.map(l=> <a key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-slate-900">{l.label}</a>)}</nav>
      <div className="hidden md:block"><Button href="#rsvp">Confirmar</Button></div>
      <button onClick={toggle} className="lg:hidden rounded-xl border px-3 py-2 text-sm">{open?"Cerrar":"Menú"}</button>
    </div>
    <div className={cx("lg:hidden transition-[max-height] overflow-hidden bg-white/95 backdrop-blur border-t", open?"max-h-96":"max-h-0")}>
      <div className="container-wide py-3 grid gap-2">
        {links.map(l=> <a key={l.href} href={l.href} onClick={close} className="text-sm py-2 border-b last:border-0">{l.label}</a>)}
        <Button href="#rsvp" className="mt-2">Confirmar</Button>
      </div>
    </div>
  </header>);
}
