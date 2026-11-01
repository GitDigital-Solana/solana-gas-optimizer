import type { App } from "@octokit/app";
import type { PullRequestEvent } from "@octokit/webhooks-types";
import { getDiff } from "../../github/diff-service";
import { Analyzer } from "../../solana/analyzer";
import { postComment } from "../../github/pr-commenter";

export async function handlePullRequest(event: PullRequestEvent, app: App) {
  const { pull_request, repository } = event;

  if (
    pull_request.state !== 'open' ||
    !['opened', 'synchronize', 'reopened'].includes(event.action)
  ) {
    return;
  }

  const installationId = event.installation?.id;
  if (!installationId) return;

  const octokit = await app.getInstallationOctokit(installationId);

  try {
    const diff = await getDiff(
      octokit,
      repository.owner.login,
      repository.name,
      pull_request.number
    );

    const analyzer = new Analyzer(diff);
    const findings = analyzer.analyze();

    if (findings.length > 0) {
      await postComment(
        octokit,
        repository.owner.login,
        repository.name,
        pull_request.number,
        findings
      );
    }
  } catch (error) {
    console.error('Error handling pull request:', error);
  }
}