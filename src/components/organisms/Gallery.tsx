import ImageLoader from "@molecules/ImageLoader";
export default function Gallery(){
  return (<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
    {Array.from({length:8}).map((_,i)=> (<ImageLoader key={i} src={`/gallery/${i+1}.jpg`} alt={`Foto ${i+1}`} className="aspect-square bg-accent/30" width={800} height={800} />))}
  </div>);
}
