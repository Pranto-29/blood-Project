


import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyDonationRequests = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);
  const size = 8;

  const [filter, setFilter] = useState("all");
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / size);
   const [selectedRequest, setSelectedRequest] = useState(null);
   const [editData, setEditData] = useState(null);
  // ================= FETCH =================
  const fetchData = async () => {
    if (!user?.email) return;

    setLoading(true);
    try {
      const res = await axiosSecure.get(
        `/my-request?page=${page}&size=${size}&filter=${filter}`
      );

      setRequests(res.data.request || []);
      setTotal(res.data.totalRequest || 0);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?.email, page, filter]);

  // ================= STATUS UPDATE (FIXED) =================
  const updateStatus = async (id, status) => {
    try {
      const res = await axiosSecure.patch(`/requests/${id}`, {
        donation_status: status,
      });

      if (res.data.success) {
        Swal.fire("Success", "Status Updated", "success");

        //  REAL-TIME UI UPDATE (no refetch needed)
        setRequests((prev) =>
          prev.map((item) =>
            item._id === id
              ? { ...item, donation_status: status }
              : item
          )
        );
      }
    } catch (err) {
      Swal.fire("Error", "Update failed", "error",err);
    }
  };

  // ================= DELETE (FIXED) =================
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
   const res = await  axiosSecure.delete(`/my-requests/${id}`)

    if (res.data?.success) {
      Swal.fire({
        icon: "success",
        title: "Deleted successfully",
      });

      // UI update (instant remove)
      setRequests((prev) =>
        prev.filter((item) => item._id !== id)
      );

      setTotal((prev) => prev - 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Delete failed",
        text: "Server did not confirm deletion",
      });
    }
  } catch (err) {
    console.log("DELETE ERROR:", err);

    Swal.fire({
      icon: "error",
      title: "Delete failed",
      text: err?.response?.data?.message || "Something went wrong",
    });
  }
  console.log("Delete function executed for ID:", id);
};
console.log("REQUESTS:", requests);



  // ================= EDIT =================
  const handleEdit = (id) => {
    navigate(`/dashboard/add-request/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 gap-3">

        <h2 className="text-2xl font-bold text-red-600">
          🩸 My Donation Requests
        </h2>

        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(0);
          }}
          className="border px-3 py-2 rounded"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
          <option value="canceled">Canceled</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">

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

            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-5">
                  Loading...
                </td>
              </tr>
            ) : requests.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-5">
                  No Requests Found
                </td>
              </tr>
            ) : (
              requests.map((req) => (
                <tr key={req._id} className="text-center border-b">

                  <td className="p-3">{req.recipient_name}</td>

                  <td className="p-3">
                    {req.recipient_district}, {req.recipient_upazila}
                  </td>

                  <td className="p-3 text-red-600 font-bold">
                    {req.blood_group}
                  </td>
                



                  {/* STATUS */}
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-white text-xs
                      ${
                        req.donation_status === "pending"
                          ? "bg-yellow-500"
                          : req.donation_status === "inprogress"
                          ? "bg-blue-500"
                          : req.donation_status === "done"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }
                    `}>
                      {req.donation_status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3 space-x-1">

                    <button
                      onClick={() => handleEdit(req._id)}
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
                      onClick={() => updateStatus(req._id, "inprogress")}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                    >
                      inprogress
                    </button>

                    <button
                      onClick={() => updateStatus(req._id, "done")}
                      className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                    >
                      Done
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

                  <td className="p-3 text-gray-500 text-xs">
                    {new Date(req.createdAt).toLocaleDateString()}
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

        {/* ================= MODAL ================= */}
{selectedRequest && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-white w-[92%] md:w-[450px] rounded-2xl shadow-2xl p-6 relative">

      {/* CLOSE */}
      <button
        onClick={() => setSelectedRequest(null)}
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-600 transition"
      >
        ✕
      </button>

      {/* TITLE */}
      <h2 className="text-xl font-bold text-center mb-6 text-red-500">
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
          <span className="font-medium text-gray-600">Hospital Name </span>
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

        <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
          <span className="font-medium text-gray-600">Date</span>
          <span className="text-gray-500 text-xs">
            {new Date(selectedRequest.createdAt).toLocaleString()}
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

      {/* PAGINATION */}
      <div className="flex justify-center mt-5 gap-2">

        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-3 py-1 border rounded ${
              page === num ? "bg-red-500 text-white" : ""
            }`}
          >
            {num + 1}
          </button>
        ))}

        <button
          disabled={page + 1 >= totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default MyDonationRequests;

