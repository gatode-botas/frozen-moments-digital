import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-8xl text-gradient">404</h1>
        <p className="mt-4 text-muted-foreground">Esse sabor saiu do cardápio.</p>
        <a href="/" className="mt-6 inline-flex rounded-full bg-fire text-background px-5 py-2.5 text-sm font-semibold">
          Voltar ao início
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Super Chaumas — 30 anos adoçando Rio Branco" },
      {
        name: "description",
        content:
          "Sorvetes, açaís, picolés, lanches e pizzas em Rio Branco. Tradição de família há três décadas. Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Super Chaumas — 30 anos adoçando Rio Branco" },
      { property: "og:description", content: "Tradição congelada em movimento. Sorvetes, açaís e muito mais." },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#0F0F0F" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
