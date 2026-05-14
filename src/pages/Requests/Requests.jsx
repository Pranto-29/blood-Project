

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../houk/useAxiosSecure";
import { FiEye } from "react-icons/fi";

const Requests = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [bloodFilter, setBloodFilter] = useState("");

  // Load ONLY pending requests (PUBLIC PAGE)
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);

        const res = await axiosSecure.get("/requests");

        const allData = Array.isArray(res.data)
          ? res.data
          : res.data.request || [];

        // ONLY PENDING
        const pending = allData.filter(
          (item) => item.donation_status === "pending"
        );

        setRequests(pending);
      } catch (err) {
        console.log(err);
        setRequests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [axiosSecure]);

  // Filter (search + blood group)
  const filteredRequests = requests.filter(
    (r) =>
      (!search ||
        r.recipient_name?.toLowerCase().includes(search.toLowerCase())) &&
      (!bloodFilter || r.blood_group === bloodFilter)
  );

  return (
    <div className="min-h-screen p-6 bg-gray-50">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        🩸 Pending Blood Donation Requests
      </h1>

      {/* FILTER */}
      <div className="flex gap-3 mb-6 justify-center">
        <input
          className="border p-2 rounded"
          placeholder="Search recipient name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={bloodFilter}
          onChange={(e) => setBloodFilter(e.target.value)}
        >
          <option value="">Blood Group</option>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
            <option key={bg}>{bg}</option>
          ))}
        </select>
      </div>

      {/* LOADING */}
      {loading && <p className="text-center">Loading...</p>}

      {/* CARDS */}
      <div className="space-y-4">
        {filteredRequests.map((req) => (
          <div
            key={req._id}
            className="bg-white p-5 rounded shadow flex justify-between"
          >
            {/* LEFT SIDE */}
            <div>
              <p className="font-bold text-xl text-pink-500">
                {req.recipient_name}
              </p>

              <p>📍 Location: {req.recipient_district}, {req.recipient_upazila}</p>
              <p>🩸 Blood Group: {req.blood_group}</p>
              <p>📅 Date: {req.date}</p>
              <p>⏰ Time: {req.time}</p>

              {/* VIEW BUTTON (PRIVATE PAGE) */}
              <button
                onClick={() => navigate(`/requests/${req._id}`)}
                className="text-red-500 flex items-center gap-1 mt-2 hover:underline"
              >
                <FiEye /> View Details
              </button>
            </div>

            {/* STATUS */}
            <div className="flex items-start">
              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded">
                {req.donation_status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;