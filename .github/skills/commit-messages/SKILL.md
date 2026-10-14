---
name: commit-messages
description: Write clear, specific commit messages in English based on staged changes or a provided diff. Use when creating, reviewing, or improving a commit message.
---

# Commit Messages

Write the message to describe the actual changes precisely. Base every claim on the modified files and available context; do not assume motives or outcomes that the diff does not demonstrate.

## Format

- The first line is the summary: `type: short, specific description`.
- Write in English, use a lowercase type, and describe what changed. Choose a precise verb, for example: `docs: change code examples from English to Spanish`.
- Choose a type that fits the change: `feat` for functionality, `fix` for bug fixes, `docs` for documentation, `style` for visual formatting without behavior changes, `refactor` for restructuring, `perf` for performance, `test` for tests, and `chore` for maintenance. For changes spanning multiple types, choose the one that best represents the primary purpose.
- Avoid vague subjects such as `update instructions`, `miscellaneous changes`, or `fix things`; specify which file, function, behavior, or content changed.
- The body is optional. Add it when it helps explain relevant details, a known reason, or affected behavior that does not fit in the summary. If the change is trivial and the summary is enough, use a single line.
- Separate the body from the summary with a blank line. Keep each sentence informative and avoid repeating the subject.

## Process

1. Review the changes that will be included in the commit. If there are staged changes, use them as the primary source; distinguish unstaged changes so they are not attributed to the commit. If nothing is staged, base the draft on the diff provided by the user.
2. Group related changes and determine their observable effect. If the scope or intent cannot be inferred from the changes, ask before making assumptions.
3. Return only the commit message as plain text, unless the user asks for an explanation or alternatives.
4. Do not run `git commit` or modify the index. This skill drafts the message; the user decides whether to commit and executes the commit.