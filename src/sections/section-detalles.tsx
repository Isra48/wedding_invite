import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import InfoCard from "@molecules/InfoCard";
export default function SectionDetalles({ id, title }:{ id:string; title?:string }){
  return (<section id={id} className="section container-wide">
    <Heading as="h2" size="h2">{title}</Heading>
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      <InfoCard title="Fecha">Sábado, 07 de febrero de 2026 · 2:30 PM</InfoCard>
      <InfoCard title="Lugar"> Jardín huayacan · Jiutepec, Mor.</InfoCard>
      <InfoCard title="Dresscode H">Formal de jardín</InfoCard>
         <InfoCard title="Dresscode M">Formal de jardín</InfoCard>
    </div>
    
  </section>);
}
