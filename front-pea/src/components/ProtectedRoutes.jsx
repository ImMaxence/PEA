import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const ProtectedRoutes = () => {

    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setIsAuthenticated(true)
            setLoading(false)
        }, 2000)
    }, [location])

    return (
        <>
            <NavBar />
            {loading ? (
                <h1>loading...</h1>
            ) : isAuthenticated ? (
                <>
                    <Outlet />
                </>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

export default ProtectedRoutes;