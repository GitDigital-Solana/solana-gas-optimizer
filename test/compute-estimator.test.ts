import { estimateTotalSavings } from '../src/solana/compute-estimator';
import type { Finding } from '../src/solana/analyzer';

describe('estimateTotalSavings', () => {
  it('should sum CU savings correctly', () => {
    const findings: Finding[] = [
      { severity: 'high', message: 'A', cu_savings: '2000-4000' },
      { severity: 'medium', message: 'B', cu_savings: '1000-2000' },
    ];
    expect(estimateTotalSavings(findings)).toBe('~3,000–6,000 CU');
  });

  it('should return N/A when no savings data is present', () => {
    const findings: Finding[] = [{ severity: 'low', message: 'C' }];
    expect(estimateTotalSavings(findings)).toBe('N/A');
  });
});