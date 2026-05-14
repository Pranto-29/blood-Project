
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../houk/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import ScoialLogin from "../SocialLogin/ScoialLogin";
import {
  FaTint,
  FaHeartbeat,
  FaUserFriends,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        fetch("https://backend-11-asiment.vercel.app//user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          }),
        });

        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 via-white to-red-100 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">

          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>
            <p className="text-gray-500 mt-2">
              Login to continue Blood Donation System
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="font-medium text-gray-700">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-2 rounded-xl h-12 focus:outline-none focus:ring-2 focus:ring-red-400"
                {...register("email", { required: true })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Email is required
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="font-medium text-gray-700">Password</label>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full rounded-xl h-12 pr-10 focus:outline-none focus:ring-2 focus:ring-red-400"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm mt-1">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-right">
              <a className="text-sm text-red-500 hover:underline cursor-pointer">
                Forgot password?
              </a>
            </div>

            {/* BUTTON */}
            <button className="btn bg-red-500 hover:bg-red-600 border-none w-full text-white rounded-xl h-12">
              Login
            </button>

          </form>

          {/* SOCIAL LOGIN */}
          <div className="mt-6">
            <ScoialLogin />
          </div>

          {/* REGISTER */}
          <p className="text-center text-sm mt-5 text-gray-600">
            New to system?{" "}
            <Link to="/auth/register" className="text-red-500 font-semibold">
              Create account
            </Link>
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex bg-gradient-to-br from-red-500 to-red-700 text-white p-12 flex-col justify-center">

          <h1 className="text-5xl font-bold mb-5">
            Donate Blood,<br /> Save Life ❤️
          </h1>

          <p className="text-red-100 mb-10">
            Join our community and help save lives.
          </p>

          <div className="space-y-6">

            <div className="flex gap-4">
              <FaTint size={22} />
              <div>
                <h3 className="font-semibold">Blood Donation</h3>
                <p className="text-sm text-red-100">
                  Help patients by donating blood.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaHeartbeat size={22} />
              <div>
                <h3 className="font-semibold">Emergency Support</h3>
                <p className="text-sm text-red-100">
                  Find donors quickly in emergencies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaUserFriends size={22} />
              <div>
                <h3 className="font-semibold">Trusted Community</h3>
                <p className="text-sm text-red-100">
                  Thousands of active donors.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;



