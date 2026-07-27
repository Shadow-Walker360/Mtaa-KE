# ⭐ Reviews Domain Specification

Version: 1.0

Status: Draft

Owner: Trust & Reputation Team

Domain Type: Core Business Domain

---

# Purpose

The Reviews Domain enables verified, transparent, and trustworthy feedback across the Mtaa KE platform.

It allows tenants, landlords, agencies, contractors, and service providers to evaluate their experiences while preventing abuse, fake reviews, retaliation, and manipulation.

The Reviews Domain serves as one of the primary inputs into the platform's Trust Engine.

---

# Vision

Build Africa's most trusted property reputation system.

Reviews should reward professionalism, accountability, and quality service while helping users make informed decisions.

---

# Responsibilities

The Reviews Domain owns:

- Reviews
- Ratings
- Review Verification
- Review Moderation
- Review Replies
- Review Reporting
- Reputation Scores
- Review Visibility
- Review Analytics
- Review Appeals

The Reviews Domain does NOT own:

- Messaging
- Trust Calculations
- Payments
- Identity Verification
- User Authentication

---

# Core Principles

Every review must:

- Be authentic.
- Be traceable.
- Be verifiable.
- Be respectful.
- Remain auditable.
- Never be secretly modified.

---

# Review Identity

Every review receives a permanent identifier.

Example

REV-2026-00000087

---

# Who Can Review

Reviews may be submitted by:

- Tenant
- Landlord
- Property Manager
- Agency
- Contractor
- Service Provider

Only users with verified interactions may submit reviews.

---

# Review Targets

Reviews may target:

- Property
- Landlord
- Tenant
- Agency
- Contractor
- Service Provider
- Maintenance Job

Future:

- Neighborhood
- Building
- Property Manager Team

---

# Review Categories

Examples include:

Tenant Reviews

- Communication
- Cleanliness
- Timely Payments
- Property Care
- Rule Compliance

---

Landlord Reviews

- Responsiveness
- Fairness
- Professionalism
- Maintenance Speed
- Communication

---

Property Reviews

- Security
- Cleanliness
- Location
- Internet
- Water Supply
- Noise Levels
- Accessibility
- Value for Money

---

Contractor Reviews

- Quality
- Speed
- Professionalism
- Pricing
- Reliability

---

# Ratings

Supported ratings:

- Overall Rating
- Category Ratings
- Written Feedback

Overall Rating

1 ⭐

↓

5 ⭐

Category ratings remain independent.

---

# Verified Reviews

A review becomes Verified when:

- A lease existed.
- A booking existed.
- A maintenance job existed.
- A completed service existed.

Verified reviews receive a visible badge.

---

# Review Lifecycle

```
Draft

↓

Submitted

↓

Verification

↓

Published

↓

Archived
```

Alternative states:

- Rejected
- Hidden
- Under Review

---

# Replies

Review targets may submit one official reply.

Replies become part of the permanent review history.

Original reviews remain unchanged.

---

# Review Editing

Users may edit reviews within a configurable period.

Example

30 minutes

↓

Review becomes locked.

Every edit creates a new revision.

---

# Moderation

Reviews may be reported for:

- Abuse
- Hate Speech
- Spam
- Fraud
- False Information
- Harassment
- Duplicate Content

Moderation actions include:

- Warning
- Hide
- Remove
- Appeal

---

# Appeals

Users may appeal moderation decisions.

Appeals include:

- Appeal Reason
- Supporting Evidence
- Administrator Decision

Every appeal is permanently recorded.

---

# Reputation Indicators

Reviews contribute to:

- Property Reputation
- Landlord Reputation
- Tenant Reputation
- Contractor Reputation
- Agency Reputation

The Reviews Domain provides review data.

The Trust Domain performs reputation calculations.

---

# Anti-Abuse Protection

The platform should prevent:

- Fake Reviews
- Review Bombing
- Duplicate Reviews
- Self Reviews
- Automated Spam
- Review Trading

Future AI models may detect suspicious review behaviour.

---

# Privacy

Users may choose:

- Public Name
- Initials
- Anonymous Display (where platform policy allows)

Administrators always retain reviewer identity for moderation purposes.

---

# Business Rules

1. Reviews require verified interactions.
2. Every review belongs to one target.
3. Reviews cannot be permanently edited after the edit window.
4. Replies never replace reviews.
5. Moderation history is immutable.
6. Duplicate reviews are not permitted.
7. Self-reviews are prohibited.

---

# Domain Events

Produces

- ReviewCreated
- ReviewVerified
- ReviewPublished
- ReviewUpdated
- ReviewHidden
- ReviewReported
- ReviewAppealed
- ReplyAdded

Consumes

- LeaseCompleted
- MaintenanceCompleted
- BookingCompleted
- IdentityVerified

---

# Analytics

Track:

- Average Rating
- Review Volume
- Verification Rate
- Report Rate
- Appeal Rate
- Response Rate
- Review Distribution
- Reputation Trends

---

# KPIs

- Verified Review %
- Average Rating
- Review Response Time
- Moderation Accuracy
- Appeal Resolution Time
- Spam Detection Rate

---

# Future Expansion

- AI Review Summaries
- AI Fake Review Detection
- Voice Reviews
- Video Reviews
- Community Recommendations
- Sentiment Analysis
- Neighborhood Reputation
- Verified Community Experts

---

# Success Criteria

The Reviews Domain succeeds when:

- Reviews are trusted.
- Fake reviews remain rare.
- Users receive meaningful feedback.
- Reputation reflects real experiences.
- Review abuse is minimized.

---

# Final Principle

> **Reputation should be earned through real experiences, not manufactured through ratings.**

The Reviews Domain ensures that every review contributes to a transparent, accountable, and trustworthy property ecosystem.