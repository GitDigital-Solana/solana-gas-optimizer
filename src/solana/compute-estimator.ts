import type { Finding } from './analyzer';

export function estimateTotalSavings(findings: Finding[]): string {
  let totalMin = 0;
  let totalMax = 0;

  for (const finding of findings) {
    if (finding.cu_savings) {
      const [min, max] = finding.cu_savings.split('-').map(Number);
      totalMin += min;
      totalMax += max;
    }
  }

  if (totalMin === 0 && totalMax === 0) return "N/A";
  return `~${totalMin.toLocaleString()}–${totalMax.toLocaleString()} CU`;
}