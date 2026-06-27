"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function CreateEventModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const isCreating = searchParams.get("modal") === "createEvent";

  if (!isCreating) return null;

  const closeModal = () => {
    router.push("/events");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
        
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-sfablue">Create New Event</h2>
          <button onClick={closeModal} className="text-slate-400 hover:text-sfared text-2xl leading-none">&times;</button>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Event Name</label>
            <input type="text" placeholder="e.g. Thursday League Setup" className="w-full border border-slate-300 rounded-md p-2 bg-slate-50" disabled />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Date</label>
              <input type="date" className="w-full border border-slate-300 rounded-md p-2 bg-slate-50 text-slate-500" disabled />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Fee Logic</label>
              <select className="w-full border border-slate-300 rounded-md p-2 bg-slate-50" disabled>
                <option>Split Total</option>
                <option>Fixed Rate</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Total Pitch Cost ($)</label>
            <input type="number" placeholder="120.00" className="w-full border border-slate-300 rounded-md p-2 bg-slate-50" disabled />
          </div>

          <div className="bg-sfalightblue/10 border border-sfalightblue/20 rounded p-3 mt-4">
            <p className="text-sm text-sfablue font-medium">Auto-Attendance via Image?</p>
            <p className="text-xs text-slate-500 mt-1">You can upload a Messenger poll screenshot after creation.</p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
          <button onClick={closeModal} className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-100">
            Cancel
          </button>
          <button className="px-4 py-2 bg-sfablue text-white rounded font-bold hover:opacity-90">
            Initialize Event
          </button>
        </div>
      </div>
    </div>
  );
}