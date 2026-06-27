import Sidebar from "@/src/components/general/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-bgLight overflow-hidden">
      
      {/* Left Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area (Right Side) */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* We keep this area scrollable both vertically and horizontally */}
        <main className="flex-1 overflow-y-auto overflow-x-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}