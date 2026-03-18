

// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../../houk/useAxiosSecure';

// const User = () => {
//   const axiosSecure = useAxiosSecure();
//   const [users, setUsers] = useState([]);

//   // Load users
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

//   return (
//     <div className="overflow-x-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">All Users</h2>
//       <table className="table w-full">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users?.map(user => (
//             <tr key={user._id}>
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
//               <td>
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

  // Load all users
  useEffect(() => {
    axiosSecure.get('/user')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, [axiosSecure]);

  // Change user status
  const handleStatusChange = (userId, newStatus) => {
    axiosSecure.patch(`/update/user/status/${userId}`, { status: newStatus })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          setUsers(users.map(u => u._id === userId ? { ...u, status: newStatus } : u));
        }
      })
      .catch(err => console.log(err));
  };

  // Change user role
  const handleRoleChange = (userId, newRole) => {
    axiosSecure.patch(`/update/user/role/${userId}`, { role: newRole })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          setUsers(users.map(u => u._id === userId ? { ...u, role: newRole } : u));
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-2xl font-bold mb-6">All Users</h2>
      <table className="table w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th></th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td>
                <input type="checkbox" className="checkbox" />
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.displayName || user?.name || "No Name"}</div>
                    <div className="text-sm opacity-50">{user?.email}</div>
                  </div>
                </div>
              </td>
              <td>{user?.role}</td>
              <td>{user?.status}</td>
              <td className="flex gap-2">
                {/* Status button */}
                {user?.status === "active" ? (
                  <button
                    onClick={() => handleStatusChange(user._id, "blocked")}
                    className="btn btn-error btn-xs"
                  >
                    Block
                  </button>
                ) : (
                  <button
                    onClick={() => handleStatusChange(user._id, "active")}
                    className="btn btn-success btn-xs"
                  >
                    Activate
                  </button>
                )}

                {/* Make Volunteer */}
                {user?.role !== "volunteer" && (
                  <button
                    onClick={() => handleRoleChange(user._id, "volunteer")}
                    className="btn btn-info btn-xs"
                  >
                    Make Volunteer
                  </button>
                )}

                {/* Make Admin */}
                {user?.role !== "admin" && (
                  <button
                    onClick={() => handleRoleChange(user._id, "admin")}
                    className="btn btn-warning btn-xs"
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;