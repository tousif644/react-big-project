import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import useAdmin from '../../Main/Hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children
};

export default RequireAdmin;