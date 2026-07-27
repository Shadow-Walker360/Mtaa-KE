# 🏠 Property Domain Specification

Version: 1.0

Status: Draft

Owner: Property Services Team

Domain Type: Core Business Domain

---

# Purpose

The Property Domain represents the physical real-world asset.

A Property exists independently of advertisements, tenants, leases, or ownership changes.

It is the permanent digital representation of a house, apartment, plot of land, office, warehouse, hostel, commercial space, or any other real estate asset.

A property may exist in the system without ever being publicly listed.

---

# Vision

Every real-world property in Africa should eventually have one trusted digital identity.

The Property Domain exists to create that identity.

---

# Core Principle

A Property is **not** a Listing.

A Property is the physical asset.

A Listing is a temporary advertisement for that asset.

Properties have long lifecycles.

Listings are temporary.

---

# Responsibilities

The Property Domain owns:

- Property identity
- Physical characteristics
- Geographic location
- Address
- Coordinates
- Building information
- Floor information
- Amenities
- Images
- Videos
- Documents
- Verification status
- Ownership references
- Property status

The Property Domain does NOT own:

- Advertisements
- Pricing history
- Applications
- Leases
- Payments
- Reviews
- Conversations

---

# Property Types

Residential

- Apartment
- Bedsitter
- Studio
- Maisonette
- Villa
- Bungalow
- Mansion
- Townhouse

Commercial

- Office
- Shop
- Warehouse
- Factory
- Hotel
- Restaurant

Land

- Residential Plot
- Commercial Plot
- Agricultural Land
- Industrial Land

Special

- Student Hostel
- Airbnb
- Holiday Home
- Mixed Use Development

Future property categories may be introduced without changing existing identifiers.

---

# Property Lifecycle

```
Created

↓

Draft

↓

Verified

↓

Available

↓

Occupied

↓

Vacant

↓

Archived
```

The lifecycle is independent of listings.

---

# Property Identity

Every property receives a permanent immutable identifier.

Example

```
PROPERTY-KE-00000125
```

The identifier never changes.

Even if:

- ownership changes
- tenants change
- listings change
- prices change

The property remains the same asset.

---

# Property Attributes

## Identity

- Property ID
- Internal UUID
- Created Date

---

## Address

- Country
- County
- Constituency
- Ward
- Town
- Estate
- Street
- Building
- Unit Number
- Postal Code

---

## Location

- Latitude
- Longitude

Future

- What3Words
- GIS Parcel Reference

---

## Physical Details

- Bedrooms
- Bathrooms
- Toilets
- Kitchens
- Floors
- Parking Spaces
- Square Meters
- Year Built
- Furnished Status

---

## Amenities

Examples

- Wi-Fi
- Fibre
- Borehole
- Swimming Pool
- CCTV
- Solar
- Backup Generator
- Lift
- Balcony
- Garden
- Security
- Gym
- Wheelchair Access
- Children's Playground

Amenities should be configurable rather than hardcoded.

---

## Media

A property may have:

- Photos
- Videos
- Virtual Tours
- Floor Plans
- Documents

Media belongs to the property—not the listing.

---

# Property Ownership

Ownership references another domain.

The Property Domain stores only ownership relationships.

Ownership changes should never create a new property.

---

# Verification

Verification states include:

- Unverified
- Owner Verified
- Address Verified
- Document Verified
- Government Verified (future)
- Fully Verified

Verification history must be retained.

---

# Property Status

Possible statuses:

- Draft
- Available
- Occupied
- Under Maintenance
- Reserved
- Archived

Status affects search visibility.

---

# Property Features

Examples

- Pet Friendly
- Smoking Allowed
- Student Friendly
- Family Friendly
- Serviced
- Short Stay
- Long Stay

Features differ from amenities.

---

# Accessibility

Accessibility metadata includes:

- Wheelchair Accessible
- Elevator
- Wide Doorways
- Accessible Parking
- Accessible Bathroom

Accessibility improves inclusive search.

---

# Sustainability

Future environmental metadata

- Solar Power
- Rainwater Harvesting
- Energy Rating
- Green Certification
- Smart Meter

---

# Business Rules

1. Every property has exactly one Property ID.
2. Property IDs never change.
3. A property can have multiple listings over time.
4. Property media belongs to the property.
5. Ownership changes do not create new properties.
6. Archived properties are retained for audit purposes.
7. Verification records cannot be deleted.

---

# User Stories

As a landlord,

I want one permanent property profile

so I don't recreate it every time I advertise.

---

As a property manager,

I want to manage hundreds of units

without duplicating property information.

---

As a tenant,

I want reliable property information

so I can compare listings confidently.

---

# Relationships

The Property Domain interacts with:

Users

Listings

Applications

Leases

Maintenance

AI

Analytics

Search

Administration

It owns only property information.

---

# Events Published

PropertyCreated

PropertyUpdated

PropertyVerified

PropertyArchived

PropertyDeleted

AmenitiesUpdated

MediaUploaded

OwnershipUpdated

---

# Events Consumed

OwnerVerified

MaintenanceCompleted

InspectionCompleted

GovernmentVerificationApproved

---

# KPIs

- Verified properties
- Active properties
- Property completeness
- Media quality score
- Average verification time
- Average property age
- Geographic coverage

---

# Future Features

- Digital Property Passport™
- Smart Home Metadata
- Utility Integrations
- Drone Inspection Reports
- 3D Digital Twin
- AI Condition Assessment
- Construction History
- Energy Consumption Analytics
- Land Registry Integration
- Maintenance History Timeline

---

# Final Principle

> **Properties are permanent. Listings are temporary.**

The Property Domain is the long-term digital identity of every real-world asset managed by Mtaa KE.