# PrintReady

PrintReady is a compact 3D-printing quote app and a working example of a CodeRabbit Post-Merge Action. Customers can compare standard delivery with 24-hour rush printing.

## What the action does

When a pull request ships a meaningful customer-facing change, CodeRabbit updates `CHANGELOG.md` and opens a focused follow-up pull request. Each entry explains the customer impact in plain language and links back to the source pull request.

- Runs only for customer-facing changes
- Adds one concise entry under **Unreleased**
- Skips pull requests that are already documented
- Changes no other files

This keeps release notes current without making changelog maintenance part of every feature pull request.

## Run locally

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. No dependencies or build step are required.

## See the workflow

1. Open a pull request with a customer-facing change. Do not edit `CHANGELOG.md` in that pull request.
2. Confirm that CodeRabbit shows **Document customer-facing changes** under Post-Merge Actions.
3. Merge the pull request into the default branch.
4. Review the follow-up pull request containing the generated changelog entry.

## Use it in your environment

Copy the `reviews.post_merge_actions` configuration from `.coderabbit.yaml` into your repository and add a `CHANGELOG.md` with an **Unreleased** section. Adapt the applicability criteria and entry format to match what your customers consider release-worthy.
