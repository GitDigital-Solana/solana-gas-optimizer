import type { App } from "@octokit/app";
import type { PushEvent } from "@octokit/webhooks-types";

export async function handlePush(event: PushEvent, app: App) {
  const { repository, ref } = event;

  // Only generate performance report on push to main
  if (ref !== 'refs/heads/main') return;

  console.log(
    `Push to main detected on ${repository.full_name}. Performance report generation would run here.`
  );
}