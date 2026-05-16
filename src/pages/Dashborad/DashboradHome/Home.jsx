

import React from "react";
// import useRole from "../../hooks/useRole"; // role hook
import useAuth from "../../hooks/useAuth"; // logged-in user info hook
import useRole from "../../../houk/useRole";

const Home = () => {
  const { role } = useRole(); // donor / admin / volunteer
  const { user } = useAuth(); // user object: {name, email, ...}

  return (
    <div>
      {/* Welcome Section */}
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.name || "User"}!
      </h1>

      {/* Donor Dashboard Home */}
      {role === "donor" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Donation Requests</h2>
          {/* Recent donation requests table */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Location</th>
                  <th>Blood Group</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Map recent donation requests */}
                <tr>
                  <td colSpan="7" className="text-center">
                    No donation requests yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Admin Dashboard Home */}
      {role === "admin" && (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Total Users</h3>
            <p className="text-2xl">123</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Total Funding</h3>
            <p className="text-2xl">$12,345</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">Total Blood Requests</h3>
            <p className="text-2xl">456</p>
          </div>
        </div>
      )}

      {/* Volunteer Dashboard Home */}
      {role === "volunteer" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">All Blood Donation Requests</h2>
          <p>Volunteers can view and update donation status only.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
