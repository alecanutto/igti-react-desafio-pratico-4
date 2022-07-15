export const URL_BASE = 'https://fakestoreapi.com';

export function formatValue(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'never',
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
