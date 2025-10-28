"use client";
import Image from "next/image";
import { useState } from "react";

type GalleryProps = {
  images?: string[];
};

export default function Gallery({
  images = [
    "/gallery/foto-01.jpg",
    "/gallery/foto-02.jpg",
    "/gallery/foto-03.jpg",
  ],
}: GalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {images.map((src, i) => (
        <GalleryItem key={i} src={src} alt={`Foto ${i + 1}`} />
      ))}
    </div>
  );
}

function GalleryItem({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
      {/* Shimmer loader */}
      {!loaded && (
        <div className="absolute inset-0 shimmer rounded-2xl" />
      )}

      {/* Imagen */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
        className={`object-cover object-center transition-transform duration-300 hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
    onLoad={() => setLoaded(true)}

      />
    </div>
  );
}
