# 🤝 Contributing to Mtaa KE

First of all, thank you for your interest in contributing to **Mtaa KE**.

Mtaa KE is more than a property marketplace.

Our long-term vision is to build **Africa's Digital Property Infrastructure**—a platform that simplifies renting, buying, selling, property management, neighborhood intelligence, and AI-powered real estate services.

Every contribution should move us closer to that vision.

---

# Table of Contents

- Vision
- Guiding Principles
- Before You Start
- Development Workflow
- Branch Strategy
- Commit Standards
- Pull Requests
- Code Standards
- Documentation Standards
- Testing Requirements
- Security Guidelines
- Performance Guidelines
- Accessibility Requirements
- UI/UX Standards
- API Standards
- Database Standards
- AI Standards
- Plugin Development
- Reporting Bugs
- Feature Requests
- Code Review Process

---

# Vision

We value:

- Quality over speed
- Simplicity over complexity
- Readability over cleverness
- Scalability over shortcuts
- Maintainability over temporary fixes

Code written today should still be understandable two years from now.

---

# Engineering Philosophy

Every contributor should aim to write software that is:

- Reliable
- Secure
- Accessible
- Modular
- Testable
- Documented
- Performant

If a feature introduces unnecessary complexity, reconsider the design.

---

# Before You Start

Please read:

- README.md
- ROADMAP.md
- SECURITY.md
- CODE_OF_CONDUCT.md

Understand the architecture before writing code.

Never implement features that contradict the documented design.

---

# Branch Strategy

Never work directly on `main`.

Create feature branches.

Examples:

feature/property-search

feature/authentication

feature/mpesa-payments

feature/tenant-dashboard

feature/property-passport

bugfix/login-validation

hotfix/security-patch

release/v1.2.0

---

# Development Workflow

1. Fork the repository.
2. Create a feature branch.
3. Implement the feature.
4. Write tests.
5. Update documentation.
6. Run linting.
7. Open a Pull Request.

---

# Commit Message Standard

Use Conventional Commits.

Examples:

```
feat(auth): add JWT authentication

fix(search): resolve county filter bug

docs(api): update endpoint documentation

style(ui): improve button spacing

refactor(property): simplify listing service

test(auth): add login unit tests

perf(images): optimize gallery loading

chore(deps): update dependencies
```

Avoid vague commit messages like:

```
update

changes

fixed stuff

work

done
```

---

# Pull Request Requirements

Every Pull Request must include:

- Purpose
- Screenshots (if UI changes)
- Related issue
- Testing performed
- Documentation updates
- Breaking changes (if any)

Small Pull Requests are preferred.

---

# Coding Standards

## General

- Write readable code.
- Keep functions small.
- Prefer composition over inheritance.
- Avoid duplicated logic.
- Name variables clearly.

Bad

```
const x = data;
```

Good

```
const filteredProperties = data;
```

---

# SOLID Principles

Follow SOLID wherever practical.

- Single Responsibility Principle
- Open/Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

---

# Clean Code

Avoid:

- Deep nesting
- Magic numbers
- Long functions
- Unused variables
- Dead code

Prefer early returns.

---

# Frontend Standards

Use:

- Functional Components
- TypeScript
- Hooks
- Reusable Components

Avoid:

- Inline CSS
- Inline JavaScript
- Hardcoded values
- Repeated layouts

---

# Backend Standards

Keep controllers thin.

Business logic belongs in services.

Routes should only define endpoints.

Repositories handle database access.

Middleware handles authentication and validation.

---

# API Standards

Every endpoint should:

- Validate input
- Return consistent responses
- Handle errors gracefully
- Use correct HTTP status codes
- Be documented

Example:

```
200 OK

201 Created

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Unprocessable Entity

500 Internal Server Error
```

---

# Database Standards

Collections should:

- Use indexes appropriately
- Avoid duplicated data
- Support future scaling
- Include timestamps
- Support soft deletes where appropriate

---

# Documentation Standards

Every feature should include documentation.

Document:

- Purpose
- Inputs
- Outputs
- Limitations
- Future improvements

---

# Testing Requirements

Every contribution should include tests when applicable.

Testing layers:

- Unit Tests
- Integration Tests
- End-to-End Tests

Critical paths require automated testing.

---

# Security Guidelines

Never:

- Commit secrets
- Commit API keys
- Commit credentials
- Disable authentication
- Trust client-side validation

Always:

- Validate inputs
- Sanitize data
- Hash passwords
- Verify permissions
- Rate-limit sensitive endpoints

---

# Performance Guidelines

Optimize for:

- Fast page loads
- Minimal API calls
- Efficient database queries
- Image optimization
- Lazy loading
- Code splitting
- Caching

Performance is a feature.

---

# Accessibility

All features must meet accessibility expectations.

Ensure:

- Keyboard navigation
- Screen reader compatibility
- Focus indicators
- Color contrast
- Semantic HTML
- Accessible forms

Accessibility is not optional.

---

# UI / UX Standards

Every interface should be:

- Consistent
- Responsive
- Minimal
- Mobile-first
- Intuitive

Avoid visual clutter.

Whitespace improves usability.

---

# AI Development Standards

AI features should:

- Explain recommendations
- Never expose sensitive data
- Respect user privacy
- Be optional when appropriate
- Fail gracefully

Human decisions always take precedence.

---

# Plugin Development

New capabilities should be implemented as plugins whenever possible.

Plugins should not modify the platform core.

Examples:

- Payment providers
- Notification providers
- AI services
- Government integrations
- Analytics providers

Loose coupling is preferred.

---

# Reporting Bugs

Please include:

- Expected behavior
- Actual behavior
- Steps to reproduce
- Browser/device
- Screenshots
- Logs (if applicable)

---

# Feature Requests

Describe:

- Problem
- Proposed solution
- Alternative approaches
- Potential impact

Avoid feature requests without a clear use case.

---

# Code Review Checklist

Reviewers should verify:

- Code readability
- Naming consistency
- Documentation
- Test coverage
- Security implications
- Performance impact
- Accessibility
- Error handling
- Scalability
- Architectural consistency

---

# Definition of Done

A feature is considered complete when:

- Code is merged
- Tests pass
- Documentation is updated
- Accessibility is verified
- Performance is acceptable
- Security has been considered
- No critical bugs remain

---

# Our Culture

We value respectful collaboration.

Challenge ideas.

Support decisions with evidence.

Leave the codebase better than you found it.

Every commit should move Mtaa KE one step closer to becoming **Africa's Digital Property Infrastructure.**

---

**Thank you for helping build the future of real estate in Africa.**