"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export default function RevealOnScroll({ children, delay=0 }:{children:React.ReactNode; delay?:number}){
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const controls = useAnimation();
  useEffect(()=>{ if(inView) controls.start("visible"); },[inView, controls]);
  return (<motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden:{opacity:0,y:16}, visible:{opacity:1,y:0,transition:{duration:0.6,delay}}}}>{children}</motion.div>);
}
