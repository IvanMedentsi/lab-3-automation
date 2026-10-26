
import { describe, it, expect } from 'vitest';
import { calculateTransferFee } from '../src/transferFee';

describe('Комісія за переказ', () => {
  it('має повертати мінімальну комісію 5 грн для переказу 100 грн', () => {
    expect(calculateTransferFee(100)).toBe(5);
  });
});
