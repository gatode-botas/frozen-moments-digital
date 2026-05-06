import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Snowflake } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-fire">
              <Snowflake className="w-5 h-5 text-background" strokeWidth={2.5} />
            </span>
            <span className="font-serif text-2xl">
              Super <span className="text-gradient">Chaumas</span>
            </span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
            Há três décadas adoçando Rio Branco. Da nossa fábrica para o seu momento
            de lazer, com a mesma paixão de 30 anos atrás.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/cardapio" className="hover:text-gold">Cardápio</Link></li>
            <li><Link to="/onde-encontrar" className="hover:text-gold">Onde encontrar</Link></li>
            <li><Link to="/revendedor" className="hover:text-gold">Seja revendedor</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-gold" /> Rio Branco — AC
            </li>
            <li>
              <a href={whatsappLink("Olá Super Chaumas!")} className="flex items-center gap-2 hover:text-gold">
                <Phone className="w-4 h-4 text-gold" /> (68) 99950-8822
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-gold" /> @superchaumas
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Super Chaumas — Tradição congelada em movimento.
      </div>
    </footer>
  );
}
