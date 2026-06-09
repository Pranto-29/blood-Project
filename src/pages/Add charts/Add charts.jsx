
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const AddCharts = () => {
  const [stats, setStats] = useState({
    pending: 20,
    inprogress: 5,
    done: 15,
    canceled: 0,
  });

  const auth = getAuth();

  // ===== FETCH DATA =====
  const fetchStats = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const token = await user.getIdToken();

      const res = await fetch(
        "http://localhost:5000/my-request?page=0&size=1000",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      const requests = data.request || [];

      const newStats = {
        pending: requests.filter((r) => r.donation_status === "pending").length,
        inprogress: requests.filter((r) => r.donation_status === "inprogress").length,
        done: requests.filter((r) => r.donation_status === "done").length,
        canceled: requests.filter((r) => r.donation_status === "canceled").length,
      };

      setStats(newStats);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStats();

    const handler = () => fetchStats();
    window.addEventListener("stats-update", handler);

    return () => window.removeEventListener("stats-update", handler);
  }, []);

  const total =
    stats.pending + stats.inprogress + stats.done + stats.canceled;

  const percent = (val) =>
    total ? Math.round((val / total) * 100) : 0;

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-red-600">
          🩸 Blood Donation Analytics
        </h1>
        <p className="text-gray-500">
          Live dashboard overview
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold text-yellow-500">{stats.pending}</h2>
          <p className="text-xs text-gray-400">{percent(stats.pending)}%</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">In Progress</p>
          <h2 className="text-2xl font-bold text-blue-500">{stats.inprogress}</h2>
          <p className="text-xs text-gray-400">{percent(stats.inprogress)}%</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Done</p>
          <h2 className="text-2xl font-bold text-green-500">{stats.done}</h2>
          <p className="text-xs text-gray-400">{percent(stats.done)}%</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Canceled</p>
          <h2 className="text-2xl font-bold text-gray-600">{stats.canceled}</h2>
          <p className="text-xs text-gray-400">{percent(stats.canceled)}%</p>
        </div>

      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* BAR CHART (Fake Weekly Data) */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">📊 Weekly Blood Requests</h2>

          <div className="space-y-3">

            {[
              { day: "Mon", value: stats.done },
              { day: "Tue", value: stats.pending },
              { day: "Wed", value: stats.inprogress },
              { day: "Thu", value: stats.done },
              { day: "Fri", value: stats.pending },
              { day: "Sat", value: stats.done },
              { day: "Sun", value: stats.canceled },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm">
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-red-500 h-2 rounded"
                    style={{ width: `${item.value * 10}%` }}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* PIE CHART STYLE */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold mb-4">🩸 Status Overview</h2>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>🟡 Pending</span>
              <span>{stats.pending}</span>
            </div>

            <div className="flex justify-between">
              <span>🔵 In Progress</span>
              <span>{stats.inprogress}</span>
            </div>

            <div className="flex justify-between">
              <span>🟢 Done</span>
              <span>{stats.done}</span>
            </div>

            <div className="flex justify-between">
              <span>⚫ Canceled</span>
              <span>{stats.canceled}</span>
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
              Total Requests: {total}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default AddCharts;