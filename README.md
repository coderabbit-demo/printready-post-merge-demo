# PrintReady

PrintReady is a compact 3D-printing quote app and a working example of a CodeRabbit Post-Merge Action. It shows how a merged customer-facing change can automatically create the right operational follow-up in Jira.

In this example, a pull request introduces 24-hour rush printing. CodeRabbit recognizes the new delivery commitment during review and, after merge, creates one Jira Task covering the work needed to launch it responsibly.

## What the action creates

The Jira Task links back to the merged pull request and summarizes:

- What shipped and who it affects
- Service-level, eligibility, pricing, and fulfilment considerations
- Relevant support, communication, and monitoring follow-ups
- The source commit and files

Only relevant checklist items are included, and an existing task for the same pull request is reused instead of creating a duplicate.

## Run locally

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. No dependencies or build step are required.

Run the quote tests with:

```sh
node --test
```

## See the workflow

1. Open a PR titled `feat: add 24-hour rush printing`.
2. Wait for CodeRabbit to show **Create operational launch-readiness task** under Post-Merge Actions.
3. Merge the PR into the default branch.
4. Open the Jira Task and review the launch-readiness checklist generated from the final change.

## Use it in your environment

Connect Jira to CodeRabbit, give it permission to create Tasks, and replace the `CDL` project key in `.coderabbit.yaml` with your Jira project key. You can also adapt the action’s applicability criteria and checklist to match your delivery, pricing, or operational processes.
