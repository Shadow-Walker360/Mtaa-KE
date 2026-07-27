# 👤 User Domain Specification

Version: 1.0

Status: Draft

Owner: Identity & User Experience Team

Domain Type: Core Business Domain

---

# Purpose

The User Domain is responsible for representing every individual or organization that interacts with the Mtaa KE platform.

Every authenticated action performed within the platform originates from a User.

The User Domain is the identity foundation upon which all other business domains are built.

This domain does **not** handle authentication, authorization, or security credentials. Those belong to the Platform Security layer.

Instead, this domain manages the business identity of users after authentication has been completed.

---

# Vision

Every person interacting with Mtaa KE should have a trusted, complete, and evolving digital identity.

That identity should improve over time through platform participation, verification, and reputation.

---

# Responsibilities

The User Domain owns:

- User profiles
- Personal information
- Public profile data
- Profile verification status
- User preferences
- Saved settings
- Reputation
- Trust score
- Profile completion
- Favorite properties
- User activity summary
- Notification preferences
- Account visibility

The User Domain does **not** own:

- Passwords
- Sessions
- Tokens
- Authentication
- Roles & permissions
- Payments
- Property ownership
- Messages

---

# Business Goals

The User Domain exists to:

- Create trusted identities.
- Reduce fraud.
- Personalize the platform.
- Improve recommendations.
- Enable reputation.
- Simplify future interactions.

---

# User Types

Initially, every account begins as a standard User.

Additional capabilities are granted through roles.

Possible roles include:

- Tenant
- Landlord
- Property Manager
- Agency
- Administrator
- Moderator
- Support Staff

A single user may hold multiple roles.

Example:

A landlord may also rent another property.

A property manager may own properties personally.

The platform should support multi-role identities.

---

# User Lifecycle

```
Visitor

↓

Registration

↓

Profile Created

↓

Email Verified

↓

Profile Completed

↓

Identity Verified (Optional)

↓

Active Platform User

↓

Trusted User

↓

Highly Rated User
```

Users continue building reputation throughout their lifetime.

---

# Profile Structure

Every profile contains:

## Basic Information

- Full Name
- Preferred Name
- Profile Photo
- Date Joined
- Bio
- Location

---

## Contact Information

- Email Address
- Phone Number

Visibility of contact details is controlled by privacy settings.

---

## Verification Status

Possible states:

- Unverified
- Email Verified
- Phone Verified
- Identity Verified
- Trusted

Future:

Government Verified

Business Verified

---

## Reputation

Reputation is calculated using multiple factors.

Examples:

- Completed leases
- Reviews
- Response time
- Profile completeness
- Verification level
- Platform activity
- Rule violations

Reputation must never be based on protected personal characteristics.

---

# Trust Score™

Every user receives a dynamic Trust Score.

The score is calculated using verified platform behavior.

Possible contributing factors include:

Positive

- Identity verification
- Positive reviews
- Successful lease history
- Fast responses
- Completed profile
- Long account age

Negative

- Fraud reports
- Lease disputes
- Policy violations
- Fake listings
- Abandoned applications
- Repeated no-shows

The exact scoring algorithm remains internal to prevent manipulation.

---

# Profile Completion

Users are encouraged to complete their profiles.

Completion percentage may include:

- Photo
- Bio
- Phone verification
- Identity verification
- Emergency contact (future)
- Preferences

Higher completion improves trust and recommendations.

---

# User Preferences

Users may configure:

- Preferred locations
- Budget range
- Property types
- Bedrooms
- Amenities
- Accessibility needs
- Language
- Theme
- Notification preferences

Preferences improve search and AI recommendations.

---

# Favorites

Users can save:

- Properties
- Searches
- Landlords
- Agencies

Favorites belong to the User Domain.

---

# Privacy

Users control:

- Profile visibility
- Contact visibility
- Activity visibility
- Public reviews
- Marketing preferences

Privacy settings must be respected by every other domain.

---

# Business Rules

1. Every user has exactly one profile.
2. A user may have multiple platform roles.
3. Profiles cannot exist without a user account.
4. Deleted accounts are soft-deleted unless legally required otherwise.
5. Public profile information must respect privacy settings.
6. Reputation is earned, not assigned.
7. Trust Score calculations are internal and non-editable.
8. User IDs are immutable.

---

# User Stories

As a tenant,

I want to complete my profile

so landlords trust my application.

---

As a landlord,

I want to see whether a tenant is verified

so I can reduce risk.

---

As a property manager,

I want to manage multiple properties from one profile

so my workflow is efficient.

---

As a user,

I want to control my privacy settings

so I decide what information is visible.

---

# Domain Events

This domain publishes:

- UserCreated
- UserUpdated
- ProfileCompleted
- ProfileVerified
- TrustScoreUpdated
- PreferencesUpdated
- UserDeleted

Other domains may subscribe to these events.

---

# Events Consumed

The User Domain listens for:

- ReviewSubmitted
- LeaseCompleted
- PaymentCompleted
- VerificationApproved
- PolicyViolationRecorded

These events may update reputation or trust.

---

# State Diagram

```
Registered

↓

Verified

↓

Active

↓

Trusted

↓

Restricted (if violations occur)

↓

Suspended

↓

Archived
```

State transitions must be audited.

---

# Relationships

The User Domain interacts with:

Properties

Listings

Applications

Messaging

Payments

Reviews

Notifications

AI

Analytics

Administration

It owns none of their business logic.

---

# Permissions

Users may:

- Edit their profile
- Update preferences
- Upload profile images
- View trust status
- Export personal data
- Request account deletion

Users may not:

- Modify their trust score
- Edit verification records
- Modify audit history

---

# KPIs

The User Domain measures:

- Registration conversion rate
- Profile completion rate
- Identity verification rate
- Active users
- Monthly active users
- Daily active users
- Average trust score
- User retention
- Profile update frequency

---

# Future Enhancements

Future capabilities may include:

- Digital identity wallet
- Professional landlord profiles
- Verified agencies
- Team accounts
- Organization profiles
- Business verification
- Public achievements
- AI-generated profile optimization
- Referral system
- Cross-country identity portability

---

# Domain Success Criteria

The User Domain succeeds when:

- Users trust one another.
- Fraud decreases.
- Profiles become richer over time.
- Recommendations improve through personalization.
- Reputation reflects real platform behavior.
- Privacy remains under user control.

---

# Final Principle

> **A property platform is ultimately a platform of people.**

Buildings do not build trust.

People do.

The User Domain exists to help every participant establish a trusted digital identity that grows stronger with every positive interaction.