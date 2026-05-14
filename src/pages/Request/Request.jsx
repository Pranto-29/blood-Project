// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useAxiosSecure from '../../houk/useAxiosSecure';

// const Request = () => {
//     const { id } = useParams();
//     const axiosSecure = useAxiosSecure();

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await axiosSecure.get(`/requests/${id}`);
//                 setData(res.data);
//             } catch (err) {
//                 console.log(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id, axiosSecure]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!data) {
//         return <div>No Data Found</div>;
//     }

//     return (
//         <div>
//             hi

//             {/* RENDER DATA */}
//             <div>
//                 <p>Recipient: {data.recipient_name}</p>
//                 <p>Blood Group: {data.blood_group}</p>
//                 <p>Hospital: {data.hospital_name}</p>
//                 <p>District: {data.recipient_district}</p>
//                 <p>Upazila: {data.recipient_upazila}</p>
//                 <p>Status: {data.donation_status}</p>
//                 <p>Date: {new Date(data.createdAt).toLocaleString()}</p>
//             </div>
//         </div>
//     );
// };

// export default Request;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../houk/useAxiosSecure";

const Request = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(`/requests/${id}`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, axiosSecure]);

  //  Loading
  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Loading...
      </div>
    );
  }

  // Not found
  if (!data) {
    return (
      <div className="text-center mt-10 text-red-500">
        No Data Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          🩸 Donation Request Details
        </h2>

        {/* DETAILS */}
        <div className="space-y-3 text-gray-700">

          <p><b>Recipient Name:</b> {data.recipient_name}</p>

          <p>
            <b>Location:</b> {data.recipient_district}, {data.recipient_upazila}
          </p>

          <p><b>Blood Group:</b> {data.blood_group}</p>

          <p><b>Hospital:</b> {data.hospital_name}</p>

          <p><b>Status:</b> 
            <span className="ml-2 text-red-500 font-semibold">
              {data.donation_status}
            </span>
          </p>

          {/* DATE */}
          <p>
            <b>Date:</b>{" "}
            {data.date || new Date(data.createdAt).toLocaleDateString()}
          </p>

          {/* TIME */}
          <p>
            <b>Time:</b>{" "}
            {data.time || new Date(data.createdAt).toLocaleTimeString()}
          </p>

        </div>

      </div>
    </div>
  );
};

export default Request;
