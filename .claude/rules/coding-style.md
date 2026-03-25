# Coding Style

## Immutability (CRITICAL)

ALWAYS create new objects, NEVER mutate:

```typescript
// WRONG
function updateUser(user: IUser, name: string): IUser {
  user.name = name  // MUTATION!
  return user
}

// CORRECT
function updateUser(user: IUser, name: string): IUser {
  return { ...user, name }
}
```

## Functions

- Small and focused — do ONE thing
- Max 50 lines, max 3 parameters
- Use options object for more parameters
- Explicit return types always
- Pure functions preferred (no side effects)

## Files

- 200-400 lines typical, 800 max
- Many small files > few large files
- Organize by feature/domain, not by type

## Comments

- Explain WHY, not WHAT
- No redundant comments
- No commented-out code — use git history
- JSDoc for public APIs only

## Error Handling

- Always handle errors with try/catch
- Provide user-friendly error messages
- Log errors for debugging (no console.log — use proper logger)
- Error messages must not leak sensitive data

## Guard Clauses

Use early returns instead of deep nesting:

```typescript
function processOrder(order: IOrder): IOrderResult {
  if (!order) throw new BadRequestException('Order is required')
  if (!order.items?.length) throw new BadRequestException('Order must have items')
  if (!order.payment) throw new BadRequestException('Payment is required')

  return processValidOrder(order)
}
```
