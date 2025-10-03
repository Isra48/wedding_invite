"use client";
import { useEffect, useState } from "react";
function getRemaining(target: Date){ const now=Date.now(); const diff=Math.max(0, target.getTime()-now);
  const d=Math.floor(diff/86400000); const h=Math.floor((diff%86400000)/3600000); const m=Math.floor((diff%3600000)/60000); const s=Math.floor((diff%60000)/1000); return {d,h,m,s}; }
export default function Countdown({ dateISO }:{dateISO:string}){
  const [mounted,setMounted]=useState(false); const [t,setT]=useState({d:0,h:0,m:0,s:0});
  useEffect(()=>{ setMounted(true); },[]);
  useEffect(()=>{ if(!mounted) return; const target=new Date(dateISO); const tick=()=>setT(getRemaining(target)); tick(); const id=setInterval(tick,1000); return ()=>clearInterval(id); },[dateISO,mounted]);
  const cells = mounted ? [["Dias",t.d],["Horas",t.h],["Min",t.m],["Seg",t.s]] : [["Dias","--"],["Horas","--"],["Min","--"],["Seg","--"]];
  return (<div className="grid grid-cols-4 gap-3 text-center">
    {cells.map(([label,val])=> (<div key={String(label)} className="card py-4"><div className="text-2xl font-semibold">{String(val)}</div><div className="text-xs text-slate-500">{String(label)}</div></div>))}
  </div>);
}
