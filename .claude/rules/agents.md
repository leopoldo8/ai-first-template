# Agent Orchestration

## When to Use Agents

- Complex feature requests — use Plan agent
- Code just written/modified — use Code Reviewer agent
- Bug fix or new feature — follow TDD
- Architectural decision — use Plan agent

## Parallel Execution

ALWAYS use parallel agent execution for independent operations:

```
GOOD: Launch 3 agents in parallel for independent tasks
BAD: Sequential when tasks are independent
```

## Serena Integration

- Activate Serena project before deep implementation work
- Use `get_symbols_overview` instead of reading entire files
- Read memories for architecture context
- Use `find_symbol` with `include_body=True` for specific methods
