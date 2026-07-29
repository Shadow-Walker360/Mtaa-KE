# Bounded Contexts

> *"A domain boundary is not a folder structure. It is a promise that one business capability cannot accidentally become another."*

---

# Purpose

This document defines the Bounded Contexts of the Mtaa KE platform.

A Bounded Context establishes the limits within which a particular business model, language, data, and rules are valid.

It answers the following questions:

- Where does a business capability begin?
- Where does it end?
- Who owns it?
- Who is allowed to modify it?
- How may other domains interact with it?

Bounded Contexts are the primary mechanism for preventing architectural drift, ownership confusion, duplicated business logic, and excessive coupling.

---

# What is a Bounded Context?

A Bounded Context is an autonomous business capability with:

- Its own ubiquitous language
- Its own business rules
- Its own data model
- Its own lifecycle
- Its own public interfaces
- Its own published events

Inside a context, concepts have precise meanings.

Outside a context, they are consumed through contracts rather than internal knowledge.

---

# Architectural Law

A Bounded Context owns:

- Business logic
- Business rules
- Data
- Validation
- Events
- APIs
- Internal models

No other context may directly modify these assets.

---

# Context Inventory

## Core Marketplace Contexts

| Context | Responsibility |
|----------|----------------|
| Users | User lifecycle and profile management |
| Identity | Authentication, authorization, and verification |
| Properties | Permanent property records |
| Listings | Marketplace advertisements |
| Applications | Rental application workflow |
| Leases | Occupancy agreements and lease lifecycle |
| Payments | Financial transactions and repayment plans |
| Messaging | Tenant–landlord communication |
| Reviews | Reputation and feedback |
| Maintenance | Repair requests and maintenance lifecycle |

---

## Supporting Contexts

| Context | Responsibility |
|----------|----------------|
| Documents | File lifecycle and document management |
| Media | Images, videos, and media assets |
| Notifications | Email, SMS, push, and in-app messaging |
| Search | Property discovery and indexing |

---

## Intelligence Contexts

| Context | Responsibility |
|----------|----------------|
| Trust | Trust scoring and fraud intelligence |
| AI | Recommendations, predictions, automation |
| Analytics | Reporting, KPIs, and business intelligence |

---

## Governance Contexts

| Context | Responsibility |
|----------|----------------|
| Administration | Platform management |
| Audit | Compliance and immutable audit records |
| Configuration | Platform-wide settings and feature flags |

---

# Context Isolation Rules

Every context must be capable of evolving independently.

Contexts shall never:

- Query another context's database tables directly.
- Modify another context's records.
- Import another context's business logic.
- Depend on another context's internal implementation.

All collaboration must occur through published contracts.

---

# Communication Patterns

Only three communication mechanisms are permitted.

## 1. Direct Interface

Used when an immediate response is required.

Examples:

- Identity validation
- Permission checks
- Property existence verification

---

## 2. Domain Events

Used after a business fact has occurred.

Examples:

```
LeaseActivated
PaymentCompleted
ApplicationSubmitted
ListingPublished
MaintenanceCompleted
```

Events communicate facts.

They never request work.

---

## 3. Queries

Contexts may request information that another context explicitly exposes.

Queries must never expose internal implementation.

---

# Context Dependency Rules

Dependencies must always point toward published interfaces.

Example

```
Listings

↓

Property API

✓ Allowed
```

```
Listings

↓

Properties Database

✗ Forbidden
```

---

# Shared Kernel Policy

Shared Kernels should be extremely rare.

Only the following belong in a shared kernel:

- Primitive value objects
- Common utilities
- Generic validation helpers
- Cross-platform constants

Business rules never belong in shared code.

---

# Anti-Corruption Layers (ACL)

Whenever Mtaa KE integrates with external systems, an Anti-Corruption Layer (ACL) must be used.

Examples include:

- Payment gateways
- Government registries
- SMS providers
- AI model providers
- Mapping services

The ACL protects internal business models from external change.

---

# Business Language Integrity

Every context maintains its own vocabulary.

Example:

## Payments

"Outstanding Balance"

means money owed.

---

## Leases

"Active Lease"

means legal occupancy.

---

## Trust

"Reliability Score"

means calculated confidence.

Even if terms appear related, each context owns its own definitions.

---

# Organizational Ownership

Today

```
Founder

↓

Owns every context
```

Future

```
Marketplace Team
    ↓
Listings
Applications
Reviews

Financial Services
    ↓
Payments

Identity & Security
    ↓
Identity
Trust

Operations
    ↓
Maintenance
Administration

Platform
    ↓
Notifications
Documents
Media
Configuration

AI & Intelligence
    ↓
AI
Analytics
Search
```

The organizational chart should evolve without requiring architectural redesign.

---

# Context Lifecycle

Every new context should satisfy the following checklist before creation:

- Represents a distinct business capability.
- Has unique business rules.
- Owns its own data.
- Has a clear owner.
- Publishes meaningful business events.
- Can evolve independently.
- Justifies the additional complexity.

If these conditions are not met, the capability should remain inside an existing context.

---

# Architectural Decision Hierarchy

When uncertainty exists about where functionality belongs:

1. Start with the Business Vision.
2. Consult the PRD.
3. Identify the owning Domain.
4. Verify the Context boundary.
5. Check Architecture Principles.
6. Review existing ADRs.
7. Implement only after ownership is clear.

No implementation may redefine a bounded context without an approved ADR.

---

# Success Criteria

The bounded context strategy is successful when:

- Every business capability has a single authoritative owner.
- Teams can work independently with minimal coordination.
- Business logic is never duplicated across contexts.
- Changes remain localized.
- New capabilities can be introduced without destabilizing existing ones.
- The platform scales organizationally as naturally as it scales technically.

---

# Final Principle

> **Bounded Contexts are not software modules first—they are business promises. Code enforces those promises, but the promises themselves originate from the business. As Mtaa KE grows, these boundaries become the foundation for engineering teams, operational ownership, regulatory compliance, and long-term platform evolution.**