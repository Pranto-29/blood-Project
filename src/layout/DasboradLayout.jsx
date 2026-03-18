


import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaList, FaUsers, FaBars } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdBloodtype } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Logos from "../components/Logos";
import { AuthContext } from "../context/AuthContext/AuthContext";

const DashboardLayout = () => {
  const { role } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-red-600 text-white flex flex-col transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >

        {/* Logo */}
        <div className="p-6 text-2xl font-bold border-b border-red-400">
          <Logos />
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">

          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
         <FaHome /> Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
        <CgProfile /> My Profile
          </NavLink>


       {
        role == 'admin' && (
             <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <FaUser /> ALL USERS
          </NavLink>
        )
       }

        {/* {
        role == 'admin' && (
             <NavLink
            to="/dashboard/add-request"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <FaUser /> Add Request
          </NavLink>
        )
       } */}
          <NavLink
            to="/dashboard/my-request"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
          <MdBloodtype /> All Donation Request
          </NavLink>

          

         {
          role == 'donar' && ( <NavLink
            to="/dashboard/add-request"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <FaUsers /> Add Request
          </NavLink>)
         }

          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <FaHome /> Home
          </NavLink>

             <NavLink
            to="/dashboard/add-request"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <IoIosCreate /> Create Request Page
          </NavLink>

        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-red-400 text-sm">
          © Blood Donation Admin
        </div>

      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        <header className="flex items-center justify-between bg-white shadow p-4">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars size={24} />
          </button>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default DashboardLayout;



// import React, { useState, useContext } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaUser, FaHome, FaList, FaUsers, FaBars } from "react-icons/fa";
// import Logos from "../components/Logos";
// import { AuthContext } from "../context/AuthContext/AuthContext";

// const DashboardLayout = () => {
//   const { role } = useContext(AuthContext); // role = admin | donor | volunteer
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Reusable nav class
//   const navClass = ({ isActive }) =>
//     `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
//       isActive ? "bg-red-700" : ""
//     }`;

//   return (
//     <div className="flex min-h-screen bg-gray-100">

//       {/* Sidebar */}
//       <aside
//         className={`fixed z-30 inset-y-0 left-0 w-64 bg-red-600 text-white flex flex-col transform transition-transform duration-300 ease-in-out
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//       >
//         {/* Logo */}
//         <div className="p-6 text-2xl font-bold border-b border-red-400">
//           <Logos />
//         </div>

//         {/* Sidebar Menu */}
//         <nav className="flex-1 p-4 space-y-2">

//           {/* Common */}
//           <NavLink to="/dashboard/home" className={navClass}>
//             <FaHome /> Dashboard
//           </NavLink>

//           <NavLink to="/dashboard/profile" className={navClass}>
//             <FaUser /> My Profile
//           </NavLink>

//           {/* ================= ADMIN ================= */}
//           {role === "admin" && (
//             <>
//               <NavLink to="/dashboard/users" className={navClass}>
//                 <FaUsers /> All Users
//               </NavLink>

//               <NavLink to="/dashboard/all-blood-donation-requests" className={navClass}>
//                 <FaList /> All Requests
//               </NavLink>

//               <NavLink to="/dashboard/add-request" className={navClass}>
//                 <FaList /> Add Request
//               </NavLink>
//             </>
//           )}

//           {/* ================= DONOR ================= */}
//           {role === "donor" && (
//             <>
//               <NavLink to="/dashboard/create-donation-request" className={navClass}>
//                 <FaUsers /> Create Request
//               </NavLink>
//                <NavLink
//             to="/dashboard/my-request"
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 transition ${
//                 isActive ? "bg-red-700" : ""
//               }`
//             }
//           >
//             <FaUser /> My Request
//           </NavLink>
//             </>
//           )}

//           {/* ================= VOLUNTEER ================= */}
//           {role === "volunteer" && (
//             <>
//               <NavLink to="/dashboard/all-blood-donation-requests" className={navClass}>
//                 <FaList /> All Requests
//               </NavLink>
//             </>
//           )}
//         </nav>

//         {/* Footer */}
//         <div className="p-4 border-t border-red-400 text-sm">
//           © Blood Donation Dashboard
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col md:ml-64">
//         {/* Header */}
//         <header className="flex items-center justify-between bg-white shadow p-4">
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             <FaBars size={24} />
//           </button>
//           <h1 className="text-2xl font-semibold">Dashboard</h1>
//         </header>

//         {/* Outlet */}
//         <main className="flex-1 p-6 overflow-auto">
//           <Outlet />
//         </main>
//       </div>

//     </div>
//   );
// };

// export default DashboardLayout;