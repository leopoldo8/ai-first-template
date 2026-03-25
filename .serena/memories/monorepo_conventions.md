# Monorepo Conventions

## NX Commands

Always use `npm exec nx` prefix:
- `npm exec nx serve <project>` — start dev server
- `npm exec nx test <project>` — run tests
- `npm exec nx affected -t <target>` — run only affected
- `npm exec nx graph` — visualize dependencies

## Module Boundaries

Enforced by @nx/enforce-module-boundaries:
- apps can import from packages
- packages/ui can import shared-types and shared-utils
- packages/shared-utils can import shared-types
- shared-types and config are leaf packages (import nothing)

## Adding New Code

- New bounded context: `npm exec nx generate @workspace/tools:bounded-context`
- New package: `npm exec nx generate @workspace/tools:package`
- New feature spec: `npm exec nx generate @workspace/tools:feature-spec`
