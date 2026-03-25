# Clean Architecture Guide

## Layer Responsibilities

### Domain (innermost)
- Pure business entities and rules
- Plain TypeScript classes — NO framework imports
- Repository interfaces (not implementations)
- Domain services for complex business logic

### Application
- Use cases (one class per operation)
- DTOs with validation decorators
- Mappers between domain entities and DTOs
- Orchestrates domain services

### Infrastructure (outermost)
- Repository implementations (TypeORM)
- Database entities (*.db.entity.ts)
- External service integrations
- Implements domain interfaces

### Presentation
- Controllers (HTTP endpoints)
- Guards (auth/authz)
- Filters (exception handling)
- Thin layer — delegates to application

## Dependency Rule

```
Presentation -> Application -> Domain <- Infrastructure
```

Domain NEVER imports from any other layer.
Infrastructure implements domain interfaces via dependency injection.
