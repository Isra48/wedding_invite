"use client";
import Image from "next/image";
import styles from "./Hero.module.css"; // ✅ asegúrate de tener esta línea

export default function Hero({ bgSrc = "/hero/bg.jpg" }: { bgSrc?: string }) {
  return (
    <section
      id="hero"
      className="relative h-[75vh] md:h-[75vh] lg:h-[80vh]   /* ← alturas por breakpoint */
        flex flex-col items-center justify-start
        overflow-visible
        mb-38 sm:mb-24 md:mb-0
        
        "
    >
      {/* Imagen de fondo */}
      <Image
        src={bgSrc}
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover xl:object-contain"
        style={{ objectPosition: "70% 0%" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Contenedor principal */}
      <div
        className="
          relative z-10
          mt-[38vh] md:mt-[30vh]          
          w-[90%] sm:w-[80%] md:w-[65%] lg:w-[60%]
          flex items-center justify-center
        "
      >
        {/* Imagen lateral izquierda */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 z-00 pointer-events-none"
          style={{ marginLeft: "-75px" }}  // ← ajusta qué tan pegada está
        >
          <img
            src="/hero/side.png"
            alt=""
            aria-hidden="true"
            className="w-[100px] sm:w-[120px] md:w-[150px] scale-[2.3] origin-left will-change-transform"
          />
        </div>

        {/* Contenedor central con borde rasgado */}
        <div
          className={`
    ${styles.tornCard} ${styles.tornCardTall}
    w-[70%] sm:w-[80%] md:w-[65%] lg:w-[90%]
  `}
        >
          <div className={"p-6 sm:p-8 " + styles.tornCardContent}>
            <h2 className="text-center text-xl sm:text-2xl font-semibold text-slate-900">
              We´re getting married
            </h2>
            <img
              src="/hero/ornament.png"
              alt="Decorative separator"
             className="mx-auto block w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] object-contain bg-white/50  opacity-75" 
    
            />
          </div>
        </div>


      </div>
    </section>
  );
}
