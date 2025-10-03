import SectionHeader from "@atoms/SectionHeader";
import Countdown from "@molecules/Countdown";
export default function SectionCountdown({ id, title, subtitle }:{ id:string; title?:string; subtitle?:string }){
  return (<section id={id} className="section">
    <div className="container-narrow">
      <SectionHeader title={title || "Cuenta regresiva"} subtitle={subtitle} />
      <div className="mt-8"><Countdown dateISO="2025-10-18T16:00:00-06:00" /></div>
    </div>
  </section>);
}
