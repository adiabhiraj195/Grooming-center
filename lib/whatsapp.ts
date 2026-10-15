import { SHOP_DATA } from "@/data/shop";

export interface BookingWhatsAppParams {
  ownerName?: string;
  phone?: string;
  petType?: string;
  breed?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
  estimatedPrice?: number;
}

/**
 * Generates an encoded WhatsApp link to chat with Pawfect Tails
 */
export function getWhatsAppLink(message?: string): string {
  const number = SHOP_DATA.whatsappNumber;
  const defaultText = `Hi ${SHOP_DATA.name}! 🐾 I'd like to book a grooming appointment for my pet in ${SHOP_DATA.area}, ${SHOP_DATA.city}. Please let me know available slots!`;
  const text = message ? encodeURIComponent(message) : encodeURIComponent(defaultText);
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Builds a formatted WhatsApp booking request message
 */
export function buildBookingWhatsAppMessage(params: BookingWhatsAppParams): string {
  const lines: string[] = [
    `🐾 *New Grooming Booking Request* 🐾`,
    `Hello ${SHOP_DATA.name}! I would like to book a session:`,
    ``,
    params.ownerName ? `👤 *Pet Parent:* ${params.ownerName}` : "",
    params.phone ? `📱 *Phone:* ${params.phone}` : "",
    params.petType ? `🐶 *Pet Type:* ${params.petType}` : "",
    params.breed ? `🐕 *Breed:* ${params.breed}` : "",
    params.service ? `✂️ *Service:* ${params.service}` : "",
    params.estimatedPrice ? `💰 *Estimated Price:* ₹${params.estimatedPrice}` : "",
    params.preferredDate ? `📅 *Preferred Date:* ${params.preferredDate}` : "",
    params.preferredTime ? `⏰ *Preferred Time:* ${params.preferredTime}` : "",
    params.notes ? `📝 *Special Notes:* ${params.notes}` : "",
    ``,
    `Please confirm if this slot is available at your ${SHOP_DATA.area} spa. Thank you! 🛁`,
  ].filter((line) => line !== "");

  return lines.join("\n");
}

