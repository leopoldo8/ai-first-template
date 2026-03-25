# @ai-first/api — NestJS Backend

NestJS backend application with Clean Architecture and DDD bounded contexts.

## Architecture

Each bounded context follows Clean Architecture:

```
bounded-contexts/<name>/
  domain/           <- Core business logic (ZERO framework deps)
    entities/       <- Domain entities and factory functions
    repositories/   <- Repository interfaces (not implementations)
    value-objects/  <- Immutable value objects
  application/      <- Use cases, orchestration
    use-cases/      <- One class per use case
    dtos/           <- Data transfer objects (with validation)
    mappers/        <- Domain <-> DTO/Response mappers
  infrastructure/   <- Framework implementations
    repositories/   <- TypeORM repository implementations
    entities/       <- ORM entities (database mapping)
  presentation/     <- HTTP layer
    controllers/    <- NestJS controllers
    guards/         <- Authentication/authorization
  <name>.module.ts  <- NestJS module wiring
```

## Dependency Rules (STRICT)

```
Presentation -> Application -> Domain <- Infrastructure
```

- Domain layer has ZERO framework imports (no @nestjs/*, no typeorm)
- Application layer imports from Domain only
- Infrastructure implements Domain interfaces
- Presentation calls Application use cases

## Conventions

- One use case per class, one public `execute()` method
- Repository interfaces in Domain, implementations in Infrastructure
- DTOs with class-validator decorators for input validation
- Mappers convert between layers (never pass domain entities to controllers)
- Value objects for complex validation (Email, Money, etc.)

## Adding a New Bounded Context

1. Create folder: `src/bounded-contexts/<name>/`
2. Start with Domain layer (entities, repository interfaces)
3. Add Application layer (use cases, DTOs, mappers)
4. Add Infrastructure layer (ORM entities, repository implementations)
5. Add Presentation layer (controllers)
6. Wire in `<name>.module.ts`
7. Import module in `app.module.ts`

## Dependencies
- Can import from: `@ai-first/shared-types`, `@ai-first/shared-utils`
- Cannot import from: other apps, `@ai-first/ui`
