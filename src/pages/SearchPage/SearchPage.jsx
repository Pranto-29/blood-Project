

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../../houk/useAxiosSecure";

// const SearchPage = () => {
//   const [districts, setDistricts] = useState([]);
//   const [upazilas, setUpazilas] = useState([]);
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedUpazila, setSelectedUpazila] = useState("");
//   const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
//   const [results, setResults] = useState([]);

//   const axiosSecure = useAxiosSecure();

//   const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

//   const selectedDistrictName =
//     districts.find((d) => d.id === selectedDistrict)?.name || "";

//   // Load districts & upazilas JSON
//   useEffect(() => {
//     axios.get("/districts.json").then((res) => {
//       setDistricts(res.data[2].data);
//     });

//     axios.get("/upazilas.json").then((res) => {
//       setUpazilas(res.data[2].data);
//     });
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();

//     // Search API call
//     axiosSecure
//       .get(
//         `/search-requests?bloodGroup=${selectedBloodGroup}&district=${selectedDistrictName}&upazila=${selectedUpazila}`
//       )
//       .then((res) => setResults(res.data))
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-4 flex flex-col items-center">

//       {/* Search Form */}
//       <form
//         onSubmit={handleSearch}
//         className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md grid gap-4"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-900">
//           Search Donors
//         </h2>

//         {/* Blood Group Selector */}
//         <select
//           value={selectedBloodGroup}
//           onChange={(e) => setSelectedBloodGroup(e.target.value)}
//           className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
//         >
//           <option value="">Select Blood Group</option>
//           {bloodGroups.map((bg) => (
//             <option key={bg} value={bg}>
//               {bg}
//             </option>
//           ))}
//         </select>

//         {/* District Selector */}
//         <select
//           value={selectedDistrict}
//           onChange={(e) => {
//             setSelectedDistrict(e.target.value);
//             setSelectedUpazila(""); // Reset upazila on district change
//           }}
//           className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
//         >
//           <option value="">Select District</option>
//           {districts.map((d) => (
//             <option key={d.id} value={d.id}>
//               {d.name}
//             </option>
//           ))}
//         </select>

//         {/* Upazila Selector */}
//         <select
//           value={selectedUpazila}
//           onChange={(e) => setSelectedUpazila(e.target.value)}
//           className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
//           disabled={!selectedDistrict}
//         >
//           <option value="">Select Upazila</option>
//           {upazilas
//             .filter((u) => u.district_id === selectedDistrict)
//             .map((u) => (
//               <option key={u.id} value={u.name}>
//                 {u.name}
//               </option>
//             ))}
//         </select>

//         {/* Search Button */}
//         <button
//           type="submit"
//           className="bg-red-500 text-white font-semibold rounded-lg p-3 hover:bg-red-600 transition"
//         >
//           Search
//         </button>
//       </form>

//       {/* Search Results */}
//       <div className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {results.length === 0 ? (
//           <p className="col-span-full text-center text-gray-500 mt-6">
//             {selectedBloodGroup || selectedDistrict || selectedUpazila
//               ? "No donors found for your search."
//               : "Please fill the search form and click Search."}
//           </p>
//         ) : (
//           results.map((donor) => (
//             <div
//               key={donor._id}
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
//             >
//               <h3 className="text-xl font-semibold mb-2">{donor.recipient_name}</h3>
//               <p className="text-gray-600">
//                 <span className="font-medium">Blood Group:</span> {donor.blood_group}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-medium">District:</span> {donor.recipient_district}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-medium">Upazila:</span> {donor.recipient_upazila}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-medium">Hospital:</span> {donor.hospital_name}
//               </p>
//               <p className="text-gray-400 text-sm mt-2">
//                 Requested At: {new Date(donor.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // beautiful dialog
import useAxiosSecure from "../../houk/useAxiosSecure";

const SearchPage = () => {
  // --- State ---
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [results, setResults] = useState([]);

  const axiosSecure = useAxiosSecure();

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const selectedDistrictName =
    districts.find((d) => d.id === selectedDistrict)?.name || "";

  // --- Load districts & upazilas ---
  useEffect(() => {
    axios.get("/districts.json").then((res) => setDistricts(res.data[2].data));
    axios.get("/upazilas.json").then((res) => setUpazilas(res.data[2].data));
  }, []);

  // --- Handle Search ---
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiosSecure.get(
        `/search-requests?bloodGroup=${selectedBloodGroup.trim()}&district=${selectedDistrictName.trim()}&upazila=${selectedUpazila.trim()}`
      );

      if (data.length === 0) {
        // No results → beautiful dialog
        Swal.fire({
          icon: "info",
          title: "No donors found",
          text: "Sorry, no requests match your search.",
          confirmButtonText: "OK",
          timer: 3000,
        });
        setResults([]);
      } else {
        setResults(data);
      }
    } catch (err) {
      console.error("Search error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 flex flex-col items-center">

      {/* --- Search Form --- */}
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md grid gap-4"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Search Blood Requests
        </h2>

        {/* Blood Group */}
        <select
          value={selectedBloodGroup}
          onChange={(e) => setSelectedBloodGroup(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
        >
          <option value="">Select Blood Group</option>
          {bloodGroups.map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>

        {/* District */}
        <select
          value={selectedDistrict}
          onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setSelectedUpazila(""); // reset upazila
          }}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
        >
          <option value="">Select District</option>
          {districts.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        {/* Upazila */}
        <select
          value={selectedUpazila}
          onChange={(e) => setSelectedUpazila(e.target.value)}
          disabled={!selectedDistrict}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
        >
          <option value="">Select Upazila</option>
          {upazilas
            .filter((u) => u.district_id === selectedDistrict)
            .map((u) => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))}
        </select>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-red-500 text-white font-semibold rounded-lg p-3 hover:bg-red-600 transition"
        >
          Search
        </button>
      </form>

      {/* --- Search Results --- */}
      <div className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((donor) => (
          <div
            key={donor._id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{donor.recipient_name}</h3>
            <p className="text-gray-600">
              <span className="font-medium">Blood Group:</span> {donor.blood_group}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">District:</span> {donor.recipient_district}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Upazila:</span> {donor.recipient_upazila}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Hospital:</span> {donor.hospital_name}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Requested At: {new Date(donor.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;