
import React, { useState, useEffect } from "react";
import useAuth from "../../../houk/useAuth";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  // Load District + Upazila
  useEffect(() => {
    fetch("/districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data[2]?.data || []));

    fetch("/upazilas.json")
      .then((res) => res.json())
      .then((data) => setUpazilas(data[2]?.data || []));
  }, []);

  // Load User Profile
  useEffect(() => {
    if (!user?.email) return;

    axiosSecure.get(`/user?email=${user.email}`).then((res) => {
      if (res.data?.length > 0) {
        setProfile(res.data[0]);
      }
    });
  }, [user?.email]);

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SAVE PROFILE
  // const handleSave = async () => {
  //   try {
  //     await axiosSecure.put(`/user/${profile._id}`, profile);

  //     // reload fresh data
  //     const res = await axiosSecure.get(`/user?email=${user.email}`);
  //     setProfile(res.data[0]);

  //     setEditMode(false);

  //     Swal.fire({
  //       icon: "success",
  //       title: "Updated!",
  //       text: "Profile updated successfully",
  //       timer: 2000,
  //       showConfirmButton: false,
  //     });
  //   } catch (err) {
  //     console.error(err);

  //     Swal.fire({
  //       icon: "error",
  //       title: "Failed!",
  //       text: "Profile update failed",
  //     });
  //   }
  // };

  const handleSave = async () => {
  try {
    await axiosSecure.patch(`/user/${user.email}`, {
      displayName: profile.name,
      blood_group: profile.bloodGroup,
      district: profile.district,
      upazila: profile.upazila,
    });

    // refresh data
    const res = await axiosSecure.get(`/user?email=${user.email}`);
    setProfile(res.data[0]);

    setEditMode(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: "Profile updated successfully",
      timer: 2500,
      showConfirmButton: false,
    });

  } catch (err) {
    console.log(err);

    Swal.fire({
      icon: "error",
      title: "Failed!",
      text: "Profile update failed",
    });
  }
};

  if (!user) {
    return (
      <p className="text-center mt-10 text-red-500 font-semibold">
        Please login first
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      {/* CARD */}
      <div className="bg-pink-300 shadow-2xl rounded-2xl p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-red-500">
            My Profile
          </h2>

          <button
            onClick={() => setEditMode(!editMode)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-green-500 object-cover"
          />

          <h3 className="text-xl font-semibold mt-4">
            {profile.name}
          </h3>

          <p className="text-red-500">{user.email}</p>
        </div>

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name || ""}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full border p-2 rounded mt-2"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="font-semibold">Blood Group</label>
            <select
              name="bloodGroup"
              value={user.bloodGroup || ""}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full border p-2 rounded mt-2"
            >
              <option value="">Select</option>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                (bg) => (
                  <option key={bg} value={bg}>
                    {bg}
                  </option>
                )
              )}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="font-semibold">District</label>
            <select
              name="district"
              value={user.district || ""}
              onChange={(e) =>
                setProfile((prev) => ({
                  ...prev,
                  district: e.target.value,
                  upazila: "",
                }))
              }
              disabled={!editMode}
              className="w-full border p-2 rounded mt-2"
            >
              <option value="">Select District</option>
              {districts.map((d) => (
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
              value={user.upazila || ""}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full border p-2 rounded mt-2"
            >
              <option value="">Select Upazila</option>

              {upazilas
                .filter(
                  (u) =>
                    u.district_id ===
                    districts.find((d) => d.name === profile.district)?.id
                )
                .map((u) => (
                  <option key={u.id} value={u.name}>
                    {u.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* SAVE BUTTON */}
        {editMode && (
          <div className="mt-8 text-center">
            <button
              onClick={handleSave}
              className="px-8 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:shadow-lg transition"
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