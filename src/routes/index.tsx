import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Flame, Sparkles, Truck } from "lucide-react";
import heroAcai from "@/assets/hero-acai.jpg";
import sorvete from "@/assets/sorvete.jpg";
import picoles from "@/assets/picoles.jpg";
import { products } from "@/data/menu";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super Chaumas — 3 décadas adoçando Rio Branco" },
      {
        name: "description",
        content:
          "Sorvetes artesanais, açaís cremosos e mais. A tradição da Super Chaumas em Rio Branco há 30 anos.",
      },
    ],
  }),
  component: HomePage,
});

const timeline = [
  { year: "1995", title: "O primeiro picolé", text: "Uma família, uma receita e o sonho de adoçar Rio Branco." },
  { year: "2003", title: "Nasce a fábrica", text: "Investimos em estrutura própria para chegar a mais bairros." },
  { year: "2012", title: "Sabores autorais", text: "Lançamos a linha de açaís e cremosos exclusivos da casa." },
  { year: "2025", title: "30 anos de paixão", text: "Hoje somos o sabor oficial da cidade — e isso é só o começo." },
];

const highlights = [
  { icon: Award, title: "30 anos de história", text: "Tradição reconhecida como o sabor oficial de Rio Branco." },
  { icon: Flame, title: "Receitas autorais", text: "Cada sabor desenvolvido na nossa cozinha, sem atalhos." },
  { icon: Truck, title: "Rede de revendas", text: "Encontre Chaumas em mercados, lanchonetes e quiosques." },
  { icon: Sparkles, title: "Pedido em 1 clique", text: "Peça direto no WhatsApp e receba quentinho ou geladinho." },
];

function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero grain">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cherry/20 blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/15 blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold">
              <Sparkles className="w-3.5 h-3.5" /> Desde 1995 · Rio Branco · AC
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight">
              3 décadas <br />
              <span className="text-gradient">adoçando</span> <br />
              Rio Branco.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Mais do que sorvete, entregamos memórias geladas que atravessam
              gerações. Da nossa fábrica para o seu momento de lazer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cardapio"
                className="inline-flex items-center gap-2 rounded-full bg-fire text-background px-7 py-3.5 font-semibold shadow-glow-cherry hover:scale-105 transition-transform"
              >
                Ver cardápio <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/onde-encontrar"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-7 py-3.5 font-semibold hover:border-gold/40 transition-colors"
              >
                Onde encontrar
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm">
              <div>
                <div className="font-serif text-3xl text-gradient">+30</div>
                <div className="text-muted-foreground">anos de história</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-serif text-3xl text-gradient">+200</div>
                <div className="text-muted-foreground">pontos de venda</div>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-serif text-3xl text-gradient">+50</div>
                <div className="text-muted-foreground">sabores autorais</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-cherry/30 via-transparent to-gold/30 blur-3xl -z-10" />
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-border shadow-elegant animate-float">
              <img
                src={heroAcai}
                alt="Açaí cremoso da Super Chaumas"
                width={1600}
                height={1600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden border border-border shadow-elegant rotate-[-8deg] hidden md:block animate-glow">
              <img src={sorvete} alt="Sorvete" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-2xl overflow-hidden border border-border shadow-elegant rotate-[10deg] hidden md:block">
              <img src={picoles} alt="Picolés" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-surface/40 overflow-hidden py-6">
        <div className="flex animate-marquee whitespace-nowrap gap-12 font-serif text-3xl md:text-4xl text-muted-foreground/50">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["Sorvetes", "Açaís", "Picolés", "Lanches", "Pizzas", "Tradição 1995"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  {w} <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-fire flex items-center justify-center mb-4 shadow-glow-gold group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HISTORY / TIMELINE */}
      <section className="relative py-24 bg-surface/40 border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Nossa história</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl leading-tight">
              Três décadas de <span className="text-gradient">paixão gelada</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Há três décadas, o primeiro picolé da Super Chaumas adoçava Rio Branco.
              O que começou como um sonho de família tornou-se o sabor oficial da nossa cidade.
            </p>
          </div>

          <ol className="mt-16 grid md:grid-cols-4 gap-8 relative">
            <div className="absolute hidden md:block top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            {timeline.map((item, i) => (
              <li
                key={item.year}
                className="relative animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="w-3 h-3 rounded-full bg-fire shadow-glow-cherry mb-6" />
                <div className="font-serif text-3xl text-gradient">{item.year}</div>
                <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Destaques</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Os mais pedidos</h2>
          </div>
          <Link
            to="/cardapio"
            className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all"
          >
            Ver cardápio completo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-fire p-10 md:p-16 shadow-elegant grain">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight">
              Quer levar o sabor Chaumas para o seu negócio?
            </h2>
            <p className="mt-4 text-background/80 text-lg">
              Junte-se à nossa rede de revendedores e ofereça três décadas de tradição
              aos seus clientes.
            </p>
            <Link
              to="/revendedor"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-3.5 font-semibold hover:scale-105 transition-transform"
            >
              Seja revendedor <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-background/10 blur-3xl" />
        </div>
      </section>
    </>
  );
}
