# Domain Dependency Map

> *"Dependencies are not restrictions—they are deliberate agreements that enable independent evolution."*

---

# Purpose

This document defines the permitted dependencies between the business domains of the Mtaa KE platform.

It answers four fundamental questions:

- Which domains may communicate?
- How should they communicate?
- Which dependencies are prohibited?
- How can the dependency model evolve as the business grows?

The objective is not to eliminate dependencies.

The objective is to ensure that every dependency is intentional, justified, observable, and replaceable.

---

# Philosophy

Dependencies are inevitable.

Coupling is optional.

Good architecture minimizes unnecessary coupling while preserving effective collaboration.

Every dependency should improve the business more than it increases architectural complexity.

---

# Core Dependency Rules

The following rules are considered architectural laws.

### Rule 1

Domains may only depend upon published capabilities.

Never internal implementation.

---

### Rule 2

Database-to-database dependencies are prohibited.

Business communication must occur through:

- Public Interfaces
- Domain Events
- Approved Queries

---

### Rule 3

Dependencies always point toward business capability.

Never toward convenience.

---

### Rule 4

Circular dependencies are forbidden.

If two domains require each other, the architecture should be reconsidered.

---

### Rule 5

A dependency should always be removable.

Replacing or removing one dependency should require minimal impact on unrelated domains.

---

# Dependency Categories

Dependencies are grouped according to strength.

## Level 1 — Constitutional Dependencies

These define the business itself.

Example

Applications

↓

Listings

↓

Properties

Removing these would fundamentally change the business.

---

## Level 2 — Operational Dependencies

Required for daily platform operation.

Examples

Payments

↓

Leases

Messaging

↓

Users

Notifications

↓

Users

These support operations but may evolve.

---

## Level 3 — Intelligence Dependencies

These improve decisions.

Examples

Trust

↓

Payments

Analytics

↓

Events

AI

↓

Marketplace Data

These are intentionally optional.

Business must continue operating if they become unavailable.

---

## Level 4 — External Dependencies

Examples

Payment Gateway

SMS Provider

Maps

Government Registry

Cloud Storage

Every external dependency must remain replaceable.

---

# Domain Dependency Matrix

| Domain | Depends On | Communication |
|---------|------------|---------------|
| Identity | Users | Interface |
| Properties | Users | Interface |
| Listings | Properties | Interface |
| Applications | Listings | Interface |
| Applications | Users | Interface |
| Leases | Applications | Events |
| Payments | Leases | Events |
| Messaging | Users | Interface |
| Messaging | Leases | Events |
| Reviews | Leases | Events |
| Maintenance | Properties | Interface |
| Notifications | All Domains | Events |
| Documents | Multiple Domains | Interface |
| Search | Listings | Events |
| Analytics | All Domains | Events |
| Trust | Payments, Reviews, Identity | Events |
| AI | Events + Read Models | Event Stream |
| Administration | Public APIs Only | Interface |
| Audit | All Domains | Events |

---

# Forbidden Dependencies

The following are explicitly prohibited.

```
Payments

↓

Listings Database
```

---

```
AI

↓

Lease Database
```

---

```
Reviews

↓

Identity Tables
```

---

```
Notifications

↓

Business Logic
```

---

```
Search

↓

Payment Records
```

If a dependency appears convenient but violates architectural ownership, it must not be introduced.

---

# Event-Driven Dependencies

Whenever possible, dependencies should be asynchronous.

Example

```
Payment Completed

↓

Lease Updated

↓

Receipt Generated

↓

Notification Sent

↓

Analytics Updated

↓

Trust Score Recalculated
```

Each participating domain remains autonomous.

---

# Dependency Evolution

Dependencies are expected to evolve.

Engineers are encouraged to improve dependency structures when they discover:

- Better separation.
- Reduced coupling.
- Better scalability.
- Simpler implementation.
- Improved resilience.

However, architectural evolution should be evidence-driven.

Every proposed change should answer:

1. What problem exists?
2. Why does the current dependency fail?
3. What alternative was evaluated?
4. What are the long-term consequences?
5. Can the change be reversed?

Architecture should evolve through learning rather than preference.

---

# Controlled Exploration

Innovation is encouraged.

Blind adherence is discouraged.

Blind disruption is equally discouraged.

Every engineer has the authority to challenge an architectural decision when supported by evidence.

Suggested workflow:

```
Observe

↓

Identify Bottleneck

↓

Prototype Alternative

↓

Benchmark

↓

Architecture Review

↓

Approve or Reject

↓

Document Decision
```

The goal is continuous architectural improvement without creating instability.

---

# Future-Proofing

When introducing a dependency, engineers should consider:

- Can this scale?
- Can this be extracted into a service?
- Can this be replaced?
- Can this be removed?
- Can another implementation satisfy the same contract?

Design for change rather than permanence.

---

# Architectural Flexibility

The architecture intentionally leaves room for discovery.

Not every future business problem can be predicted.

When real-world experience reveals a superior design, engineers should prefer thoughtful evolution over rigid adherence to historical decisions.

The architecture should preserve intent while allowing implementation to mature.

---

# Dependency Health Indicators

Healthy dependency networks exhibit:

- High cohesion
- Low coupling
- No circular references
- Clear ownership
- Observable communication
- Replaceable integrations
- Independent deployment potential
- Business-aligned boundaries

---

# Success Criteria

This dependency model succeeds when:

- Engineers know exactly where new functionality belongs.
- Dependencies remain understandable.
- Teams can evolve independently.
- New capabilities can be introduced without widespread rewrites.
- Innovation strengthens rather than fragments the architecture.

---

# Final Principle

> **The purpose of architecture is not to freeze the future. It is to provide enough structure that innovation can happen safely. Every dependency should serve today's business while leaving tomorrow's engineers free to build something better.**