

// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../../houk/useAxiosSecure';

// const MyRequest = () => {
//   const axiosSecure = useAxiosSecure();

//   const [requests, setRequests] = useState([]);
//   const [totalRequests, setTotalRequests] = useState(0);
//   const [page, setPage] = useState(0);
//   const size = 5;
//   const [loading, setLoading] = useState(false);
//   const [selectedRequest, setSelectedRequest] = useState(null);

//   // Fetch requests
//   const fetchRequests = () => {
//     setLoading(true);
//     axiosSecure
//       .get(`/my-request?page=${page}&size=${size}`)
//       .then(res => {
//         setRequests(res.data.request);
//         setTotalRequests(res.data.totalRequest);
//       })
//       .catch(err => console.error(err))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, [axiosSecure, page]);

//   const totalPages = Math.ceil(totalRequests / size);

//   const statusColor = (status) => {
//     switch (status) {
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       case 'approved': return 'bg-green-100 text-green-800';
//       case 'rejected': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   // Delete request
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this request?");
//     if (!confirmDelete) return;

//     try {
//       await axiosSecure.delete(`/my-request/${id}`);
//       setRequests(prev => prev.filter(r => r._id !== id));
//       setTotalRequests(prev => prev - 1);
//       alert('Request deleted successfully');
//     } catch (err) {
//       console.error(err.response?.data || err);
//       alert('Failed to delete request');
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-red-600 mb-2">My Donation Requests</h1>
//         <p className="text-gray-600 text-lg">
//           You have {totalRequests} donation request{totalRequests !== 1 && 's'}
//         </p>
//       </div>

//       {loading && <p className="text-center text-gray-500">Loading requests...</p>}
//       {!loading && requests.length === 0 && <p className="text-center text-gray-500">No donation requests found.</p>}

//       <div className="space-y-6">
//         {requests.map(req => (
//           <div key={req._id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-2xl transition">
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold mb-1">{req.recipient_name}</h3>
//               <p className="text-gray-600"><span className="font-medium">District:</span> {req.recipient_district}</p>
//               <p className="text-gray-600"><span className="font-medium">Upazila:</span> {req.recipient_upazila}</p>
//               <p className="text-gray-600"><span className="font-medium">Hospital:</span> {req.hospital_name}</p>
//               <p className="text-gray-600"><span className="font-medium">Blood Group:</span> {req.blood_group}</p>
//               <p className="text-gray-400 text-sm mt-1">Requested At: {new Date(req.createdAt).toLocaleString()}</p>
//             </div>

//             <div className="mt-4 md:mt-0 flex flex-col md:items-end space-y-2">
//               <span
//                 className={`px-3 py-1 rounded-full font-semibold text-sm cursor-pointer ${statusColor(req.donation_status)}`}
//                 onClick={() => setSelectedRequest(req)}
//               >
//                 {req.donation_status.toUpperCase()}
//               </span>

//               <button
//                 onClick={() => handleDelete(req._id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center mt-8 space-x-2">
//           <button disabled={page === 0} onClick={() => setPage(prev => Math.max(prev - 1, 0))} className="px-3 py-1 border rounded disabled:opacity-50">Previous</button>
//           {[...Array(totalPages)].map((_, i) => (
//             <button key={i} onClick={() => setPage(i)} className={`px-3 py-1 border rounded ${page === i ? 'bg-blue-500 text-white' : ''}`}>{i + 1}</button>
//           ))}
//           <button disabled={page + 1 >= totalPages} onClick={() => setPage(prev => Math.min(prev + 1, totalPages - 1))} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
//         </div>
//       )}

//       {/* Modal */}
//       {selectedRequest && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-xl p-6 w-11/12 md:w-1/2">
//             <h3 className="text-2xl font-bold mb-4 text-red-600">{selectedRequest.recipient_name}</h3>
//             <p><span className="font-medium">Requester Email:</span> {selectedRequest.requester_email}</p>
//             <p><span className="font-medium">District:</span> {selectedRequest.recipient_district}</p>
//             <p><span className="font-medium">Upazila:</span> {selectedRequest.recipient_upazila}</p>
//             <p><span className="font-medium">Hospital:</span> {selectedRequest.hospital_name}</p>
//             <p><span className="font-medium">Blood Group:</span> {selectedRequest.blood_group}</p>
//             <p><span className="font-medium">Full Address:</span> {selectedRequest.full_address}</p>
//             <p><span className="font-medium">Status:</span> {selectedRequest.donation_status}</p>
//             <p><span className="font-medium">Requested At:</span> {new Date(selectedRequest.createdAt).toLocaleString()}</p>

//             <div className="mt-4 flex justify-end space-x-2">
//               <button onClick={() => setSelectedRequest(null)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Close</button>
//               <button onClick={() => { handleDelete(selectedRequest._id); setSelectedRequest(null); }} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyRequest;



// 2///

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import useAxiosSecure from "../../../houk/useAxiosSecure";

const MyDonationRequests = () => {
  const { user } = useContext(AuthContext); // logged-in donor
  const axiosSecure = useAxiosSecure();

  const [requests, setRequests] = useState([]);
  const [totalRequests, setTotalRequests] = useState(0);
  const [page, setPage] = useState(0);
  const size = 5; // number of rows per page
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  // Fetch requests from backend
  const fetchRequests = () => {
    setLoading(true);
    axiosSecure
      .get(`/my-request?page=${page}&size=${size}`)
      .then((res) => {
        setRequests(res.data.request);
        setTotalRequests(res.data.totalRequest);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRequests();
  }, [axiosSecure, page]);

  const totalPages = Math.ceil(totalRequests / size);

  // Filter requests based on status
  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter((r) => r.donation_status === filter);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        My Donation Requests
      </h1>

      {/* Filter */}
      <div className="mb-4 flex items-center gap-2">
        <span className="font-semibold">Filter by status:</span>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-red-100">
            <tr>
              <th className="py-2 px-4 text-left">Recipient Name</th>
              <th className="py-2 px-4 text-left">District</th>
              <th className="py-2 px-4 text-left">Upazila</th>
              <th className="py-2 px-4 text-left">Hospital</th>
              <th className="py-2 px-4 text-left">Blood Group</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Requested At</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Loading requests...
                </td>
              </tr>
            )}
            {!loading && filteredRequests.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No donation requests found.
                </td>
              </tr>
            )}
            {!loading &&
              filteredRequests.map((req) => (
                <tr key={req._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{req.recipient_name}</td>
                  <td className="py-2 px-4">{req.recipient_district}</td>
                  <td className="py-2 px-4">{req.recipient_upazila}</td>
                  <td className="py-2 px-4">{req.hospital_name}</td>
                  <td className="py-2 px-4">{req.blood_group}</td>
                  <td className="py-2 px-4 capitalize">{req.donation_status}</td>
                  <td className="py-2 px-4">
                    {new Date(req.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 space-x-2">
          <button
            disabled={page === 0}
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`px-3 py-1 border rounded ${
                page === i ? "bg-red-500 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page + 1 >= totalPages}
            onClick={() =>
              setPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MyDonationRequests;
