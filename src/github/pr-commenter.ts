import type { Octokit } from "@octokit/rest";
import type { Finding } from "../solana/analyzer";
import { estimateTotalSavings } from "../solana/compute-estimator";

export async function postComment(
  octokit: Octokit,
  owner: string,
  repo: string,
  pullNumber: number,
  findings: Finding[]
): Promise<void> {
  const totalSavings = estimateTotalSavings(findings);

  let body = `⚡ **Potential Optimization Detected**\n\n`;
  body += `This PR contains patterns that may lead to unnecessary compute-unit usage.\n\n`;

  for (const finding of findings) {
    body += `### ${finding.severity.toUpperCase()}: ${finding.message}\n`;
    if (finding.cu_savings) {
      body += `> Estimated CU savings: **~${finding.cu_savings}** per transaction\n`;
    }
    body += `\n`;
  }

  if (totalSavings !== "N/A") {
    body += `---\n**Total Estimated Savings:** ${totalSavings}\n`;
  }

  await octokit.request(
    'POST /repos/{owner}/{repo}/issues/{issue_number}/comments',
    {
      owner,
      repo,
      issue_number: pullNumber,
      body,
    }
  );
}