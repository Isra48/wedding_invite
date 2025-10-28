import Link from "next/link";
import type { ComponentProps } from "react";
import { cx } from "@utils/cx";

// Toma el tipo EXACTO que espera <Link href={...}>
type LinkHref = ComponentProps<typeof Link>["href"];

type Props = {
  href?: LinkHref;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  // opcional: abrir en nueva pestaña para enlaces externos
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  disabled?: boolean;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  target,
  rel,
  disabled,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition card";
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:opacity-90"
      : "bg-white/70 text-slate-900 hover:bg-white";

  const content = <span className="whitespace-nowrap">{children}</span>;

  if (href) {
    return (
      <Link
        href={href}
        className={cx(base, styles, className)}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cx(base, styles, className, disabled && "opacity-60 cursor-not-allowed")}
    >
      {content}
    </button>
  );
}
