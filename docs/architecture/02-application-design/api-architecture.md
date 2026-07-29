# API Architecture

> *"An API is not an endpoint. It is a business capability exposed through a stable contract."*

---

# Purpose

This document defines the API Architecture of the Mtaa KE platform.

The objective is to ensure every API reflects a business capability, preserves domain ownership, and remains stable as the platform evolves.

APIs are the official public contracts between:

- Frontend applications
- Mobile applications
- Internal domains
- External partners
- AI systems
- Third-party integrations

Implementation technologies may change.

Business contracts should remain stable.

---

# Architectural Philosophy

The API layer exists to expose business capabilities.

It must never expose:

- Internal database structures
- Internal business logic
- Internal implementation details
- Internal domain models

Clients consume capabilities.

Domains own implementation.

---

# Core Principles

Every API must be:

- Business-oriented
- Domain-owned
- Versioned
- Secure
- Observable
- Idempotent where required
- Backward compatible whenever possible
- Independently evolvable

APIs are products.

They deserve the same engineering discipline as any other product.

---

# API Ownership

Every API belongs to exactly one domain.

Example

| API Capability | Owner |
|---------------|-------|
| Register User | Users |
| Verify Identity | Identity |
| Create Property | Properties |
| Publish Listing | Listings |
| Submit Application | Applications |
| Activate Lease | Leases |
| Process Payment | Payments |
| Create Repayment Plan | Payments |
| Request Maintenance | Maintenance |
| Submit Review | Reviews |

Ownership determines:

- Business rules
- Validation
- Authorization
- Events
- Documentation
- Version lifecycle

---

# API First Philosophy

Every externally consumable capability should be designed before implementation.

The contract becomes the agreement.

Implementation fulfills the agreement.

Business discussion should happen before code is written.

---

# Business Capability Model

APIs are organized around business capabilities.

Example

Capability

Publish Property

Owner

Listings Domain

Requirements

- Verified Landlord
- Existing Property
- Complete Listing Information

Produces

ListingPublished

Consumers

- Mobile App
- Web Application
- Partner Integrations

---

# Resource Design

Resources should represent business concepts.

Examples

```
/users

/properties

/listings

/applications

/leases

/payments

/maintenance

/reviews
```

Avoid technical resource names.

Bad

```
/tbl_users

/processListing

/createLeaseRecord
```

Good

```
/leases

/payments

/listings
```

---

# URI Design Principles

URIs identify resources.

They should be:

- Predictable
- Stable
- Human-readable
- Technology-independent

Nested resources should represent business relationships.

Example

```
/leases/{leaseId}/payments

/properties/{propertyId}/listings

/listings/{listingId}/applications
```

---

# HTTP Method Semantics

Methods should follow standard semantics.

GET

Retrieve information.

POST

Create business state.

PUT

Replace an existing resource.

PATCH

Partially modify a resource.

DELETE

Retire or remove a resource where business rules permit.

Business actions should never be hidden behind incorrect HTTP verbs.

---

# Commands vs Queries

Commands change business state.

Queries retrieve information.

Example

Command

```
POST /applications
```

Query

```
GET /applications/{id}
```

This separation improves clarity and scalability.

---

# Idempotency

Financial and legal operations must be idempotent.

Examples

- Rent Payment
- Deposit Payment
- Lease Activation
- Refund Processing

Duplicate requests must never create duplicate business effects.

Idempotency Keys should be supported where appropriate.

---

# API Versioning

Breaking changes require versioning.

Preferred strategy

```
/v1/

/v2/
```

Minor, backward-compatible improvements should not require a new version.

Version retirement must follow a documented deprecation policy.

---

# Request Validation

Validation belongs to the owning domain.

Validation should occur before business logic executes.

Validation categories include:

- Required fields
- Business rules
- Authorization
- Data integrity
- Domain constraints

Invalid requests should fail early.

---

# Response Standards

Successful responses should be:

- Consistent
- Predictable
- Minimal
- Self-descriptive

Responses should expose only information required by consumers.

Internal implementation details must remain hidden.

---

# Error Architecture

Errors should describe business problems rather than technical failures.

Example

Good

```
Lease is no longer active.
```

Better than

```
Foreign key constraint failed.
```

Every error should include:

- Error Code
- Human-readable Message
- Correlation ID
- Timestamp

Sensitive implementation details must never be exposed.

---

# Pagination

Large collections should support pagination.

Preferred approaches:

- Cursor-based pagination
- Offset pagination where appropriate

APIs should never return unbounded datasets.

---

# Filtering

Filtering should use explicit query parameters.

Examples

```
?status=active

?county=Nairobi

?priceMin=10000

?priceMax=35000
```

Filtering logic belongs to the owning domain.

---

# Sorting

Sorting should be deterministic.

Supported sort fields should be documented.

Example

```
?sort=createdAt

?sort=price

?sort=rating
```

---

# API Security

Every endpoint must define:

- Authentication requirements
- Authorization requirements
- Required permissions
- Rate limits
- Audit requirements

Security should be enforced consistently across all APIs.

---

# Rate Limiting

Rate limits should protect the platform while remaining business-aware.

Examples:

- Authentication endpoints
- Search endpoints
- Payment operations
- AI-powered capabilities

Different capabilities may have different rate limits based on business risk.

---

# Event Integration

APIs should trigger business events rather than orchestrate downstream workflows.

Example

```
POST Payment

↓

PaymentReceived

↓

Receipt

↓

Analytics

↓

Notifications

↓

Trust Update
```

The API completes once its owning domain finishes its responsibility.

Subscribers handle subsequent reactions.

---

# AI Consumption

AI systems consume APIs through the same contracts as other clients.

AI must never bypass:

- Authorization
- Validation
- Business rules
- Audit requirements

Every API should remain safe for autonomous consumption.

---

# External Integration

Third-party integrations communicate only through published APIs.

External systems must never access:

- Internal databases
- Internal services
- Internal events

External contracts should remain stable across implementation changes.

---

# Observability

Every API request should generate observable telemetry.

Minimum requirements:

- Request ID
- Correlation ID
- Processing Time
- Response Status
- Domain Owner
- Audit Metadata (where applicable)

Observability is a platform capability, not an afterthought.

---

# Architectural Evolution

API architecture should evolve with the business.

Engineers are encouraged to improve:

- API usability
- Performance
- Contract clarity
- Security
- Consistency

Every proposed change should answer:

1. What business capability improves?
2. Does ownership remain intact?
3. Will existing consumers continue working?
4. Can the change be reversed?
5. Is the platform stronger afterward?

Business capability takes precedence over technical preference.

---

# Success Criteria

The API Architecture succeeds when:

- Every API represents a business capability.
- Domain ownership remains clear.
- Clients remain independent of implementation details.
- New integrations require minimal effort.
- APIs remain stable as technologies evolve.
- AI, mobile, web, and partner systems consume the same contracts.
- The platform grows without creating integration chaos.

---

# Final Principle

> **APIs are the public language of the business. They expose capabilities—not databases, controllers, or implementation details. A well-designed API allows the platform to evolve internally while remaining dependable to every consumer that relies upon it.**