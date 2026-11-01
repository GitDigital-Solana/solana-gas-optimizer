import type { Finding } from '../analyzer';

export const AnchorPatterns = {
  detect(diff: string): Finding[] {
    const findings: Finding[] = [];

    if (diff.includes("try_borrow_data()")) {
      findings.push({
        severity: "high",
        message:
          "Repeated account borrow detected. Cache account data outside loops.",
        cu_savings: "2000-4000",
      });
    }

    if (diff.includes("load_mut(")) {
      findings.push({
        severity: "medium",
        message:
          "Multiple mutable loads detected. Consider reducing mutable references.",
      });
    }

    return findings;
  },
};