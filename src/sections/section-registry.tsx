import SectionHeader from "@atoms/SectionHeader";
import Registry from "@organisms/Registry";
export default function SectionRegistry({ id, title }:{ id:string; title?:string }){
  return (<section id={id} className="section bg-rose/10">
    <div className="container-narrow">
      <SectionHeader title={title || "Mesa de regalos"} subtitle="Tu presencia es lo más importante, pero si deseas obsequiar algo:" />
      <div className="mt-8"><Registry /></div>
    </div>
  </section>);
}
