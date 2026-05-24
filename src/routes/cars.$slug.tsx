import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { cars, getCarBySlug, getCarImage } from "@/data/cars";

export const Route = createFileRoute("/cars/$slug")({
  loader: ({ params }) => {
    const car = getCarBySlug(params.slug);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => {
    const car = loaderData?.car;
    if (!car) return { meta: [{ title: "Car not found — The Motor Compendium" }] };
    const title = `${car.year} ${car.make} ${car.model} — The Motor Compendium`;
    const desc = `${car.year} ${car.make} ${car.model}: ${car.power}, ${car.zeroToSixty} 0–60. ${car.description.slice(0, 110)}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: CarDetailPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="eyebrow text-rust">Not in this volume</p>
      <h1 className="mt-3 font-serif text-5xl">Entry not found</h1>
      <Link to="/" className="mt-6 inline-block border-b border-ink hover:text-rust">← Return to the catalog</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-serif text-3xl">This entry couldn't load</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 border border-ink px-4 py-2">Try again</button>
    </div>
  ),
});

function CarDetailPage() {
  const { car } = Route.useLoaderData();

  const idx = cars.findIndex((c) => c.slug === car.slug);
  const prev = cars[(idx - 1 + cars.length) % cars.length];
  const next = cars[(idx + 1) % cars.length];

  const specs: [string, string][] = [
    ["Engine", car.engine],
    ["Displacement", car.displacement],
    ["Power", car.power],
    ["Torque", car.torque],
    ["Drivetrain", car.drivetrain],
    ["Transmission", car.transmission],
    ["0 to 60 mph", car.zeroToSixty],
    ["Top Speed", car.topSpeed],
    ["Weight", car.weight],
    ["Origin", car.origin],
    ["Production", car.production],
    ["Launch Price", car.price],
  ];

  return (
    <article>
      <div className="border-b border-ink">
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <Link to="/" className="eyebrow text-muted-foreground hover:text-rust">← The Catalog</Link>
        </div>
        <header className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow text-rust">
              {car.era} · {car.category} · {car.origin}
            </p>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-[0.95]">
              {car.make} <em>{car.model}</em>
            </h1>
            <p className="mt-4 font-serif text-2xl text-muted-foreground tabular-nums">
              Anno {car.year}
            </p>
          </div>
          <div className="md:col-span-4 border-l border-ink pl-6 space-y-3 text-sm">
            <Stat label="Power" value={car.power} />
            <Stat label="0–60 mph" value={car.zeroToSixty} />
            <Stat label="Top Speed" value={car.topSpeed} />
            <Stat label="Weight" value={car.weight} />
          </div>
        </header>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-12 gap-10">
        {/* Description column */}
        <section className="md:col-span-7">
          <p className="font-serif text-3xl leading-snug first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-rust">
            {car.description}
          </p>

          <div className="mt-12">
            <h2 className="eyebrow text-muted-foreground">Of Note</h2>
            <ul className="mt-3 space-y-3">
              {car.notable.map((n: string, i: number) => (
                <li key={i} className="flex gap-4 border-b border-border pb-3">
                  <span className="font-serif text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Spec sheet */}
        <aside className="md:col-span-5">
          <div className="border border-ink p-6 bg-card">
            <div className="flex justify-between items-baseline border-b border-ink pb-3">
              <h2 className="font-serif text-2xl">Specification</h2>
              <span className="eyebrow text-muted-foreground">Datum</span>
            </div>
            <dl className="divide-y divide-border">
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3 text-sm">
                  <dt className="eyebrow text-muted-foreground pt-0.5">{k}</dt>
                  <dd className="font-serif text-base text-right tabular-nums">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      {/* Pagination */}
      <nav className="mx-auto max-w-7xl px-6 pt-6 pb-2 grid grid-cols-2 gap-6 border-t border-ink">
        <Link to="/cars/$slug" params={{ slug: prev.slug }} className="group py-6">
          <p className="eyebrow text-muted-foreground">← Previous Entry</p>
          <p className="font-serif text-2xl mt-2 group-hover:text-rust">{prev.make} {prev.model}</p>
        </Link>
        <Link to="/cars/$slug" params={{ slug: next.slug }} className="group py-6 text-right">
          <p className="eyebrow text-muted-foreground">Next Entry →</p>
          <p className="font-serif text-2xl mt-2 group-hover:text-rust">{next.make} {next.model}</p>
        </Link>
      </nav>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline gap-3 border-b border-border pb-2">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <span className="font-serif text-lg tabular-nums">{value}</span>
    </div>
  );
}
