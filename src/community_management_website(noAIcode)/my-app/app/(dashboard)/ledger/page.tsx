"use client";

import { useRouter } from "next/navigation";
import PageHeader from "@/src/components/general/PageHeader";
import LedgerDetailModal from "@/src/components/ledger/LedgerDetailModal";
import PrintLedgerModal from "@/src/components/PrintLedgerModal"

const DUMMY_LEDGER = [
  { id: "101", name: "John Doe", team: "Red Dragons", balance: 10.00, totalDebt: 150.00 },
  { id: "102", name: "Jane Smith", team: "Blue Falcons", balance: -45.00, totalDebt: 210.00 },
  { id: "103", name: "Mike Johnson", team: "Red Dragons", balance: 0.00, totalDebt: 85.00 },
  { id: "104", name: "Sarah Lee", team: "Yellow Tigers", balance: 120.00, totalDebt: 0.00 },
];

export default function LedgerPage() {
  const router = useRouter();

  return (
    <div className="relative">
      <PageHeader title="Fees Management">
        <button className="bg-sfagreen text-white px-4 py-2 rounded shadow-sm hover:opacity-90 transition-opacity text-sm font-bold">
          Quick Pay (Cash)
        </button>
        <button className="border border-slate-300 text-sfablue bg-white px-4 py-2 rounded hover:bg-slate-50 text-sm font-medium">
          Filter by Debt
        </button>
        <button 
          className="border border-slate-300 text-sfablue bg-white px-4 py-2 rounded hover:bg-slate-50 text-sm font-medium"
          onClick={() => router.push('?modal=printLedger')}
        >
          Export Statements
        </button>
      </PageHeader>

      {/* Main Ledger Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] text-slate-400 font-bold uppercase tracking-[0.1em]">
                <th className="p-4">Player Profile</th>
                <th className="p-4">Player ID</th>
                <th className="p-4 text-right">Debt</th>
                <th className="p-4 text-right">Current Balance</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {DUMMY_LEDGER.map((player) => (
                <tr 
                  key={player.id}
                  onClick={() => router.push(`/ledger?playerId=${player.id}`)}
                  className="hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  {/* Column 1: Profile */}
                  <td className="px-4 py-2">
                    <div className="flex flex-col">
                      <span className="font-bold text-sfablue">{player.name}</span>
                      <span className="text-xs text-slate-400">{player.team}</span>
                    </div>
                  </td>

                  {/* Column 2: ID */}
                  <td className="px-4 py-2">
                    <span className="font-mono text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      {player.id}
                    </span>
                  </td>

                  {/* Column 3: Total Debt (Accumulated Charges) */}
                  <td className="px-4 py-2 text-right text-slate-500 font-medium">
                    ${player.totalDebt.toFixed(2)}
                  </td>

                  {/* Column 4: Current Balance (The Bottom Line) */}
                  <td className="px-4 py-2 text-right">
                    {player.balance < 0 ? (
                      <div className="flex flex-col items-end">
                        <span className="text-sfared font-bold">-${Math.abs(player.balance).toFixed(2)}</span>
                        <span className="text-[10px] text-sfared/60 uppercase font-bold tracking-tighter">Owed</span>
                      </div>
                    ) : player.balance > 0 ? (
                      <div className="flex flex-col items-end">
                        <span className="text-sfagreen font-bold">+${player.balance.toFixed(2)}</span>
                        <span className="text-[10px] text-sfagreen/60 uppercase font-bold tracking-tighter">Credit</span>
                      </div>
                    ) : (
                      <span className="text-slate-300 font-medium">$0.00</span>
                    )}
                  </td>

                  {/* Column 5: Action Hint */}
                  <td className="px-4 py-2 text-right w-10">
                    <span className="text-slate-200 group-hover:text-sfalightblue transition-colors text-xl">
                      ›
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <LedgerDetailModal />
      <PrintLedgerModal />
    </div>
  );
}