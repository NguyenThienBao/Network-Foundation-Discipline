"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function EventDetailModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Bound to ?eventId= in the URL
  const eventId = searchParams.get("eventId");

  if (!eventId) return null;

  const closeModal = () => {
    router.push("/events");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div>
            <h2 className="text-xl font-bold text-sfablue">Event Details</h2>
            <p className="text-xs text-slate-500 font-mono mt-1">ID: {eventId}</p>
          </div>
          <button onClick={closeModal} className="text-slate-400 hover:text-sfared transition-colors text-2xl">&times;</button>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Summary */}
            <div className="space-y-6">
              <div className="h-48 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center bg-slate-50">
                <span className="text-slate-400 text-sm italic">Event Metadata (Fee Type, Costs)</span>
              </div>
            </div>
            
            {/* Right Side: Quick Roster Stats */}
            <div className="space-y-6">
               <div className="h-48 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center bg-slate-50">
                <span className="text-slate-400 text-sm italic">Attendance Overview (Ticks vs. RSVPs)</span>
              </div>
            </div>
          </div>

          {/* Large Bottom Area for the Tick Page Preview */}
          <div className="mt-8 h-64 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center bg-slate-50">
            <span className="text-slate-400 font-medium italic">The Tick Page (Real-time Calculator) will live here</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
          <button onClick={closeModal} className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-100">
            Close
          </button>
          <button className="px-4 py-2 bg-sfalightblue text-white rounded hover:opacity-90">
            Open Tick Page
          </button>
        </div>
      </div>
    </div>
  );
}