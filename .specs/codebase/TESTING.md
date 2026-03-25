# Testing Approach

## Strategy

- TDD mandatory: RED -> GREEN -> REFACTOR
- 80% minimum coverage across all packages

## Test Types

| Type | Suffix | Location | Purpose |
|------|--------|----------|---------|
| Unit | `.spec.ts` | `__tests__/` | Individual functions, services |
| Integration | `.int-spec.ts` | `__tests__/` | Service interactions, DB operations |
| E2E | `.e2e-spec.ts` | `__tests__/` | Critical user flows, API endpoints |

## Patterns

- AAA pattern: Arrange, Act, Assert
- Mock external dependencies, not domain logic
- Never import AppModule in tests — initialize only needed providers
- Use `@golevelup/ts-jest` `createMock` for complex objects
- `beforeEach` for fresh state, `afterAll` for cleanup

## Running Tests

```bash
npm exec nx test <project>              # Unit tests for one project
npm exec nx affected -t test            # Test only affected projects
npm exec nx run-many -t test --coverage # All tests with coverage
```
