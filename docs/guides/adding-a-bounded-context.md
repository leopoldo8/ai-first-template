# Adding a Bounded Context

## Using the Generator

```bash
npm exec nx generate @workspace/tools:bounded-context --name=<context-name> --app=api
```

This creates the full Clean Architecture structure inside `apps/api/src/modules/<name>/`.

## Manual Steps After Generation

1. Register the module in `apps/api/src/app.module.ts`
2. Create domain entities in `domain/entities/`
3. Define repository interfaces in `domain/interfaces/`
4. Write tests first (TDD)
5. Implement use cases in `application/use-cases/`
6. Implement repositories in `infrastructure/repositories/`
7. Create controllers in `presentation/controllers/`
