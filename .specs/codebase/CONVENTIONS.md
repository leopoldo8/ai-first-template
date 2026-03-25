# Code Conventions

## Naming

| Entity | Pattern | Example |
|--------|---------|---------|
| Variables | camelCase | `userName` |
| Functions | camelCase (verb prefix) | `fetchData()` |
| Classes | PascalCase | `UserRepository` |
| Interfaces | IPascalCase | `IUserData` |
| Types | TPascalCase | `TUserResponse` |
| Enums | EPascalCase | `EUserStatus` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |

## File Naming

| Type | Pattern | Example |
|------|---------|---------|
| Domain entities | `.entity.ts` | `user.entity.ts` |
| DB entities | `.db.entity.ts` | `user.db.entity.ts` |
| DTOs | `.dto.ts` | `create-user.dto.ts` |
| Use cases | `.use-case.ts` | `create-user.use-case.ts` |
| Controllers | `.controller.ts` | `user.controller.ts` |
| Services | `.service.ts` | `user.domain.service.ts` |
| Repositories | `.repository.ts` | `user.repository.ts` |
| Interfaces | `.interface.ts` | `user.repository.interface.ts` |
| Unit tests | `.spec.ts` | `user.service.spec.ts` |
| Integration tests | `.int-spec.ts` | `user.service.int-spec.ts` |
| E2E tests | `.e2e-spec.ts` | `user.controller.e2e-spec.ts` |

## Code Style

- Immutability: always create new objects, never mutate
- Pure functions preferred (no side effects)
- Guard clauses with early returns (no deep nesting)
- Explicit return types always
- Max 3 parameters per function (use options object for more)
