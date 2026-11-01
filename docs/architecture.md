
#### `docs/architecture.md`
```markdown
# Architecture

The Solana Gas Optimizer is a GitHub App built with TypeScript. It uses `@octokit/webhooks` to listen for GitHub events and `@octokit/app` for authentication.

The core analysis logic lives in `src/solana/analyzer.ts`, which orchestrates pattern detectors for Anchor, Rust, and Compute Unit patterns. When a pull request is opened or updated, the `pull_request` handler fetches the diff and runs it through the analyzer. Any findings are posted as a comment on the PR.