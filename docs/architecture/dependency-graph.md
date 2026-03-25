# Dependency Graph

## Package Dependencies

```
shared-types (leaf) ──> shared-utils ──> ui ──> apps/web
                                    ──> apps/api

config (leaf) — consumed by all via tsconfig extends
apps/docs — no package dependencies
```

## NX Enforcement

Dependencies are enforced via `@nx/enforce-module-boundaries` lint rule.

Tags:
- `type:app` — applications (apps/*)
- `type:lib` — libraries (packages/*)
- `scope:shared` — shared packages (shared-types, shared-utils, config)
- `scope:ui` — UI packages
- `scope:api` — API-specific
- `scope:web` — Web-specific

## Rules

| Source Tag | Can Depend On |
|-----------|---------------|
| type:app | type:lib |
| scope:ui | scope:shared |
| scope:shared | scope:shared (same or leaf only) |
