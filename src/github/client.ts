import { App } from "@octokit/app";

export async function getInstallationClient(app: App, installationId: number) {
  return app.getInstallationOctokit(installationId);
}