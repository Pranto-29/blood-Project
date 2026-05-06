

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DonorDashboardHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

     const [selectedRequest, setSelectedRequest] = useState(null);
     const [editData, setEditData] = useState(null);
    // ================= FETCH =================

  // FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) return;

      setLoading(true);
      try {
        const res = await axiosSecure.get(`/my-request?size=3`);
        setRequests(res.data.request || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.email]);

  const recentRequests = requests.slice(0, 3);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This request will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/my-requests/${id}`);
      if (res.data?.success) {
        setRequests((prev) => prev.filter((r) => r._id !== id));
        Swal.fire("Deleted!", "Request removed", "success");
      }
    } catch (err) {
      Swal.fire("Error", "Delete failed", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await axiosSecure.patch(`/requests/${id}`, {
        donation_status: status,
      });

      if (res.data.success) {
        setRequests((prev) =>
          prev.map((r) => (r._id === id ? { ...r, donation_status: status } : r))
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const statusStyle = {
    pending: "bg-yellow-500",
    inprogress: "bg-blue-500",
    done: "bg-green-500",
    canceled: "bg-gray-500",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* WELCOME */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h1 className="text-2xl font-bold text-pink-500 mb-2">
          Welcome Back  {user?.displayName || "Donnar"}
        </h1>
         <h2 className="text-xl font-bold">{user?.email}</h2>
        <p className="text-gray-600 mt-1">
          Manage your donation requests and help save lives.
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-gray-500 mb-4">Loading dashboard...</p>
      )}

      {/* RECENT REQUESTS */}
      {recentRequests.length > 0 && (
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-bold mb-4">🧾 Recent Donation Requests</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">

              <thead className="bg-red-500 text-white">
                <tr>
                  <th className="p-3">Recipient</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Blood</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>

              <tbody>
                {recentRequests.map((req) => (
                  <tr key={req._id} className="text-center border-b hover:bg-gray-50">

                    <td className="p-3">{req.recipient_name}</td>

                    <td className="p-3">
                      {req.recipient_district}, {req.recipient_upazila}
                    </td>

                    <td className="p-3 text-red-600 font-bold">
                      {req.blood_group}
                    </td>

                    <td className="p-3">
                      <span className={`px-2 py-1 text-xs rounded text-white ${statusStyle[req.donation_status]}`}>
                        {req.donation_status}
                      </span>
                    </td>

                    <td className="p-3 space-x-1">

                      <button
                        onClick={() => navigate(`/dashboard/add-request/${req._id}`)}
                        className="bg-gray-500 text-white px-2 py-1 rounded text-xs"
                      >
                        Edit
                      </button>

      

                      <button
                                   onClick={() => setSelectedRequest(req)}
                     className="bg-gray-500 text-white px-2 py-1 rounded text-xs"
                       >
                       View
                      </button>

                      <button
                        onClick={() => updateStatus(req._id, "done")}
                        className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                      >
                        Done
                      </button>

                        <button
                        onClick={() => updateStatus(req._id, "inprogress")}
                        className="bg-pink-500 text-white px-2 py-1 rounded text-xs"
                      >
                     Improgress
                      </button>

                      <button
                        onClick={() => updateStatus(req._id, "canceled")}
                        className="bg-gray-600 text-white px-2 py-1 rounded text-xs"
                      >
                        Cancel
                      </button>


                      <button
                        onClick={() => handleDelete(req._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
                 {/* ================= MODAL ================= */}
{selectedRequest && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-white w-[92%] md:w-[450px] rounded-2xl shadow-2xl p-6 relative">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedRequest(null)}
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-600 transition"
      >
        ✕
      </button>

      {/* TITLE */}
      <h2 className="text-xl font-bold text-center mb-4 text-red-500">
        🩸 Donation Request Details
      </h2>

      {/* DETAILS */}
      <div className="space-y-3 text-sm">

        <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
          <span className="font-medium text-gray-600">Recipient</span>
          <span className="font-semibold">{selectedRequest.recipient_name}</span>
        </div>

        <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
          <span className="font-medium text-gray-600">Blood Group</span>
          <span className="text-red-500 font-bold">
            {selectedRequest.blood_group}
          </span>
        </div>

        <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
          <span className="font-medium text-gray-600">Hospital Name</span>
          <span className="text-red-500 font-bold">
            {selectedRequest.hospital_name}
          </span>
        </div>

        <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
          <span className="font-medium text-gray-600">Status</span>
          <span>{selectedRequest.donation_status}</span>
        </div>

        <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
          <span className="font-medium text-gray-600">Location</span>
          <span>
            {selectedRequest.recipient_district}, {selectedRequest.recipient_upazila}
          </span>
        </div>

        {/*  ONLY ONE DATE BLOCK */}
        <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
          <span className="font-medium text-gray-600">Date</span>
          <span className="text-gray-500 text-xs">
            {selectedRequest.createdAt
              ? new Date(selectedRequest.createdAt).toLocaleString()
              : "No date found"}
          </span>
        </div>

      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedRequest(null)}
        className="mt-5 w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition"
      >
        Close
      </button>

    </div>
  </div>
)}
          </div>
        </div>
      )}

      {/* VIEW ALL */}
      {requests.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/dashboard/my-requests")}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-blue-400"
          >
            View All Requests
          </button>
        </div>
      )}

    </div>
    
  );
};

export default DonorDashboardHome;