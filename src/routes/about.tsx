import { createFileRoute, Link } from "@tanstack/react-router";
import { cars, makes } from "@/data/cars";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Motor Compendium" },
      { name: "description", content: "About The Motor Compendium: an editorial encyclopedia of the automobile, curated and continuously expanded." },
      { property: "og:title", content: "About — The Motor Compendium" },
      { property: "og:description", content: "An editorial encyclopedia of the automobile." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="eyebrow text-rust">Colophon</p>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1]">About this volume</h1>

      <p className="mt-8 font-serif text-2xl leading-snug first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-rust">
        The Motor Compendium is an editorial encyclopedia of the automobile,
        organised in the spirit of the great printed reference works of the
        twentieth century — but for the screen, and for the curious.
      </p>

      <p className="mt-6 text-base text-muted-foreground">
        Each entry catalogues a single car: make, model, year, the technical
        specification, and the small historical details that make it more than
        a list of numbers. The current volume contains {cars.length} entries
        across {makes.length} manufacturers, from a 1954 Mercedes-Benz Gullwing
        to a Croatian-built electric hypercar that breaks acceleration records
        for fun.
      </p>

      <h2 className="mt-12 font-serif text-3xl">Editorial principles</h2>
      <ul className="mt-4 space-y-3 text-base">
        <li className="border-b border-border pb-3"><span className="eyebrow text-muted-foreground mr-3">I.</span> Significance over completeness. We catalogue cars that mattered, not every car.</li>
        <li className="border-b border-border pb-3"><span className="eyebrow text-muted-foreground mr-3">II.</span> Specifications as published at launch, unless otherwise noted.</li>
        <li className="border-b border-border pb-3"><span className="eyebrow text-muted-foreground mr-3">III.</span> No advertising. No "best of" lists. The catalog is the point.</li>
        <li className="border-b border-border pb-3"><span className="eyebrow text-muted-foreground mr-3">IV.</span> One entry per significant variant. The 1973 Carrera RS is not the 1989 Carrera.</li>
      </ul>

      <div className="mt-12 border-t border-ink pt-6">
        <Link to="/" className="border-b border-ink hover:text-rust">Return to the catalog →</Link>
      </div>
    </article>
  );
}
