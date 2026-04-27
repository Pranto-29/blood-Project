


// import React, { useState, useEffect } from "react";
// import Logos from "../../../components/Logos";
// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../../houk/useAuth";
// import { FiUser } from "react-icons/fi";

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   // Dark Mode toggle
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => console.log("Logged out successfully"))
//       .catch((error) => console.log(error));
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink
//           className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
//           to="/"
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
//           to="/donation-request"
//         >
//           Donation Request
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
//           to="/blog"
//         >
//           Blogs
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
//           to="/funding"
//         >
//           Donate Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
//           to="/search"
//         >
//           Search Page
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
//           to="/funding-page"
//         >
//           Funding Page
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm px-4">
//       {/* Navbar Start */}
//       <div className="navbar-start">
//         {/* Mobile Dropdown */}
//         <div className="dropdown">
//           <div tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow-md">
//             {links}
//           </ul>
//         </div>

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 btn btn-ghost text-xl dark:text-white">
//           {/* Logos component with text */}
//           <Logos size={20} />
      
//         </Link>
//       </div>

//       {/* Navbar Center */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end flex items-center gap-2">
//         {!user ? (
//           <Link
//             className="btn bg-blue-500 text-white hover:bg-blue-600"
//             to="/auth/login"
//           >
//             Log in
//           </Link>
//         ) : (
//           <div className="flex items-center gap-2 relative">
//             {/* Profile Button */}
//             <div className="relative">
//               <button
//                 onClick={() => setProfileOpen(!profileOpen)}
//                 className="btn btn-ghost btn-circle text-black dark:text-white"
//                 title="Profile"
//               >
//                 <FiUser size={20} />
//               </button>

//               {profileOpen && (
//                 <ul className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
//                   <li>
//                     <NavLink
//                       to="/dashboard"
//                       className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                       onClick={() => setProfileOpen(false)}
//                     >
//                       Dashboard
//                     </NavLink>
//                   </li>
//                   <li>
//                     <button
//                       onClick={handleLogOut}
//                       className="w-full text-left px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                     >
//                       Log out
//                     </button>
//                   </li>
//                 </ul>
//               )}
//             </div>

//             {/* Dark Mode Button */}
//             <button
//               onClick={toggleDarkMode}
//               className="btn btn-ghost btn-square text-black dark:text-white"
//               title="Toggle Dark Mode"
//             >
//               {darkMode ? "☀️" : "🌙"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import Logos from "../../../components/Logos";
// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../../houk/useAuth";
// import avatarImg from "../../../assets/brands/casio.png" 
// import { FiSun, FiMoon } from "react-icons/fi";

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     if (darkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [darkMode]);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => console.log("Logged out successfully"))
//       .catch((err) => console.log(err));
//     setProfileOpen(false);
//   };

//   const links = (
//     <>
//       <li><NavLink className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white" to="/">Home</NavLink></li>
//       <li><NavLink className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white" to="/donation-request">Donation Request</NavLink></li>
//       <li><NavLink className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white" to="/blog">Blogs</NavLink></li>
//       <li><NavLink className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white" to="/funding">Donate Page</NavLink></li>
//       <li><NavLink className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white" to="/search">Search Page</NavLink></li>
//       <li><NavLink className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white" to="/funding-page">Funding Page</NavLink></li>
//     </>
//   );

//   return (
//     <div className="navbar bg-white dark:bg-pink-600 text-red-4 dark:text-white shadow-sm px-4">
//       {/* Navbar Start */}
//       <div className="navbar-start flex items-center gap-2">
//         <div className="dropdown">
//           <div tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
//             </svg>
//           </div>
//           <ul className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow-md">
//             {links}
//           </ul>
//         </div>
//         <Link to="/" className="flex items-center gap-2 btn btn-ghost text-xl dark:text-white">
//           <Logos size={20} />
//         </Link>
//       </div>

//       {/* Navbar Center */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 flex items-center gap-2">{links}</ul>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end flex items-center gap-2">
//         {/* Dark Mode Toggle */}
//         <button
//           onClick={toggleDarkMode}
//           className="btn btn-ghost btn-square text-black dark:text-white"
//           title="Toggle Dark Mode"
//         >
//           {darkMode ? <FiSun size={20}/> : <FiMoon size={20}/>}
//         </button>

//         {!user ? (
//           <Link className="btn bg-blue-500 text-white hover:bg-blue-600" to="/auth/login">Log in</Link>
//         ) : (
//           <div className="relative">
//             {/* Profile Button */}
//             <button onClick={() => setProfileOpen(!profileOpen)} className="btn btn-ghost btn-circle p-0">
//               <img
//                 src={user.photoURL || avatarImg}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700"
//               />
//             </button>

//             {/* Profile Dropdown */}
//             {profileOpen && (
//               <ul className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
//                 <li>
//                   <NavLink
//                     to="/dashboard"
//                     className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                     onClick={() => setProfileOpen(false)}
//                   >
//                     Dashboard
//                   </NavLink>
//                 </li>
//                 <li>
//                   <button
//                     onClick={handleLogOut}
//                     className="w-full text-left px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                   >
//                     Log out
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import Logos from "../../../components/Logos";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../houk/useAuth";
import avatarImg from "../../../assets/brands/casio.png";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGear, FaUser } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Handle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Logout handler
  const handleLogOut = () => {
    logOut().catch(console.log);
    setProfileOpen(false);
  };

  const links = (
    <>
      <li><NavLink to="/" className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">Home</NavLink></li>
      <li><NavLink to="/donation-request" className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">Donation Request</NavLink></li>
      <li><NavLink to="/blog" className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">Blogs</NavLink></li>
      <li><NavLink to="/funding" className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">Donate Page</NavLink></li>
      <li><NavLink to="/search" className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">Search Page</NavLink></li>
      <li><NavLink to="/funding-page" className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">Funding Page</NavLink></li>
      {/* <li><NavLink to="/requests/:id" className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">Request Details</NavLink></li> */}
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Left: Logo + Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold dark:text-white">
              <Logos size={15} />
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden btn btn-ghost p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Center: Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ul className="menu menu-horizontal px-1 flex items-center gap-2">{links}</ul>
          </div>

          {/* Right: User / Dark Mode */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="btn btn-ghost btn-square text-black dark:text-white"
              title="Toggle Dark Mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {!user ? (
              <Link className="btn bg-blue-500 text-white hover:bg-blue-600" to="/auth/login">Log in</Link>
            ) : (
              <div className="relative">
                {/* Profile Button */}
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="btn btn-ghost btn-circle p-0"
                >
                  <img
                    src={user.photoURL || avatarImg}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700"
                  />
                </button>

                {/* Profile Dropdown */}
                {profileOpen && (
                  <ul className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <li>
                      <NavLink
                        to="/dashboard"
                        className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setProfileOpen(false)}
                      >
                        <FaUser className="inline mr-1"/> Dashboard
                      </NavLink>
                    </li>
                    <li className="flex items-center justify-between px-4 py-2">
                      <span className="text-black dark:text-white flex items-center gap-1"><FaGear /> Theme</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-sm"
                        checked={darkMode}
                        onChange={(e) => setDarkMode(e.target.checked)}
                      />
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="w-full text-left px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
          <ul className="menu menu-compact space-y-2">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;