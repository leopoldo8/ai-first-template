# @ai-first/shared-types

Shared TypeScript type definitions used across all apps and packages.

## Dependency Rules
- This is a LEAF package — imports NOTHING from the monorepo
- All other packages can import from here

## Conventions
- All interfaces prefixed with `I` (e.g., `IApiResponse`)
- All types prefixed with `T` (e.g., `TUserResponse`)
- All enums prefixed with `E` (e.g., `EHttpStatus`)
- All types must be `readonly` — enforce immutability at type level
- Export everything from `src/index.ts`

## Adding New Types
1. Create a new file in `src/` with descriptive name
2. Define types with `readonly` properties
3. Re-export from `src/index.ts`
