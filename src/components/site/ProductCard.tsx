import { ArrowRight } from "lucide-react";
import { type Product, formatPrice } from "@/data/menu";
import { orderLink } from "@/lib/whatsapp";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article
      className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-gold/40 transition-all duration-500 shadow-elegant animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        {product.badge && (
          <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-fire text-background shadow-glow-cherry">
            {product.badge}
          </span>
        )}
        <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-background/80 backdrop-blur border border-border text-gold">
          {formatPrice(product.price)}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="font-serif text-2xl leading-tight">{product.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
        <a
          href={orderLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between gap-2 rounded-full bg-fire text-background px-5 py-3 text-sm font-semibold hover:shadow-glow-cherry transition-all group/btn"
        >
          Eu quero este
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
