import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>this page dont exist</h1>
            <button onClick={() => navigate('/')}>home page</button>
        </div>
    );
};

export default ErrorPage;