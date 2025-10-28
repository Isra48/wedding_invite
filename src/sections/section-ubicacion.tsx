import SectionHeader from "@atoms/SectionHeader";

export default function SectionUbicacion({ id, title }: { id: string; title?: string }) {
  return (
    <section id={id} className="section">
      <div className="container-wide">
        {title && (
          <h2 className="text-3xl font-dancing font-bold mb-6 text-center">
            {title}
          </h2>
        )}

        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.107278954188!2d-99.19904662306092!3d18.882321382282797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf14794c1b93%3A0xc7c5b1f058210d7e!2zSmFyZMOtbiBIdWF5YWPDoW4!5e0!3m2!1sen!2smx!4v1761622832273!5m2!1sen!2smx"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
