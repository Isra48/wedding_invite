import SectionHeader from "@atoms/SectionHeader";
import GuestBook from "@organisms/GuestBook";
export default function SectionGuestBook({ id, title }:{ id:string; title?:string }){
  return (<section id={id} className="section">
    <div className="container-wide">
      <SectionHeader title={title || "Best wishes"} subtitle="Comparte un mensaje para los novios" />
      <div className="mt-8"><GuestBook /></div>
    </div>
  </section>);
}
