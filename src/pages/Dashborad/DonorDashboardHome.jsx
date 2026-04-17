import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const DonorDashboardHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/my-request?email=${user.email}&limit=3`)
      .then(res => {
        setRequests(res.data.request);
      });
  }, [user]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Welcome {user?.displayName}
      </h1>

      {requests.length > 0 && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-3">My Recent Requests</h2>

          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>Recipient</th>
                <th>Blood</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {requests.map(req => (
                <tr key={req._id}>
                  <td>{req.recipient_name}</td>
                  <td>{req.blood_group}</td>
                  <td>{req.donation_status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={() => navigate("/dashboard/my-request")}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            View All Requests
          </button>
        </div>
      )}
    </div>
  );
};

export default DonorDashboardHome;