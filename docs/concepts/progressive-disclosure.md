# Progressive Disclosure

## 4-Layer System

### Layer 1 — Always Loaded (~2,500 tokens)
- `CLAUDE.md` (root) and `llms.txt`
- Provides: repo purpose, package list, dependency rules, commands

### Layer 2 — Task-Triggered (~2,000 tokens)
- Target package's `CLAUDE.md` and `.specs/project/PROJECT.md`
- Triggered by: root CLAUDE.md instruction to read package docs before coding

### Layer 3 — Context on Demand (~1,000 tokens per doc)
- `.specs/features/<name>/` and `docs/architecture/*.md`
- Triggered by: working on specific feature or needing structural understanding

### Layer 4 — Deep Context via Serena
- `.serena/memories/` per package + Serena symbolic tools
- Triggered by: implementation requiring code-level understanding
