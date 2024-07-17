import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    });
    const handleLogin = async () => {
        // console.log(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
        } else {
            alert("Invalid Credentials");
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>

            <input type="text" placeholder="Enter Your email" onChange={(e) => { setEmail(e.target.value) }} value={email} className="inputBox" />
            <input type="password" placeholder="Enter Your password" onChange={(e) => { setPassword(e.target.value) }} value={password} className="inputBox" />
            <button onClick={handleLogin} className="appButton" type="button">Login</button>
        </div>
    )
}

export default Login;