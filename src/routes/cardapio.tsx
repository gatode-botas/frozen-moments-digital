import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, products, type Category } from "@/data/menu";
import { ProductCard } from "@/components/site/ProductCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio — Super Chaumas" },
      {
        name: "description",
        content:
          "Sorvetes, açaís, picolés, lanches e pizzas. Peça direto pelo WhatsApp.",
      },
      { property: "og:title", content: "Cardápio Super Chaumas" },
      { property: "og:description", content: "Tradição em cada sabor. Peça pelo WhatsApp." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<Category | "todos">("todos");

  const filtered = useMemo(
    () => (active === "todos" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div className="relative">
      <section className="relative bg-hero grain pt-16 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Cardápio
          </span>
          <h1 className="mt-3 font-serif text-5xl md:text-7xl leading-tight">
            Sabores que <span className="text-gradient">contam histórias</span>.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Cada item é preparado com a mesma receita de família que conquistou Rio Branco
            em 1995. Toque em "Eu quero este" e peça direto no WhatsApp.
          </p>
        </div>
      </section>

      <div className="sticky top-16 md:top-20 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all",
                  isActive
                    ? "bg-fire text-background border-transparent shadow-glow-cherry"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-gold/40",
                )}
              >
                <span>{c.emoji}</span> {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-center py-20">
            Nenhum item nessa categoria ainda.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
