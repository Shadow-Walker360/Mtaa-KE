# 💳 Payments Domain Specification

Version: 2.0

Status: Draft

Owner: Financial Services Team

Domain Type: Core Business Domain

---

# Purpose

The Payments Domain manages every financial transaction across the Mtaa KE platform.

It provides a secure, auditable, and flexible financial infrastructure that supports rent collection, deposits, subscriptions, service payments, premium platform features, refunds, landlord payouts, and future financial products.

Every movement of money within the platform must be traceable from creation to archival.

---

# Vision

Build Africa's most trusted digital property payment infrastructure.

Payments should be:

- Secure
- Transparent
- Flexible
- Auditable
- Reliable
- Extensible

---

# Responsibilities

The Payments Domain owns:

- Payment Processing
- Billing
- Invoicing
- Receipts
- Financial Ledger
- Payment Scheduling
- Payment Plans
- Flexible Repayment Plans
- Payment Promises
- Refunds
- Security Deposits
- Platform Subscriptions
- Premium Listing Payments
- Payouts
- Reconciliation
- Financial Reporting

The Payments Domain does NOT own:

- Lease Agreements
- Property Information
- User Authentication
- Messaging
- Maintenance Requests

---

# Core Principles

Every financial transaction must:

- Be immutable.
- Be timestamped.
- Have a unique identifier.
- Be fully auditable.
- Support reconciliation.
- Never be silently modified.

Financial corrections are made through reversing transactions rather than editing historical records.

---

# Payment Identity

Every payment receives a permanent identifier.

Example

PAY-KE-2026-00000001

The identifier never changes.

---

# Payment Types

Supported payment categories include:

- Rent
- Security Deposit
- Reservation Fee
- Booking Fee
- Utility Payment
- Maintenance Charge
- Platform Subscription
- Premium Listing
- Agency Subscription
- Service Fee
- Late Penalty
- Refund
- Credit Adjustment
- Manual Adjustment

Future payment types may be added without changing existing records.

---

# Billing Strategy

Billing Strategy determines *how* charges are generated.

Supported strategies include:

## Fixed Recurring

Example

Apartment Rent

KES 30,000 every month

---

## Variable Recurring

Example

Rent + Utility Consumption

---

## Usage-Based

Example

Parking

Storage

Co-working Space

Charged according to usage.

---

## Milestone-Based

Example

Construction Projects

Property Renovation

---

## One-Time Billing

Example

Reservation Fee

Security Deposit

Registration Fee

---

Billing Strategy is independent of Billing Frequency.

---

# Billing Frequency

Billing Frequency determines *when* invoices are generated.

Supported frequencies:

- Daily
- Weekly
- Bi-Weekly
- Monthly
- Quarterly
- Half-Yearly
- Yearly
- Custom

Examples

Apartment

Strategy:
Fixed Recurring

Frequency:
Monthly

---

Hotel

Strategy:
Fixed

Frequency:
Daily

---

Office Lease

Strategy:
Fixed

Frequency:
Quarterly

---

Warehouse

Strategy:
Fixed

Frequency:
Yearly

---

# Payment Lifecycle

```
Created

↓

Pending

↓

Processing

↓

Successful

OR

Failed

OR

Cancelled

↓

Reconciled

↓

Archived
```

---

# Payment Methods

Supported methods include:

- M-Pesa
- Airtel Money
- Bank Transfer
- Visa
- Mastercard
- Debit Card
- Credit Card
- Mobile Wallets
- Cash (manual recording)

Future

- PayPal
- Apple Pay
- Google Pay
- Cryptocurrency (subject to regulation)

---

# Payment Schedule

Each active lease automatically generates a payment schedule.

Examples

Monthly Lease

12 months

↓

12 invoices

---

Quarterly

↓

4 invoices

---

Half-Yearly

↓

2 invoices

---

Yearly

↓

1 invoice

---

Daily Rental

↓

365 invoices

The schedule automatically adjusts after approved lease amendments.

---

# Partial Payments

The platform supports partial payments.

Example

Invoice

KES 2,700

Paid

KES 1,000

Remaining

KES 1,700

Status

Partially Paid

The outstanding balance remains active until fully settled.

---

# Overpayments

When an amount exceeds the outstanding balance, the excess may be:

- Refunded
- Applied to the next invoice
- Held as account credit

Platform policy determines the default behaviour.

---

# Late Payments

Late payment processing includes:

Due Date

↓

Grace Period

↓

Late Fee

↓

Reminder

↓

Outstanding Balance

↓

Recovery Process (if enabled)

Late fees are configurable by property or platform policy.

---

# Flexible Repayment Plans

The Payments Domain supports structured repayment plans for tenants experiencing temporary financial hardship.

Repayment Plans do NOT replace the original rent obligation.

Instead, they create a controlled recovery schedule.

Example

Original Rent

KES 2,700

Repayment Period

30 Days

Daily Installment

KES 100

Penalty

KES 300

Expected Total

KES 3,000

Status

Repayment Active

---

## Repayment Schedule Options

Repayment schedules may be:

- Daily
- Weekly
- Bi-Weekly
- Monthly
- Custom

---

## Repayment Rules

- Landlord approval required.
- Original invoice remains unchanged.
- Every installment generates a receipt.
- Outstanding balance updates automatically.
- Every installment is recorded in the financial ledger.
- Repayment history becomes part of the lease history.
- Multiple repayment plans cannot overlap.

---

# Payment Promise™

Before an invoice becomes overdue, tenants may proactively submit a Payment Promise™.

Example

"I cannot pay KES 2,700 today.

I can pay KES 150 daily for the next 20 days."

The landlord may:

- Accept
- Reject
- Counter-offer

Accepted promises automatically generate repayment schedules.

---

# Invoices

Invoices contain:

- Invoice Number
- Property
- Lease
- Tenant
- Amount
- Due Date
- Billing Period
- Outstanding Balance
- Status

Invoices are automatically generated from payment schedules.

---

# Receipts

Receipts include:

- Receipt Number
- Transaction ID
- Provider Reference
- Amount
- Date
- Payment Method
- Property
- Lease

Receipts are immutable.

---

# Refunds

Supported refund types:

- Deposit Refund
- Duplicate Payment
- Booking Cancellation
- Manual Adjustment

Refunds always reference the original payment.

---

# Financial Ledger

Every financial movement generates immutable ledger entries.

Supported entry types:

- Debit
- Credit
- Adjustment
- Refund
- Reversal

Ledger entries are append-only.

---

# Reconciliation

Automatic reconciliation verifies:

- Provider Reference
- Amount
- Currency
- Invoice
- Lease
- Ledger Entry
- Gateway Status

---

# Payouts

Future capability.

Supported states:

Requested

↓

Approved

↓

Processing

↓

Completed

↓

Failed

---

# Business Rules

1. Every payment belongs to a financial account.
2. Payments require an authenticated payer.
3. Every successful payment generates a receipt.
4. Ledger entries are immutable.
5. Failed payments remain in history.
6. Billing schedules originate from leases.
7. Repayment plans require landlord approval.
8. Payment Promises do not guarantee approval.
9. Financial history cannot be deleted.
10. Payment providers must supply verifiable transaction references.

---

# Domain Events

Produces

- PaymentCreated
- PaymentSucceeded
- PaymentFailed
- PaymentCancelled
- InvoiceGenerated
- ReceiptGenerated
- RefundIssued
- LateFeeApplied
- PaymentPromiseCreated
- RepaymentPlanRequested
- RepaymentPlanApproved
- RepaymentPlanRejected
- InstallmentPaid
- InstallmentMissed
- RepaymentCompleted
- RepaymentDefaulted
- LedgerUpdated

Consumes

- LeaseActivated
- LeaseRenewed
- LeaseTerminated
- RefundApproved

---

# Analytics

Track:

- Total Revenue
- Rent Collection Rate
- Outstanding Balances
- Late Payment Rate
- Payment Success Rate
- Average Payment Time
- Refund Rate
- Provider Performance
- Repayment Success Rate
- Promise Acceptance Rate
- Average Recovery Time

---

# KPIs

- Rent Collection %
- Payment Success %
- Average Days to Payment
- Outstanding Rent
- Recovery Success Rate
- Invoice Collection Rate
- Provider Reliability
- Payment Promise Acceptance %
- Average Repayment Duration

---

# Future Expansion

- Escrow Accounts
- Split Rent Payments
- AutoPay
- Utility Billing
- Tax Reporting
- Insurance Billing
- Employer Payroll Integration
- SACCO Integration
- AI Fraud Detection
- Multi-Currency Support
- Cross-Border Payments

---

# Success Criteria

The Payments Domain succeeds when:

- Financial records are trustworthy.
- Payments are easy to make.
- Repayment plans reduce unnecessary evictions.
- Billing remains flexible.
- Landlords receive accurate financial reporting.
- Tenants clearly understand every financial obligation.

---

# Final Principle

> **Money should never be the reason trust is lost.**

The Payments Domain exists to ensure that every financial interaction on Mtaa KE is transparent, auditable, flexible, and fair for all parties.