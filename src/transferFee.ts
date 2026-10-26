
export function calculateTransferFee(amount: number): number {
  if (amount > 50000) {
    throw new Error('Переказ понад 50000 грн потребує додаткової перевірки');
  }

  return Math.min(150, Math.max(5, amount * 0.01));
}
