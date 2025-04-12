export default function Sidebar() {
    return (
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Smart Factory</h2>
        <ul className="space-y-4">
          <li>📊 Dashboard</li>
          <li>⚙️ Settings</li>
          <li>🧾 Reports</li>
        </ul>
      </div>
    )
  }