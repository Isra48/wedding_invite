import Heading from "@atoms/Heading";
import Timeline from "@organisms/Timeline";
export default function SectionItinerario({ id, title }:{ id:string; title?:string }){
  return (<section id={id} className="section bg-secondary/10">
    <div className="container-narrow">
      <Heading as="h2" size="h2">{title}</Heading>
      <div className="mt-8"><Timeline /></div>
    </div>
  </section>);
}
