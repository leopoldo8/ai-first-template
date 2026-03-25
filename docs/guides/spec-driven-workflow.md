# Spec-Driven Workflow (TLC)

## Overview

Features follow the TLC Spec-Driven Development methodology with adaptive depth.

## Auto-Sizing

| Scope | Depth |
|-------|-------|
| Small (<=3 files) | Quick mode: .specs/quick/ |
| Medium (<10 tasks) | Brief spec only |
| Large (multi-component) | Full spec + design + tasks |
| Complex (ambiguous) | Full spec + discussion + research |

## Creating a Feature Spec

```bash
npm exec nx generate @workspace/tools:feature-spec --name=<feature-name>
```

## File Purposes

- `spec.md` — WHAT and WHY (requirements, acceptance criteria)
- `context.md` — User decisions from discussion (created when needed)
- `design.md` — HOW (architecture, components) — Large/Complex only
- `tasks.md` — Atomic tasks with verification criteria — Large/Complex only
