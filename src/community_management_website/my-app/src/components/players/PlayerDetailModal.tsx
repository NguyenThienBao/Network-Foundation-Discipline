"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function PlayerDetailModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // This looks at the URL. If ?playerId= is missing, it returns null (modal is hidden).
  const playerId = searchParams.get("playerId");

  if (!playerId) return null;

  // Closes the modal by navigating back to the base /players route
  const closeModal = () => {
    router.push("/players");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h2 className="text-xl font-bold text-sfablue">Player Details</h2>
          <button 
            onClick={closeModal} 
            className="text-slate-400 hover:text-sfared transition-colors text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* Modal Body (Scrollable for complex future content) */}
        <div className="p-6 overflow-y-auto flex-1">
          <p className="text-slate-600 mb-4">
            Currently viewing data for Player ID: <span className="font-mono font-semibold">{playerId}</span>
          </p>
          
          {/* Placeholder for your complex future grids */}
          <div className="h-64 border-2 border-dashed border-slate-300 rounded flex items-center justify-center bg-slate-50">
            <span className="text-slate-400 font-medium">Complex Attendance & Ledger Grids will go here</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
          <button onClick={closeModal} className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-100 transition-colors">
            Close
          </button>
          <button className="px-4 py-2 bg-sfalightblue text-white rounded hover:opacity-90 transition-opacity">
            Edit Player
          </button>
        </div>
      </div>
    </div>
  );
}