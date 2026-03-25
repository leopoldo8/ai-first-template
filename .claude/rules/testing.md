# Testing Requirements

## TDD Workflow (Mandatory)

1. RED: Write test first — it should FAIL
2. GREEN: Write minimal implementation to make it pass
3. REFACTOR: Clean up while keeping tests green
4. Verify coverage (80%+)

## Test Types

| Type | Suffix | Purpose |
|------|--------|---------|
| Unit | `.spec.ts` | Individual functions, services |
| Integration | `.int-spec.ts` | Service interactions, database |
| E2E | `.e2e-spec.ts` | Critical user flows, API endpoints |

## AAA Pattern

Every test follows Arrange, Act, Assert:

```typescript
it('should create a user with valid data', async () => {
  // Arrange
  const dto: CreateUserDto = { name: 'John', email: 'john@example.com' }

  // Act
  const result = await service.createUser(dto)

  // Assert
  expect(result).toBeDefined()
  expect(result.name).toBe('John')
})
```

## Mocking

- Never import AppModule in tests
- Initialize only the services you need
- Use `@golevelup/ts-jest` `createMock` for complex objects
- Mock external services, not domain logic
- `beforeEach` resets state, `afterAll` cleans up
