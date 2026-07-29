# Event Architecture

> *"Businesses do not operate through CRUD operations. They operate through events. Software should reflect that reality."*

---

# Purpose

This document defines the Event Architecture of the Mtaa KE platform.

Events represent business facts that have already occurred.

Rather than tightly coupling domains through direct calls and shared state, Mtaa KE uses business events to coordinate independent business capabilities.

The objectives of this architecture are to:

- Reduce coupling
- Improve scalability
- Improve resilience
- Enable extensibility
- Support AI-driven capabilities
- Preserve business integrity

---

# Philosophy

A business event is **a fact**, not a request.

Examples:

✓ PaymentReceived

✓ LeaseActivated

✓ ListingPublished

✓ MaintenanceCompleted

Examples that are **not** events:

✗ CreatePayment

✗ SendNotification

✗ UpdateLease

Commands ask a system to perform work.

Events announce that work has already happened.

---

# Event Principles

Every business event must satisfy the following principles.

- Immutable
- Timestamped
- Traceable
- Versioned
- Idempotent
- Auditable
- Business-oriented
- Technology-independent

Events describe the business—not the software implementation.

---

# Event Lifecycle

```
Business Action
        ↓
Business Validation
        ↓
Domain Event Created
        ↓
Event Bus
        ↓
Subscribers
        ↓
Business Reactions
        ↓
Audit Trail
```

An event is published once.

It may be consumed by zero, one, or many subscribers.

---

# Event Classification

Not all events have the same importance.

---

## Level 1 — Constitutional Events

These modify legal or financial state.

Examples:

- UserRegistered
- LeaseActivated
- LeaseTerminated
- PaymentReceived
- PaymentReversed
- RepaymentPlanCreated
- OwnershipTransferred

Highest delivery guarantees are required.

---

## Level 2 — Operational Events

These support platform operation.

Examples:

- ListingPublished
- ApplicationSubmitted
- MaintenanceRequested
- MaintenanceCompleted
- ReviewSubmitted
- NotificationDelivered

Operational failures should be recoverable.

---

## Level 3 — Intelligence Events

These improve decision-making.

Examples:

- TrustScoreUpdated
- FraudDetected
- RecommendationGenerated
- MarketTrendCalculated

Business operations must continue even if these events fail.

---

## Level 4 — Observational Events

Used for analytics and reporting.

Examples:

- PropertyViewed
- SearchPerformed
- DashboardOpened
- AIRecommendationClicked

Loss of these events should never interrupt core business operations.

---

# Event Naming Standard

Events are written using business language.

Format:

```
Entity + Past Tense
```

Examples:

- UserRegistered
- ListingPublished
- LeaseActivated
- RentDue
- PaymentReceived
- PaymentFailed
- RepaymentInstallmentPaid
- MaintenanceScheduled

Avoid technical terminology.

---

# Event Ownership

Every event has exactly one producer.

Many consumers may subscribe.

Example:

```
Payments Domain

↓

PaymentReceived

↓

Leases
Trust
Analytics
Notifications
```

Only the Payments domain may publish **PaymentReceived**.

No other domain may impersonate that event.

---

# Event Delivery Guarantees

The platform supports different reliability levels.

| Event Type | Guarantee |
|------------|------------|
| Constitutional | Exactly-once business effect (implemented through idempotent processing and durable storage) |
| Operational | At least once |
| Intelligence | Best effort with retry |
| Observational | Fire-and-forget where acceptable |

Reliability should reflect business impact.

---

# Event Versioning

Business events evolve.

Existing consumers must remain functional.

```
PaymentReceived v1

↓

PaymentReceived v2

↓

Deprecated

↓

Retired
```

Breaking changes require versioning.

Non-breaking additions should extend existing schemas.

---

# Event Ordering

Some events must preserve order.

Example:

```
LeaseActivated

↓

RentDue

↓

PaymentReceived

↓

ReceiptGenerated
```

Reordering these events may produce incorrect business outcomes.

Ordering guarantees should only be applied where required.

---

# Retry Strategy

Failed event processing should follow controlled retries.

```
Attempt

↓

Retry

↓

Retry

↓

Dead Letter Queue

↓

Manual Investigation
```

Infinite retries are prohibited.

---

# Dead Letter Queue (DLQ)

Events that repeatedly fail processing should be isolated.

Every DLQ event must include:

- Original event
- Failure reason
- Timestamp
- Retry history
- Correlation ID

Business-critical failures should trigger operational alerts.

---

# Idempotency

Event consumers must safely process duplicate events.

Example:

```
PaymentReceived

↓

ReceiptGenerated
```

If the event is delivered twice:

- One payment
- One receipt
- No duplicate financial records

Duplicate delivery must never produce duplicate business effects.

---

# Event Correlation

Related events should share a Correlation ID.

Example:

```
LeaseActivated
Correlation ID:
LEASE-2026-000142
```

Subsequent events:

- RentDue
- PaymentReceived
- ReceiptGenerated
- NotificationSent

inherit the same Correlation ID.

This enables end-to-end traceability.

---

# Event Bus

The Event Bus is responsible for:

- Routing events
- Fan-out delivery
- Retry scheduling
- Subscriber isolation
- Delivery guarantees

Domains communicate through the Event Bus rather than direct dependencies whenever practical.

---

# AI Integration

AI systems consume events.

They should not become mandatory participants in core workflows.

Example:

```
PaymentReceived

↓

Trust Score Updated

↓

Risk Prediction

↓

Recommendation Generated
```

If AI services become unavailable:

- Payment succeeds
- Lease updates
- Receipt generated

Only AI enhancements are delayed.

---

# Architectural Exploration

Event architecture must remain adaptable.

Engineers are encouraged to improve:

- Routing strategies
- Delivery guarantees
- Performance
- Observability
- Scalability

Every proposed improvement should answer:

1. What problem does this solve?
2. What business capability improves?
3. What new complexity is introduced?
4. Can the change be reversed?
5. Is the architecture stronger afterward?

Innovation is encouraged.

Architectural drift is not.

---

# Success Criteria

The Event Architecture succeeds when:

- Domains remain loosely coupled.
- Business events remain authoritative.
- New subscribers can be added without modifying publishers.
- AI capabilities integrate without changing core workflows.
- Event failures are isolated.
- Business operations remain resilient under partial failure.
- The platform evolves without large-scale rewrites.

---

# Final Principle

> **Events are the language through which business capabilities collaborate. By modeling facts instead of functions, Mtaa KE builds an architecture that is resilient, extensible, and capable of evolving alongside the business it serves.**