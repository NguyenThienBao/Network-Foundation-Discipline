"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function PrintLedgerModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const isPrinting = searchParams.get("modal") === "printLedger";

  if (!isPrinting) return null;

  const closeModal = () => {
    router.push("/ledger");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden flex flex-col">
        
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-sfablue">Export Ledger Data</h2>
          <button onClick={closeModal} className="text-slate-400 hover:text-sfared text-2xl leading-none">&times;</button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-600 mb-2">Select how you want to compile the financial reports:</p>
          
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-md cursor-not-allowed bg-slate-50 opacity-70">
              <input type="radio" name="printType" disabled checked className="text-sfalightblue" />
              <span className="text-sm font-medium text-slate-700">Whole Ledger (Master View)</span>
            </label>
            
            <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-md cursor-not-allowed bg-slate-50 opacity-70">
              <input type="radio" name="printType" disabled className="text-sfalightblue" />
              <span className="text-sm font-medium text-slate-700">Separated Files by Team</span>
            </label>

            <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-md cursor-not-allowed bg-slate-50 opacity-70">
              <input type="radio" name="printType" disabled className="text-sfalightblue" />
              <span className="text-sm font-medium text-slate-700">Single Specific Player</span>
            </label>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
          <button onClick={closeModal} className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-100">
            Cancel
          </button>
          <button className="px-4 py-2 bg-slate-800 text-white rounded font-bold hover:bg-slate-700">
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  );
}