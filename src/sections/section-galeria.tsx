import Heading from "@atoms/Heading";
import Gallery from "@organisms/Gallery";
export default function SectionGaleria({ id, title }:{ id:string; title?:string }){
  return (<section id={id} className="section">
    <div className="container-wide">
      <Heading as="h2" size="h2">{title}</Heading>
      <div className="mt-8"><Gallery /></div>
    </div>
  </section>);
}
