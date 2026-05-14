// import React from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../../../houk/useAuth";
// import { Link, useLocation, useNavigate } from "react-router";
// import ScoialLogin from "../SocialLogin/ScoialLogin";
// import {
//   FaTint,
//   FaHeartbeat,
//   FaUserFriends,
// } from "react-icons/fa";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { signInUser } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = (data) => {
//     signInUser(data.email, data.password)
//       .then((result) => {
//         const user = result.user;

//         fetch("https://backend-11-asiment.vercel.app//user", {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify({
//             displayName: user.displayName,
//             email: user.email,
//             photoURL: user.photoURL,
//           }),
//         });

//         navigate(location?.state || "/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-red-50 via-white to-red-100 flex items-center justify-center px-3 sm:px-5 py-6 sm:py-10">

//       <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

//         {/* LEFT SIDE */}
//         <div className="p-5 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">

//           {/* Header */}
//           <div className="mb-5 sm:mb-6 text-center lg:text-left">

//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
//               Welcome Back 👋
//             </h2>

//             <p className="text-gray-500 mt-2 text-sm sm:text-base">
//               Login to continue Blood Donation System
//             </p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit(handleLogin)}
//             className="space-y-4 sm:space-y-5"
//           >

//             {/* Email */}
//             <div>
//               <label className="font-medium text-gray-700 text-sm sm:text-base">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full mt-2 rounded-xl h-11 sm:h-12 focus:outline-none focus:ring-2 focus:ring-red-400"
//                 {...register("email", { required: true })}
//               />

//               {errors.email && (
//                 <p className="text-red-500 text-xs sm:text-sm mt-1">
//                   Email is required
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="font-medium text-gray-700 text-sm sm:text-base">
//                 Password
//               </label>

//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="input input-bordered w-full mt-2 rounded-xl h-11 sm:h-12 focus:outline-none focus:ring-2 focus:ring-red-400"
//                 {...register("password", {
//                   required: true,
//                   minLength: 6,
//                 })}
//               />

//               {errors.password?.type === "minLength" && (
//                 <p className="text-red-500 text-xs sm:text-sm mt-1">
//                   Password must be at least 6 characters
//                 </p>
//               )}
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right">
//               <a className="text-sm text-red-500 hover:underline cursor-pointer">
//                 Forgot password?
//               </a>
//             </div>

//             {/* Login Button */}
//             <button className="btn bg-red-500 hover:bg-red-600 border-none w-full text-white rounded-xl h-11 sm:h-12 text-sm sm:text-base">
//               Login
//             </button>
//           </form>

//           {/* Social Login */}
//           <div className="mt-5 sm:mt-6">
//             <ScoialLogin />
//           </div>

//           {/* Register */}
//           <p className="text-center text-sm mt-5 text-gray-600">
//             New to system?{" "}
//             <Link
//               to="/auth/register"
//               className="text-red-500 font-semibold hover:underline"
//             >
//               Create account
//             </Link>
//           </p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="hidden lg:flex bg-gradient-to-br from-red-500 to-red-700 text-white p-8 xl:p-12 flex-col justify-center">

//           <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-5">
//             Donate Blood,
//             <br />
//             Save Life ❤️
//           </h1>

//           <p className="text-red-100 text-base xl:text-lg mb-10 leading-relaxed">
//             Join our community and help people in emergency situations by donating blood and saving lives.
//           </p>

//           {/* Features */}
//           <div className="space-y-6">

//             {/* Feature 1 */}
//             <div className="flex items-start gap-4">
//               <div className="bg-white/20 p-3 rounded-full">
//                 <FaTint size={22} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-xl">
//                   Blood Donation
//                 </h3>

//                 <p className="text-red-100 text-sm">
//                   Help patients by donating blood easily.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="flex items-start gap-4">
//               <div className="bg-white/20 p-3 rounded-full">
//                 <FaHeartbeat size={22} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-xl">
//                   Emergency Support
//                 </h3>

//                 <p className="text-red-100 text-sm">
//                   Find blood donors quickly during emergencies.
//                 </p>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="flex items-start gap-4">
//               <div className="bg-white/20 p-3 rounded-full">
//                 <FaUserFriends size={22} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-xl">
//                   Trusted Community
//                 </h3>

//                 <p className="text-red-100 text-sm">
//                   Thousands of active donors connected together.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../../../houk/useAuth";
// import { Link, useLocation, useNavigate } from "react-router";
// import ScoialLogin from "../SocialLogin/ScoialLogin";
// import {
//   FaTint,
//   FaHeartbeat,
//   FaUserFriends,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { signInUser } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (data) => {
//     signInUser(data.email, data.password)
//       .then((result) => {
//         const user = result.user;

//         fetch("https://backend-11-asiment.vercel.app//user", {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify({
//             displayName: user.displayName,
//             email: user.email,
//             photoURL: user.photoURL,
//           }),
//         });

//         navigate(location?.state || "/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-red-50 via-white to-red-100 flex items-center justify-center px-4 py-8">

//       <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

//         {/* LEFT SIDE */}
//         <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">

//           <div className="mb-6 text-center lg:text-left">
//             <h2 className="text-4xl font-bold text-gray-800">
//               Welcome Back 👋
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Login to continue Blood Donation System
//             </p>
//           </div>

//           {/* FORM */}
//           <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

//             {/* EMAIL */}
//             <div>
//               <label className="font-medium text-gray-700">Email</label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full mt-2 rounded-xl h-12 focus:outline-none focus:ring-2 focus:ring-red-400"
//                 {...register("email", { required: true })}
//               />

//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Email is required
//                 </p>
//               )}
//             </div>

//             {/* PASSWORD */}
//             <div>
//               <label className="font-medium text-gray-700">Password</label>

//               <div className="relative mt-2">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   className="input input-bordered w-full rounded-xl h-12 pr-10 focus:outline-none focus:ring-2 focus:ring-red-400"
//                   {...register("password", {
//                     required: true,
//                     minLength: 6,
//                   })}
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               {errors.password?.type === "minLength" && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Password must be at least 6 characters
//                 </p>
//               )}
//             </div>

//             {/* FORGOT PASSWORD */}
//             <div className="text-right">
//               <a className="text-sm text-red-500 hover:underline cursor-pointer">
//                 Forgot password?
//               </a>
//             </div>

//             {/* BUTTON */}
//             <button className="btn bg-red-500 hover:bg-red-600 border-none w-full text-white rounded-xl h-12">
//               Login
//             </button>

//           </form>

//           {/* SOCIAL LOGIN */}
//           <div className="mt-6">
//             <ScoialLogin />
//           </div>

//           {/* REGISTER */}
//           <p className="text-center text-sm mt-5 text-gray-600">
//             New to system?{" "}
//             <Link to="/auth/register" className="text-red-500 font-semibold">
//               Create account
//             </Link>
//           </p>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="hidden lg:flex bg-gradient-to-br from-red-500 to-red-700 text-white p-12 flex-col justify-center">

//           <h1 className="text-5xl font-bold mb-5">
//             Donate Blood,<br /> Save Life ❤️
//           </h1>

//           <p className="text-red-100 mb-10">
//             Join our community and help save lives.
//           </p>

//           <div className="space-y-6">

//             <div className="flex gap-4">
//               <FaTint size={22} />
//               <div>
//                 <h3 className="font-semibold">Blood Donation</h3>
//                 <p className="text-sm text-red-100">
//                   Help patients by donating blood.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <FaHeartbeat size={22} />
//               <div>
//                 <h3 className="font-semibold">Emergency Support</h3>
//                 <p className="text-sm text-red-100">
//                   Find donors quickly in emergencies.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <FaUserFriends size={22} />
//               <div>
//                 <h3 className="font-semibold">Trusted Community</h3>
//                 <p className="text-sm text-red-100">
//                   Thousands of active donors.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;


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

  // HANDLE LOGIN
  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        // SAVE USER INFO
        fetch("https://backend-11-asiment.vercel.app/user", {
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

        // REDIRECT
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);

        if (error.code === "auth/invalid-credential") {
          alert("Invalid email or password");
        } else if (error.code === "auth/user-not-found") {
          alert("User not found");
        } else if (error.code === "auth/wrong-password") {
          alert("Wrong password");
        } else {
          alert("Login failed");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 via-white to-red-100 flex items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">

          {/* TITLE */}
          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue Blood Donation System
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-5"
          >
            {/* EMAIL */}
            <div>
              <label className="font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-2 rounded-xl h-12 focus:outline-none focus:ring-2 focus:ring-red-400"
                {...register("email", {
                  required: "Email is required",
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="font-medium text-gray-700">
                Password
              </label>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full rounded-xl h-12 pr-10 focus:outline-none focus:ring-2 focus:ring-red-400"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must be at least 6 characters",
                    },
                  })}
                />

                {/* SHOW / HIDE PASSWORD */}
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-red-500 hover:underline"
              >
                Forgot password
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button className="btn bg-red-500 hover:bg-red-600 border-none w-full text-blue rounded-xl h-12">
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
            <Link
              to="/auth/register"
              className="text-red-500 font-semibold hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex bg-gradient-to-br from-red-500 to-red-700 text-white p-12 flex-col justify-center">
          
          <h1 className="text-5xl font-bold mb-5">
            Donate Blood,
            <br />
            Save Life ❤️
          </h1>

          <p className="text-red-100 mb-10">
            Join our community and help save lives.
          </p>

          <div className="space-y-6">

            {/* ITEM 1 */}
            <div className="flex gap-4">
              <FaTint size={22} />

              <div>
                <h3 className="font-semibold">
                  Blood Donation
                </h3>

                <p className="text-sm text-red-100">
                  Help patients by donating blood.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-4">
              <FaHeartbeat size={22} />

              <div>
                <h3 className="font-semibold">
                  Emergency Support
                </h3>

                <p className="text-sm text-red-100">
                  Find donors quickly in emergencies.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-4">
              <FaUserFriends size={22} />

              <div>
                <h3 className="font-semibold">
                  Trusted Community
                </h3>

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