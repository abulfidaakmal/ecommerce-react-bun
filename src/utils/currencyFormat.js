export function currencyFormat(price) {
  return new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}
