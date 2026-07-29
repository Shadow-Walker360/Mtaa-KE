# Context Map

> *"Business boundaries define organizational responsibility. Technical boundaries implement those responsibilities."*

---

# Purpose

The Context Map defines how the business capabilities of Mtaa KE relate to one another.

It provides the authoritative view of:

- Business ownership
- Domain relationships
- Collaboration patterns
- Information flow
- Decision authority
- Organizational boundaries

This document exists to prevent:

- Ownership ambiguity
- Circular dependencies
- Duplicate business logic
- Organizational conflict
- Architectural drift

The Context Map is the bridge between business strategy and software architecture.

---

# Business Before Technology

Domains do not exist because of software.

Software exists because of domains.

Every domain represents a business capability that could exist even if Mtaa KE operated entirely on paper.

For example:

A lease exists without software.

A payment exists without software.

Property ownership exists without software.

Identity verification exists without software.

The software merely automates and scales these capabilities.

---

# Organizational Philosophy

Every business capability has one accountable owner.

Ownership means responsibility for:

- Business outcomes
- Business rules
- Business decisions
- Data integrity
- Public interfaces
- Events
- Regulatory compliance (where applicable)

Ownership does **not** imply exclusive implementation.

Multiple engineers may contribute to a domain.

Only one domain owns it.

---

# Domain Classification

Domains are grouped according to business responsibility.

---

## Core Business Domains

These domains directly generate customer value.

- Users
- Identity
- Properties
- Listings
- Applications
- Leases
- Payments
- Messaging
- Reviews
- Maintenance

These represent the operational heart of the business.

---

## Supporting Domains

These enhance customer experience.

- Notifications
- Documents
- Search
- Media

Removing these would reduce usability but would not eliminate the core business.

---

## Intelligence Domains

These create competitive advantage.

- Trust
- AI
- Analytics

These improve decision-making but should never replace deterministic business rules.

The business must continue operating if these systems become temporarily unavailable.

---

## Administrative Domains

These support platform governance.

- Administration
- Audit
- Configuration

These govern the platform rather than the marketplace.

---

# Context Relationships

## Upstream Domains

Domains that create business facts.

Examples:

Users

↓

Identity

↓

Properties

↓

Listings

↓

Applications

↓

Leases

↓

Payments

Business facts generally flow downstream.

---

## Downstream Domains

Domains that react to business facts.

Examples:

Notifications

Analytics

Trust

AI

Search

These domains consume information rather than redefine it.

---

# Ownership Matrix

| Domain | Owns | Never Owns |
|----------|------|------------|
| Users | User profile lifecycle | Payments, Leases |
| Identity | Verification & authentication | Trust scores |
| Properties | Physical property records | Listings |
| Listings | Marketplace publication | Property ownership |
| Applications | Rental applications | Lease contracts |
| Leases | Occupancy agreements | Payments |
| Payments | Financial transactions | Occupancy |
| Messaging | Communication | Lease decisions |
| Reviews | Reputation records | Identity verification |
| Maintenance | Property maintenance | Payments |
| Notifications | Message delivery | Business decisions |
| Documents | File lifecycle | Business approval |
| Search | Discovery | Business ownership |
| Media | Images & media assets | Property records |
| Trust | Trust evaluation | Identity verification |
| AI | Recommendations & predictions | Core business rules |
| Analytics | Business insights | Operational decisions |
| Administration | Platform governance | Customer business data |

This matrix is considered **constitutional**.

Ownership changes require formal architectural review.

---

# Relationship Types

All relationships follow one of the following patterns.

## Customer / Supplier

One domain depends on another's published capability.

Example:

Listings → Properties

Listings require validated property information.

Properties do not depend on Listings.

---

## Event Publisher / Consumer

One domain publishes business events.

Other domains react.

Example:

Payments

↓

PaymentCompleted

↓

Leases

↓

Trust

↓

Analytics

↓

Notifications

---

## Observer

A domain observes events but never changes business state.

Examples:

Analytics

AI

Notifications

Observers improve the system without becoming part of the transaction.

---

## Shared Kernel (Rare)

Used only when absolutely necessary.

Shared code must remain:

- Generic
- Stable
- Small

Business rules must never reside inside shared kernels.

---

# Architectural Decision Hierarchy

When documentation appears to conflict, the following order of authority applies.

```
Business Vision
        ↓
Product Requirements (PRD)
        ↓
Business Domains
        ↓
Context Map
        ↓
Architecture Principles
        ↓
Architecture Decision Records (ADRs)
        ↓
Engineering Standards
        ↓
Implementation
        ↓
Operations
```

Lower levels may refine higher levels.

They must never contradict them.

---

# Conflict Resolution

When two domains appear to own the same capability:

1. Identify the business outcome.
2. Determine which domain is accountable.
3. Follow the ownership matrix.
4. Check published interfaces.
5. Consult existing ADRs.
6. Escalate through architectural governance if required.

Implementation convenience must never redefine business ownership.

---

# Organizational Evolution

Today, one engineer may own every domain.

Tomorrow:

```
Founder / CTO
│
├── Platform Engineering
├── Marketplace Engineering
├── Financial Services
├── Identity & Security
├── AI & Intelligence
├── Operations
└── Customer Experience
```

The architecture is intentionally designed so organizational growth follows business capability boundaries rather than forcing expensive restructuring.

Teams may change.

Ownership responsibilities should remain stable.

---

# Vertical Slice Philosophy

Implementation follows complete business journeys rather than isolated domains.

Example:

```
Register User
        ↓
Verify Identity
        ↓
Create Property
        ↓
Publish Listing
        ↓
Tenant Applies
        ↓
Application Review
        ↓
Lease Activation
        ↓
Payment
        ↓
Receipt
        ↓
Notifications
        ↓
Analytics
```

Every vertical slice validates the architecture.

Architecture informs implementation.

Implementation validates architecture.

---

# Business Resilience

Critical business capabilities must continue operating even if supporting capabilities fail.

Example:

AI Offline

↓

Rentals Continue

---

Analytics Offline

↓

Payments Continue

---

Search Offline

↓

Direct Listing Access Still Works

Business continuity takes precedence over intelligent automation.

---

# Success Criteria

The Context Map succeeds when:

- Every business capability has one accountable owner.
- Engineers understand where new functionality belongs.
- Organizational growth does not require architectural redesign.
- Teams can evolve independently without ownership disputes.
- Customers experience a cohesive platform despite internal separation.

---

# Final Principle

> **Software architecture is the implementation of business architecture. Organizational architecture is the implementation of business ownership. The Context Map exists to keep all three aligned as Mtaa KE grows from a single founder into a multi-team technology company.**