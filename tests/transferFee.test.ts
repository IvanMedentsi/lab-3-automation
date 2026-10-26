
import { describe, it, expect } from 'vitest';
import { calculateTransferFee } from '../src/transferFee.js';

describe('Комісія за переказ', () => {
  it('має повертати мінімальну комісію 5 грн для переказу 100 грн', () => {
    expect(calculateTransferFee(100)).toBe(5);
  });

  it('має повертати 1% для переказу 1000 грн', () => {
    expect(calculateTransferFee(1000)).toBe(10);
  });

  it('має обмежувати комісію максимумом 150 грн', () => {
    expect(calculateTransferFee(20000)).toBe(150);
  });
it('має дозволяти переказ рівно 50000 грн', () => {
  expect(calculateTransferFee(50000)).toBe(150);
});
it('має викидати помилку для переказу понад 50000 грн', () => {
  expect(() => calculateTransferFee(50001)).toThrow();
});
it('має відхиляти нульову суму переказу', () => {
  expect(() => calculateTransferFee(0)).toThrow();
});
it('має відхиляти від’ємну суму переказу', () => {
  expect(() => calculateTransferFee(-100)).toThrow();
});
it('має повертати рівно 5 грн комісії для переказу 500 грн', () => {
  expect(calculateTransferFee(500)).toBe(5);
});
it('має повертати рівно 150 грн комісії для переказу 15000 грн', () => {
  expect(calculateTransferFee(15000)).toBe(150);
});
it.each([
  { amount: 100, expectedFee: 5 },
  { amount: 500, expectedFee: 5 },
  { amount: 1000, expectedFee: 10 },
  { amount: 5000, expectedFee: 50 },
  { amount: 15000, expectedFee: 150 },
  { amount: 20000, expectedFee: 150 },
])(
  'для переказу $amount грн комісія становить $expectedFee грн',
  ({ amount, expectedFee }) => {
    expect(calculateTransferFee(amount)).toBe(expectedFee);
  },
);
it('має повертати мінімальну комісію для суми з копійками', () => {
  expect(calculateTransferFee(250.5)).toBe(5);
});
it('має відхиляти значення NaN', () => {
  expect(() => calculateTransferFee(Number.NaN)).toThrow();
});
it('має відхиляти нескінченну суму переказу', () => {
  expect(() => calculateTransferFee(Number.POSITIVE_INFINITY)).toThrow();
});
});
