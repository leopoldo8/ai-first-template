# Project: AI-First Template

## Vision

The best AI-first monorepo template for Claude Code — structured for AI agents to navigate, understand, and contribute effectively with progressive disclosure documentation, Clean Architecture, and Serena MCP integration.

## Stakeholders

- Template users (developers bootstrapping new projects)
- AI coding agents (Claude Code, Serena MCP)

## Architecture Principles

- Clean Architecture with Domain-Driven Design
- Dependency flow: Presentation -> Application -> Domain <- Infrastructure
- Domain layer has ZERO framework dependencies (plain TypeScript only)
- Each bounded context contains all 4 layers (domain, application, infrastructure, presentation)
- Shared logic goes in packages/, never duplicated across bounded contexts
- NX module boundaries enforce dependency rules at lint time

## Technology Stack

- **Monorepo**: NX with module boundary enforcement
- **Backend**: NestJS with TypeORM
- **Frontend**: Next.js 16 App Router
- **Language**: TypeScript strict mode everywhere
- **Database**: PostgreSQL
- **Testing**: Jest (unit, integration, E2E)

## Conventions

- English only for all code, comments, documentation, and commits
- Immutability: never mutate objects or arrays, always create new ones
- TDD mandatory: RED -> GREEN -> REFACTOR cycle
- 80% minimum test coverage
- Conventional commits: feat:, fix:, refactor:, docs:, test:, chore:
- Trunk-based development with feature branches
- Max file size: 800 lines (typical 200-400)
- Max function size: 50 lines, max 3 parameters
- Naming: IPascalCase (interfaces), EPascalCase (enums), TPascalCase (types)

## Security

- No hardcoded secrets — use environment variables
- All inputs validated (class-validator backend, Zod frontend)
- Parameterized queries only — no string concatenation for SQL
- XSS prevention via HTML sanitization
- CSRF protection enabled on all endpoints
- Rate limiting on public endpoints
