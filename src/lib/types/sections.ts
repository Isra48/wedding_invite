import type { ComponentType } from "react";

/** Props inmutables y abiertas */
export type SectionProps = Readonly<Record<string, unknown>>;

/** Especificación de sección, también readonly */
export type SectionSpec = Readonly<{
  /** Aceptamos cualquier componente de React con cualquier props */
  component: ComponentType<any>;
  /** Props de la sección (inmutables) */
  props: SectionProps;
}>;
