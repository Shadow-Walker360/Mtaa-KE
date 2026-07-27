# 📐 Non-Functional Requirements (NFR)

> "Features attract users. Quality keeps them."

---

# Purpose

This document defines the minimum quality standards that every component, service, API, interface, and feature within Mtaa KE must satisfy.

These requirements are mandatory.

A feature is **not complete** simply because it works.

It must also satisfy the engineering standards defined here.

---

# Engineering Goals

Mtaa KE must be:

- Reliable
- Secure
- Fast
- Accessible
- Observable
- Maintainable
- Scalable
- Extensible
- Testable
- Recoverable

---

# 1. Performance

## Frontend

Target:

- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1

Requirements

- Lazy-load images.
- Lazy-load routes.
- Code split large bundles.
- Minify production assets.
- Compress responses.
- Avoid unnecessary re-renders.
- Optimize font loading.
- Serve responsive images.

---

## Backend

Average API Response Time

Target:

< 200ms

Maximum:

500ms

Long-running operations:

Must execute asynchronously where appropriate.

---

## Database

Queries should:

- Use indexes
- Avoid full collection scans
- Avoid N+1 query patterns
- Minimize network round trips

Target

95% of queries

< 100ms

---

# 2. Scalability

The architecture should support horizontal scaling.

Avoid:

- Single points of failure
- Global mutable state
- In-memory sessions
- Tight coupling

Every service should remain stateless whenever practical.

---

# 3. Availability

Production uptime target

99.9%

Planned maintenance should be communicated.

Critical services should degrade gracefully instead of failing completely.

---

# 4. Reliability

Critical operations should be idempotent whenever possible.

Examples

- Payments
- Property publishing
- User registration
- Notifications

Retries should never produce duplicate business actions.

---

# 5. Security

Mandatory

- HTTPS only
- Password hashing
- JWT validation
- Refresh token rotation
- Rate limiting
- Input validation
- Output encoding
- CSRF protection where applicable
- Secure cookies when applicable
- Security headers
- File upload validation
- Malware scanning (future)

Never store:

- Plain-text passwords
- API secrets
- Access tokens in source code

---

# 6. Privacy

Respect user privacy.

Collect only required information.

Support future compliance with:

- GDPR
- Kenya Data Protection Act
- Other regional privacy regulations

Users should be able to:

- View their data
- Export their data
- Request deletion
- Control notification preferences

---

# 7. Accessibility

Target

WCAG 2.2 AA Compliance

Requirements

- Keyboard navigation
- Focus visibility
- Semantic HTML
- Proper labels
- Screen reader compatibility
- Sufficient color contrast
- Accessible error messages
- Captions for multimedia where applicable

Accessibility is a release requirement.

---

# 8. Maintainability

Every feature must include:

- Documentation
- Tests
- Type definitions
- Clear naming
- Logging
- Error handling

Avoid:

- Dead code
- Duplicate logic
- Hidden dependencies

---

# 9. Technical Debt

## Policy

Technical debt is prohibited unless formally approved.

Every approved technical debt item must include:

- Justification
- Risk assessment
- Issue reference
- Owner
- Target removal milestone

Technical debt must never accumulate silently.

---

# 10. Testability

Minimum expectations

Business logic:

90%+ unit test coverage

Critical services:

100% integration coverage

Authentication:

End-to-end tests required

Payments:

End-to-end tests required

Search:

Integration tests required

AI recommendations:

Validation tests required

---

# 11. Observability

Every production service must support:

Logging

Metrics

Tracing

Health checks

Readiness checks

Examples

- Request latency
- Error rates
- Active users
- Queue length
- Cache hit ratio

Failures should be observable before users report them.

---

# 12. Monitoring

Future integrations

- Prometheus
- Grafana
- Sentry
- OpenTelemetry

Production alerts should include:

- API failures
- Authentication spikes
- Payment failures
- Database latency
- AI service failures

---

# 13. Logging

Never log

- Passwords
- Access tokens
- Refresh tokens
- Credit card details
- Personally sensitive information

Logs should include

- Timestamp
- Service
- Request ID
- User ID (when appropriate)
- Severity
- Message

---

# 14. Error Handling

Users should never see stack traces.

Errors should be:

Human-readable

Actionable

Consistent

Internal errors should be logged.

Public responses should avoid exposing implementation details.

---

# 15. API Standards

Every endpoint must

- Validate input
- Authenticate requests
- Authorize access
- Return consistent JSON
- Use proper HTTP status codes
- Support versioning

Response format

{
  success: true,
  data: {},
  message: "",
  errors: []
}

---

# 16. Versioning

Use Semantic Versioning.

MAJOR.MINOR.PATCH

Breaking changes require a major version.

---

# 17. Browser Support

Support latest two versions of

- Chrome
- Firefox
- Edge
- Safari

Responsive support

- Mobile
- Tablet
- Desktop

---

# 18. Internationalization

Future-ready.

Architecture should support

- Multiple languages
- Multiple currencies
- Multiple countries
- Time zones
- Localization

Avoid hardcoded strings.

---

# 19. AI Quality

AI services must:

Provide explainable recommendations where practical.

Never fabricate ownership information.

Never override verified property records.

Allow users to report incorrect AI outputs.

---

# 20. Plugin Compatibility

Plugins must:

- Be independently installable
- Be independently removable
- Never modify core source files
- Declare dependencies
- Expose version information

Core upgrades should not break compliant plugins.

---

# 21. Disaster Recovery

Daily backups.

Encrypted storage.

Recovery objectives

RPO (Recovery Point Objective)

< 15 minutes

RTO (Recovery Time Objective)

< 2 hours

Disaster recovery procedures must be documented and tested.

---

# 22. Definition of Production Ready

A feature is production ready only if:

✓ Functional requirements met

✓ Non-functional requirements met

✓ Documentation complete

✓ Security review passed

✓ Performance benchmarks met

✓ Accessibility verified

✓ Tests passing

✓ Code review approved

✓ No unresolved critical defects

---

# Quality Gates

Every Pull Request must pass:

✓ Linting

✓ Type checking

✓ Unit tests

✓ Integration tests

✓ Security scanning

✓ Dependency audit

✓ Build verification

✓ Performance checks

Pull requests failing any quality gate must not be merged.

---

# Engineering Principle

Quality is not something added after development.

Quality is the standard by which development is measured.

Every line of code should make Mtaa KE:

- Faster
- Safer
- Simpler
- More maintainable
- Easier to extend

If it does not, reconsider the implementation.