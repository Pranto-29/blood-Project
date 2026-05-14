

// // import React, { useEffect, useState } from 'react';
// // import useAxiosSecure from '../../../houk/useAxiosSecure';

// // const User = () => {
// //   const axiosSecure = useAxiosSecure();
// //   const [users, setUsers] = useState([]);

// //   // Load users
// //   useEffect(() => {
// //     axiosSecure.get('/user')
// //       .then(res => setUsers(res.data))
// //       .catch(err => console.log(err));
// //   }, [axiosSecure]);

// //   // Change user status
// //   const handleStatusChange = (userId, newStatus) => {
// //     axiosSecure.patch(`/update/user/status/${userId}`, { status: newStatus })
// //       .then(res => {
// //         if (res.data.modifiedCount > 0) {
// //           setUsers(users.map(u => u._id === userId ? { ...u, status: newStatus } : u));
// //         }
// //       })
// //       .catch(err => console.log(err));
// //   };

// //   return (
// //     <div className="overflow-x-auto p-6">
// //       <h2 className="text-2xl font-bold mb-4">All Users</h2>
// //       <table className="table w-full">
// //         <thead>
// //           <tr>
// //             <th></th>
// //             <th>Name</th>
// //             <th>Role</th>
// //             <th>Status</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users?.map(user => (
// //             <tr key={user._id}>
// //               <td>
// //                 <input type="checkbox" className="checkbox" />
// //               </td>
// //               <td>
// //                 <div className="flex items-center gap-3">
// //                   <div className="avatar">
// //                     <div className="mask mask-squircle h-12 w-12">
// //                       <img src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} alt="Avatar" />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <div className="font-bold">{user?.displayName || user?.name || "No Name"}</div>
// //                     <div className="text-sm opacity-50">{user?.email}</div>
// //                   </div>
// //                 </div>
// //               </td>
// //               <td>{user?.role}</td>
// //               <td>{user?.status}</td>
// //               <td>
// //                 {user?.status === "active" ? (
// //                   <button
// //                     onClick={() => handleStatusChange(user._id, "blocked")}
// //                     className="btn btn-error btn-xs"
// //                   >
// //                     Block
// //                   </button>
// //                 ) : (
// //                   <button
// //                     onClick={() => handleStatusChange(user._id, "active")}
// //                     className="btn btn-success btn-xs"
// //                   >
// //                     Activate
// //                   </button>
// //                 )}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default User;

// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../../houk/useAxiosSecure';

// const User = () => {
//   const axiosSecure = useAxiosSecure();
//   const [users, setUsers] = useState([]);

//   // Load all users
//   useEffect(() => {
//     axiosSecure.get('/user')
//       .then(res => setUsers(res.data))
//       .catch(err => console.log(err));
//   }, [axiosSecure]);

//   // Change user status
//   const handleStatusChange = (userId, newStatus) => {
//     axiosSecure.patch(`/update/user/status/${userId}`, { status: newStatus })
//       .then(res => {
//         if (res.data.modifiedCount > 0) {
//           setUsers(users.map(u => u._id === userId ? { ...u, status: newStatus } : u));
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   // Change user role
//   const handleRoleChange = (userId, newRole) => {
//     axiosSecure.patch(`/update/user/role/${userId}`, { role: newRole })
//       .then(res => {
//         if (res.data.modifiedCount > 0) {
//           setUsers(users.map(u => u._id === userId ? { ...u, role: newRole } : u));
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="overflow-x-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">All Users</h2>
//       <table className="table w-full border border-gray-200">
//         <thead>
//           <tr className="bg-gray-100">
//             <th></th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users?.map(user => (
//             <tr key={user._id} className="hover:bg-gray-50">
//               <td>
//                 <input type="checkbox" className="checkbox" />
//               </td>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle h-12 w-12">
//                       <img src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} alt="Avatar" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-bold">{user?.displayName || user?.name || "No Name"}</div>
//                     <div className="text-sm opacity-50">{user?.email}</div>
//                   </div>
//                 </div>
//               </td>
//               <td>{user?.role}</td>
//               <td>{user?.status}</td>
//               <td className="flex gap-2">
//                 {/* Status button */}
//                 {user?.status === "active" ? (
//                   <button
//                     onClick={() => handleStatusChange(user._id, "blocked")}
//                     className="btn btn-error btn-xs"
//                   >
//                     Block
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => handleStatusChange(user._id, "active")}
//                     className="btn btn-success btn-xs"
//                   >
//                     Activate
//                   </button>
//                 )}

//                 {/* Make Volunteer */}
//                 {user?.role !== "volunteer" && (
//                   <button
//                     onClick={() => handleRoleChange(user._id, "volunteer")}
//                     className="btn btn-info btn-xs"
//                   >
//                     Make Volunteer
//                   </button>
//                 )}

//                 {/* Make Admin */}
//                 {user?.role !== "admin" && (
//                   <button
//                     onClick={() => handleRoleChange(user._id, "admin")}
//                     className="btn btn-warning btn-xs"
//                   >
//                     Make Admin
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default User;

import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../houk/useAxiosSecure';

const User = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get('/user')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, [axiosSecure]);

  const handleStatusChange = (userId, newStatus) => {
    axiosSecure.patch(`/update/user/status/${userId}`, { status: newStatus })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          setUsers(prev =>
            prev.map(u => u._id === userId ? { ...u, status: newStatus } : u)
          );
        }
      })
      .catch(err => console.log(err));
  };

  const handleRoleChange = (userId, newRole) => {
    axiosSecure.patch(`/update/user/role/${userId}`, { role: newRole })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          setUsers(prev =>
            prev.map(u => u._id === userId ? { ...u, role: newRole } : u)
          );
        }
      })
      .catch(err => console.log(err));
  };

  const actionBtn =
    "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95";

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">User Management</h2>
        <p className="text-sm text-gray-500">
          Manage users, roles and account status
        </p>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">

        <div className="overflow-x-auto">
          <table className="table w-full">

            {/* HEAD */}
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
              <tr>
                <th></th>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>

              {users?.map(user => (
                <tr key={user._id} className="hover:bg-gray-50 transition">

                  {/* CHECKBOX */}
                  <td>
                    <input type="checkbox" className="checkbox checkbox-sm" />
                  </td>

                  {/* USER INFO */}
                  <td>
                    <div className="flex items-center gap-3">

                      <div className="avatar">
                        <div className="w-11 rounded-full ring ring-gray-200">
                          <img
                            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                            alt="user"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="font-semibold text-gray-800">
                          {user?.displayName || user?.name || "No Name"}
                        </div>
                        <div className="text-xs text-gray-400">
                          {user?.email}
                        </div>
                      </div>

                    </div>
                  </td>

                  {/* ROLE BADGE */}
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${user?.role === "admin"
                        ? "bg-red-100 text-red-600"
                        : user?.role === "volunteer"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                      {user?.role || "user"}
                    </span>
                  </td>

                  {/* STATUS BADGE */}
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${user?.status === "active"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                      }`}>
                      {user?.status || "unknown"}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td>
                    <div className="flex flex-wrap gap-2 justify-center items-center">

                      {/* BLOCK / ACTIVE */}
                      {user?.status === "active" ? (
                        <button
                          onClick={() => handleStatusChange(user._id, "blocked")}
                          className={`${actionBtn} bg-red-500 text-white hover:bg-red-600`}
                        >
                          Block
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStatusChange(user._id, "active")}
                          className={`${actionBtn} bg-green-500 text-white hover:bg-green-600`}
                        >
                          Activate
                        </button>
                      )}

                      {/* VOLUNTEER */}
                      {user?.role !== "volunteer" && (
                        <button
                          onClick={() => handleRoleChange(user._id, "volunteer")}
                          className={`${actionBtn} bg-blue-500 text-white hover:bg-blue-600`}
                        >
                          Volunteer
                        </button>
                      )}

                      {/* ADMIN */}
                      {user?.role !== "admin" && (
                        <button
                          onClick={() => handleRoleChange(user._id, "admin")}
                          className={`${actionBtn} bg-yellow-500 text-white hover:bg-yellow-600`}
                        >
                          Admin
                        </button>
                      )}

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default User;