// src/types/enums.ts

export type UUID = string;

export enum EventStatus {
  DRAFT = 'DRAFT', // Initial state when creating an event, not visible to players
  ACTIVE = 'ACTIVE', // Event is on going, all information is locked except attendance check-in and fee calculation
  COMPLETED = 'COMPLETED', // Event has finished and all information is locked, attendance is finalized and fees are calculated
  ARCHIVED = 'ARCHIVED', // Event has successfully convert into ledger entries, and saved for historical reference, not visible to players
  CANCELLED = 'CANCELLED', // Event was cancelled before it could start, delete from db
}

export enum FeeType {
  FIXED_RATE = 'FIXED_RATE',
  SPLIT_TOTAL = 'SPLIT_TOTAL',
}

// export enum PaymentStatus { // Removed statuses since we leading to design a simple and purely running balance system (simply calculate total charges and total payments)
//   PAID = 'PAID',
//   PARTIAL = 'PARTIAL',
//   UNPAID = 'UNPAID',
// }

export enum EntryType {
  CHARGE = 'CHARGE',
  PAYMENT = 'PAYMENT',
  ADJUSTMENT = 'ADJUSTMENT',
}

export enum PaymentMethod {
  CASH = 'CASH',
  BANK_TRANSFER = 'BANK_TRANSFER',
  NONE = 'NONE', // For charges and adjustments
}

export enum AuditStatus {
  VERIFIED = 'VERIFIED',
  FLAGGED_DISCREPANCY = 'FLAGGED_DISCREPANCY',
  MANUAL_REVIEW_REQUIRED = 'MANUAL_REVIEW_REQUIRED',
}

export enum AttendanceMethod {
  MANUAL = 'MANUAL',
  FACE_ID = 'FACE_ID',
  NOTE_GENERATED = 'NOTE_GENERATED',
}