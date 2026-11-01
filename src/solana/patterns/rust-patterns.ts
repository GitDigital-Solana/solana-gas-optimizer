import type { Finding } from '../analyzer';

export const RustPatterns = {
  detect(diff: string): Finding[] {
    const findings: Finding[] = [];

    if (diff.includes(".clone()")) {
      findings.push({
        severity: "medium",
        message:
          "Unnecessary .clone() detected. Consider using references to avoid heap allocation.",
      });
    }

    return findings;
  },
};