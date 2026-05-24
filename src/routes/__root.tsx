import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-rust">Error 404</p>
        <h1 className="mt-3 text-6xl font-serif text-foreground">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for has been moved or never existed.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium hover:text-rust">
            ← Back to the catalog
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-rust">Something went wrong</p>
        <h1 className="mt-3 text-4xl font-serif">This page didn't load</h1>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-ink px-4 py-2 text-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Try again
          </button>
          <a href="/" className="px-4 py-2 text-sm underline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Motor Compendium — An illustrated catalog of the automobile" },
      { name: "description", content: "An editorial encyclopedia of cars: specifications, history, and notable details from vintage classics to modern hypercars." },
      { name: "author", content: "The Motor Compendium" },
      { property: "og:title", content: "The Motor Compendium" },
      { property: "og:description", content: "An editorial encyclopedia of cars." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="paper-grain">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-ink">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="font-serif text-2xl leading-none">The Motor Compendium</span>
          <span className="hidden md:inline eyebrow text-muted-foreground">Est. MMXXVI · Vol. I</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" activeOptions={{ exact: true }} className="hover:text-rust" activeProps={{ className: "text-rust" }}>
            Catalog
          </Link>
          <Link to="/about" className="hover:text-rust" activeProps={{ className: "text-rust" }}>
            About
          </Link>
        </nav>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-3">
        <div className="flex justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>An illustrated catalog of the automobile</span>
          <span>Specifications · History · Detail</span>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <p className="font-serif text-xl">The Motor Compendium</p>
          <p className="mt-2 text-muted-foreground">A curated reference of notable automobiles, from the prewar carriage trade to the electric age.</p>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Sections</p>
          <ul className="mt-2 space-y-1">
            <li><Link to="/" className="hover:text-rust">Catalog</Link></li>
            <li><Link to="/about" className="hover:text-rust">About this volume</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Colophon</p>
          <p className="mt-2 text-muted-foreground">Set in Instrument Serif &amp; Work Sans. Printed on virtual cream paper.</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground flex justify-between">
          <span>© MMXXVI The Motor Compendium</span>
          <span>All specifications approximate</span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
