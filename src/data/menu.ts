import sorvete from "@/assets/sorvete.jpg";
import acai from "@/assets/hero-acai.jpg";
import picoles from "@/assets/picoles.jpg";
import burger from "@/assets/burger.jpg";
import pizza from "@/assets/pizza.jpg";

export type Category = "sorvetes" | "acais" | "picoles" | "lanches" | "pizzas";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  badge?: string;
}

export const categories: { id: Category | "todos"; label: string; emoji: string }[] = [
  { id: "todos", label: "Todos", emoji: "✦" },
  { id: "sorvetes", label: "Sorvetes", emoji: "🍦" },
  { id: "acais", label: "Açaís", emoji: "🍇" },
  { id: "picoles", label: "Picolés", emoji: "🍭" },
  { id: "lanches", label: "Lanches", emoji: "🍔" },
  { id: "pizzas", label: "Pizzas", emoji: "🍕" },
];

export const products: Product[] = [
  {
    id: "acai-tradicional",
    name: "Açaí da Casa 500ml",
    description: "Cremoso, batido na hora, com granola crocante, banana e leite condensado.",
    price: 22,
    category: "acais",
    image: acai,
    badge: "Mais pedido",
  },
  {
    id: "acai-premium",
    name: "Açaí Premium Frutas Vermelhas",
    description: "Açaí encorpado coberto com morango, framboesa e mirtilo selecionados.",
    price: 28,
    category: "acais",
    image: acai,
  },
  {
    id: "sorvete-trio",
    name: "Trio Chaumas",
    description: "Três bolas de sabores à escolha, calda quente e wafer artesanal.",
    price: 18,
    category: "sorvetes",
    image: sorvete,
    badge: "Clássico 30 anos",
  },
  {
    id: "sorvete-pote",
    name: "Pote Família 2L",
    description: "Dois litros do nosso sorvete artesanal para levar pra casa.",
    price: 45,
    category: "sorvetes",
    image: sorvete,
  },
  {
    id: "picole-fruta",
    name: "Picolé de Fruta",
    description: "Manga, maracujá, morango ou abacaxi. Pura fruta congelada.",
    price: 6,
    category: "picoles",
    image: picoles,
  },
  {
    id: "picole-leite",
    name: "Picolé Cremoso",
    description: "Receita de família: leite ninho, chocolate belga ou coco queimado.",
    price: 8,
    category: "picoles",
    image: picoles,
    badge: "Receita 1995",
  },
  {
    id: "burger-chaumas",
    name: "Burger Chaumas",
    description: "180g de blend artesanal, cheddar inglês, bacon crocante e molho da casa.",
    price: 32,
    category: "lanches",
    image: burger,
  },
  {
    id: "burger-duplo",
    name: "Duplo Fogo",
    description: "Dois discos de carne, queijo derretido, cebola caramelizada e pimenta-doce.",
    price: 38,
    category: "lanches",
    image: burger,
    badge: "Picante",
  },
  {
    id: "pizza-margherita",
    name: "Pizza Margherita",
    description: "Massa de fermentação natural, mussarela de búfala, tomate e manjericão.",
    price: 49,
    category: "pizzas",
    image: pizza,
  },
  {
    id: "pizza-suprema",
    name: "Pizza Suprema",
    description: "Pepperoni, calabresa, bacon, cebola roxa e azeitonas.",
    price: 59,
    category: "pizzas",
    image: pizza,
    badge: "Best seller",
  },
];

export const formatPrice = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
