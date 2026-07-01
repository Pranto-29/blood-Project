

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaTint,
  FaHeartbeat,
  FaUserFriends,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import useAuth from "../../../houk/useAuth";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import SocialLogin from "../../../pages/Auth/SocialLogin/ScoialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    axios.get("/districts.json").then((res) => {
      setDistricts(res.data[2].data);
    });

    axios.get("/upazilas.json").then((res) => {
      setUpazilas(res.data[2].data);
    });
  }, []);

  const handleRegistration = async (data) => {
    setLoading(true);
    setFirebaseError("");
    setSuccess("");

    try {
      const profileImg = data.photo[0];

      // upload image to imgbb
      const formData = new FormData();
      formData.append("image", profileImg);

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`,
        formData
      );

      const photoURL = imgRes.data.data.url;

      // firebase user create
      await registerUser(data.email, data.password);

      // find location name
      const districtName =
        districts.find((d) => String(d.id) === String(selectedDistrict))
          ?.name || "";

      const upazilaName =
        upazilas.find((u) => String(u.id) === String(selectedUpazila))
          ?.name || "";

      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL,
        bloodGroup: data.bloodGroup,
        district: districtName,
        upazila: upazilaName,
        role: "donor",
        status: "active",
      };

      await axiosSecure.post("/user", userInfo);

      await updateUserProfile({
        displayName: data.name,
        photoURL,
      });

      setSuccess("Registration successful ❤️");
      reset();

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {
      console.log(error);
      setFirebaseError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl bg-white rounded-[32px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="p-6 sm:p-10 lg:p-14">

          <h1 className="text-4xl font-bold text-gray-800 justify-center aitems-center flex">
            Create <span className="text-red-500">Account</span>
          </h1>

          {firebaseError && (
            <p className="text-red-500 mt-3">{firebaseError}</p>
          )}

          {success && (
            <p className="text-green-500 mt-3">{success}</p>
          )}

          <form onSubmit={handleSubmit(handleRegistration)} className="space-y-5 mt-6">

            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />

            <input
              type="file"
              className="file-input w-full"
              {...register("photo", { required: true })}
            />

            <select
              className="select select-bordered w-full"
              {...register("bloodGroup", { required: true })}
            >
              <option value="">Select Blood Group</option>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>

            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="">District</option>
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>

            <select
              value={selectedUpazila}
              onChange={(e) => setSelectedUpazila(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="">Upazila</option>
              {upazilas
                .filter((u) => String(u.district_id) === String(selectedDistrict))
                .map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name}
                  </option>
                ))}
            </select>

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full"
              {...register("password", { required: true, minLength: 6 })}
            />

            <button
              disabled={loading}
              className="btn w-full bg-red-500 text-white"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>

          <div className="mt-4">
            <SocialLogin />
          </div>

          <p className="text-center mt-4">
            Already have account?{" "}
            <Link to="/auth/login" className="text-red-500">
              Login
            </Link>
          </p>

        </div>

        {/* RIGHT SIDE (kept simple to avoid error) */}
        {/* <div className="hidden lg:block bg-red-500 text-white p-10">
          <h1 className="text-4xl font-bold">Save Life ❤️</h1>
          <p className="mt-4">Donate blood, save lives every day.</p>
        </div> */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-red-600 to-red-800 text-white p-10">
  <h1 className="text-4xl font-bold mb-4">
    Save Lives, Be a Hero ❤️
  </h1>

  <p className="text-lg leading-relaxed">
    Your single blood donation can give someone a second chance at life.
    Join our community of donors and help save lives every day.
  </p>

  <div className="mt-8 space-y-3 text-base">
    <p>🩸 Every drop of blood counts.</p>
    <p>❤️ One donation can save up to three lives.</p>
    <p>🤝 Connect donors with patients in need.</p>
    <p>🌍 Make a positive impact on your community.</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Register;