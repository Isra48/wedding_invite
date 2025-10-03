import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import InfoCard from "@molecules/InfoCard";
export default function SectionDetalles({ id, title }:{ id:string; title?:string }){
  return (<section id={id} className="section container-wide">
    <Heading as="h2" size="h2">{title}</Heading>
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      <InfoCard title="Fecha">Sábado, 18 de Octubre de 2025 · 4:00 PM</InfoCard>
      <InfoCard title="Lugar">Jardín Los Olivos · Ciudad de México</InfoCard>
      <InfoCard title="Código de vestimenta">Formal de jardín</InfoCard>
    </div>
    <div className="mt-8"><Text>Reemplaza este texto con los detalles reales del evento.</Text></div>
  </section>);
}
