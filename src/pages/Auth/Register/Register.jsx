


<<<<<<< HEAD
// import { useForm } from 'react-hook-form';
// import useAuth from '../../../houk/useAuth';
// import { Link } from 'react-router-dom';
// import SocialLogin from '../../../pages/Auth/SocialLogin/ScoialLogin'; // corrected spelling
// import axios from 'axios';
// import useAxiosSecure from '../../../houk/useAxiosSecure';
// import { useEffect, useState } from 'react';

// const Register = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const { registerUser, updateUserProfile } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   // State for districts & upazilas
//   const [districts, setDistricts] = useState([]);
//   const [upazilas, setUpazilas] = useState([]);
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [selectedUpazila, setSelectedUpazila] = useState('');

//   // Load data
//   useEffect(() => {
//     axios.get('/upazilas.json')
//       .then(res => {
//         const data = res.data[2].data;
//         console.log("Upazilas:", data);
//         setUpazilas(data);
//       });

//     axios.get('/districts.json')
//       .then(res => {
//         const data = res.data[2].data;
//         console.log("Districts:", data);
//         setDistricts(data);
//       });

//   }, []);

//   // Registration handler
//   const handleRegistration = async (data) => {
//     try {
//       const profileImg = data.photo[0];

//       // 1. Firebase user create
//       await registerUser(data.email, data.password);

//       // 2. Upload image
//       const formData = new FormData();
//       formData.append('image', profileImg);

//       const imgRes = await axios.post(
//         `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`,
//         formData
//       );

//       const photoURL = imgRes.data.data.url;

// const districtName = districts.find(d => d.id === selectedDistrict)?.name || '';
// const upazilaName = upazilas.find(u => u.id === selectedUpazila)?.name || '';

// const userInfo = {
//   name: data.name,
//   email: data.email,
//   photoURL: photoURL,
//   bloodGroup: data.bloodGroup,
//   district: districtName,  
//   upazila: upazilaName   
// };

// await axiosSecure.post('/user', userInfo);


//       // 4. Update firebase profile
//       await updateUserProfile({
//         displayName: data.name,
//         photoURL
//       });

//       console.log('Registration successful');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-white-100 px-4 bg-gradient-to-br from-pink-200 to-pink-300">

//       {/* <h2 className="text-3xl font-bold text-center">Welcome to Blood Donation</h2> */}
//       <p className="text-xl text-center font-semibold">Welcome to Blood Donation</p>

//       <form
//         className="bg-pink-200 p-8 rounded-2xl shadow-xl w-full max-w-sm mt-4"
//         onSubmit={handleSubmit(handleRegistration)}
//       >
//         <fieldset className="space-y-4">

//           {/* Name */}
//           <div>
//             <label className="label font-semibold">Name</label>
//             <input
//               type="text"
//               {...register('name', { required: true })}
//               className="input input-bordered w-full"
//               placeholder="Your name"
//             />
//             {errors.name && (
//               <p className="text-pink-500 text-sm mt-1">Name is required</p>
//             )}
//           </div>

//           {/* Photo */}
//           <div>
//             <label className="label font-semibold">Photo</label>
//             <input
//               type="file"
//               {...register('photo', { required: true })}
//               className="file-input w-full"
//             />
//             {errors.photo && (
//               <p className="text-pink-500 text-sm mt-1">Photo is required</p>
//             )}
//           </div>

//           {/* Blood Group */}
//           <label className="label font-semibold">Choose Your Role</label>
//           <select {...register('bloodGroup', { required: true })} defaultValue="" className='input w-full mb-4'>
//             <option disabled value=''>Choose Blood Group</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//           </select>

//           {/* District */}
//           <select
//             value={selectedDistrict}
//             onChange={e => {
//               setSelectedDistrict(e.target.value);
//               setSelectedUpazila(''); // reset upazila on district change
//             }}
//             className="select w-full mb-4"
//           >
//             <option value="">Select Your District</option>
//             {districts.map(d => (
//               <option key={d.id} value={d.id}>
//                 {d.name}
//               </option>
//             ))}
//           </select>

//           {/* Upazila */}
//           <select
//             value={selectedUpazila}
//             onChange={e => setSelectedUpazila(e.target.value)}
//             className="select w-full mb-4"
//           >
//             <option value="">Select Your Upazila</option>
//             {upazilas
//               .filter(u => u.district_id === selectedDistrict)
//               .map(u => (
//                 <option key={u.id} value={u.id}>
//                   {u.name}
//                 </option>
//               ))}
//           </select>

//           {/* Email */}
//           <div>
//             <label className="label font-semibold">Email</label>
//             <input
//               type="email"
//               {...register('email', { required: true })}
//               className="input input-bordered w-full"
//               placeholder="Email"
//             />
//             {errors.email && (
//               <p className="text-pink-500 text-sm mt-1">Email is required</p>
//             )}
//           </div>

//           {/* Password */}
//           <div>
//             <label className="label font-semibold">Password</label>
//             <input
//               type="password"
//               {...register('password', {
//                 required: true,
//                 minLength: 6,
//                 pattern:
//                   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
//               })}
//               className="input input-bordered w-full"
//               placeholder="Password"
//             />
//             {errors.password?.type === 'required' && (
//               <p className="text-pink-500 text-sm mt-1">Password is required</p>
//             )}
//             {errors.password?.type === 'minLength' && (
//               <p className="text-red-400 text-sm mt-1">
//                 Password must be 6 characters or longer
//               </p>
//             )}
//             {errors.password?.type === 'pattern' && (
//               <p className="text-blue-600 text-sm mt-1">
//                 Password must include uppercase, lowercase, number & special character
//               </p>
//             )}
//           </div>

//           <button className="btn btn-primary w-full mt-4 hover:bg-fuchsia-300">
//             Register
//           </button>
//         </fieldset>

//         <p className="text-center mt-4 text-sm">
//           Already have an account?{" "}
//           <Link className="text-red-500 underline" to="/auth/register">
//             Login
//           </Link>
//         </p>
//       </form>
//       <SocialLogin />
//     </div>
//   );
// };

// export default Register;

// import { useForm } from "react-hook-form";
// import useAuth from "../../../houk/useAuth";
// import { Link } from "react-router-dom";
// import SocialLogin from "../../../pages/Auth/SocialLogin/ScoialLogin";
// import axios from "axios";
// import useAxiosSecure from "../../../houk/useAxiosSecure";
// import { useEffect, useState } from "react";

// const Register = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const { registerUser, updateUserProfile } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const [districts, setDistricts] = useState([]);
//   const [upazilas, setUpazilas] = useState([]);
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedUpazila, setSelectedUpazila] = useState("");

//   useEffect(() => {
//     axios.get("/upazilas.json").then(res => {
//       setUpazilas(res.data[2].data);
//     });

//     axios.get("/districts.json").then(res => {
//       setDistricts(res.data[2].data);
//     });
//   }, []);

//   const handleRegistration = async (data) => {
//     try {
//       const profileImg = data.photo[0];

//       await registerUser(data.email, data.password);

//       const formData = new FormData();
//       formData.append("image", profileImg);

//       const imgRes = await axios.post(
//         `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`,
//         formData
//       );

//       const photoURL = imgRes.data.data.url;

//       const districtName =
//         districts.find(d => d.id === selectedDistrict)?.name || "";
//       const upazilaName =
//         upazilas.find(u => u.id === selectedUpazila)?.name || "";

//       const userInfo = {
//         name: data.name,
//         email: data.email,
//         photoURL,
//         bloodGroup: data.bloodGroup,
//         district: districtName,
//         upazila: upazilaName
//       };

//       await axiosSecure.post("/user", userInfo);

//       await updateUserProfile({
//         displayName: data.name,
//         photoURL
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300 px-4">

//       <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white shadow-2xl rounded-2xl p-6 sm:p-8">

//         {/* Header */}
//         <div className="text-center mb-5">
//           <h2 className="text-2xl sm:text-3xl font-bold">
//             Create Account ✨
//           </h2>
//           <p className="text-xs sm:text-sm text-gray-500 mt-1">
//             Join Blood Donation System
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">

//           {/* Name */}
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="input input-bordered w-full"
//             {...register("name", { required: true })}
//           />
//           {errors.name && <p className="text-error text-xs">Name required</p>}

//           {/* Photo */}
//           <input
//             type="file"
//             className="file-input w-full"
//             {...register("photo", { required: true })}
//           />
//           {errors.photo && <p className="text-error text-xs">Photo required</p>}

//           {/* Blood Group */}
//           <select
//             {...register("bloodGroup", { required: true })}
//             className="select select-bordered w-full"
//           >
//             <option value="">Select Blood Group</option>
//             {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(bg => (
//               <option key={bg} value={bg}>{bg}</option>
//             ))}
//           </select>

//           {/* District */}
//           <select
//             value={selectedDistrict}
//             onChange={(e) => {
//               setSelectedDistrict(e.target.value);
//               setSelectedUpazila("");
//             }}
//             className="select select-bordered w-full"
//           >
//             <option value="">Select District</option>
//             {districts.map(d => (
//               <option key={d.id} value={d.id}>{d.name}</option>
//             ))}
//           </select>

//           {/* Upazila */}
//           <select
//             value={selectedUpazila}
//             onChange={(e) => setSelectedUpazila(e.target.value)}
//             className="select select-bordered w-full"
//           >
//             <option value="">Select Upazila</option>
//             {upazilas
//               .filter(u => u.district_id === selectedDistrict)
//               .map(u => (
//                 <option key={u.id} value={u.id}>{u.name}</option>
//               ))}
//           </select>

//           {/* Email */}
//           <input
//             type="email"
//             placeholder="Email"
//             className="input input-bordered w-full"
//             {...register("email", { required: true })}
//           />
//           {errors.email && <p className="text-error text-xs">Email required</p>}

//           {/* Password */}
//           <input
//             type="password"
//             placeholder="Password"
//             className="input input-bordered w-full"
//             {...register("password", {
//               required: true,
//               minLength: 6,
//               pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
//             })}
//           />
//           {errors.password && (
//             <p className="text-error text-xs">
//               Strong password required
//             </p>
//           )}

//           {/* Button */}
//           <button className="btn btn-primary w-full hover:scale-[1.02] transition">
//             Register
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="divider text-xs">OR</div>

//         <SocialLogin />

//         <p className="text-center text-xs sm:text-sm mt-3">
//           Already have account?{" "}
//           <Link to="/auth/login" className="text-primary underline">
//             Login
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Register;

// import { useForm } from "react-hook-form";
// import useAuth from "../../../houk/useAuth";
// import { Link } from "react-router-dom";
// import SocialLogin from "../../../pages/Auth/SocialLogin/ScoialLogin";
// import axios from "axios";
// import useAxiosSecure from "../../../houk/useAxiosSecure";
// import { useEffect, useState } from "react";
// import {
//   FaTint,
//   FaHeartbeat,
//   FaUserFriends,
// } from "react-icons/fa";

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { registerUser, updateUserProfile } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const [districts, setDistricts] = useState([]);
//   const [upazilas, setUpazilas] = useState([]);
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedUpazila, setSelectedUpazila] = useState("");

//   useEffect(() => {
//     axios.get("/upazilas.json").then((res) => {
//       setUpazilas(res.data[2].data);
//     });

//     axios.get("/districts.json").then((res) => {
//       setDistricts(res.data[2].data);
//     });
//   }, []);

//   const handleRegistration = async (data) => {
//     try {
//       const profileImg = data.photo[0];

//       await registerUser(data.email, data.password);

//       const formData = new FormData();
//       formData.append("image", profileImg);

//       const imgRes = await axios.post(
//         `https://api.imgbb.com/1/upload?key=${
//           import.meta.env.VITE_image_host_key
//         }`,
//         formData
//       );

//       const photoURL = imgRes.data.data.url;

//       const districtName =
//         districts.find((d) => d.id === selectedDistrict)?.name || "";

//       const upazilaName =
//         upazilas.find((u) => u.id === selectedUpazila)?.name || "";

//       const userInfo = {
//         name: data.name,
//         email: data.email,
//         photoURL,
//         bloodGroup: data.bloodGroup,
//         district: districtName,
//         upazila: upazilaName,
//       };

//       await axiosSecure.post("/user", userInfo);

//       await updateUserProfile({
//         displayName: data.name,
//         photoURL,
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-3 sm:px-5 lg:px-8 py-6">

//       <div className="w-full max-w-7xl bg-white rounded-[30px] overflow-hidden shadow-[0_10px_60px_rgba(0,0,0,0.1)] grid grid-cols-1 lg:grid-cols-2">

//         {/* LEFT SIDE */}
//         <div className="p-5 sm:p-8 md:p-10 lg:p-14">

//           {/* Header */}
//           <div className="mb-6 text-center lg:text-left">

//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
//               Create
//               <span className="text-red-500"> Account</span>
//             </h2>

//             <p className="text-gray-500 mt-3 text-sm sm:text-base">
//               Join our blood donation community today ❤️
//             </p>
//           </div>

//           {/* FORM */}
//           <form
//             onSubmit={handleSubmit(handleRegistration)}
//             className="space-y-4"
//           >

//             {/* Name */}
//             <div>
//               <input
//                 type="text"
//                 placeholder="Your Full Name"
//                 className="input input-bordered w-full rounded-2xl h-12 sm:h-14 px-4 focus:outline-none focus:ring-2 focus:ring-red-400"
//                 {...register("name", { required: true })}
//               />

//               {errors.name && (
//                 <p className="text-red-500 text-xs mt-1">
//                   Name is required
//                 </p>
//               )}
//             </div>

//             {/* Photo */}
//             <div>
//               <input
//                 type="file"
//                 className="file-input file-input-bordered w-full rounded-2xl"
//                 {...register("photo", { required: true })}
//               />

//               {errors.photo && (
//                 <p className="text-red-500 text-xs mt-1">
//                   Photo is required
//                 </p>
//               )}
//             </div>

//             {/* Blood Group */}
//             <div>
//               <select
//                 {...register("bloodGroup", { required: true })}
//                 className="select select-bordered w-full rounded-2xl h-12 sm:h-14 focus:outline-none focus:ring-2 focus:ring-red-400"
//               >
//                 <option value="">Select Blood Group</option>

//                 {[
//                   "A+",
//                   "A-",
//                   "B+",
//                   "B-",
//                   "AB+",
//                   "AB-",
//                   "O+",
//                   "O-",
//                 ].map((bg) => (
//                   <option key={bg} value={bg}>
//                     {bg}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* District & Upazila */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//               {/* District */}
//               <select
//                 value={selectedDistrict}
//                 onChange={(e) => {
//                   setSelectedDistrict(e.target.value);
//                   setSelectedUpazila("");
//                 }}
//                 className="select select-bordered w-full rounded-2xl h-12 sm:h-14 focus:outline-none focus:ring-2 focus:ring-red-400"
//               >
//                 <option value="">District</option>

//                 {districts.map((d) => (
//                   <option key={d.id} value={d.id}>
//                     {d.name}
//                   </option>
//                 ))}
//               </select>

//               {/* Upazila */}
//               <select
//                 value={selectedUpazila}
//                 onChange={(e) =>
//                   setSelectedUpazila(e.target.value)
//                 }
//                 className="select select-bordered w-full rounded-2xl h-12 sm:h-14 focus:outline-none focus:ring-2 focus:ring-red-400"
//               >
//                 <option value="">Upazila</option>

//                 {upazilas
//                   .filter(
//                     (u) => u.district_id === selectedDistrict
//                   )
//                   .map((u) => (
//                     <option key={u.id} value={u.id}>
//                       {u.name}
//                     </option>
//                   ))}
//               </select>
//             </div>

//             {/* Email */}
//             <div>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="input input-bordered w-full rounded-2xl h-12 sm:h-14 px-4 focus:outline-none focus:ring-2 focus:ring-red-400"
//                 {...register("email", { required: true })}
//               />

//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">
//                   Email is required
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <input
//                 type="password"
//                 placeholder="Strong Password"
//                 className="input input-bordered w-full rounded-2xl h-12 sm:h-14 px-4 focus:outline-none focus:ring-2 focus:ring-red-400"
//                 {...register("password", {
//                   required: true,
//                   minLength: 6,
//                   pattern:
//                     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
//                 })}
//               />

//               {errors.password && (
//                 <p className="text-red-500 text-xs mt-1">
//                   Password must contain uppercase, lowercase,
//                   number & special character
//                 </p>
//               )}
//             </div>

//             {/* Button */}
//             <button className="btn w-full h-12 sm:h-14 rounded-2xl bg-red-500 hover:bg-red-600 border-none text-white text-base sm:text-lg font-semibold shadow-lg hover:scale-[1.01] transition-all duration-300">
//               Create Account
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="divider text-gray-400 text-sm my-6">
//             OR CONTINUE WITH
//           </div>

//           {/* Social Login */}
//           <SocialLogin />

//           {/* Login */}
//           <p className="text-center text-sm sm:text-base text-gray-600 mt-6">
//             Already have an account?{" "}
//             <Link
//               to="/auth/login"
//               className="text-red-500 font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="hidden lg:flex relative bg-gradient-to-br from-red-500 via-red-600 to-rose-700 p-14 text-white flex-col justify-center overflow-hidden">

//           {/* Blur Circle */}
//           <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

//           <div className="relative z-10">

//             <h1 className="text-5xl xl:text-6xl font-bold leading-tight mb-6">
//               Become
//               <br />
//               a Lifesaver ❤️
//             </h1>

//             <p className="text-red-100 text-lg leading-relaxed mb-12 max-w-md">
//               Register today and become part of a trusted blood
//               donation network helping thousands of people.
//             </p>

//             {/* FEATURES */}
//             <div className="space-y-7">

//               {/* Item */}
//               <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">

//                 <div className="bg-white/20 p-4 rounded-2xl">
//                   <FaTint size={24} />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold mb-1">
//                     Donate Blood
//                   </h3>

//                   <p className="text-red-100 text-sm leading-relaxed">
//                     Your blood donation can save multiple lives.
//                   </p>
//                 </div>
//               </div>

//               {/* Item */}
//               <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">

//                 <div className="bg-white/20 p-4 rounded-2xl">
//                   <FaHeartbeat size={24} />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold mb-1">
//                     Emergency Help
//                   </h3>

//                   <p className="text-red-100 text-sm leading-relaxed">
//                     Quickly connect with donors during emergencies.
//                   </p>
//                 </div>
//               </div>

//               {/* Item */}
//               <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">

//                 <div className="bg-white/20 p-4 rounded-2xl">
//                   <FaUserFriends size={24} />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold mb-1">
//                     Trusted Community
//                   </h3>

//                   <p className="text-red-100 text-sm leading-relaxed">
//                     Join thousands of active and verified donors.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


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

      // Upload image first
      const formData = new FormData();
      formData.append("image", profileImg);

      const imageUpload = await axios.post(
=======
import { useForm } from 'react-hook-form';
import useAuth from '../../../houk/useAuth';
import { Link } from 'react-router-dom';
import SocialLogin from '../../../pages/Auth/SocialLogin/ScoialLogin'; // corrected spelling
import axios from 'axios';
import useAxiosSecure from '../../../houk/useAxiosSecure';
import { useEffect, useState } from 'react';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();

  // State for districts & upazilas
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');

  // Load data
  useEffect(() => {
    axios.get('/upazilas.json')
      .then(res => {
        const data = res.data[2].data;
        console.log("Upazilas:", data);
        setUpazilas(data);
      });

    axios.get('/districts.json')
      .then(res => {
        const data = res.data[2].data;
        console.log("Districts:", data);
        setDistricts(data);
      });

  }, []);

  // Registration handler
  const handleRegistration = async (data) => {
    try {
      const profileImg = data.photo[0];

      // 1. Firebase user create
      await registerUser(data.email, data.password);

      // 2. Upload image
      const formData = new FormData();
      formData.append('image', profileImg);

      const imgRes = await axios.post(
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`,
        formData
      );

<<<<<<< HEAD
      const photoURL = imageUpload.data.data.url;

      // Create Firebase User
      await registerUser(data.email, data.password);

      // Find district & upazila names
      const districtName =
        districts.find((d) => String(d.id) === String(selectedDistrict))
          ?.name || "";

      const upazilaName =
        upazilas.find((u) => String(u.id) === String(selectedUpazila))
          ?.name || "";

      // User info
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

      // Save user in database
      await axiosSecure.post("/user", userInfo);

      // Update profile
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
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        setFirebaseError("This email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        setFirebaseError("Please provide a valid email.");
      } else if (error.code === "auth/weak-password") {
        setFirebaseError("Password should be at least 6 characters.");
      } else {
        setFirebaseError(error.message);
      }
    } finally {
      setLoading(false);
=======
      const photoURL = imgRes.data.data.url;

const districtName = districts.find(d => d.id === selectedDistrict)?.name || '';
const upazilaName = upazilas.find(u => u.id === selectedUpazila)?.name || '';

const userInfo = {
  name: data.name,
  email: data.email,
  photoURL: photoURL,
  bloodGroup: data.bloodGroup,
  district: districtName,  
  upazila: upazilaName   
};

await axiosSecure.post('/user', userInfo);


      // 4. Update firebase profile
      await updateUserProfile({
        displayName: data.name,
        photoURL
      });

      console.log('Registration successful');

    } catch (error) {
      console.error(error);
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-100 flex items-center justify-center px-4 py-8 overflow-hidden">
      <div className="w-full max-w-7xl bg-white rounded-[32px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="p-6 sm:p-10 lg:p-14">
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
              Create <span className="text-red-500">Account</span>
            </h1>

            <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-md">
              Join our trusted blood donation platform and help save lives.
            </p>
          </div>

          {/* ERROR MESSAGE */}
          {firebaseError && (
            <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {firebaseError}
            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="mb-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
              {success}
            </div>
          )}

          <form
            onSubmit={handleSubmit(handleRegistration)}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full rounded-2xl h-14 px-4 focus:outline-none focus:ring-2 focus:ring-red-400"
                {...register("name", {
                  required: "Name is required",
                })}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Photo */}
            <div>
              <input
                type="file"
                className="file-input file-input-bordered w-full rounded-2xl"
                {...register("photo", {
                  required: "Photo is required",
                })}
              />

              {errors.photo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>

            {/* Blood Group */}
            <div>
              <select
                className="select select-bordered w-full rounded-2xl h-14"
                {...register("bloodGroup", {
                  required: "Blood group is required",
                })}
              >
                <option value="">Select Blood Group</option>

                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
                  .map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
              </select>

              {errors.bloodGroup && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bloodGroup.message}
                </p>
              )}
            </div>

            {/* District & Upazila */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <select
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value);
                    setSelectedUpazila("");
                  }}
                  className="select select-bordered w-full rounded-2xl h-14"
                >
                  <option value="">Select District</option>

                  {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={selectedUpazila}
                  onChange={(e) => setSelectedUpazila(e.target.value)}
                  className="select select-bordered w-full rounded-2xl h-14"
                >
                  <option value="">Select Upazila</option>

                  {upazilas
                    .filter(
                      (upazila) =>
                        String(upazila.district_id) ===
                        String(selectedDistrict)
                    )
                    .map((upazila) => (
                      <option key={upazila.id} value={upazila.id}>
                        {upazila.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full rounded-2xl h-14 px-4"
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

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Strong Password"
                className="input input-bordered w-full rounded-2xl h-14 px-4"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                    message:
                      "Must contain uppercase, lowercase, number & special character",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-5 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn w-full h-14 rounded-2xl border-none bg-red-500 hover:bg-red-600 text-white text-lg font-semibold shadow-lg transition-all duration-300"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-gray-400 my-8">
            OR CONTINUE WITH
          </div>

          {/* Social Login */}
          <SocialLogin />

          {/* Login */}
          <p className="text-center text-gray-600 mt-6 text-sm sm:text-base">
            Already have an account?{' '}
            <Link
              to="/auth/login"
              className="text-red-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex relative bg-gradient-to-br from-red-500 via-red-600 to-rose-700 text-white p-14 flex-col justify-center overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              Become
              <br />
              a Lifesaver ❤️
            </h1>

            <p className="text-red-100 text-lg leading-relaxed mb-12 max-w-md">
              Register today and connect with thousands of donors helping save lives every day.
            </p>

            <div className="space-y-6">
              {/* Card 1 */}
              <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-3xl">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <FaTint size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    Donate Blood
                  </h3>

                  <p className="text-red-100 text-sm leading-relaxed">
                    Your donation can save multiple lives in emergency moments.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-3xl">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <FaHeartbeat size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    Emergency Support
                  </h3>

                  <p className="text-red-100 text-sm leading-relaxed">
                    Quickly find blood donors during critical emergencies.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-3xl">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <FaUserFriends size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    Trusted Community
                  </h3>

                  <p className="text-red-100 text-sm leading-relaxed">
                    Join thousands of verified and active blood donors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
=======
    <div className="h-screen flex flex-col items-center justify-center bg-white-100 px-4 bg-gradient-to-br from-pink-200 to-pink-300">

      {/* <h2 className="text-3xl font-bold text-center">Welcome to Blood Donation</h2> */}
      <p className="text-xl text-center font-semibold">Welcome to Blood Donation</p>

      <form
        className="bg-pink-200 p-8 rounded-2xl shadow-xl w-full max-w-sm mt-4"
        onSubmit={handleSubmit(handleRegistration)}
      >
        <fieldset className="space-y-4">

          {/* Name */}
          <div>
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              className="input input-bordered w-full"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-pink-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Photo */}
          <div>
            <label className="label font-semibold">Photo</label>
            <input
              type="file"
              {...register('photo', { required: true })}
              className="file-input w-full"
            />
            {errors.photo && (
              <p className="text-pink-500 text-sm mt-1">Photo is required</p>
            )}
          </div>

          {/* Blood Group */}
          <label className="label font-semibold">Choose Your Role</label>
          <select {...register('bloodGroup', { required: true })} defaultValue="" className='input w-full mb-4'>
            <option disabled value=''>Choose Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          {/* District */}
          <select
            value={selectedDistrict}
            onChange={e => {
              setSelectedDistrict(e.target.value);
              setSelectedUpazila(''); // reset upazila on district change
            }}
            className="select w-full mb-4"
          >
            <option value="">Select Your District</option>
            {districts.map(d => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>

          {/* Upazila */}
          <select
            value={selectedUpazila}
            onChange={e => setSelectedUpazila(e.target.value)}
            className="select w-full mb-4"
          >
            <option value="">Select Your Upazila</option>
            {upazilas
              .filter(u => u.district_id === selectedDistrict)
              .map(u => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
          </select>

          {/* Email */}
          <div>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-pink-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              {...register('password', {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
              })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password?.type === 'required' && (
              <p className="text-pink-500 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className="text-red-400 text-sm mt-1">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === 'pattern' && (
              <p className="text-blue-600 text-sm mt-1">
                Password must include uppercase, lowercase, number & special character
              </p>
            )}
          </div>

          <button className="btn btn-primary w-full mt-4 hover:bg-fuchsia-300">
            Register
          </button>
        </fieldset>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link className="text-red-500 underline" to="/auth/register">
            Login
          </Link>
        </p>
      </form>
      <SocialLogin />
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
    </div>
  );
};

export default Register;
