import type { Webhooks } from "@octokit/webhooks";
import type { App } from "@octokit/app";
import { handlePullRequest } from "./handlers/pull_request";
import { handlePush } from "./handlers/push";

export function router(webhooks: Webhooks, app: App) {
  webhooks.on("pull_request", (event) => handlePullRequest(event, app));
  webhooks.on("push", (event) => handlePush(event, app));
}