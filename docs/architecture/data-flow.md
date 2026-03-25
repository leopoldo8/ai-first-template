# Data Flow

## API Request Flow (Backend)

```
HTTP Request
  -> Controller (presentation/)
    -> Use Case (application/)
      -> Domain Service (domain/)
      -> Repository Interface (domain/)
        -> Repository Implementation (infrastructure/)
          -> Database
```

## Frontend Data Flow

```
User Action
  -> Client Component (app/(routes)/_components/)
    -> Server Action / API Route (app/api/)
      -> Infrastructure API Client (infrastructure/)
        -> Backend API
```

## Cross-Package Data Flow

```
apps/web -> packages/ui (shared components)
         -> packages/shared-utils (utility functions)
         -> packages/shared-types (type definitions)

apps/api -> packages/shared-utils (utility functions)
         -> packages/shared-types (type definitions)
```
