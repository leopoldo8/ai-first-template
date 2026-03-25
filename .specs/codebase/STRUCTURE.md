# File Structure

```
ai-first-template/
├── .specs/              TLC Spec-Driven Development
├── .serena/             Serena MCP root config + memories
├── .claude/rules/       Claude Code modular guidelines
├── apps/
│   ├── web/             Next.js frontend (Clean Architecture)
│   ├── api/             NestJS backend (Clean Architecture, DDD)
│   └── docs/            Documentation site
├── packages/
│   ├── shared-types/    Shared TypeScript types (leaf)
│   ├── shared-utils/    Shared utility functions
│   ├── ui/              Shared UI components
│   └── config/          Shared configs (leaf)
├── docs/                Human-facing documentation
├── tools/               NX generators and scripts
├── CLAUDE.md            Root AI instructions
└── llms.txt             Machine-readable doc index
```
