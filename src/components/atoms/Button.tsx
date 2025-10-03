import Link from "next/link";
import { cx } from "@utils/cx";
type Props = { href?: string; onClick?: () => void; children: React.ReactNode; variant?: "primary" | "ghost"; className?: string; };
export default function Button({ href, onClick, children, variant="primary", className }: Props) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition card";
  const styles = variant === "primary" ? "bg-primary text-white hover:opacity-90" : "bg-white/70 text-slate-900 hover:bg-white";
  const content = <span className="whitespace-nowrap">{children}</span>;
  return href ? <Link href={href} className={cx(base, styles, className)}>{content}</Link>
              : <button onClick={onClick} className={cx(base, styles, className)}>{content}</button>;
}
