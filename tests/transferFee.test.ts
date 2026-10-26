
import { describe, it, expect } from 'vitest';
import { calculateTransferFee } from '../src/transferFee';

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
});
