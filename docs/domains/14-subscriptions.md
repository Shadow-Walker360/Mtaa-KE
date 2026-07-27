# 💎 Subscriptions Domain Specification

Version: 1.0

Status: Draft

Owner: Revenue Platform Team

Domain Type: Core Business Domain

---

# Purpose

The Subscriptions Domain manages platform monetization, feature entitlements, subscription plans, billing cycles, usage limits, licensing, upgrades, downgrades, renewals, and account status.

It determines which capabilities are available to each user, organization, or business account while remaining independent of payment processing.

---

# Vision

Build a flexible subscription platform capable of supporting individuals, landlords, agencies, enterprises, and future partner ecosystems without requiring code changes for new pricing models.

---

# Responsibilities

The Subscriptions Domain owns:

- Subscription Plans
- Feature Entitlements
- Billing Cycles
- Usage Limits
- Free Trials
- Renewals
- Upgrades
- Downgrades
- Seat Licensing
- Enterprise Licensing
- Promotional Plans
- Coupons
- Feature Flags

The Subscriptions Domain does NOT own:

- Payment Processing
- User Authentication
- Property Management
- Analytics Calculations
- Trust Scores

Payments are handled by the Payments Domain.

---

# Core Principles

Every subscription must:

- Have a unique identifier.
- Be auditable.
- Be renewable.
- Be upgradeable.
- Be downgradeable.
- Preserve billing history.

No subscription history should ever be silently removed.

---

# Subscription Identity

Example

SUB-2026-00000127

---

# Subscription Lifecycle

```
Created

↓

Trial

↓

Active

↓

Renewal Due

↓

Renewed
```

Alternative states

- Suspended
- Expired
- Cancelled
- Grace Period
- Archived

---

# Subscription Plans

The platform supports unlimited plans.

Examples

- Free
- Starter
- Professional
- Business
- Enterprise
- Government
- Education

Future plans may be added without software changes.

---

# Feature Entitlements

Plans unlock capabilities rather than hardcoded menus.

Examples

Property Listings

- Yes
- No

AI Assistant

- Enabled
- Disabled

Advanced Analytics

- Enabled
- Disabled

API Access

- Enabled
- Disabled

Priority Support

- Enabled
- Disabled

Custom Branding

- Enabled
- Disabled

Bulk Import

- Enabled
- Disabled

Digital Signatures

- Enabled
- Disabled

Future features inherit the same entitlement model.

---

# Billing Cycles

Supported billing frequencies:

- Daily
- Weekly
- Monthly
- Quarterly
- Semi-Annual
- Annual
- Custom

Organizations may define custom enterprise billing agreements.

---

# Free Trials

Plans may include:

- No Trial
- 7 Days
- 14 Days
- 30 Days
- 60 Days
- Custom

Each account may only redeem a trial once unless explicitly granted another by platform administrators.

---

# Usage Limits

Plans may define limits for:

- Properties
- Listings
- Users
- Team Members
- Storage
- AI Requests
- API Requests
- Documents
- Messages
- Reports
- Integrations

Unlimited values are supported.

---

# Seat Licensing

Business accounts may purchase seats.

Supported seat roles include:

- Owner
- Administrator
- Manager
- Agent
- Accountant
- Maintenance Manager
- Support Staff
- Read-Only User

Seats may be added or removed without changing the subscription plan.

---

# Upgrades

Users may upgrade at any time.

Upgrade rules:

- Immediate entitlement activation.
- Prorated billing supported.
- Historical records preserved.

---

# Downgrades

Downgrades may:

- Take effect immediately.
- Take effect at renewal.
- Require administrator approval.

Restricted features become read-only rather than deleting customer data.

---

# Grace Period

Expired subscriptions may enter a configurable grace period.

Examples

- 3 Days
- 7 Days
- 14 Days
- 30 Days

During grace:

- Data remains intact.
- Limited platform access continues.
- Upgrade reminders may be issued.

---

# Promotions

Supported promotion types:

- Coupon Codes
- Percentage Discounts
- Fixed Discounts
- Referral Rewards
- Seasonal Campaigns
- Enterprise Agreements

Promotions never modify historical invoices.

---

# Enterprise Licensing

Enterprise agreements may include:

- Unlimited Users
- Unlimited Properties
- Custom SLAs
- Dedicated Support
- White Labeling
- Private Deployment
- Custom Integrations
- Custom Billing

---

# Feature Flags

Feature flags allow gradual rollout of capabilities.

Examples

- AI Assistant Beta
- Smart Pricing
- Property Health Index™
- Rent Recovery Beta
- Experimental Integrations

Feature flags may target:

- Individual Users
- Organizations
- Plans
- Geographic Regions

---

# Business Rules

1. Every account may have one active primary subscription.
2. Feature access is determined by entitlements.
3. Billing history is immutable.
4. Downgrades never delete customer data.
5. Subscription changes are fully auditable.
6. Trial abuse prevention must be enforced.
7. Enterprise agreements override default plan settings where applicable.

---

# Domain Events

Produces

- SubscriptionCreated
- TrialStarted
- SubscriptionActivated
- SubscriptionRenewed
- SubscriptionCancelled
- SubscriptionExpired
- SubscriptionSuspended
- PlanUpgraded
- PlanDowngraded
- EntitlementsUpdated

Consumes

- PaymentSucceeded
- PaymentFailed
- UserRegistered
- OrganizationCreated

---

# Analytics

Track:

- Monthly Recurring Revenue (MRR)
- Annual Recurring Revenue (ARR)
- Active Subscriptions
- Trial Conversion Rate
- Churn Rate
- Upgrade Rate
- Downgrade Rate
- Average Revenue Per User (ARPU)
- Customer Lifetime Value (CLV)

---

# KPIs

- Subscription Growth
- Renewal Rate
- Churn Rate
- Trial Conversion
- Average Revenue Per Account
- Plan Distribution
- Enterprise Adoption
- Feature Adoption

---

# Future Expansion

- Usage-Based Billing
- Marketplace Revenue Sharing
- Partner Licensing
- AI Credit Packs
- Multi-Tenant Organizations
- Regional Pricing
- Currency-Specific Pricing
- Dynamic Pricing Experiments
- Reseller Programs
- Franchise Licensing

---

# Success Criteria

The Subscriptions Domain succeeds when:

- Feature access is predictable.
- Billing remains flexible.
- Plans evolve without engineering changes.
- Customers can upgrade without friction.
- Revenue operations scale with platform growth.

---

# Final Principle

> **Subscriptions should unlock value—not create complexity.**

The Subscriptions Domain provides a flexible entitlement system that allows Mtaa KE to evolve its business model without sacrificing architectural simplicity or customer experience.