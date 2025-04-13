import React from "react";

function KpiCard({ title, value, icon, change }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex items-center justify-between">
      {/* 아이콘 */}
      <div className="p-3 bg-gray-700 rounded-md border-2 border-transparent">
        {icon}
      </div>

      {/* 텍스트 */}
      <div className="flex flex-col items-start flex-1 ml-4">
        <h3 className="text-lg font-semibold text-gray-400">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>

      {/* 증감 표시 */}
      <div
        className={`px-2 py-1 rounded-md text-sm font-bold ${
          change > 0
            ? "bg-green-300 text-green-700"
            : "bg-red-300 text-red-700"
        }`}
      >
        {change > 0 ? `+${change}%` : `${change}%`}
      </div>
    </div>
  );
}

export default KpiCard;