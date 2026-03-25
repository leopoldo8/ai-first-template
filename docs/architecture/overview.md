# Architecture Overview

## System Design

This is an NX monorepo using Clean Architecture with Domain-Driven Design.

### Apps

- **apps/web**: Next.js 16 frontend with App Router and colocated Clean Architecture layers
- **apps/api**: NestJS backend with DDD bounded contexts, each containing 4 Clean Architecture layers
- **apps/docs**: Documentation site (Docusaurus)

### Packages

- **packages/shared-types**: Shared TypeScript type definitions (leaf — imports nothing)
- **packages/shared-utils**: Shared utility functions (imports shared-types)
- **packages/ui**: Shared UI components (imports shared-types, shared-utils)
- **packages/config**: Shared ESLint, TSConfig, Prettier configs (leaf — imports nothing)

### Clean Architecture Layers

Each bounded context in apps/api follows this structure:

```
domain/          Pure business logic (NO framework deps)
application/     Use cases, DTOs, mappers
infrastructure/  Repository implementations, external services
presentation/    Controllers, guards, filters
```

Dependency rule: `Presentation -> Application -> Domain <- Infrastructure`

The domain layer NEVER imports from NestJS, TypeORM, or any framework.

## Key Decisions

See `.specs/project/PROJECT.md` for non-negotiable principles.
