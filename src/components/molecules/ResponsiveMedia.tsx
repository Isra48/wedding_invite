"use client";
import Image from "next/image";
import { useState } from "react";
type Props = { src?: string; alt?: string; className?: string; aspect?: string; aspectSm?: string; aspectMd?: string; aspectLg?: string; rounded?: string; priority?: boolean; };

export default function ResponsiveMedia({ src, alt="Imagen", className="", aspect="aspect-[4/5]", aspectSm="sm:aspect-[4/5]", aspectMd="md:aspect-[3/4]", aspectLg="lg:aspect-[4/5]", rounded="rounded-3xl", priority }: Props){
  const [loaded,setLoaded]=useState(false); const [error,setError]=useState(false);
  return (<div className={`relative w-full ${aspect} ${aspectSm} ${aspectMd} ${aspectLg} overflow-hidden border ${rounded} ${className}`}>
    <div className={`absolute inset-0 bg-gradient-to-r from-rose/20 via-rose/10 to-white ${(!loaded||error)?"opacity-100":"opacity-0"} transition-opacity`} />
    {src && !error && <Image src={src} alt={alt} fill priority={priority} sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" onLoad={()=>setLoaded(true)} onError={()=>setError(true)} />}
  </div>);
}
