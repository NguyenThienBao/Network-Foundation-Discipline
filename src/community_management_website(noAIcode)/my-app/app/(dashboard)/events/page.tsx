"use client";

import { useRouter } from "next/navigation";
import PageHeader from "@/src/components/general/PageHeader";
import EventDetailModal from "@/src/components/events/EventDetailModal";
import CreateEventModal from "@/src/components/events/CreateEventModal"

const DUMMY_EVENTS = [
  { id: "evt-001", name: "Thursday Night League - Round 4", date: "2023-12-14", playerCount: 22, status: "ACTIVE", feeType: "SPLIT_TOTAL" },
  { id: "evt-002", name: "Jersey Distribution & BBQ", date: "2023-12-16", playerCount: 45, status: "DRAFT", feeType: "FIXED_RATE" },
  { id: "evt-003", name: "Sunday Friendly: SFA vs City FC", date: "2023-12-10", playerCount: 18, status: "COMPLETED", feeType: "SPLIT_TOTAL" },
];

export default function EventsPage() {
  const router = useRouter();

  // Helper to color-code the event status
  const StatusBadge = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
      ACTIVE: "bg-sfagreen/10 text-sfagreen border-sfagreen/20",
      DRAFT: "bg-slate-100 text-slate-600 border-slate-200",
      COMPLETED: "bg-sfablue/10 text-sfablue border-sfablue/20",
      CANCELLED: "bg-sfared/10 text-sfared border-sfared/20",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="relative">
      <PageHeader title="Event Manager">
        <button 
          className="bg-sfalightblue text-white px-4 py-2 rounded shadow-sm hover:opacity-90 transition-opacity text-sm font-medium"
          onClick={() => router.push('?modal=createEvent')}
        >
          + Create New Event
        </button>
        <button className="border border-slate-300 text-sfablue bg-white px-4 py-2 rounded hover:bg-slate-50 transition-colors text-sm font-medium">
          Status: All
        </button>
      </PageHeader>

      {/* Wide Card List Wrapper */}
      <div className="space-y-4">
        {DUMMY_EVENTS.map((event) => (
          <div
            key={event.id}
            onClick={() => router.push(`/events?eventId=${event.id}`)}
            className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-sfalightblue transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Event Title & ID */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-bold text-sfablue group-hover:text-sfalightblue transition-colors">
                  {event.name}
                </h3>
                <StatusBadge status={event.status} />
              </div>
              <p className="text-sm text-slate-400 font-mono uppercase tracking-tight">{event.id}</p>
            </div>

            {/* Event Metadata (Date & Attendance) */}
            <div className="flex items-center gap-8 text-sm border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8">
              <div className="flex flex-col">
                <span className="text-slate-400 uppercase text-[10px] font-bold tracking-widest">Date</span>
                <span className="text-slate-700 font-semibold">
                  {new Date(event.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-slate-400 uppercase text-[10px] font-bold tracking-widest">Attendees</span>
                <span className="text-slate-700 font-semibold">{event.playerCount} Players</span>
              </div>

              <div className="flex flex-col">
                <span className="text-slate-400 uppercase text-[10px] font-bold tracking-widest">Logic</span>
                <span className="text-slate-500 font-medium italic text-xs">{event.feeType}</span>
              </div>
            </div>

            {/* Action Arrow (Visual only) */}
            <div className="hidden md:block text-slate-300 group-hover:text-sfalightblue group-hover:translate-x-1 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <EventDetailModal />
      <CreateEventModal />
    </div>
  );
}