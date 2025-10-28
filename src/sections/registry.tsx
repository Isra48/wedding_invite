import Hero from "@molecules/Hero";
import SectionDetalles from "./section-detalles";
import SectionItinerario from "./section-itinerario";
import SectionGaleria from "./section-galeria";
import SectionRSVP from "./section-rsvp";
import SectionCountdown from "./section-countdown";
import SectionUbicacion from "./section-ubicacion";
import SectionGuestBook from "./section-guestbook";
import SectionRegistry from "./section-registry";
export const sections = (guestId?: string) => [
  { 
    component: (p:any) => <Hero {...p} bgSrc="/hero/bg.jpg" />, props: { id: "hero" } },
  { component: SectionCountdown, props: { id: "countdown", title: "Cuenta regresiva", subtitle: guestId ? `Invitado #${guestId}, te esperamos` : undefined } },
  { component: SectionDetalles, props: { id: "detalles", title: "Detalles" } },
  { component: SectionItinerario, props: { id: "itinerario", title: "Itinerario" } },
  { component: SectionUbicacion, props: { id: "ubicacion", title: "Ubicación" } },
  { component: SectionGaleria, props: { id: "galeria", title: "Galería" } },
  { component: SectionRegistry, props: { id: "regalos", title: "Mesa de regalos" } },
  { component: SectionGuestBook, props: { id: "deseos", title: "Best wishes" } },
  { component: SectionRSVP, props: { id: "rsvp", title: "Confirma tu asistencia" } },
] as const;
