
// src/pages/Dashboard/AdminDashboardHome/AdminDashboardHome.jsx
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaUsers, FaMoneyBill, FaList } from "react-icons/fa";

const AdminDashboardHome = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalFunding: 0,
    totalDonationRequests: 0,
  });

  useEffect(() => {
    // API থেকে stats fetch
    fetch("/api/admin/dashboard-stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name || "Admin"}!</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded shadow flex items-center gap-4">
          <FaUsers className="text-4xl text-red-600" />
          <div>
            <p className="text-gray-500">Total Users</p>
            <p className="text-2xl font-bold">{stats.totalUsers}</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded shadow flex items-center gap-4">
          <FaMoneyBill className="text-4xl text-green-600" />
          <div>
            <p className="text-gray-500">Total Funding</p>
            <p className="text-2xl font-bold">${stats.totalFunding}</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded shadow flex items-center gap-4">
          <FaList className="text-4xl text-blue-600" />
          <div>
            <p className="text-gray-500">Donation Requests</p>
            <p className="text-2xl font-bold">{stats.totalDonationRequests}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
