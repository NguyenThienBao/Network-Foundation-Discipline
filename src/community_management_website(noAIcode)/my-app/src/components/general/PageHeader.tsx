export default function PageHeader({ 
  title, 
  children 
}: { 
  title: string; 
  children?: React.ReactNode; 
}) {
  return (
    <div className="mb-6 flex flex-col gap-4">
      {/* Row 1: The Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-sfalightgray">{title}</h1>
      </div>

      {/* Row 2: The Toolbar (Only renders if buttons are passed in) */}
      {children && (
        <div className="flex flex-wrap gap-3 items-center p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
          {children}
        </div>
      )}
    </div>
  );
}