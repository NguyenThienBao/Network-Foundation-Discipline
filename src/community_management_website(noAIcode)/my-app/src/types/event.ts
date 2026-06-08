// src/types/event.ts
import { UUID, EventStatus, FeeType, AttendanceMethod } from './enums';

export interface Event {
  id: UUID;
  name: string;
  date: Date;
  status: EventStatus;
  feeType: FeeType;
  per_person_fee: number | null; // Decimal
  total_cost: number | null; // Decimal
  textNote: string | null;
  created_at: Date;

  // Relations
  participants?: Attendance[];
}

export interface Attendance {
  id: UUID;
  eventId: UUID;
  playerId: UUID;
  isTicked: boolean; // Indicates if the player has checked in for the event
  calculatedFee: number; // Updates dynamically on UI, locked to DB on COMPLETED status
  check_in_time: Date | null;
  method: AttendanceMethod | null;
}