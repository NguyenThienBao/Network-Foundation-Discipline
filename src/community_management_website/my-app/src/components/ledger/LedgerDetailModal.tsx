"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function LedgerDetailModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Bound to ?playerId= in the URL for financial drill-down
  const playerId = searchParams.get("playerId");

  if (!playerId) return null;

  const closeModal = () => {
    router.push("/ledger");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col relative overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-sfablue text-white">
          <div>
            <h2 className="text-xl font-bold">Transaction History</h2>
            <p className="text-xs text-sfalightblue font-mono">Statement for Player: <span className="text-xs font-bold text-sfalightblue font-mono">{playerId}</span></p>
          </div>
          <button onClick={closeModal} className="text-white/70 hover:text-white transition-colors text-3xl">&times;</button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50">
          {/* Financial Summary Cards in Modal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">Total Charges</span>
              <p className="text-2xl font-bold text-sfablue">$450.00</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">Total Paid</span>
              <p className="text-2xl font-bold text-sfagreen">$400.00</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase">Outstanding</span>
              <p className="text-2xl font-bold text-sfared">$50.00</p>
            </div>
          </div>

          {/* Placeholder for Detailed Ledger Grid */}
          <div className="bg-white rounded-lg border border-slate-200 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-slate-400 italic">Detailed Ledger Entry List (Charges vs Payments)</p>
              <p className="text-xs text-slate-300 mt-2">Tabular RAG Service will parse this history for insights</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-white flex justify-between items-center">
          <button className="text-sfared text-sm font-bold hover:underline">
            Void Last Transaction
          </button>
          <div className="flex gap-3">
            <button onClick={closeModal} className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-50">
              Close
            </button>
            <button className="px-4 py-2 bg-sfalightblue text-white rounded font-bold hover:opacity-90">
              New Adjustment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}