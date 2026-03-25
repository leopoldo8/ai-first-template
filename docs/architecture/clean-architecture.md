# Clean Architecture Guide

## Principles

1. **Independence of frameworks**: Business rules don't depend on NestJS, TypeORM, or Next.js
2. **Testability**: Business rules can be tested without UI, database, or external services
3. **Independence of UI**: The UI can change without changing business rules
4. **Independence of database**: Business rules don't know about PostgreSQL vs MongoDB

## Layer Details

### Domain Layer (innermost)

Contains pure business logic with zero framework dependencies:

- **Entities**: Business objects with identity and behavior
- **Interfaces**: Repository contracts, service contracts
- **Services**: Domain services for complex business rules
- **Value Objects**: Immutable objects defined by their attributes

### Application Layer

Orchestrates domain objects to perform use cases:

- **Use Cases**: One class per operation (CreateUserUseCase, GetUserUseCase)
- **DTOs**: Data Transfer Objects with validation (class-validator)
- **Mappers**: Transform between domain entities and DTOs

### Infrastructure Layer (outermost)

Implements domain interfaces with concrete technology:

- **Repositories**: TypeORM implementations of domain repository interfaces
- **DB Entities**: TypeORM-decorated database entities (*.db.entity.ts)
- **External Services**: Third-party API integrations

### Presentation Layer

HTTP interface layer:

- **Controllers**: NestJS route handlers (thin — delegates to use cases)
- **Guards**: Authentication and authorization
- **Filters**: Exception handling and response formatting

## Frontend Clean Architecture

Next.js uses a colocated approach:

- `src/app/(routes)/` — Presentation (pages, route-specific components)
- `src/domain/` — Shared domain entities and interfaces
- `src/application/` — Shared use cases and mappers
- `src/infrastructure/` — API clients, repositories
- Route-private code in `_components/`, `_lib/`, `_server/` directories
