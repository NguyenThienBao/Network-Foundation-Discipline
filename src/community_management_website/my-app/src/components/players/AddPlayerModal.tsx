"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function AddPlayerModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Check if the URL contains ?modal=addPlayer
  const isAdding = searchParams.get("modal") === "addPlayer";

  if (!isAdding) return null;

  const closeModal = () => {
    router.push("/players");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-sfablue">Add New Player</h2>
          <button onClick={closeModal} className="text-slate-400 hover:text-sfared text-2xl leading-none">&times;</button>
        </div>

        {/* Body Placeholder (Form) */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input type="text" placeholder="e.g. John Doe" className="w-full border border-slate-300 rounded-md p-2 bg-slate-50" disabled />
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Team Assignment</label>
            <select className="w-full border border-slate-300 rounded-md p-2 bg-slate-50" disabled>
              <option>Select a team...</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" placeholder="john@example.com" className="w-full border border-slate-300 rounded-md p-2 bg-slate-50" disabled />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Phone</label>
              <input type="tel" placeholder="+84..." className="w-full border border-slate-300 rounded-md p-2 bg-slate-50" disabled />
            </div>
          </div>
          
          <p className="text-xs text-slate-400 italic mt-2">* Face ID registration is handled separately after profile creation.</p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
          <button onClick={closeModal} className="px-4 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-100">
            Cancel
          </button>
          <button className="px-4 py-2 bg-sfalightblue text-white rounded font-bold hover:opacity-90">
            Save Player
          </button>
        </div>
      </div>
    </div>
  );
}