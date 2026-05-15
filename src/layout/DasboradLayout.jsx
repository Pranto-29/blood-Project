

import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaBars } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdBloodtype } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Link } from "react-router";
import { FaTint } from "react-icons/fa";

const DashboardLayout = () => {
  const { role } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl transition ${
      isActive ? "bg-white text-red-600 font-semibold" : "hover:bg-red-500/70"
    }`;

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-gradient-to-b from-red-600 to-red-700 text-white shadow-2xl transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >

        {/* LOGO */}
        {/* <div className="p-6 border-b border-red-400">
          <Logos />
          <p className="text-xs text-red-200">Blood Donation System</p>
        </div> */}
<Link
  to="/"
  className="flex items-center justify-center
   gap-2 text-2xl font-bold dark:text-white hover:text-blue-500 transition"
>
  <FaTint className="text-pink-500 text-2xl" />
  <span>LifeDrop</span>
</Link>


        {/* MENU */}
        <nav className="p-4 space-y-2">

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
          {role === "donnar" && (
            <>
              <NavLink to="/dashboard/my-requests" className={navClass}>
                <MdBloodtype /> My Requests
              </NavLink>

              <NavLink to="/dashboard/add-request" className={navClass}>
                <IoIosCreate /> Create Request
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

        {/* FOOTER */}
        <div className="p-4 text-center text-xs border-t border-red-400 text-red-200">
          Save Life, Donate Blood ❤️
        </div>

      </aside>

      {/* MAIN */}
      <div className="flex-1 md:ml-64">

        {/* HEADER */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars size={22} />
          </button>

          <h1 className="font-bold">Dashboard</h1>

          <span className="text-red-500 font-semibold">{role}</span>
        </header>

        {/* CONTENT */}
        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;