import React, { useState } from 'react';
import { images } from '../../../config/images';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [cellPhone, setCellPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const payload = {
            email: cellPhone,
            password: password
        };

        axios.post('http://localhost:5000/api/auth/login', payload)
               .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    navigate('/');
                })
                .catch((err) => {
                    console.log("Login Failed", err);
                    alert("Login Failed: " + (err.response?.data?.message || 'Server error'));
                });
    };

    return (
        <div className='login_main'>
            <div className="position-fixed top-0 bottom-0 login-skeleton bg-primary min-vh-100">
                <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
                    <div className="bg-white border-radius-14 padding-40 w-100 loginbox rounder-sm-0 h-sm-100 d-flex">
                        <div className="imagebox margin-r-30 bg-gray-200 border-radius-10 d-sm-flex align-items-center justify-content-center">
                            <img className="w-auto" src={images.loginImage} alt="login-image" />
                        </div>
                        <div className="loginform-block w-100 mw-sm-300">
                            <div className="margin-b-30 logo">
                                <img src={images.Logo} alt="logo" />
                            </div>
                            <div>
                                <h3 className="margin-b-10 text-primary fw-semibold">Go cashless</h3>
                                <p className="margin-b-30 text-gray-300"> Stock up and pay suppliers 24/7. <br /> Buy stock now, pay later.<br />  It’s time to thrive!</p>
                                <div className="form-group margin-b-10">
                                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Cell Phone</label>
                                    <input
                                        type="text"
                                        className="form-control f-size-12 fw-medium"
                                        placeholder="Cell Phone"
                                        value={cellPhone}
                                        onChange={(e) => setCellPhone(e.target.value)}
                                    />
                                    {/* {error && <div className="f-size-12 pt-1 text-error">{error}</div>} */}
                                </div>
                                <div className="form-group margin-b-10">
                                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Password</label>
                                    <input
                                        type="password"
                                        className="form-control f-size-12 fw-medium"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {/* {error && <div className="f-size-12 pt-1 text-error">{error}</div>} */}
                                </div>
                                <div className="form-group margin-b-20">
                                    <button onClick={handleLogin} type="submit" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Sign In <i className="arrow-right mx-2"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;