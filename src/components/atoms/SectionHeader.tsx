import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
export default function SectionHeader({ title, subtitle, center=true }:{title:string; subtitle?:string; center?:boolean}){
  return (<div className={center ? "text-center" : ""}>
    <Heading as="h2" size="h2">{title}</Heading>
    {subtitle && <Text className="mt-2 text-sm sm:text-base">{subtitle}</Text>}
  </div>);
}
