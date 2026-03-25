# Architecture

## Overview

NX monorepo with Clean Architecture and Domain-Driven Design.

## Layer Structure (per bounded context)

```
domain/          Pure business logic, zero framework deps
application/     Use cases, DTOs, mappers (orchestrates domain)
infrastructure/  Repository implementations, external services
presentation/    Controllers, guards, filters (HTTP layer)
```

## Package Dependency Graph

```
shared-types (leaf)  <--  shared-utils  <--  ui  <--  apps/web
                                         <--  apps/api
config (leaf) — consumed by all via extends
apps/docs — reads from docs/, no package deps
```

## Key Patterns

- Dependency Injection via NestJS (backend)
- Server Components by default (frontend)
- Repository pattern with interface segregation
- Use case pattern (one class per operation)
