import React from "react";
import KpiCard from "./KpiCard";
import { FiUsers, FiDollarSign, FiActivity } from "react-icons/fi";

function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <KpiCard
        title="Customers"
        value="1,200"
        icon={<FiUsers />}
        change={5}
      />
      <KpiCard
        title="Revenue"
        value="$15,000"
        icon={<FiDollarSign />}
        change={-3}
      />
      <KpiCard
        title="Performance"
        value="85%"
        icon={<FiActivity />}
        change={2}
      />
    </div>
  );
}

export default Dashboard;