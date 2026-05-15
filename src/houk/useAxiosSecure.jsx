

import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({  baseURL: "https://backend-11-asiment.vercel.app",

});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {


  
    const requestInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        try {
          if (user) {
            const token = await user.getIdToken();
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        } catch (err) {
          console.log("Token Error:", err);
          return config;
        }
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (err.response?.status === 401 || err.response?.status === 403) {
          await logOut();
          navigate("/auth/login");
        }
        return Promise.reject(err);
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