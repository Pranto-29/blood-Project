
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


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

  // 🔥 FETCH DATA
  const fetchData = async () => {
    if (!user?.email) return;

    setLoading(true);
    try {
      const res = await axiosSecure.get(
        `/my-request?page=${page}&size=${size}`
      );

      setRequests(res.data.request);
      setTotal(res.data.totalRequest);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?.email, page]);

  // STATUS UPDATE
  const updateStatus = async (id, status) => {
    try {
      await axiosSecure.patch(`/requests/${id}`, {
        donation_status: status,
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // (Cancel)
  // const handleDelete = async (id) => {
  //   const confirm = window.confirm("Are you sure to delete?");
  //   if (!confirm) return;

  //   try {
  //     await axiosSecure.delete(`/my-requests/${id}`);
  //     fetchData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleEdit = (id) => {
  //   navigate(`/dashboard/edit-request/${id}`);
  // };

  const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "This request will be deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    try {
      await axiosSecure.delete(`/my-requests/${id}`);

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Request has been deleted.",
        timer: 1500,
        showConfirmButton: false,
      });

      fetchData();
    } catch (err) {
      Swal.fire("Error!", "Something went wrong", "error");
    }
  }
};

                      const handleEdit = (id) => {
  console.log("edit clicked:", id);
  navigate(`/dashboard/add-request/${id}`);
};
                      <button
                        onClick={() => handleEdit(req._id)}
                        className="bg-gray-500 text-white px-2 py-1 rounded text-xs"
                      >
                        Edit
                      </button>
  const totalPages = Math.ceil(total / size);

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
              requests
                .filter((req) =>
                  filter === "all"
                    ? true
                    : req.donation_status === filter
                )
                .map((req) => (
                  <tr key={req._id} className="text-center border-b">

                    <td className="p-3">{req.recipient_name}</td>

                    <td className="p-3">
                      {req.recipient_district}, {req.recipient_upazila}
                    </td>

                    <td className="p-3 font-bold text-red-600">
                      {req.blood_group}
                    </td>

                    {/* STATUS */}
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-white text-xs font-semibold
                          ${
                            req.donation_status === "pending"
                              ? "bg-yellow-500"
                              : req.donation_status === "inprogress"
                              ? "bg-blue-500"
                              : req.donation_status === "done"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }
                        `}
                      >
                        {req.donation_status}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="p-3 space-x-1">

                      {/* EDIT */}

                <button
                        onClick={() => handleEdit(req._id)}
                        className="bg-gray-500 text-white px-2 py-1 rounded text-xs"
                      >
                        Edit
                      </button>

                      {/* STATUS */}
                      <button
                        onClick={() => updateStatus(req._id, "inprogress")}
                        className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                      >
                        In Progress
                      </button>

                      <button
                        onClick={() => updateStatus(req._id, "done")}
                        className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                      >
                        Done
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => handleDelete(req._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                      >
                        Cancel
                      </button>

                    </td>

                    <td className="p-3">
                      {new Date(req.createdAt).toLocaleDateString()}
                    </td>

                  </tr>
                ))
            )}

          </tbody>
        </table>
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