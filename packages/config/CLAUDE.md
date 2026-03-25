# @ai-first/config

Shared configuration files (TypeScript, Prettier, ESLint).

## Dependency Rules
- This is a LEAF package — imports NOTHING from the monorepo
- Apps and packages reference these configs

## Conventions
- Export configuration objects as `const` (immutable)
- Configuration constants use UPPER_SNAKE_CASE
