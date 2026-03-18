

import React from 'react';
import useAuth from '../houk/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading, } = useAuth();
    const location = useLocation();

    console.log('location', location);

    if (loading) {
        return <Loading />;
    }

    if (user) {
        return children;
    }
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;