

<<<<<<< HEAD
// import React, { useState, useContext } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaUser, FaHome, FaBars } from "react-icons/fa";
// import { IoIosCreate } from "react-icons/io";
// import { MdBloodtype } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import Logos from "../components/Logos";
// import { AuthContext } from "../context/AuthContext/AuthContext";

// const DashboardLayout = () => {
//   const { role } = useContext(AuthContext);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   console.log(role)

//   const navClass = ({ isActive }) =>
//     `flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
//       isActive
//         ? "bg-white text-red-600 font-semibold shadow"
//         : "hover:bg-red-500 hover:pl-6"
//     }`;
// console.log(role)
//   return (
//     <div className="flex min-h-screen bg-gray-100">

//       {/* Sidebar */}
//       <aside
//         className={`fixed z-30 inset-y-0 left-0 w-64 bg-gradient-to-b from-red-600 via-red-600 to-red-700 text-white shadow-2xl transform transition-transform duration-300
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//       >

//         {/* Logo */}
//         <div className="p-6 text-center border-b border-red-400">
//           <div className="text-2xl font-bold tracking-wide">
//             <Logos />
//           </div>
//           <p className="text-xs mt-1 text-red-200">
//             Blood Donation System
//           </p>
//         </div>

//         {/* Menu */}
//         <nav className="flex-1 p-4 space-y-3">

//           {/* COMMON */}
//           <NavLink to="/dashboard/home" className={navClass}>
//             <FaHome /> Dashboard
//           </NavLink>
//           <NavLink to="/dashboard/profile" className={navClass}>
//             <CgProfile /> My Profile
//           </NavLink>

//           {/* ADMIN */}
//           {role === "admin" && (
//             <>
//               <NavLink to="/dashboard/users" className={navClass}>
//                 <FaUser /> All Users
//               </NavLink>

//               <NavLink to="/dashboard/donation-request" className={navClass}>
//                 <MdBloodtype /> All Requests
//               </NavLink>
//             </>
//           )}

//           {/* DONOR */}
//         {/* <NavLink to="/dashboard/my-request" className={navClass}>
//                 <MdBloodtype /> My Donation Requests Page
//               </NavLink>

//               <NavLink to="/dashboard/add-request" className={navClass}>
//                 <IoIosCreate /> Create Donation Reques
//               </NavLink>  */}
//               {/* DONOR ONLY */}
// {role === "donnar" && (
//   <>
//     <NavLink to="/dashboard/my-requests" className={navClass}>
//       <MdBloodtype /> My Donation Requests
//     </NavLink>

//     <NavLink to="/dashboard/add-request" className={navClass}>
//       <IoIosCreate /> Create Donation Request
//     </NavLink>
//   </>
// )}


              
//           {/* VOLUNTEER */}
//           {role === "volunteer" && (
//             <NavLink to="/dashboard/donation-request" className={navClass}>
//               <MdBloodtype /> All Requests
//             </NavLink>
//           )}

//         </nav>

//         {/* Footer */}
//         <div className="p-4 text-center text-xs border-t border-red-400 text-red-200">
//            Save Life, Donate Blood
//         </div>
//       </aside>

//       {/* Main */}
//       <div className="flex-1 flex flex-col md:ml-64">

//         {/* Header */}
//         <header className="flex items-center justify-between bg-white shadow-md px-6 py-4 sticky top-0 z-10">
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             <FaBars size={22} />
//           </button>

//           <h1 className="text-xl font-bold text-gray-700">
//             Dashboard
//           </h1>

//           <div className="text-sm text-gray-500">
//             Role: <span className="font-semibold text-red-500">{role}</span>
//           </div>
//         </header>

//         {/* Content */}
//         <main className="flex-1 p-6">
//           <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[400px]">
//             <Outlet />
//           </div>
//         </main>

//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
=======
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaBars } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdBloodtype } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Logos from "../components/Logos";
import { AuthContext } from "../context/AuthContext/AuthContext";

const DashboardLayout = () => {
  const { role } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
<<<<<<< HEAD
=======
  console.log(role)
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-white text-red-600 font-semibold shadow"
<<<<<<< HEAD
        : "hover:bg-red-500/70"
    }`;

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-gradient-to-b from-red-600 to-red-700 text-white shadow-2xl transform transition-transform duration-300
=======
        : "hover:bg-red-500 hover:pl-6"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-gradient-to-b from-red-600 via-red-600 to-red-700 text-white shadow-2xl transform transition-transform duration-300
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >

        {/* Logo */}
        <div className="p-6 text-center border-b border-red-400">
<<<<<<< HEAD
          <div className="text-2xl font-bold">
=======
          <div className="text-2xl font-bold tracking-wide">
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
            <Logos />
          </div>
          <p className="text-xs mt-1 text-red-200">
            Blood Donation System
          </p>
        </div>

        {/* Menu */}
<<<<<<< HEAD
        <nav className="flex-1 p-4 space-y-2">

          {/* COMMON */}
          <NavLink to="/dashboard/home" onClick={closeSidebar} className={navClass}>
            <FaHome /> Dashboard
          </NavLink>

          <NavLink to="/dashboard/profile" onClick={closeSidebar} className={navClass}>
=======
        <nav className="flex-1 p-4 space-y-3">

          {/* COMMON */}
          <NavLink to="/dashboard/home" className={navClass}>
            <FaHome /> Dashboard
          </NavLink>
          <NavLink to="/dashboard/profile" className={navClass}>
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
            <CgProfile /> My Profile
          </NavLink>

          {/* ADMIN */}
          {role === "admin" && (
            <>
<<<<<<< HEAD
              <NavLink to="/dashboard/users" onClick={closeSidebar} className={navClass}>
                <FaUser /> All Users
              </NavLink>

              <NavLink to="/dashboard/my-requests" onClick={closeSidebar} className={navClass}>
=======
              <NavLink to="/dashboard/users" className={navClass}>
                <FaUser /> All Users
              </NavLink>

              <NavLink to="/dashboard/donation-request" className={navClass}>
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
                <MdBloodtype /> All Requests
              </NavLink>
            </>
          )}

          {/* DONOR */}
<<<<<<< HEAD
          {role === "donnar" && (
            <>
              <NavLink to="/dashboard/my-requests" onClick={closeSidebar} className={navClass}>
                <MdBloodtype /> My Requests
              </NavLink>

              <NavLink to="/dashboard/add-request" onClick={closeSidebar} className={navClass}>
                <IoIosCreate /> Create Request
              </NavLink>
            </>
          )}

          {/* VOLUNTEER */}
          {role === "volunteer" && (
            <NavLink to="/dashboard/my-requests" onClick={closeSidebar} className={navClass}>
              <MdBloodtype /> All Requests
            </NavLink>
          )}
=======
        {/* <NavLink to="/dashboard/my-request" className={navClass}>
                <MdBloodtype /> My Donation Requests Page
              </NavLink>

              <NavLink to="/dashboard/add-request" className={navClass}>
                <IoIosCreate /> Create Donation Reques
              </NavLink>  */}
              {/* DONOR ONLY */}
{role === "donnar" && (
  <>
    <NavLink to="/dashboard/my-requests" className={navClass}>
      <MdBloodtype /> My Donation Requests
    </NavLink>

    <NavLink to="/dashboard/add-request" className={navClass}>
      <IoIosCreate /> Create Donation Request
    </NavLink>
  </>
)}
              
          {/* VOLUNTEER */}
          {role === "volunteer" && (
            <NavLink to="/dashboard/donation-request" className={navClass}>
              <MdBloodtype /> All Requests
            </NavLink>
          )}

>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
        </nav>

        {/* Footer */}
        <div className="p-4 text-center text-xs border-t border-red-400 text-red-200">
<<<<<<< HEAD
          Save Life, Donate Blood ❤️
=======
           Save Life, Donate Blood
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col md:ml-64">

        {/* Header */}
<<<<<<< HEAD
        <header className="flex items-center justify-between bg-white shadow px-4 md:px-6 py-4 sticky top-0 z-10">

          <button
            className="md:hidden text-gray-700"
            onClick={() => setSidebarOpen(true)}
=======
        <header className="flex items-center justify-between bg-white shadow-md px-6 py-4 sticky top-0 z-10">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
          >
            <FaBars size={22} />
          </button>

<<<<<<< HEAD
          <h1 className="text-lg md:text-xl font-bold text-gray-700">
=======
          <h1 className="text-xl font-bold text-gray-700">
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
            Dashboard
          </h1>

          <div className="text-sm text-gray-500">
            Role: <span className="font-semibold text-red-500">{role}</span>
          </div>
        </header>

        {/* Content */}
<<<<<<< HEAD
        <main className="flex-1 p-4 md:p-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 min-h-[400px]">
=======
        <main className="flex-1 p-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[400px]">
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;