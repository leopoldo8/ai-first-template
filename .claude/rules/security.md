# Security Guidelines

## Before Any Commit

- [ ] No hardcoded secrets (API keys, passwords, tokens)
- [ ] All user inputs validated
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (sanitized HTML)
- [ ] CSRF protection enabled
- [ ] Authentication/authorization verified
- [ ] Error messages do not leak sensitive data

## Secret Management

Use environment variables for all sensitive configuration.
Never commit .env files or credentials to the repository.

## Input Validation

- Backend: class-validator decorators on DTOs
- Frontend: Zod schemas for form validation
- Always validate at system boundaries (API endpoints, form submissions)

## Security Response

If a security issue is found:
1. STOP immediately
2. Fix CRITICAL issues before continuing
3. Rotate any exposed secrets
4. Review for similar issues
