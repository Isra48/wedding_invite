import SectionHeader from "@atoms/SectionHeader";
import Map from "@organisms/Map";
export default function SectionUbicacion({ id, title }:{ id:string; title?:string }){
  return (<section id={id} className="section bg-secondary/10">
    <div className="container-wide">
      <SectionHeader title={title || "Ubicación"} subtitle="Aquí será la celebración" />
      <div className="mt-8"><Map query="Jardín Los Olivos, CDMX" /></div>
    </div>
  </section>);
}
