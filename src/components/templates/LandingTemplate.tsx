import type { ReactNode } from "react";
import type { SectionProps } from "@types/section";
type AnySection = (props: SectionProps) => ReactNode;
export default function LandingTemplate({ sections }:{ sections:{ component: AnySection; props: SectionProps }[] }){
  return (<main>{sections.map(({component:Section, props})=> (<Section key={props.id} {...props} />))}</main>);
}
