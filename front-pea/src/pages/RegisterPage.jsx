import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const navigation = useNavigate()

    return (
        <div>
            <h1>create account</h1>

            <button onClick={() => navigation('/')}>login page</button>
        </div>
    );
};

export default RegisterPage;