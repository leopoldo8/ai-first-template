<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g., `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call nx_docs just to look up generator syntax

<!-- nx configuration end-->

---

# AI-First Template — Claude Code Configuration

## Project Overview

AI-first monorepo template using NX, Clean Architecture, TLC Spec-Driven Development, and Serena MCP.

**Packages:**
- `apps/web` — Next.js 16 frontend (App Router, Clean Architecture)
- `apps/api` — NestJS backend (Clean Architecture, DDD bounded contexts)
- `apps/docs` — Documentation site (Docusaurus)
- `packages/shared-types` — Shared TypeScript type definitions (leaf)
- `packages/shared-utils` — Shared utility functions
- `packages/ui` — Shared UI component library
- `packages/config` — Shared ESLint, TSConfig, Prettier configs (leaf)

## Before Modifying Code

1. Read THIS file (already loaded)
2. Read the target package's `CLAUDE.md`
3. Read `.specs/project/PROJECT.md` for non-negotiable principles
4. If working on a feature, read its spec in `.specs/features/<name>/`
5. For deep work, activate the Serena project and read memories

## Architecture

**Clean Architecture** with Domain-Driven Design bounded contexts:

```
Presentation -> Application -> Domain <- Infrastructure
```

- Domain layer has ZERO framework dependencies
- Each bounded context contains all 4 layers
- Shared logic goes in `packages/`, never duplicated across contexts

## Dependency Rules (NX-Enforced)

| Source | Can Import From |
|--------|----------------|
| `apps/*` | `packages/*` |
| `packages/ui` | `shared-types`, `shared-utils` |
| `packages/shared-utils` | `shared-types` |
| `packages/shared-types` | Nothing |
| `packages/config` | Nothing |

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm exec nx serve web` | Start Next.js dev server |
| `npm exec nx serve api` | Start NestJS dev server |
| `npm exec nx test <project>` | Run unit tests |
| `npm exec nx affected -t test` | Test only affected projects |
| `npm exec nx affected -t lint` | Lint only affected projects |
| `npm exec nx graph` | Visualize dependency graph |
| `npm exec nx g @ai-first/tools:bounded-context --name=<name>` | Scaffold new bounded context |
| `npm exec nx g @ai-first/tools:package --name=<name>` | Scaffold new shared package |
| `npm exec nx g @ai-first/tools:feature-spec --name=<name>` | Scaffold new feature spec |
| `npx tsx tools/scripts/validate-ai-docs.ts` | Validate AI documentation |
| `npx tsx tools/scripts/generate-llms-txt.ts` | Regenerate llms.txt |

## Conventions

- **Language**: English only (code, comments, docs, commits)
- **Commits**: Conventional format (`feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`)
- **Branching**: Trunk-based development
- **Testing**: TDD with 80% minimum coverage
- **Immutability**: Never mutate objects or arrays
- **File size**: 200-400 lines typical, 800 max
- **Functions**: Max 50 lines, max 3 parameters

## Naming Conventions

| Entity | Pattern | Example |
|--------|---------|---------|
| Variables | `camelCase` | `userName` |
| Functions | `camelCase` (verb prefix) | `fetchData()` |
| Classes | `PascalCase` | `UserRepository` |
| Interfaces | `IPascalCase` | `IUserData` |
| Types | `TPascalCase` | `TUserResponse` |
| Enums | `EPascalCase` | `EUserStatus` |
| Constants | `UPPER_SNAKE_CASE` | `MAX_RETRY_COUNT` |

## Security

- No hardcoded secrets — use environment variables
- Validate all user input (class-validator backend, Zod frontend)
- Parameterized queries only — no string concatenation for SQL
- Sanitize HTML output, enable CSRF protection

## Spec-Driven Workflow

Features follow the TLC Spec-Driven Development workflow:
1. **Brainstorm** (optional) — `superpowers:brainstorming` for unclear scope
2. **Specify** — Create `.specs/features/<name>/spec.md`
3. **Design** (Large/Complex) — Create `design.md`
4. **Tasks** (Large/Complex) — Create `tasks.md`
5. **Execute** — Implement with TDD

## Modular Rules

Detailed guidelines in `.claude/rules/`:

| Rule File | Contents |
|-----------|----------|
| security.md | Security checks, secret management |
| coding-style.md | Immutability, file organization, error handling |
| testing.md | TDD workflow, 80% coverage requirement |
| git-workflow.md | Commit format, branch naming |
| agents.md | Agent orchestration, when to use which |
| patterns.md | Clean Architecture patterns |

## Serena Integration

Each app/package has `.serena/project.yml` with memories.
Read relevant memories before deep implementation work.
Use `get_symbols_overview` instead of reading entire files.
