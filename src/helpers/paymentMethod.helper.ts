export function getAccountPaymentMethodBrandLabel(brand?: string): string {
  if (brand === 'mc') return 'Mastercard';
  if (brand === 'visa') return 'Visa';
  if (brand === 'gcash') return 'GCash';

  return '';
}
