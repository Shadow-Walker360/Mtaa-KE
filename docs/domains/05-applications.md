# 📝 Application Domain Specification

Version: 1.0

Status: Draft

Owner: Leasing Team

Domain Type: Core Business Domain

---

# Purpose

The Application Domain manages the process through which a prospective tenant expresses interest in renting a property.

An application serves as the formal bridge between property discovery and lease creation.

It captures the tenant's intent, required information, supporting documents, and the landlord's decision.

This domain ensures that every application follows a transparent, auditable, and fair workflow.

---

# Vision

Provide a secure, streamlined, and trustworthy rental application process that benefits both tenants and landlords.

Applications should reduce paperwork, improve decision-making, and shorten vacancy periods.

---

# Responsibilities

The Application Domain owns:

- Rental applications
- Application status
- Applicant information
- Supporting documents
- Screening requests
- Landlord decisions
- Withdrawals
- Application history
- Application notes
- Decision timeline

The Application Domain does NOT own:

- Listings
- Properties
- Payments
- Leases
- User authentication
- Messaging

---

# Core Principle

Every application belongs to exactly one listing.

A listing may receive many applications.

A user may submit many applications.

Only one approved application can result in a lease for a specific listing.

---

# Application Lifecycle

```
Draft

↓

Submitted

↓

Received

↓

Under Review

↓

Additional Information Requested

↓

Approved

OR

Rejected

OR

Withdrawn

↓

Converted to Lease
```

Every state transition must be recorded.

---

# Application Identity

Every application receives a permanent identifier.

Example

APPLICATION-KE-2026-000054

The identifier never changes.

---

# Application Information

## Applicant

- User ID
- Full Name
- Contact Information
- Preferred Move-in Date

---

## Employment

- Employment Status
- Employer
- Occupation
- Monthly Income
- Employment Duration

---

## Household

- Number of Occupants
- Adults
- Children
- Pets
- Special Requirements

---

## Rental Preferences

- Intended Lease Duration
- Preferred Start Date
- Furnished Preference

---

## Emergency Contact

Future support for emergency contacts.

---

# Supporting Documents

Examples

- National ID / Passport
- Proof of Income
- Employment Letter
- Bank Statement
- Reference Letter
- Previous Landlord Reference

Documents remain linked to the application.

---

# Landlord Review

The landlord may:

- Approve
- Reject
- Request More Information
- Schedule Viewing
- Schedule Interview

Reasons should be recorded where appropriate.

---

# Screening (Future)

Optional screening services:

- Identity verification
- Employment verification
- Income verification
- Credit assessment (where available)
- Rental history
- Background checks (subject to local laws)

---

# Application Status

Possible states:

- Draft
- Submitted
- Under Review
- Awaiting Applicant
- Approved
- Rejected
- Withdrawn
- Expired
- Converted to Lease

---

# Application Rules

A tenant may:

- Save drafts
- Edit drafts
- Withdraw submitted applications (before approval)
- Upload additional documents
- Track application progress

A landlord may:

- Review applications
- Request information
- Approve
- Reject
- Add internal notes

---

# Duplicate Applications

The platform should prevent unnecessary duplicate applications to the same active listing.

If a duplicate is attempted, the user should be informed and directed to their existing application.

---

# Notifications

Examples

Application Submitted

Application Received

Documents Requested

Application Approved

Application Rejected

Application Withdrawn

Lease Ready

---

# Business Rules

1. Applications require an authenticated user.
2. Applications cannot exist without an active listing.
3. Draft applications are private.
4. Approved applications may be converted into leases.
5. Every decision is timestamped.
6. Deleted applications are soft-deleted for audit purposes.
7. Required documents are configurable by property owner or platform policy.

---

# User Stories

As a tenant,

I want to apply for a property online

so I can avoid unnecessary paperwork.

---

As a landlord,

I want to review applicants efficiently

so I can choose a suitable tenant.

---

As a tenant,

I want to track my application's progress

so I always know its current status.

---

# Workflows

## Submit Application

```
User Selects Listing

↓

Start Application

↓

Complete Required Information

↓

Upload Documents

↓

Review

↓

Submit

↓

Application Received

↓

Landlord Notified
```

---

## Landlord Review

```
Receive Application

↓

Review Information

↓

Review Documents

↓

Request Information (Optional)

↓

Approve

OR

Reject

↓

Notify Applicant
```

---

## Lease Conversion

```
Application Approved

↓

Lease Draft Created

↓

Lease Review

↓

Signatures

↓

Lease Activated
```

---

# Relationships

Consumes

Users

Listings

Properties

Notifications

Property Intelligence

Produces

Approved Applications

Rejected Applications

Lease Requests

Analytics Events

---

# Domain Events

ApplicationCreated

ApplicationSubmitted

ApplicationUpdated

ApplicationWithdrawn

ApplicationApproved

ApplicationRejected

ApplicationExpired

LeaseConversionStarted

---

# Events Consumed

ListingArchived

ListingClosed

UserSuspended

DocumentVerified

IdentityVerified

---

# Analytics

Track:

Applications per Listing

Approval Rate

Rejection Rate

Average Review Time

Average Documents Uploaded

Withdrawal Rate

Application-to-Lease Conversion

Time to Approval

---

# KPIs

Application Completion Rate

Average Review Time

Application Success Rate

Conversion to Lease

Average Documents per Application

Duplicate Application Rate

Landlord Response Time

Applicant Satisfaction

---

# Future Expansion

- AI application scoring
- Smart document verification
- Co-applicants
- Guarantor support
- Employer verification
- Interview scheduling
- Viewing scheduling
- Digital references
- One-click reapplication
- International applicant support

---

# Success Criteria

The Application Domain succeeds when:

- Applications are easy to complete.
- Landlords receive complete and accurate information.
- Applicants receive timely decisions.
- The application process reduces administrative work.
- Approved applications transition smoothly into leases.

---

# Final Principle

> **An application is more than a form—it is the beginning of a trusted rental relationship.**

The Application Domain transforms interest into opportunity through structured, transparent, and auditable workflows.