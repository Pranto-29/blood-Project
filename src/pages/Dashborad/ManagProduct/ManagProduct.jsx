import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import axios from "axios";

const AddRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Current Date & Time
  const now = new Date();
  const currentDate = now.toLocaleDateString();
  const currentTime = now.toLocaleTimeString();

  // Load Districts & Upazilas
  useEffect(() => {
    axios.get("/districts.json")
      .then(res => setDistricts(res.data[2].data))
      .catch(err => console.log(err));

    axios.get("/upazilas.json")
      .then(res => setUpazilas(res.data[2].data))
      .catch(err => console.log(err));
  }, []);

  // Filter Upazila based on selected District
  useEffect(() => {
    const filtered = upazilas.filter(u => u.district_id == selectedDistrict);
    setFilteredUpazilas(filtered);
  }, [selectedDistrict, upazilas]);

  // Submit form
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const districtObj = districts.find(d => d.id == data.district);
      const upazilaObj = upazilas.find(u => u.id == data.upazila);
      const now = new Date();

      const formData = {
        requester_name: user?.displayName,
        requester_email: user?.email,
        recipient_name: data.recipientName,
        recipient_district: districtObj?.name || "",
        recipient_upazila: upazilaObj?.name || "",
        hospital_name: data.hospitalName,
        full_address: data.fullAddress,
        blood_group: data.bloodGroup,
        donation_status: "pending",

        //  Date & Time fields
        createdAt: now,
        request_date: now.toLocaleDateString(),
        request_time: now.toLocaleTimeString(),
      };

      const res = await axiosSecure.post("/requests", formData);

      if (res.data.insertedId) {
        alert(" Request Submitted Successfully");
        reset();
        setSelectedDistrict("");
        setFilteredUpazilas([]);
      }

    } catch (err) {
      console.log(err);
      alert("❌ Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        🩸 Add Blood Donation Request
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Requester Info */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p><strong>Name:</strong> {user?.displayName}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Date:</strong> {currentDate}</p>
          <p><strong>Time:</strong> {currentTime}</p>
        </div>

        {/* Recipient Name */}
        <div>
          <label className="font-semibold">Recipient Name</label>
          <input
            type="text"
            {...register("recipientName", { required: true })}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-red-400"
          />
          {errors.recipientName && <p className="text-red-500 text-sm">Required</p>}
        </div>

        {/* District */}
        <div>
          <label className="font-semibold">District</label>
          <select
            {...register("district", { required: true })}
            onChange={e => setSelectedDistrict(e.target.value)}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Select District</option>
            {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
          {errors.district && <p className="text-red-500 text-sm">Required</p>}
        </div>

        {/* Upazila */}
        <div>
          <label className="font-semibold">Upazila</label>
          <select
            {...register("upazila", { required: true })}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Select Upazila</option>
            {filteredUpazilas.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
          {errors.upazila && <p className="text-red-500 text-sm">Required</p>}
        </div>

        {/* Hospital */}
        <div>
          <label className="font-semibold">Hospital Name</label>
          <input
            type="text"
            {...register("hospitalName", { required: true })}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Full Address */}
        <div>
          <label className="font-semibold">Full Address</label>
          <input
            type="text"
            {...register("fullAddress", { required: true })}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Blood Group */}
        <div>
          <label className="font-semibold">Blood Group</label>
          <select
            {...register("bloodGroup", { required: true })}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>

      </form>
    </div>
  );
};

export default AddRequest;