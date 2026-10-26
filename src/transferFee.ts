export function calculateTransferFee(amount: number): number {
  return Math.min(150, Math.max(5, amount * 0.01));
}