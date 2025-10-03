import { cx } from "@utils/cx";
type Size = "hero" | "h1" | "h2" | "h3";
const sizeMap: Record<Size, string> = {
  hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight",
  h1: "text-3xl sm:text-4xl md:text-5xl",
  h2: "text-2xl sm:text-3xl",
  h3: "text-xl sm:text-2xl",
};
type Props = React.PropsWithChildren<{ as?: keyof JSX.IntrinsicElements; className?: string; size?: Size }>;
export default function Heading({ as: Tag = "h2", className, children, size = "h2" }: Props) {
  return <Tag className={cx("font-display tracking-tight", sizeMap[size], className)}>{children}</Tag>;
}
