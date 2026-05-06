import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation } from "lucide-react";

export const Route = createFileRoute("/onde-encontrar")({
  head: () => ({
    meta: [
      { title: "Onde encontrar — Super Chaumas" },
      {
        name: "description",
        content:
          "Encontre os pontos de venda da Super Chaumas em Rio Branco — AC.",
      },
    ],
  }),
  component: WherePage,
});

const points = [
  { name: "Matriz Super Chaumas", address: "Centro · Rio Branco — AC", tag: "Loja oficial" },
  { name: "Mercado Cidade Nova", address: "Cidade Nova · Rio Branco — AC", tag: "Revendedor" },
  { name: "Quiosque Praça da Revolução", address: "Centro · Rio Branco — AC", tag: "Revendedor" },
  { name: "Lanchonete Bosque", address: "Bosque · Rio Branco — AC", tag: "Revendedor" },
  { name: "Mercadinho 6 de Agosto", address: "6 de Agosto · Rio Branco — AC", tag: "Revendedor" },
  { name: "Sorveteria Conquista", address: "Conquista · Rio Branco — AC", tag: "Parceiro" },
];

function WherePage() {
  return (
    <div>
      <section className="relative bg-hero grain pt-16 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Onde encontrar
          </span>
          <h1 className="mt-3 font-serif text-5xl md:text-7xl leading-tight">
            Mais de <span className="text-gradient">200 pontos</span> em Rio Branco.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Estamos pertinho de você. Veja alguns dos nossos parceiros oficiais e
            encontre o sabor Chaumas no seu bairro.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-border shadow-elegant bg-card aspect-[4/3] lg:aspect-auto lg:min-h-[500px] relative">
          <iframe
            title="Mapa Rio Branco"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-67.85%2C-9.99%2C-67.78%2C-9.94&layer=mapnik"
            className="w-full h-full grayscale-[40%] contrast-110"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-border" />
        </div>

        <ul className="lg:col-span-2 space-y-3">
          {points.map((p, i) => (
            <li
              key={p.name}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-fire flex items-center justify-center shadow-glow-cherry">
                <MapPin className="w-5 h-5 text-background" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif text-lg">{p.name}</h3>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-gold/40 text-gold">
                    {p.tag}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{p.address}</p>
              </div>
              <Navigation className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors mt-2" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
