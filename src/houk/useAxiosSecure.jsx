

// import axios from 'axios';
// import { useEffect } from 'react';
// import useAuth from './useAuth';
// import { useNavigate } from 'react-router-dom';

// const axiosSecure = axios.create({
//   baseURL: 'http://localhost:5000/',
// });

// const useAxiosSecure = () => {
//   const { user, logOut } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     //  Request interceptor: add Firebase token
//     const requestInterceptor = axiosSecure.interceptors.request.use(
//       async (config) => {
//         if (user) {
//           const token = await user.getIdToken(); // fresh Firebase ID token
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     // Response interceptor: handle 401/403
//     const responseInterceptor = axiosSecure.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const status = error.response?.status;
//         if (status === 401 || status === 403) {
//           await logOut();
//           navigate('/auth/login', { replace: true }); // redirect to login
//         }
//         return Promise.reject(error);
//       }
//     );

//     // Cleanup interceptors on unmount
//     return () => {
//       axiosSecure.interceptors.request.eject(requestInterceptor);
//       axiosSecure.interceptors.response.eject(responseInterceptor);
//     };
//   }, [user, logOut, navigate]);

//   return axiosSecure;
// };

// export default useAxiosSecure;


import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000', 
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken(); // Firebase ID token
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          await logOut();
          navigate('/auth/login', { replace: true });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;