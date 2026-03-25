# AI-First Principles

## What Makes a Repo AI-First

1. **Structured boundaries**: Predictable module structure with strict dependency rules
2. **Progressive disclosure**: Layered documentation that loads minimal context first
3. **Semantic understanding**: Serena MCP for symbolic code navigation
4. **Spec-driven workflow**: Requirements documented before implementation
5. **Automated feedback**: Tests, linters, and type checking provide clear signals

## Key Design Decisions

- CLAUDE.md per package (not just root) for localized context
- .serena/ per package for symbolic code understanding
- .specs/ for feature requirements traceability
- NX module boundaries for architectural enforcement
