import React, { useState } from "react";

const ExportSystem = () => {
  const [loading, setLoading] = useState(false);

  // Dummy data (তুমি API data বসাবে এখানে)
  const users = [
    { name: "Rahim", email: "rahim@gmail.com", role: "user" },
    { name: "Karim", email: "karim@gmail.com", role: "admin" },
    { name: "Sumi", email: "sumi@gmail.com", role: "user" },
  ];

  const requests = [
    { name: "Rahim", bloodGroup: "A+", status: "Pending" },
    { name: "Karim", bloodGroup: "B+", status: "Completed" },
  ];

  // Convert JSON → CSV
  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((item) => Object.values(item).join(","));
    return [headers, ...rows].join("\n");
  };

  // Download file
  const downloadFile = (data, filename) => {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    window.URL.revokeObjectURL(url);
  };

  const handleExportUsers = () => {
    setLoading(true);
    setTimeout(() => {
      downloadFile(users, "users-data.csv");
      setLoading(false);
    }, 1000);
  };

  const handleExportRequests = () => {
    setLoading(true);
    setTimeout(() => {
      downloadFile(requests, "donation-requests.csv");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
        📥 Export System
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* USERS EXPORT */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h3 className="text-xl font-semibold mb-2">👥 Users Export</h3>
          <p className="text-gray-500 mb-4">
            Download all registered users data as CSV file.
          </p>

          <button
            onClick={handleExportUsers}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            {loading ? "Exporting..." : "Export Users"}
          </button>
        </div>

        {/* REQUESTS EXPORT */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h3 className="text-xl font-semibold mb-2">🩸 Requests Export</h3>
          <p className="text-gray-500 mb-4">
            Download all donation requests report.
          </p>

          <button
            onClick={handleExportRequests}
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
          >
            {loading ? "Exporting..." : "Export Requests"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportSystem;