type Item = { name: string; href: string };
const items: Item[] = [{ name: "Mesa de regalos Liverpool", href: "#" }, { name: "Amazon Wishlist", href: "#" }];
export default function Registry(){
  return (<ul className="grid md:grid-cols-2 gap-4">
    {items.map(it=> (<li key={it.name} className="card p-5 flex items-center justify-between"><span className="font-medium">{it.name}</span><a href={it.href} className="text-primary underline">Ver</a></li>))}
  </ul>);
}
