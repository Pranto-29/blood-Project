
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {

  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const  {isLoading:reLoading, data : role = 'user'} = useQuery({
    queryKey: ['user-role', user?.email],
    queryFn: async () => {
<<<<<<< HEAD
      const res = await axiosSecure.get(`/user/role/${user.email}`);
=======
      const res = await axiosSecure.get(`/user/${user.email}/role`);
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
      console.log('in the useRole', res.data);
      return res.data?.role || 'user';
    }
  })
  return { role, reLoading}

};

export default useRole;