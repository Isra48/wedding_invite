import Heading from "@atoms/Heading";
import RSVPForm from "@molecules/RSVPForm";
export default function SectionRSVP({ id, title }:{ id:string; title?:string }){
  return (<section id={id} className="section bg-rose/10">
    <div className="container-narrow">
      <Heading as="h2" size="h2">{title}</Heading>
      <div className="mt-8"><RSVPForm /></div>
    </div>
  </section>);
}
