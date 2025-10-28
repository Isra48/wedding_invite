type Item = { time: string; title: string; description?: string };
const items: Item[] = [
  { time: "16:00", title: "Ceremonia", description: "Jardín principal" },
  { time: "14:30", title: "Bienvenida" },
  { time: "15:00", title: "Ceremonia" },
  { time: "16:00", title: "Cóctel" },
  { time: "17:00", title: "Banquete" },
  { time: "19:00", title: "Baile" },
  ,
];
export default function Timeline(){
  return (<ol className="relative border-s border-slate-200 ps-6">
    {items.map((it,idx)=> (<li key={idx} className="pb-5 sm:pb-6"><span className="absolute -start-2.5 mt-1 h-2 w-2 rounded-full bg-primary" />
      <div className="text-base sm:text-lg font-medium">{it.time} — {it.title}</div>
      {it.description && <div className="text-sm sm:text-base text-slate-600">{it.description}</div>}
    </li>))}
  </ol>);
}
