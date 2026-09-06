# PrintReady

PrintReady is a compact 3D-printing quote app and a working example of a CodeRabbit Post-Merge Action. The app starts with standard printing; a follow-up pull request introduces rush printing and demonstrates how CodeRabbit creates the corresponding operational launch task in Jira after merge.

## What the action creates

For a qualifying customer-facing operational change, CodeRabbit creates one Jira Task that summarizes:

- What shipped and who it affects
- Relevant service-level, eligibility, pricing, and fulfilment considerations
- Support, communication, and monitoring follow-ups
- The source pull request, commit, and files

The action checks for an existing task linked to the pull request before creating another.

## Run locally

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. No dependencies or build step are required.

Run the quote tests with:

```sh
node --test
```

## Reproduce the workflow

1. Merge this baseline application and `.coderabbit.yaml` into the default branch.
2. Open a new PR that introduces a customer-facing operational change, such as 24-hour rush printing.
3. Confirm that CodeRabbit shows **Create operational launch-readiness task** under Post-Merge Actions.
4. Merge the PR and review the Jira Task generated from the final change.

## Use it in your environment

Connect Jira to CodeRabbit, give it permission to create Tasks, and replace the `CDL` project key in `.coderabbit.yaml` with your Jira project key. Adapt the applicability criteria and checklist to match your delivery, pricing, or operational processes.
