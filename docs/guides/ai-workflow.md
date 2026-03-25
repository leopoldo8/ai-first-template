# AI Workflow

## Full Feature Lifecycle

```
1. Brainstorm (optional)     superpowers:brainstorming
2. Specify (required)        .specs/features/<name>/spec.md
3. Design (Large/Complex)    .specs/features/<name>/design.md
4. Tasks (Large/Complex)     .specs/features/<name>/tasks.md
5. Execute (required)        TDD implementation
```

## When to Brainstorm First

- New feature with unclear scope
- Architectural decisions needed
- Multiple valid approaches exist

## When to Skip Brainstorming

- Feature is well-defined
- Quick fix (<=3 files) -> use .specs/quick/
- Clear requirements already documented
