# PrintReady

PrintReady is a compact 3D-printing quote app and a working example of a CodeRabbit Post-Merge Action. Customers can compare standard delivery with 24-hour rush printing; after the feature merges, CodeRabbit creates the corresponding operational launch task in Jira.

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

## See the workflow

1. Review the PR introducing 24-hour rush printing.
2. Confirm that CodeRabbit shows **Create operational launch-readiness task** under Post-Merge Actions.
3. Merge the PR into the default branch.
4. Review the Jira Task generated from the final change.

## Use it in your environment

Connect Jira to CodeRabbit, give it permission to create Tasks, and replace the `CDL` project key in `.coderabbit.yaml` with your Jira project key. Adapt the applicability criteria and checklist to match your delivery, pricing, or operational processes.
