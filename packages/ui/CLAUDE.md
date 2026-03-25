# @ai-first/ui

Shared UI component library.

## Dependency Rules
- Can import from: `@ai-first/shared-types`, `@ai-first/shared-utils`
- Cannot import from: apps, config

## Conventions
- Components use PascalCase folders: `components/Button/Button.tsx`
- Props interfaces prefixed with `I`: `IButtonProps`
- All props must be `readonly`
- Export components and their prop types from `src/index.ts`
- Use composition over inheritance

## Adding New Components
1. Create folder: `src/components/ComponentName/`
2. Create component: `ComponentName.tsx`
3. Add tests: `ComponentName.spec.tsx`
4. Re-export from `src/index.ts`
