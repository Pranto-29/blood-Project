

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import axios from "axios";
import { FiCheck, FiX, FiTrash2, FiEye } from "react-icons/fi";

const DonationRequest = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user: currentUser } = useContext(AuthContext);

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  const [districtFilter, setDistrictFilter] = useState("");
  const [upazilaFilter, setUpazilaFilter] = useState("");
  const [bloodFilter, setBloodFilter] = useState("");
  const [search, setSearch] = useState("");

  // Load location data
useEffect(() => {
  const fetchRequests = async () => {
    setLoading(true);
    try {
      let res;

      if (currentUser?.role === "donor") {
        res = await axiosSecure.get("/my-request");

        console.log("MY REQUEST:", res.data);

        setRequests(
          Array.isArray(res.data)
            ? res.data
            : res.data.request || []
        );

      } else {
        res = await axiosSecure.get("/requests");

        console.log("ALL REQUEST:", res.data);

        setRequests(
          Array.isArray(res.data)
            ? res.data
            : res.data.request || []
        );
      }

    } catch (err) {
      console.log(err);
      setRequests([]); // safety
    } finally {
      setLoading(false);
    }
  };

  if (currentUser) {
    fetchRequests();
  }
}, [currentUser, axiosSecure]);
  // Status update
  const handleStatusUpdate = async (id, status) => {
    try {
      await axiosSecure.patch(`/update/request/status/${id}`, {
        donation_status: status,
      });

      setRequests(prev =>
        prev.map(r =>
          r._id === id ? { ...r, donation_status: status } : r
        )
      );
    } catch (err) {
      console.log(err);
      alert("Status update failed");
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      if (currentUser?.role === "admin") {
        await axiosSecure.delete(`/admin-request/${id}`);
      } else if (currentUser?.role === "donor") {
        await axiosSecure.delete(`/my-request/${id}`);
      }

      setRequests(prev => prev.filter(r => r._id !== id));
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  // Filter logic
  const filteredRequests = requests.filter(r =>
    (!search ||
      r.recipient_name?.toLowerCase().includes(search.toLowerCase())) &&
    (!bloodFilter || r.blood_group === bloodFilter)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 p-6">

      {/* TITLE */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-600">
          🩸 Donation Requests
        </h1>
        <p className="text-gray-500">
          Manage blood donation requests easily
        </p>
      </div>

      {/* FILTERS */}
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">

        <input
          className="border p-2 rounded-lg focus:ring-2 focus:ring-red-400"
          placeholder="Search name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded-lg"
          value={districtFilter}
          onChange={e => setDistrictFilter(e.target.value)}
        >
          <option value="">District</option>
          {districts.map(d => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded-lg"
          value={upazilaFilter}
          onChange={e => setUpazilaFilter(e.target.value)}
        >
          <option value="">Upazila</option>
          {filteredUpazilas.map(u => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded-lg"
          value={bloodFilter}
          onChange={e => setBloodFilter(e.target.value)}
        >
          <option value="">Blood Group</option>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
            <option key={bg}>{bg}</option>
          ))}
        </select>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      {/* CARDS */}
      <div className="space-y-5">

        {filteredRequests.map(req => (
          <div
            key={req._id}
            className="bg-white shadow-xl rounded-2xl p-5 flex flex-col md:flex-row justify-between hover:shadow-2xl transition"
          >

            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800"> Request Name :
                {req.recipient_name}
              </h2>
              <p className="text-blue-600">Request Email :{req.requester_email}</p>
              <p className="text-gray-600"> Hospital Name :{req.hospital_name}</p>
              <p className="text-gray-600">Blood Group: {req.blood_group}</p>
              <p className="text-gray-600">District Name: {req.recipient_district}</p>
              <p className="text-gray-600">Upazila Name: {req.recipient_upazila}</p>
            
             

              <button
                onClick={() => navigate(`/requests/${req._id}`)}
                className="mt-3 flex items-center gap-1 text-red-500 font-medium hover:underline"
              >
                <FiEye /> View Details
              </button>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end gap-3 mt-4 md:mt-0">

              {/* STATUS */}
              <span className={`px-3 py-1 rounded-full text-sm font-bold
                ${req.donation_status === "pending" && "bg-yellow-100 text-yellow-700"}
                ${req.donation_status === "approved" && "bg-green-100 text-green-700"}
                ${req.donation_status === "rejected" && "bg-red-100 text-red-700"}
              `}>
                {req.donation_status}
              </span>

              {/* ADMIN / VOLUNTEER */}
              {(currentUser?.role === "admin" || currentUser?.role === "volunteer") && (
                <div className="flex gap-2">

                  <button
                    onClick={() => handleStatusUpdate(req._id, "approved")}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg"
                  >
                    <FiCheck />
                  </button>

                  <button
                    onClick={() => handleStatusUpdate(req._id, "rejected")}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    <FiX />
                  </button>

                  {currentUser?.role === "admin" && (
                    <button
                      onClick={() => handleDelete(req._id)}
                      className="bg-gray-700 text-white px-3 py-1 rounded-lg"
                    >
                      <FiTrash2 />
                    </button>
                  )}

                </div>
              )}

              {/* DONOR */}
              {currentUser?.role === "donnar" && (
                <button
                  onClick={() => handleDelete(req._id)}
                  className="bg-gray-700 text-white px-3 py-1 rounded-lg"
                >
                  <FiTrash2 />
                </button>
              )}

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default DonationRequest;