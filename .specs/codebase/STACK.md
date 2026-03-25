# Technology Stack

## Runtime

- Node.js 22 LTS
- TypeScript 5.9 (strict mode)

## Monorepo

- NX 22.x (workspace orchestration, module boundaries, generators)
- npm workspaces (package management)

## Backend (apps/api)

- NestJS 11.x (framework)
- TypeORM (database ORM)
- class-validator (DTO validation)
- class-transformer (serialization)
- PostgreSQL 16 (database)

## Frontend (apps/web)

- Next.js 16 (App Router)
- React 19 (UI library)
- Tailwind CSS (styling)
- Zod (validation)

## Testing

- Jest (test runner)
- @golevelup/ts-jest (NestJS mocking)
- Testing Library (React component testing)

## Build

- SWC (TypeScript compilation)
- Turbopack (Next.js bundler)

## CI/CD

- GitHub Actions
- NX Cloud (remote caching)
