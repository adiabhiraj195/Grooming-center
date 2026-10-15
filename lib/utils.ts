/**
 * Utility function to combine CSS classes cleanly
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format currency in Indian Rupee format (e.g. ₹1,499)
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Check if the shop is currently open based on current Indian Standard Time (IST, UTC+5:30)
 */
export function isShopOpenNow(openHour = 9.5, closeHour = 20.5): boolean {
  const now = new Date();
  // Convert UTC to IST (+5.5 hours)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istDate = new Date(utc + 3600000 * 5.5);
  const currentHourDecimal = istDate.getHours() + istDate.getMinutes() / 60;
  return currentHourDecimal >= openHour && currentHourDecimal < closeHour;
}

