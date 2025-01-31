import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        alert(`Value form: ${username}, ${password}`)
        navigation('/home')
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' name='username'
                    onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Submit</button>
            </form>

            <p>or register</p>

            <button onClick={() => navigation('/register')}>register</button>

            <p>or connect with</p>

            <button>google</button>
        </div>
    );
};

export default LoginPage;