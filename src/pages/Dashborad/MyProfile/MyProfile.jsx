

import React, { useState, useEffect } from "react";
import useAuth from "../../../houk/useAuth";
import useAxiosSecure from "../../../houk/useAxiosSecure";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  // Load district & upazila
  useEffect(() => {
    fetch("/districts.json")
      .then(res => res.json())
      .then(data => setDistricts(data[2]?.data || []));

    fetch("/upazilas.json")
      .then(res => res.json())
      .then(data => setUpazilas(data[2]?.data || []));
  }, []);

  // Load user profile
  useEffect(() => {
    if (!user) return;

    axiosSecure.get(`/user?email=${user.email}`)
      .then(res => {
        if (res.data?.length > 0) {
          setProfile(res.data[0]);
        }
      });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axiosSecure.put(`/user/${profile._id}`, profile);
      setEditMode(false);
      alert("Profile Updated Successfully ");
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) {
    return <p className="text-center mt-10">Please login first</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">

      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-2xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-red-600">My Profile</h2>
          <button
            onClick={() => setEditMode(!editMode)}
            className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
          >
            {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={profile.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-red-500 shadow-md object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">{profile.name}</h3>
          <p className="text-gray-500">{profile.email}</p>
        </div>

        {/* Form Section */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={profile.name || ""}
              onChange={handleChange}
              disabled={!editMode}
              className="input input-bordered w-full mt-2"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="font-semibold">Blood Group</label>
            <select
              name="bloodGroup"
              value={profile.bloodGroup || ""}
              onChange={handleChange}
              disabled={!editMode}
              className="select w-full mt-2"
            >
              <option value="">Select Blood Group</option>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="font-semibold">District</label>
            <select
              name="district"
              value={profile.district || ""}
              onChange={(e) => {
                setProfile(prev => ({
                  ...prev,
                  district: e.target.value,
                  upazila: ""
                }));
              }}
              disabled={!editMode}
              className="select w-full mt-2"
            >
              <option value="">Select District</option>
              {districts.map(d => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          {/* Upazila */}
          <div>
            <label className="font-semibold">Upazila</label>
            <select
              name="upazila"
              value={profile.upazila || ""}
              onChange={handleChange}
              disabled={!editMode}
              className="select w-full mt-2"
            >
              <option value="">Select Upazila</option>
              {upazilas
                .filter(u =>
                  u.district_id ===
                  districts.find(d => d.name === profile.district)?.id
                )
                .map(u => (
                  <option key={u.id} value={u.name}>
                    {u.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Save Button */}
        {editMode && (
          <div className="mt-8 text-center">
            <button
              onClick={handleSave}
              className="btn bg-green-500 hover:bg-green-600 text-white px-10"
            >
              Save Changes
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default MyProfile;