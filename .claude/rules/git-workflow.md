# Git Workflow

## Branching

Trunk-based development:
- `trunk` — main development branch
- Feature branches: `feat/<feature-name>`
- Fix branches: `fix/<issue-name>`

## Commit Messages

Conventional format:

```
<type>: <description>

<optional body>
```

Types: feat, fix, refactor, docs, test, chore, perf, ci

Guidelines:
- Small, focused commits
- Descriptive messages explaining WHY, not just WHAT
- One logical change per commit

## Before Committing

- Run `npm exec nx affected -t test,lint`
- Ensure no hardcoded secrets
- Verify all new files have proper naming
