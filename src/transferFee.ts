const MIN_FEE = 5;
const MAX_FEE = 150;
const FEE_RATE = 0.01;
const MAX_TRANSFER_AMOUNT = 50000;

function validateTransferAmount(amount: number): void {
  if (amount <= 0) {
    throw new Error('Сума переказу має бути більшою за 0 грн');
  }

  if (amount > MAX_TRANSFER_AMOUNT) {
    throw new Error('Переказ понад 50000 грн потребує додаткової перевірки');
  }
}

export function calculateTransferFee(amount: number): number {
  validateTransferAmount(amount);

  return Math.min(MAX_FEE, Math.max(MIN_FEE, amount * FEE_RATE));
}