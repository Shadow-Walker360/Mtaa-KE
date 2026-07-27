# 🔍 Search Domain Specification

Version: 1.0

Status: Draft

Owner: Discovery Team

Domain Type: Core Business Domain

---

# Purpose

The Search Domain enables users to efficiently discover properties that match their needs, preferences, and intent.

Search is more than finding properties.

It is the primary discovery engine that connects people with suitable homes.

The goal is to minimize the time between a user's first search and finding their ideal property.

---

# Vision

Deliver Africa's smartest property search experience.

Search should feel less like filtering data and more like having a knowledgeable real estate assistant.

---

# Responsibilities

The Search Domain owns:

- Property discovery
- Search indexing
- Search queries
- Filtering
- Sorting
- Ranking
- Saved searches
- Search history
- Search suggestions
- Geospatial search
- Recommendation inputs
- Search analytics

The Search Domain does NOT own:

- Properties
- Listings
- User profiles
- Payments
- Reviews
- Applications
- AI models

---

# Search Philosophy

The user should never need to know exactly what they are looking for.

Search should help users discover better options than they initially considered.

---

# Search Sources

Search indexes data from:

- Listings
- Properties
- Location metadata
- User preferences
- Verification status
- Reviews (aggregated)
- Availability
- Amenities

The Search Domain consumes this information but does not own it.

---

# Search Types

## Keyword Search

Examples

```
Apartment in Kilimani

Bedsitter Bungoma

House with garden
```

---

## Location Search

Users may search by

- Country
- County
- Town
- Estate
- Street
- Landmark
- Coordinates

Future

- Map pin
- Draw on map
- Current location

---

## Filter Search

Supported filters include:

Price

Bedrooms

Bathrooms

Property Type

Availability

Parking

Pet Friendly

Furnished

Internet

Solar

Security

Water Availability

Wheelchair Accessibility

Property Verification

Landlord Verification

Listing Quality Score™

Trust Score™

---

## Map Search

Users may:

- Zoom map
- Drag map
- Draw search area
- Search near current location
- Search near schools
- Search near hospitals
- Search near transport

---

## AI Search (Future)

Examples

"I need a quiet apartment near a university."

"I want a family house under $400 with good schools nearby."

"Show me homes similar to this one."

Natural language search should translate into structured filters.

---

# Search Ranking

Ranking considers multiple signals.

Examples:

Property verification

Listing Quality Score™

User preferences

Distance

Freshness

Popularity

Availability

Trust Score™

Response rate

Personalization

Paid promotion (clearly labeled)

No single signal should dominate unfairly.

---

# Saved Searches

Users may save search criteria.

Examples

```
2 Bedroom

Nairobi

Under $300

Pet Friendly
```

Saved searches may trigger future notifications.

---

# Search History

Users may access:

Recent searches

Frequently used searches

Recently viewed properties

Search history belongs to the User Domain but is managed by Search.

---

# Recommendations

Search may provide:

Similar properties

Trending locations

Nearby alternatives

Recently reduced prices

New listings

Personalized suggestions

Recommendations should always explain *why* they appear.

Example:

> "Recommended because it matches your preferred budget and location."

---

# Search Suggestions

As users type, suggestions may include:

Locations

Property types

Amenities

Popular searches

Recent searches

AI suggestions (future)

---

# Zero Results Strategy

Returning zero results should be avoided whenever possible.

Instead, Search should:

- Relax filters gradually
- Suggest nearby areas
- Recommend similar properties
- Recommend a wider price range
- Explain why no exact matches exist

---

# Search Performance

Target response time:

< 500 ms for standard searches.

The platform should remain responsive even with millions of listings.

---

# Business Rules

1. Only published listings appear in search.
2. Suspended listings never appear.
3. Archived listings never appear.
4. Search respects user permissions.
5. Private listings appear only to authorized users.
6. Verification badges influence ranking.
7. Search indexes update automatically after listing changes.
8. Search never modifies source data.

---

# User Stories

As a tenant,

I want to quickly find properties that match my needs

so I spend less time searching.

---

As a landlord,

I want my high-quality listing to rank fairly

so tenants discover it.

---

As an agency,

I want analytics on search impressions

so I can improve my listings.

---

# Workflows

## Property Search

```
User Opens Search

↓

Enter Keywords

↓

Apply Filters

↓

Execute Search

↓

Rank Results

↓

Display Listings

↓

User Views Property

↓

Record Analytics
```

---

## Saved Search

```
Search Completed

↓

User Saves Search

↓

Criteria Stored

↓

Future Matching Listings

↓

Notification Sent
```

---

# States

Search Session

Idle

↓

Searching

↓

Results Found

↓

Results Refined

↓

Saved

↓

Completed

---

# Relationships

Consumes

Properties

Listings

Users

Reviews

Notifications

Analytics

Property Intelligence

Produces

Search Results

Recommendations

Analytics Events

---

# Domain Events

SearchPerformed

SearchSaved

SearchDeleted

RecommendationGenerated

SuggestionClicked

ZeroResultsReturned

SearchFiltersUpdated

---

# Events Consumed

ListingPublished

ListingUpdated

ListingArchived

PropertyUpdated

UserPreferencesUpdated

ReviewSubmitted

TrustScoreUpdated

---

# Search Analytics

Track:

Search volume

Popular filters

Popular locations

Average search duration

Zero-result rate

Click-through rate

Average properties viewed

Saved searches

Conversion to application

Search abandonment rate

---

# KPIs

Average search time

Average time to first property view

Search success rate

Zero-result rate

Saved search adoption

Recommendation click-through rate

Average filters per search

Search-to-application conversion

---

# Future Expansion

- Semantic search
- Voice search
- Image search
- Commute-time search
- Lifestyle search
- School ranking integration
- Crime statistics integration
- Flood risk overlays
- Heat maps
- Investment opportunity search
- AI conversational search
- Multi-language search

---

# Success Criteria

The Search Domain succeeds when:

- Users find suitable properties quickly.
- Users refine searches with minimal effort.
- High-quality listings receive appropriate visibility.
- Search results are relevant and trustworthy.
- Recommendations improve discovery without overwhelming users.

---

# Final Principle

> **Search should help users discover the right property—not just return matching records.**

The Search Domain exists to reduce effort, increase confidence, and accelerate successful property discovery.