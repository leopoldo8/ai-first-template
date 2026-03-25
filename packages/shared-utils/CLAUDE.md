# @ai-first/shared-utils

Shared utility functions used across all apps and packages.

## Dependency Rules
- Can import from: `@ai-first/shared-types`
- Cannot import from: apps, ui, config

## Conventions
- All functions must be pure (no side effects)
- All functions must have explicit return types
- Use Result type for operations that can fail
- Export everything from `src/index.ts`

## Adding New Utilities
1. Create a new file in `src/` with descriptive name
2. Write pure functions with explicit return types
3. Add unit tests in `__tests__/`
4. Re-export from `src/index.ts`
