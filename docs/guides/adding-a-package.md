# Adding a Package

## Using the Generator

```bash
npm exec nx generate @workspace/tools:package --name=<package-name> --description="<description>"
```

This creates the package with CLAUDE.md, .serena/project.yml, and proper NX configuration.

## Manual Steps After Generation

1. Add exports to `src/index.ts`
2. Update dependency rules in nx.json if needed
3. Import from other packages: `import { X } from '@workspace/<package-name>'`
