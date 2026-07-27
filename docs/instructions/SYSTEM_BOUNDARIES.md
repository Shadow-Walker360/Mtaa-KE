# 🚧 System Boundaries

> **"A great platform is defined as much by what it refuses to do as by what it does."**

---

# Purpose

This document defines the official boundaries of the Mtaa KE platform.

It answers four critical questions:

- What belongs inside the platform?
- What belongs in plugins?
- What belongs to third-party services?
- What is intentionally out of scope?

Maintaining clear boundaries prevents architectural erosion, uncontrolled feature growth, and unnecessary technical debt.

---

# Core Philosophy

The Mtaa KE core should remain:

- Small
- Stable
- Modular
- Predictable
- Extensible

The platform should grow through plugins and independent services rather than by expanding the core indefinitely.

---

# What Belongs in the Core

The core platform owns business-critical capabilities that define the identity of Mtaa KE.

These include:

## Authentication

- Registration
- Login
- Password reset
- Role management
- Permissions
- Session management

---

## User Management

- Profiles
- Preferences
- Favorites
- Saved searches
- Notification settings

---

## Property Management

- Listings
- Property media
- Amenities
- Pricing
- Availability
- Ownership metadata
- Verification status

---

## Search

- Full-text search
- Geospatial search
- Filtering
- Sorting
- Pagination

---

## Lease Management

- Rental applications
- Lease creation
- Renewals
- Lease termination
- Digital records

---

## Messaging

- Tenant ↔ Landlord communication
- System messages
- Conversation history

---

## Reviews

- Property reviews
- Landlord reviews
- Tenant reviews

---

## Notifications

- Email
- SMS
- Push notifications

---

## AI Services

Core AI services that directly improve the property experience:

- Compatibility Score™
- Rent estimation
- Listing descriptions
- Fraud detection
- Recommendation engine

---

# Plugin Boundary

Plugins extend the platform without modifying the core.

Examples include:

## Payments

- M-Pesa
- Stripe
- PayPal
- Flutterwave
- Airtel Money

---

## Government Services

- National ID verification
- Land registry integration
- Tax verification
- Business registration

---

## Utility Providers

- Electricity
- Water
- Internet
- Gas

---

## Insurance

- Home insurance
- Tenant insurance
- Property protection

---

## Mortgage Providers

- Banks
- SACCOs
- Microfinance institutions

---

## Moving Services

- Movers
- Packers
- Storage facilities

---

## Smart Home Integrations

- IoT devices
- Smart locks
- CCTV systems
- Energy monitoring

---

## Third-Party AI

Future integrations may include:

- OpenAI
- Anthropic
- Google Gemini
- Local AI models

The platform must never depend exclusively on a single AI provider.

---

# Third-Party Responsibilities

The following should remain external services:

- Payment processing
- Email delivery
- SMS gateways
- Cloud storage
- Mapping services
- Authentication providers (OAuth)
- AI model providers
- Analytics platforms
- Monitoring platforms

These services should be abstracted behind interfaces so they can be replaced if necessary.

---

# Explicitly Out of Scope

The following are intentionally **not** part of Mtaa KE:

- Social media platform
- General-purpose chat application
- Banking platform
- Cryptocurrency exchange
- Ride-hailing
- Food delivery
- E-commerce marketplace unrelated to property
- Medical record systems
- Educational learning management systems

While integrations may exist, these are not core responsibilities.

---

# Integration Rules

Every external integration must:

- Use a documented interface
- Support versioning
- Handle failures gracefully
- Be independently testable
- Be replaceable with minimal changes

Never allow third-party code to dictate the architecture of the platform.

---

# Ownership Rules

Each domain has a single owner.

Examples:

Property Service owns:

- Listings
- Amenities
- Property metadata

Payment Service owns:

- Transactions
- Payment history
- Refunds

Notification Service owns:

- Delivery
- Templates
- Notification preferences

Cross-domain writes should occur through APIs or events, not direct database access.

---

# Data Ownership

Every piece of data has one authoritative source.

Avoid duplicated ownership.

Example:

User email belongs to the User domain.

Other modules should reference it instead of storing independent copies.

---

# Event Boundaries

Modules communicate through events rather than direct coupling whenever possible.

Example:

```
Property Published
        │
        ▼
Search Index Updated
        │
        ▼
Recommendation Engine Refreshed
        │
        ▼
Notifications Sent
```

No module should depend on another module's internal implementation.

---

# AI Boundaries

AI may:

- Recommend
- Predict
- Summarize
- Classify
- Detect anomalies

AI may **not**:

- Change verified ownership records
- Approve payments
- Execute legal actions
- Delete user data
- Override human administrative decisions

AI assists; it does not govern.

---

# Security Boundaries

Sensitive operations require explicit authorization.

Examples:

- Ownership transfer
- Lease approval
- Payment confirmation
- Account deletion
- Administrator actions

No plugin may bypass security policies enforced by the core.

---

# Performance Boundaries

Plugins must not degrade the responsiveness of the core platform.

Long-running tasks should execute asynchronously.

External failures must not prevent core functionality from operating.

---

# Architectural Guardrails

Before adding a new feature, ask:

1. Does this align with Mtaa KE's mission?
2. Does it belong in the core?
3. Could it be a plugin?
4. Can an existing module handle it?
5. Does it introduce unnecessary coupling?
6. Does it increase technical debt?
7. Will it still make sense in five years?

If the answer to Question 2 is "No," prefer a plugin or external integration.

---

# Future Expansion Policy

Future capabilities should be added by extending the platform—not rewriting it.

Examples:

- Country-specific plugins
- New payment providers
- New AI providers
- Government integrations
- Industry-specific services

The architecture should evolve through composition, not accumulation.

---

# Final Principle

> **The strength of Mtaa KE lies not in the number of features it contains, but in the clarity of the boundaries that protect its architecture.**

Every new capability should make the platform more powerful without making the core more complicated.

A stable core, modular extensions, and disciplined engineering are the foundation for building Africa's Digital Property Infrastructure.