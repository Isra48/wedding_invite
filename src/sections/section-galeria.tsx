import Heading from "@atoms/Heading";
import Gallery from "@organisms/Gallery";

const myImages = [
  "/gallery/foto-01.jpeg",
  "/gallery/foto-02.jpeg",
  "/gallery/foto-03.jpeg",
  "/gallery/foto-04.jpeg",
  "/gallery/foto-05.jpg",
  "/gallery/foto-06.jpg",
];

export default function SectionGaleria({ id, title }: { id: string; title?: string }) {
  return (
    <section id={id} className="section">
      <div className="container-wide">
        <Heading as="h2" size="h2">{title}</Heading>
        <div className="mt-8">
          <Gallery images={myImages} />
        </div>
      </div>
    </section>
  );
}
