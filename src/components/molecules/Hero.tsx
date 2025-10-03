import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import Button from "@atoms/Button";
import RevealOnScroll from "@molecules/RevealOnScroll";
import ResponsiveMedia from "@molecules/ResponsiveMedia";

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="container-wide grid gap-8 items-center lg:grid-cols-2">
        <RevealOnScroll>
          <div className="space-y-6 text-center lg:text-left">
            <Heading as="h1" size="hero">Felix & Celine</Heading>
            <Text className="text-base sm:text-lg md:text-xl">
              Te invitamos a celebrar con nosotros. Encuentra aquí detalles, ubicación y confirma tu asistencia.
            </Text>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button href="#rsvp">Confirmar asistencia</Button>
              <Button href="#detalles" variant="ghost">Ver detalles</Button>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <ResponsiveMedia
            src="/hero.jpg"
            alt="Portada"
            aspect="aspect-[4/5]"
            aspectSm="sm:aspect-[4/5]"
            aspectMd="md:aspect-[3/4]"
            aspectLg="lg:aspect-[4/5]"
            rounded="rounded-3xl"
            className="bg-white"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
