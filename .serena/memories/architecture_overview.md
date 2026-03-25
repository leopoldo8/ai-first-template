# Architecture Overview

NX monorepo with Clean Architecture and Domain-Driven Design.

## Package Dependency Hierarchy

shared-types (leaf) <- shared-utils <- ui <- apps/web
shared-types (leaf) <- shared-utils <- apps/api
config (leaf) - consumed by all via extends
apps/docs - no package deps

## Build Order

1. packages/config (no deps)
2. packages/shared-types (no deps)
3. packages/shared-utils (depends on shared-types)
4. packages/ui (depends on shared-types, shared-utils)
5. apps/api (depends on shared-types, shared-utils)
6. apps/web (depends on shared-types, shared-utils, ui)
7. apps/docs (no package deps)
