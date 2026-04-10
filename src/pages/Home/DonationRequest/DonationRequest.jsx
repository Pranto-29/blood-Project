// import React, { useEffect, useState, useContext } from "react";
// import useAxiosSecure from "../../../houk/useAxiosSecure";
// import { AuthContext } from "../../../context/AuthContext/AuthContext";
// import axios from "axios";
// import { FiCheck, FiX, FiTrash2, FiEdit } from "react-icons/fi";

// const DonationRequest = () => {
//   const { user: currentUser } = useContext(AuthContext); // admin, volunteer, donor
//   const axiosSecure = useAxiosSecure();

//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [districts, setDistricts] = useState([]);
//   const [upazilas, setUpazilas] = useState([]);
//   const [filteredUpazilas, setFilteredUpazilas] = useState([]);

//   const [districtFilter, setDistrictFilter] = useState("");
//   const [upazilaFilter, setUpazilaFilter] = useState("");
//   const [bloodFilter, setBloodFilter] = useState("");
//   const [search, setSearch] = useState("");

//   // Load Districts & Upazilas
//   useEffect(() => {
//     axios.get("/districts.json")
//       .then(res => setDistricts(res.data[2]?.data || []))
//       .catch(err => console.log(err));

//     axios.get("/upazilas.json")
//       .then(res => setUpazilas(res.data[2]?.data || []))
//       .catch(err => console.log(err));
//   }, []);

//   // Filter Upazilas when District changes
//   useEffect(() => {
//     const filtered = upazilas.filter(u => u.district_id == districtFilter);
//     setFilteredUpazilas(filtered);
//     setUpazilaFilter("");
//   }, [districtFilter, upazilas]);

//   // Fetch requests based on role
//   useEffect(() => {
//     const fetchRequests = async () => {
//       setLoading(true);
//       try {
//         let res;
//         if (currentUser.role === "donar") {
//           res = await axiosSecure.get("/my-request");
//           setRequests(res.data.request); // my requests only
//         } else {
//           res = await axiosSecure.get("/requests");
//           setRequests(res.data); // all requests
//         }
//       } catch (err) {
//         console.error(err);
//       }
//       setLoading(false);
//     };
//     fetchRequests();
//   }, [currentUser.role, axiosSecure]);

//   // Update status (Approve / Reject)
//   const handleStatusUpdate = async (id, status) => {
//     if (currentUser.role === "admin" || currentUser.role === "volunteer") {
//       try {
//         const res = await axiosSecure.patch(`/update/request/status/${id}`, { donation_status: status });
//         if (res.data.modifiedCount > 0) {
//           setRequests(prev => prev.map(r => r._id === id ? { ...r, donation_status: status } : r));
//         }
//       } catch (err) {
//         console.error(err);
//         alert("Status update failed!");
//       }
//     } else {
//       alert("You don't have permission to update status!");
//     }
//   };

//   // Delete request (Admin or Donor owner)
//   const handleDelete = async (id) => {
//     if (currentUser.role === "donar") {
//       try {
//         await axiosSecure.delete(`/my-request/${id}`);
//         setRequests(prev => prev.filter(r => r._id !== id));
//       } catch (err) {
//         console.error(err);
//         alert("Failed to delete request!");
//       }
//     } else if (currentUser.role === "admin") {
//       try {
//         await axiosSecure.delete(`/admin-request/${id}`); // create this route in backend for admin delete
//         setRequests(prev => prev.filter(r => r._id !== id));
//       } catch (err) {
//         console.error(err);
//         alert("Failed to delete request!");
//       }
//     }
//   };

//   // Filter requests
//   const filteredRequests = requests.filter(r =>
//     (!districtFilter || r.recipient_district === districts.find(d => d.id == districtFilter)?.name) &&
//     (!upazilaFilter || r.recipient_upazila === filteredUpazilas.find(u => u.id == upazilaFilter)?.name) &&
//     (!bloodFilter || r.blood_group === bloodFilter) &&
//     (!search || r.recipient_name.toLowerCase().includes(search.toLowerCase()))
//   );

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">🩸 All Blood Donation Requests</h2>

//       {/* Filters & Search */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input 
//           type="text"
//           placeholder="Search by requester name..."
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           className="border p-2 rounded w-full md:w-1/4"
//         />
//         <select value={districtFilter} onChange={e => setDistrictFilter(e.target.value)} className="border p-2 rounded w-full md:w-1/4">
//           <option value="">Filter by District</option>
//           {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
//         </select>
//         <select value={upazilaFilter} onChange={e => setUpazilaFilter(e.target.value)} className="border p-2 rounded w-full md:w-1/4">
//           <option value="">Filter by Upazila</option>
//           {filteredUpazilas.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
//         </select>
//         <select value={bloodFilter} onChange={e => setBloodFilter(e.target.value)} className="border p-2 rounded w-full md:w-1/4">
//           <option value="">All Blood Groups</option>
//           {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => <option key={bg} value={bg}>{bg}</option>)}
//         </select>
//       </div>

//       {/* Loading & Empty */}
//       {loading && <p className="text-center text-gray-500">Loading requests...</p>}
//       {!loading && filteredRequests.length === 0 && <p className="text-center text-gray-500">No requests found.</p>}

//       {/* Request Cards */}
//       <div className="space-y-4">
//         {filteredRequests.map(req => (
//           <div key={req._id} className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-lg transition duration-300">
            
//             <div className="flex-1">
//               <h3 className="font-semibold text-xl">{req.recipient_name}</h3>
//               <p><strong>District:</strong> {req.recipient_district}</p>
//               <p><strong>Upazila:</strong> {req.recipient_upazila}</p>
//               <p><strong>Hospital:</strong> {req.hospital_name}</p>
//               <p><strong>Blood Group:</strong> {req.blood_group}</p>
//               <p className="text-gray-400 text-sm">Requested At: {new Date(req.createdAt).toLocaleString()}</p>              
//               <button
//   className="mt-2 text-red-500 hover:underline"
//   onClick={() => navigate(`/requests/${req._id}`)}
// >
//   View
// </button>
//             </div>

//             <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-2">
//               <span className={`px-3 py-1 rounded-full font-semibold text-sm ${
//                 req.donation_status === "pending" ? "bg-yellow-100 text-yellow-800" :
//                 req.donation_status === "approved" ? "bg-green-100 text-green-800" :
//                 "bg-red-100 text-red-800"
//               }`}>
//                 {req.donation_status.toUpperCase()}
//               </span>

//               {/* Admin Controls */}
//               {currentUser.role === "admin" && (
//                 <div className="flex gap-2 mt-2">
//                   <button onClick={() => handleStatusUpdate(req._id, "approved")} className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"><FiCheck /> Approve</button>
//                   <button onClick={() => handleStatusUpdate(req._id, "rejected")} className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"><FiX /> Reject</button>
//                   <button onClick={() => handleDelete(req._id)} className="flex items-center gap-1 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition"><FiTrash2 /> Delete</button>
//                   <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"><FiEdit /> Edit</button>
//                 </div>
//               )}

//               {/* Volunteer Controls */}
//               {currentUser.role === "volunteer" && req.donation_status === "pending" && (
//                 <div className="flex gap-2 mt-2">
//                   <button onClick={() => handleStatusUpdate(req._id, "approved")} className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"><FiCheck /> Approve</button>
//                   <button onClick={() => handleStatusUpdate(req._id, "rejected")} className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"><FiX /> Reject</button>
//                    <button onClick={() => handleStatusUpdate(req._id, "rejected")} className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"><FiX /> view</button>

//                 </div>
//               )}

//               {/* Donor Controls */}
//               {currentUser.role === "donar" && (
//                 <div className="flex gap-2 mt-2">
//                   <button onClick={() => handleDelete(req._id)} className="flex items-center gap-1 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition"><FiTrash2 /> Delete</button>
//                 </div>
//               )}

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DonationRequest;


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
    axios.get("/districts.json").then(res =>
      setDistricts(res.data[2]?.data || [])
    );

    axios.get("/upazilas.json").then(res =>
      setUpazilas(res.data[2]?.data || [])
    );
  }, []);

  // Filter upazilas
  useEffect(() => {
    const filtered = upazilas.filter(
      u => u.district_id == districtFilter
    );
    setFilteredUpazilas(filtered);
    setUpazilaFilter("");
  }, [districtFilter, upazilas]);

  // Fetch requests
  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        let res;

        if (currentUser?.role === "donor") {
          res = await axiosSecure.get("/my-request");
          setRequests(res.data.request || []);
        } else {
          res = await axiosSecure.get("/requests");
          setRequests(res.data || []);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
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
          className="border p-2 rounded-lg focus:ring-2 focus:ring-red-300"
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
              {currentUser?.role === "donar" && (
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