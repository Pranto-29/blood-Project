import React, { useEffect, useState, useContext } from "react";
import useAxiosSecure from "../../../houk/useAxiosSecure";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { FaUser, FaMoneyBillWave, FaTint } from "react-icons/fa";

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await axiosSecure.get("/user");
      const requests = await axiosSecure.get("/requests");
      const payments = await axiosSecure.get("/payments");

      const totalFunding = payments.data.reduce(
        (sum, p) => sum + (p.amount || 0),
        0
      );

      setStats([
        { title: "Total Users", value: users.data.length, icon: <FaUser /> },
        { title: "Total Funding", value: `$${totalFunding}`, icon: <FaMoneyBillWave /> },
        { title: "Total Requests", value: requests.data.length, icon: <FaTint /> },
      ]);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Welcome Admin, {user?.displayName}
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="p-4 bg-white shadow rounded">
            <div className="text-2xl text-red-500">{s.icon}</div>
            <h2 className="font-bold">{s.title}</h2>
            <p>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardHome;