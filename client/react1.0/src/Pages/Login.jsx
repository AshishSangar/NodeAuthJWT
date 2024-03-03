import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="image-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNWJkHdTMSlSbxkocoOgOmE3L2EuG5OAix2AX3HXmhrPNCJFRQHDle5YRapzV1V1aQVM&usqp=CAU" alt="" />
                </div>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Your Password" />
                <button className='submit' type="submit">Submit</button>
                <p>Don't Have An Account? <Link to={'/signup'}>Signup</Link></p>
            </form>
        </div>
    );
};

export default Login;
