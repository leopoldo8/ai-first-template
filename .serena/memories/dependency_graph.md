# Dependency Graph

```
shared-types ─────────────────┐
    │                         │
    v                         v
shared-utils ──────> ui ──> apps/web
    │
    v
  apps/api

config (standalone, consumed via extends)
apps/docs (standalone, reads docs/ only)
```

## Enforcement

NX tags: type:app, type:lib, scope:shared, scope:ui, scope:api, scope:web
Lint rule: @nx/enforce-module-boundaries in .eslintrc.json
