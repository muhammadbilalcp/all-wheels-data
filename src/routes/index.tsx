import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cars, makes, categories, eras, type Car, getCarImage } from "@/data/cars";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catalog — The Motor Compendium" },
      { name: "description", content: `Browse ${cars.length} notable cars by make, era, and category. Specifications, history, and notable details.` },
      { property: "og:title", content: "The Motor Compendium — Catalog" },
      { property: "og:description", content: "An illustrated catalog of the automobile." },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const [q, setQ] = useState("");
  const [make, setMake] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");
  const [era, setEra] = useState<string>("All");
  const [sort, setSort] = useState<"year-desc" | "year-asc" | "make">("year-desc");

  const filtered = useMemo(() => {
    const lower = q.trim().toLowerCase();
    const list = cars.filter((c) => {
      if (make !== "All" && c.make !== make) return false;
      if (category !== "All" && c.category !== category) return false;
      if (era !== "All" && c.era !== era) return false;
      if (!lower) return true;
      return (
        c.make.toLowerCase().includes(lower) ||
        c.model.toLowerCase().includes(lower) ||
        String(c.year).includes(lower) ||
        c.category.toLowerCase().includes(lower) ||
        c.origin.toLowerCase().includes(lower)
      );
    });
    list.sort((a, b) => {
      if (sort === "year-desc") return b.year - a.year;
      if (sort === "year-asc") return a.year - b.year;
      return a.make.localeCompare(b.make) || a.model.localeCompare(b.model);
    });
    return list;
  }, [q, make, category, era, sort]);

  return (
    <div>
      {/* Masthead */}
      <section className="border-b border-ink">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow text-rust">Volume I · Issue No. 01</p>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-[0.95]">
              An illustrated <em className="text-rust">catalog</em><br />
              of the automobile.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
              {cars.length} notable cars — from prewar gentlemen's carriages to
              tri-motor electric sedans that out-accelerate a fighter jet on takeoff.
              Specifications, history, and the small details that make each one matter.
            </p>
          </div>
          <div className="md:col-span-4 border-l border-ink pl-6 text-sm space-y-3">
            <div className="flex justify-between"><span className="eyebrow">Entries</span><span className="font-serif text-xl">{cars.length}</span></div>
            <div className="flex justify-between"><span className="eyebrow">Manufacturers</span><span className="font-serif text-xl">{makes.length}</span></div>
            <div className="flex justify-between"><span className="eyebrow">Categories</span><span className="font-serif text-xl">{categories.length}</span></div>
            <div className="flex justify-between"><span className="eyebrow">Years spanned</span><span className="font-serif text-xl">{Math.min(...cars.map(c=>c.year))}–{Math.max(...cars.map(c=>c.year))}</span></div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-ink bg-cream/50">
        <div className="mx-auto max-w-7xl px-6 py-6 grid gap-4 md:grid-cols-12 items-end">
          <div className="md:col-span-4">
            <label className="eyebrow text-muted-foreground">Search</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ferrari, 1973, hypercar…"
              className="mt-1 w-full bg-transparent border-b border-ink py-2 text-base outline-none focus:border-rust placeholder:text-muted-foreground/60"
            />
          </div>
          <FilterSelect label="Make" value={make} onChange={setMake} options={["All", ...makes]} />
          <FilterSelect label="Category" value={category} onChange={setCategory} options={["All", ...categories]} />
          <FilterSelect label="Era" value={era} onChange={setEra} options={["All", ...eras]} />
          <div className="md:col-span-2">
            <label className="eyebrow text-muted-foreground">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="mt-1 w-full bg-transparent border-b border-ink py-2 text-base outline-none focus:border-rust"
            >
              <option value="year-desc">Newest first</option>
              <option value="year-asc">Oldest first</option>
              <option value="make">By make</option>
            </select>
          </div>
        </div>
      </section>

      {/* Index */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-baseline justify-between mb-6 border-b border-ink pb-3">
          <h2 className="font-serif text-3xl">The Index</h2>
          <span className="eyebrow text-muted-foreground">{filtered.length} of {cars.length}</span>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">No entries match your search.</p>
        ) : (
          <ul className="divide-y divide-border">
            {filtered.map((car, i) => (
              <CarRow key={car.slug} car={car} index={i + 1} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div className="md:col-span-2">
      <label className="eyebrow text-muted-foreground">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-transparent border-b border-ink py-2 text-base outline-none focus:border-rust"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function CarRow({ car, index }: { car: Car; index: number }) {
  return (
    <li>
      <Link
        to="/cars/$slug"
        params={{ slug: car.slug }}
        className="group grid grid-cols-12 gap-4 py-5 items-center hover:bg-cream/60 -mx-3 px-3 transition-colors"
      >
        <div className="hidden sm:block col-span-1">
          <img
            src={getCarImage(car, 120, 90)}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-12 object-cover border border-ink"
            loading="lazy"
          />
        </div>
        <span className="col-span-1 font-serif text-muted-foreground tabular-nums">
          {String(index).padStart(3, "0")}
        </span>
        <div className="col-span-12 sm:col-span-4">
          <p className="eyebrow text-rust">{car.make}</p>
          <p className="font-serif text-2xl leading-tight group-hover:italic">{car.model}</p>
        </div>
        <div className="col-span-4 sm:col-span-2 text-sm">
          <p className="eyebrow text-muted-foreground">Year</p>
          <p className="font-serif text-lg tabular-nums">{car.year}</p>
        </div>
        <div className="col-span-4 sm:col-span-2 text-sm">
          <p className="eyebrow text-muted-foreground">Category</p>
          <p>{car.category}</p>
        </div>
        <div className="col-span-4 sm:col-span-2 text-sm text-right">
          <p className="eyebrow text-muted-foreground">Power</p>
          <p className="font-serif text-lg">{car.power}</p>
        </div>
      </Link>
    </li>
  );
}
