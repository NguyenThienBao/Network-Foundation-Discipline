// src/types/finance.ts
import { UUID, EntryType, PaymentMethod } from './enums';

export interface LedgerEntry {
  id: UUID;
  playerId: UUID;
  eventId: UUID | null; // Nullable for non-event adjustments
  amount: number; // Positive for charges, negative for payments/credits
  // status: PaymentStatus;
  type: EntryType;
  payment_method: PaymentMethod | null;
  created_at: Date;
  
  // Relations
  manualAdjustment?: ManualAdjustment;
}

export interface ManualAdjustment {
  id: UUID;
  ledgerEntryId: UUID; // Links directly to the LedgerEntry it explains
  explanation: string;
  amount: number; // Positive for additional charge, negative for credit
  adjusted_by: UUID | string; // The admin who made the adjustment
  created_at: Date;
}