"use client";
import Image from "next/image";
import { useState } from "react";
type Props = { src:string; alt:string; className?:string; fill?:boolean; width?:number; height?:number; priority?:boolean; sizes?:string; };
export default function ImageLoader(props:Props){
  const [loaded,setLoaded]=useState(false); const [error,setError]=useState(false);
  const { className, fill, width, height, sizes, ...rest } = props;
  return (<div className={`relative w-full overflow-hidden rounded-3xl border ${className??""}`}>
    <div className={`absolute inset-0 bg-gradient-to-r from-rose/20 via-rose/10 to-white ${(!loaded||error)?"opacity-100":"opacity-0"} transition-opacity`} />
    {fill ? <Image {...rest} fill sizes={sizes||"(min-width:1024px) 50vw, 100vw"} className="object-cover" onLoad={()=>setLoaded(true)} onError={()=>setError(true)} />
          : <Image {...rest} width={width} height={height} sizes={sizes||"(min-width:1024px) 50vw, 100vw"} className="w-full h-auto object-cover" onLoad={()=>setLoaded(true)} onError={()=>setError(true)} />}
  </div>);
}
