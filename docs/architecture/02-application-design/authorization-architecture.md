# Authorization Architecture

> *"Authentication answers 'Who are you?' Authorization answers 'What are you allowed to do?' Authorization protects business capabilities—not just API endpoints."*

---

# Purpose

This document defines the Authorization Architecture of the Mtaa KE platform.

Authorization determines whether an authenticated identity is permitted to perform a specific business action.

Its objectives are to:

- Protect business capabilities
- Enforce ownership
- Preserve business integrity
- Prevent privilege escalation
- Support least privilege
- Enable organizational scalability
- Maintain complete auditability

Authorization is a business capability.

It should never be treated as a frontend concern.

---

# Philosophy

Authorization protects business decisions.

Every authorization decision should answer:

- Who is making the request?
- What are they trying to do?
- What resource is involved?
- Under what business conditions?
- Is the action permitted?

Authorization decisions should be deterministic, explainable, and auditable.

---

# Core Principles

Every authorization mechanism should follow these principles.

- Least Privilege
- Deny by Default
- Explicit Permission
- Resource Ownership
- Business Rule Awareness
- Context Awareness
- Continuous Evaluation
- Full Auditability

Authorization should be based on business intent rather than technical convenience.

---

# Authorization Hierarchy

Authorization decisions occur in layers.

```
Identity

↓

Role

↓

Permission

↓

Business Rules

↓

Resource Ownership

↓

Context Evaluation

↓

Authorization Decision
```

A request must satisfy every applicable layer.

---

# Authorization Model

Mtaa KE adopts a hybrid authorization model combining:

- Role-Based Access Control (RBAC)
- Attribute-Based Access Control (ABAC)
- Resource Ownership
- Business Rule Enforcement

No single model is sufficient for the platform.

---

# Role-Based Access Control (RBAC)

Roles define broad responsibilities.

Examples include:

- Tenant
- Landlord
- Property Manager
- Maintenance Staff
- Customer Support
- Finance Officer
- Trust Analyst
- Platform Administrator
- System Administrator

Roles simplify permission management.

Roles do not replace business rules.

---

# Permission-Based Authorization

Permissions define specific capabilities.

Examples:

```
property:create

property:update

listing:publish

lease:approve

payment:collect

payment:refund

maintenance:assign

review:moderate

user:suspend
```

Permissions should follow a consistent naming convention.

Permissions belong to business capabilities rather than implementation details.

---

# Resource Ownership

Many actions depend upon ownership.

Example:

A landlord may edit:

Own Property

✓ Allowed

Someone else's Property

✗ Forbidden

Ownership is evaluated independently of role.

---

# Attribute-Based Access Control (ABAC)

Some authorization decisions depend upon contextual attributes.

Examples:

- Identity verification status
- Active lease
- Subscription tier
- Trust score
- Account status
- Property ownership
- Payment status
- Geographic restrictions

Attributes provide flexibility without creating excessive roles.

---

# Business Rule Authorization

Authorization should consider business state.

Example

A landlord may only publish a listing if:

- Property exists.
- Property belongs to the landlord.
- Identity is verified.
- Account is active.
- Subscription permits publishing.
- Property passes validation.

Business rules are part of authorization.

---

# Context-Aware Authorization

Authorization decisions may consider runtime context.

Examples:

- Device reputation
- Login location
- Authentication strength
- Time of day
- Suspicious activity
- Fraud score
- Administrative maintenance mode

Context strengthens authorization without increasing unnecessary restrictions.

---

# Authorization Decision Flow

```
Request

↓

Authentication Verified

↓

Role Evaluation

↓

Permission Evaluation

↓

Ownership Check

↓

Business Rules

↓

Context Analysis

↓

Allow or Deny

↓

Audit
```

Authorization should fail safely.

---

# Domain Ownership

Every domain authorizes access to its own resources.

Examples

Users

Authorizes:

- Profile Updates
- Account Settings

---

Properties

Authorizes:

- Property Creation
- Property Modification

---

Payments

Authorizes:

- Payment Processing
- Refunds
- Repayment Plans

---

Leases

Authorizes:

- Lease Creation
- Lease Renewal
- Lease Termination

Authorization logic must never be duplicated across domains.

---

# Administrative Authorization

Administrative privileges should be granular.

Avoid "super admin" permissions wherever possible.

Administrative responsibilities should be separated.

Examples:

Support Administrator

Cannot modify payments.

Finance Administrator

Cannot suspend users.

Trust Administrator

Cannot alter financial records.

Principle:

Administrative power should remain compartmentalized.

---

# Temporary Authorization

Some permissions should be temporary.

Examples:

- Customer Support access
- Maintenance contractor access
- Emergency administrative access

Temporary permissions should:

- Expire automatically.
- Be fully audited.
- Require justification where appropriate.

---

# Delegated Authorization

Users may delegate certain capabilities.

Examples:

- Property Manager managing a landlord's portfolio.
- Assistant managing listings.
- Accountant viewing payment reports.

Delegation should:

- Be explicit.
- Be revocable.
- Be time-bound where appropriate.

Delegation never transfers ownership.

---

# AI Authorization

AI systems must authenticate and authorize independently.

AI agents should:

- Operate under dedicated service identities.
- Possess explicit permissions.
- Never inherit unrestricted administrator privileges.
- Be fully auditable.

Every AI action must remain attributable.

---

# External Partner Authorization

Partners interact only through published APIs.

Partner permissions should be:

- Explicit
- Scoped
- Revocable
- Auditable

Partners must never gain direct access to internal systems.

---

# Denied Requests

Denied requests should return business-safe responses.

Responses should never expose:

- Internal permission structures.
- Security policies.
- Database details.

Every denial should be logged.

---

# Authorization Audit

Every authorization decision should support auditing.

Examples:

- Permission Granted
- Permission Denied
- Role Assigned
- Role Revoked
- Permission Added
- Permission Removed
- Delegation Created
- Delegation Revoked

Audit records should include:

- Identity
- Resource
- Requested Action
- Decision
- Timestamp
- Correlation ID
- Reason (where appropriate)

Audit logs should be immutable.

---

# Authorization Evolution

Business authorization rules evolve.

Engineers are encouraged to improve authorization models when they discover:

- Better security
- Better usability
- Reduced complexity
- New regulatory requirements
- Emerging business capabilities

Every proposed change should answer:

1. Does it strengthen business protection?
2. Does it preserve least privilege?
3. Is ownership still respected?
4. Is it auditable?
5. Can it be reversed if necessary?

Authorization should evolve with the business—not constrain it.

---

# Success Criteria

The Authorization Architecture succeeds when:

- Every business capability has explicit access rules.
- Users receive only the permissions they require.
- Resource ownership is consistently enforced.
- Business rules are protected.
- Administrative authority is compartmentalized.
- AI and external systems follow the same authorization principles.
- Every authorization decision is explainable and auditable.

---

# Final Principle

> **Authorization is the guardian of business integrity. It ensures that every action performed within Mtaa KE is not only technically valid, but also organizationally appropriate, legally compliant, contextually justified, and aligned with the business rules that govern the platform.**