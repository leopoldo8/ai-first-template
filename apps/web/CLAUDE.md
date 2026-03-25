# @ai-first/web -- Next.js Frontend

Next.js frontend application with Clean Architecture.

## Architecture

Frontend Clean Architecture organized by features:

```
src/
  app/                  <- Next.js App Router (Presentation)
    layout.tsx          <- Root layout
    page.tsx            <- Home page
    users/
      page.tsx          <- Users page (Server Component)
  features/             <- Feature modules (Application + Domain)
    users/
      components/       <- UI components for this feature
      actions/          <- Server Actions (mutations)
      hooks/            <- Client-side hooks
      types/            <- Feature-specific types
```

## Conventions

- Default to Server Components (no 'use client' unless needed)
- Push 'use client' boundaries as far down as possible
- Use Server Actions for mutations, not Route Handlers
- Organize by feature, not by component type

## Dependency Rules
- Can import from: `@ai-first/shared-types`, `@ai-first/shared-utils`, `@ai-first/ui`
- Cannot import from: `@ai-first/api`, `@ai-first/config`

## Adding a New Feature
1. Create folder: `src/features/<name>/`
2. Add components, actions, hooks, types as needed
3. Create route in `src/app/<name>/page.tsx`
4. Server Components by default; add 'use client' only for interactivity
