export default function Map({ query }: { query?: string }){
  const q = encodeURIComponent(query || "Venue location");
  return (<div className="rounded-2xl overflow-hidden border bg-white">
    <div className="aspect-[16/9]">
      <iframe className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-PLACE-YOUR-KEY&q=${q}`} />
    </div>
  </div>);
}
