
export function calculateTransferFee(amount: number): number {
  return Math.max(5, amount * 0.01);
}
