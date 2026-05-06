import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Building2, CheckCircle2, Send, TrendingUp, Users } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/revendedor")({
  head: () => ({
    meta: [
      { title: "Seja Revendedor — Super Chaumas" },
      {
        name: "description",
        content:
          "Faça parte da rede de revendedores da Super Chaumas em Rio Branco. 30 anos de tradição ao seu lado.",
      },
    ],
  }),
  component: ResellerPage,
});

const benefits = [
  { icon: TrendingUp, title: "Marca consolidada", text: "30 anos de reconhecimento em Rio Branco vendem por você." },
  { icon: Users, title: "Suporte completo", text: "Treinamento, materiais de divulgação e logística inclusos." },
  { icon: Building2, title: "Margens atrativas", text: "Condições especiais para parceiros estratégicos." },
];

function ResellerPage() {
  const [form, setForm] = useState({ name: "", company: "", city: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `*Nova proposta de revenda*%0A
*Nome:* ${form.name}%0A
*Empresa:* ${form.company}%0A
*Cidade:* ${form.city}%0A
*Telefone:* ${form.phone}%0A
*Mensagem:* ${form.message}`;
    window.open(whatsappLink(decodeURIComponent(text)), "_blank");
    setSent(true);
  };

  return (
    <div>
      <section className="relative bg-hero grain pt-16 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Para parceiros
          </span>
          <h1 className="mt-3 font-serif text-5xl md:text-7xl leading-tight">
            Seja um <span className="text-gradient">revendedor</span> Chaumas.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Junte-se a uma das marcas mais queridas do Acre e ofereça aos seus
            clientes o sabor que conquistou Rio Branco há três décadas.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-3 gap-6">
        {benefits.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className="p-6 rounded-2xl bg-card border border-border animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-fire flex items-center justify-center mb-4 shadow-glow-cherry">
              <Icon className="w-6 h-6 text-background" />
            </div>
            <h3 className="font-serif text-xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
        <div className="rounded-3xl bg-card border border-border shadow-elegant p-8 md:p-12">
          {sent ? (
            <div className="text-center py-10 animate-fade-up">
              <div className="w-16 h-16 mx-auto rounded-full bg-fire flex items-center justify-center shadow-glow-gold">
                <CheckCircle2 className="w-8 h-8 text-background" />
              </div>
              <h2 className="mt-6 font-serif text-3xl">Proposta enviada!</h2>
              <p className="mt-3 text-muted-foreground">
                Continue a conversa pelo WhatsApp que abriu em outra aba.
                Nossa equipe retornará em até 24h.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-3xl md:text-4xl">Envie sua proposta</h2>
              <p className="mt-2 text-muted-foreground">Preencha e enviamos direto no nosso WhatsApp.</p>

              <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
                <Field label="Seu nome" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="Empresa" value={form.company} onChange={(v) => setForm({ ...form, company: v })} required />
                <Field label="Cidade" value={form.city} onChange={(v) => setForm({ ...form, city: v })} required />
                <Field label="Telefone / WhatsApp" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-2">Sua mensagem</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                    placeholder="Conte um pouco sobre o seu negócio..."
                    required
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-fire text-background px-7 py-4 font-semibold shadow-glow-cherry hover:scale-[1.02] transition-transform"
                >
                  Enviar proposta <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  label, value, onChange, required,
}: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={120}
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition-all"
      />
    </div>
  );
}
