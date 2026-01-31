const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
const whatsappMessage = import.meta.env.VITE_WHATSAPP_MSG || 'Olá, gostaria de agendar uma consulta sobre Direito Previdenciário.'

export function getWhatsAppUrl(): string {
  const encoded = encodeURIComponent(whatsappMessage)
  const number = whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encoded}`
}

export { whatsappNumber, whatsappMessage }
