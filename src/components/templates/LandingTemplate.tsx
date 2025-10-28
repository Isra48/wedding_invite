import type { SectionSpec } from "@lib/types/sections";

export default function LandingTemplate({
  sections,
}: {
  sections: ReadonlyArray<SectionSpec>;
}) {
  return (
    <main>
      {sections.map(({ component: Comp, props }, i) => (
        <section
          id={(props as any)?.id as string | undefined}
          key={(props as any)?.id ?? i}
          className="section"
        >
          <Comp {...(props as any)} />
        </section>
      ))}
    </main>
  );
}
