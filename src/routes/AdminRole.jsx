
import React from 'react';
import useAuth from '../houk/useAuth';
import useRole from '../houk/useRole';
import Loading from '../components/Loading/Loading';
import Forbiden from '../components/Forbiden/Forbiden';

const AdminRole = ({ children }) => {

  const { loading } = useAuth();
  const { role, roleLoading } = useRole();   

  console.log("Role is:", role);

  if (loading || roleLoading) {
    return <Loading />;
  }

  if (role !== 'admin') {
    return <Forbiden />;
  }

  return children;  //
};

export default AdminRole;