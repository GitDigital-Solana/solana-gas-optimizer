import type { Finding } from '../analyzer';

export const ComputePatterns = {
  detect(diff: string): Finding[] {
    const findings: Finding[] = [];

    if (diff.includes("for ") || diff.includes("while ")) {
      findings.push({
        severity: "medium",
        message:
          "Loop detected in a Solana instruction. Ensure iterations are bounded and avoid heavy operations inside.",
      });
    }

    return findings;
  },
};