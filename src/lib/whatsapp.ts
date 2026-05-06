export const WHATSAPP_NUMBER = "5568999508822";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderLink(productName: string) {
  return whatsappLink(
    `Olá Super Chaumas! 🍦 Vi o *${productName}* no site e quero pedir um agora!`,
  );
}
