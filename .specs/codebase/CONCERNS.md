# Concerns & Tech Debt

## Known Concerns

- Template is greenfield — no legacy tech debt
- NX module boundary rules need careful configuration to prevent circular deps

## Risk Areas

- Clean Architecture layer violations (domain importing infrastructure)
- Test isolation (tests depending on shared state)
- Package boundary enforcement (NX lint rules must stay in sync with actual deps)

## Mitigation

- `@nx/enforce-module-boundaries` lint rule enforces dependency direction
- CI validates all AI docs exist and are consistent
- Serena memories document architecture per package
