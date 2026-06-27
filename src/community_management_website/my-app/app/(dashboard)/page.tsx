import PageHeader from "@/src/components/general/PageHeader";

export default function DashboardHome() {
  return (
    <div>
      <PageHeader title="Dashboard Overview">
        {/* Toolbar Actions */}
      </PageHeader>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-600">
          Welcome to the CommuniPay & Play admin panel. The sidebar should now be visible on the left!
        </p>
      </div>
    </div>
  );
}