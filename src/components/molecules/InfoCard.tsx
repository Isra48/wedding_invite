import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
export default function InfoCard({ title, children }:{ title:string; children:React.ReactNode }){
  return (<div className="card p-6">
    <Heading as="h3" size="h3">{title}</Heading>
    <Text className="mt-2">{children}</Text>
  </div>);
}
