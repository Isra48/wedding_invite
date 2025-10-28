import SectionHeader from "@atoms/SectionHeader";
import Countdown from "@molecules/Countdown";
export default function SectionCountdown({ id, title, subtitle }: { id: string; title?: string; subtitle?: string }) {
  return (
  <section id={id} className="section pt-0">
    <div className="container-narrow">
      {/*<SectionHeader title={title || "Cuenta regresiva"} subtitle={subtitle} /> */}
      <div className="mt-8"><Countdown dateISO="2026-02-07T16:00:00-00:00" /></div>
    </div>
  </section>);
}
