
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

const RequestDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [updating, setUpdating] = useState(false);

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

  // const handleConfirm = async () => {
  //   setUpdating(true);
  //   try {
  //     await axiosSecure.patch(`/update/request/status/${id}`, {
  //       donation_status: "inprogress",
  //       donor_name: user?.displayName,
  //       donor_email: user?.email,
  //     });

  //     setData((prev) => ({
  //       ...prev,
  //       donation_status: "inprogress",
  //     }));

  //     setOpenModal(false);
  //   } catch (err) {
  //     console.log(err);
  //     alert("Failed!");
  //   } finally {
  //     setUpdating(false);
  //   }
  // };
  const handleConfirm = async () => {
  setUpdating(true);
  try {
    await axiosSecure.patch(`/requests/${id}`, {
      donation_status: "inprogress",
      donor_name: user?.displayName,
      donor_email: user?.email,
    });

    setData((prev) => ({
      ...prev,
      donation_status: "inprogress",
    }));

    setOpenModal(false);
  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
    alert("Failed!");
  } finally {
    setUpdating(false);
  }
};

  if (loading)
    return (
      <p className="text-center mt-20 text-gray-500 text-lg">
        Loading request details...
      </p>
    );

  if (!data)
    return (
      <p className="text-center mt-20 text-red-500 text-lg">
        Request not found
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center p-4">

      {/* CARD */}
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-red-500 text-white text-center py-5">
          <h2 className="text-2xl font-bold">🩸 Blood Donation Request</h2>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-3 text-gray-700">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <p><span className="font-semibold">Recipient:</span> {data.recipient_name}</p>

            <p><span className="font-semibold">Blood Group:</span> {data.blood_group}</p>

            <p><span className="font-semibold">District:</span> {data.recipient_district},</p>

              <p><span className="font-semibold">Upazila:</span> {data.recipient_upazila}</p>

            <p><span className="font-semibold">Hospital:</span> {data.hospital_name}</p>
          </div>

          {/* STATUS BADGE */}
          <div className="mt-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium
              ${data.donation_status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}
            `}>
              {data.donation_status}
            </span>
          </div>

          {/* BUTTON */}
          {data.donation_status === "pending" && (
            <button
              onClick={() => setOpenModal(true)}
              className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl transition"
            >
              Donate Now
            </button>
          )}

        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-6">

            <h3 className="text-xl font-bold text-center mb-4 text-red-500">
              Confirm Donation
            </h3>

            <div className="space-y-3">

              <input
                readOnly
                value={user?.displayName || ""}
                className="w-full border rounded-lg p-2 bg-pink-200"
              />

              <input
                readOnly
                value={user?.email || ""}
                className="w-full border rounded-lg p-2 bg-gray-100"
              />

            </div>

            <div className="flex justify-end gap-2 mt-5">

              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirm}
                disabled={updating}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
              >
                {updating ? "Processing..." : "Confirm"}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default RequestDetails;