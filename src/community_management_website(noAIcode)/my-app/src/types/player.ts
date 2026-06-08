// src/types/player.ts
import { UUID } from './enums';
import { Attendance } from './event';
import { LedgerEntry } from './finance';

export interface Player {
  id: UUID;
  auth_id: string | UUID | null;
  name: string; // Short name or display name
  fullname: string;
  team: string | null; // Can be an enum if strictly predefined, but string allows flexibility
  email: string;
  phone: string | null;
  is_active: boolean;
  joinDate: Date;
  unique_payment_code: string; // e.g., 'SFA-104'
  currentBalance: number; // Decimal mapped to JS number
  
  // Biometric & OCR Data
  known_bank_names: string[] | null; // Maps to JSONB/Array
  face_embedding: number[] | null; // vector(512) mapped to an array of numbers
  is_face_registered: boolean;
  face_updated_at: Date | null;

  // Relations
  attendanceHistory?: Attendance[];
  paymentHistory?: LedgerEntry[];
}