

import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import DonorDashboardHome from "../DonarDashboradHome/DonorDashboardHome";
import AdminDashboardHome from "./AdminDashboradHome";





const MainDashborad = () => {
  const { role } = useContext(AuthContext);

  return (
    <div>
      {role === "admin" && <AdminDashboardHome />},

      {role === "donnar" && <DonorDashboardHome />},

      {role === "volunteer" && <AdminDashboardHome />},

    </div>
  );
};

export default MainDashborad;