// import React from 'react';
// import useRole from '../../../houk/useRole';
// import Loading from '../../../components/Loading/Loading';
// import AdminDashboardHome from '../AdminDashboardHome/AdminDashboardHome';
// import DonorDashboardHome from '../DonorDashboardHome';

import { SiReduxsaga } from "react-icons/si";
import useRole from "../../../houk/useRole";

const DashboradHome = () => {
    const { role, reloading } = useRole();
    if (reloading) {
        return <Loading></Loading>
    }
    if(role === 'admin'){
        return <AdminDashboardHome></AdminDashboardHome>
    }
    else if(role === 'donnar'){
        return <DonorDashboardHome></DonorDashboardHome>
    }
    return (
        <div>
            hi
        </div>
    );
};

export default DashboradHome;
