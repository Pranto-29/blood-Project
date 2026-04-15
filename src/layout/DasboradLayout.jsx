

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

  console.log(role)

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-white text-red-600 font-semibold shadow"
        : "hover:bg-red-500 hover:pl-6"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-gradient-to-b from-red-600 via-red-600 to-red-700 text-white shadow-2xl transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >

        {/* Logo */}
        <div className="p-6 text-center border-b border-red-400">
          <div className="text-2xl font-bold tracking-wide">
            <Logos />
          </div>
          <p className="text-xs mt-1 text-red-200">
            Blood Donation System
          </p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-3">

          {/* COMMON */}
          <NavLink to="/dashboard/home" className={navClass}>
            <FaHome /> Dashboard
          </NavLink>

          <NavLink to="/dashboard/profile" className={navClass}>
            <CgProfile /> My Profile
          </NavLink>

          {/* ADMIN */}
          {role === "admin" && (
            <>
              <NavLink to="/dashboard/users" className={navClass}>
                <FaUser /> All Users
              </NavLink>

              <NavLink to="/dashboard/donation-request" className={navClass}>
                <MdBloodtype /> All Requests
              </NavLink>
            </>
          )}

          {/* DONOR */}
        {/* <NavLink to="/dashboard/my-request" className={navClass}>
                <MdBloodtype /> My Donation Requests Page
              </NavLink>

              <NavLink to="/dashboard/add-request" className={navClass}>
                <IoIosCreate /> Create Donation Reques
              </NavLink>  */}
              {/* DONOR ONLY */}
{role === "donnar" && (
  <>
    <NavLink to="/dashboard/my-request" className={navClass}>
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

        </nav>

        {/* Footer */}
        <div className="p-4 text-center text-xs border-t border-red-400 text-red-200">
           Save Life, Donate Blood
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col md:ml-64">

        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow-md px-6 py-4 sticky top-0 z-10">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars size={22} />
          </button>

          <h1 className="text-xl font-bold text-gray-700">
            Dashboard
          </h1>

          <div className="text-sm text-gray-500">
            Role: <span className="font-semibold text-red-500">{role}</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[400px]">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;