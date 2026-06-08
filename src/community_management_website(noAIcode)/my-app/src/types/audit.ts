// src/types/audit.ts
import { UUID, AuditStatus } from './enums';

export interface AuditTransactionLog {
  id: UUID;
  ledger_entry_id: UUID;
  bank_reference_num: string; // Unique constraint in DB
  extracted_amount: number;
  confidence_score: number; // 0.0 to 1.0
  audit_status: AuditStatus;
  raw_ocr_text: string | Record<string, any>; // Text or JSONB payload
  created_at: Date;
}