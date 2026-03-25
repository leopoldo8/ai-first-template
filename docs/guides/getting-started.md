# Getting Started

## Prerequisites

- Node.js 22 LTS
- npm 10+
- PostgreSQL 16 (for apps/api)

## Setup

```bash
git clone <repo-url>
cd ai-first-template
npm install
```

## Development

```bash
npm exec nx serve api    # Start backend
npm exec nx serve web    # Start frontend (separate terminal)
```

## Verify

```bash
npm exec nx run-many -t test    # Run all tests
npm exec nx run-many -t lint    # Run all linters
```
