"use client";

import { useRouter } from "next/navigation";
import PageHeader from "@/src/components/general/PageHeader";
import PlayerDetailModal from "@/src/components/players/PlayerDetailModal";
import AddPlayerModal from "@/src/components/players/AddPlayerModal"

// Temporary dummy data matching your database definitions
const DUMMY_PLAYERS = [
  { id: "101", name: "John Doe", team: "Red Dragons", is_face_registered: true, joinDate: "2023-01-15", currentBalance: 15.00 },
  { id: "102", name: "Jane Smith", team: "Blue Falcons", is_face_registered: false, joinDate: "2023-03-22", currentBalance: -25.50 },
  { id: "103", name: "Mike Johnson", team: "Red Dragons", is_face_registered: true, joinDate: "2023-11-05", currentBalance: 0.00 },
];

export default function PlayersPage() {
  const router = useRouter();

  // Helper function to color-code finances
  const renderBalance = (balance: number) => {
    if (balance < 0) return <span className="text-sfared font-semibold">-${Math.abs(balance).toFixed(2)}</span>;
    if (balance > 0) return <span className="text-sfagreen font-semibold">+${balance.toFixed(2)}</span>;
    return <span className="text-slate-500 font-medium">$0.00</span>;
  };

  return (
    <div className="relative">
      {/* 1. The Reusable Header with Toolbar */}
      <PageHeader title="Players Overview">
        {/* Toolbar Actions */}
        <button 
          className="bg-sfalightblue text-white px-4 py-2 rounded shadow-sm hover:opacity-90 transition-opacity text-sm font-medium"
          onClick={() => router.push('?modal=addPlayer')}
        >
          + Add New Player
        </button>
        <button className="border border-slate-300 text-sfablue bg-slate-50 px-4 py-2 rounded hover:bg-slate-100 transition-colors text-sm font-medium">
          Filter by Team
        </button>
        <button className="border border-slate-300 text-sfablue bg-slate-50 px-4 py-2 rounded hover:bg-slate-100 transition-colors text-sm font-medium">
          Export Roster
        </button>
      </PageHeader>

      {/* 2. The Data Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Player Name</th>
                <th className="p-4 font-medium">Team</th>
                <th className="p-4 font-medium text-center">Face ID</th>
                <th className="p-4 font-medium">Join Date</th>
                <th className="p-4 font-medium text-right">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {DUMMY_PLAYERS.map((player) => (
                <tr 
                  key={player.id}
                  // Appends ?playerId=ID to the URL, triggering the Modal
                  onClick={() => router.push(`/players?playerId=${player.id}`)}
                  className="hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <td className="p-4 text-sfablue font-medium group-hover:text-sfalightblue transition-colors">
                    {player.name}
                  </td>
                  <td className="p-4 text-slate-600">
                    <span className="bg-slate-100 text-slate-700 py-1 px-2 rounded text-xs font-medium border border-slate-200">
                      {player.team}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {player.is_face_registered ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sfagreen/10 text-sfagreen text-xs" title="Registered">✓</span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400 text-xs" title="Not Registered">−</span>
                    )}
                  </td>
                  <td className="p-4 text-slate-500 text-sm">
                    {new Date(player.joinDate).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-right">
                    {renderBalance(player.currentBalance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. The URL-Bound Modal Component */}
      <PlayerDetailModal />
      <AddPlayerModal />
    </div>
  );
}