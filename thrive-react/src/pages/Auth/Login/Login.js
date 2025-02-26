import React from 'react'
import { images } from '../../../config/images';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login_main'>
            <div className="position-fixed top-0 bottom-0 login-skeleton bg-primary min-vh-100">
                <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
                    <div className="bg-white border-radius-14 padding-40 w-100 loginbox rounder-sm-0 h-sm-100 d-flex">
                        <div className="imagebox margin-r-30 bg-gray-200 border-radius-10 d-sm-flex align-items-center justify-content-center">
                            <img className="w-auto" src={images.loginImage} alt="login-image" />
                        </div>
                        <form className="loginform-block w-100 mw-sm-300">
                            <div className="margin-b-30 logo">
                                <img src={images.Logo} alt="logo" />
                            </div>
                            <div>
                                <h3 className="margin-b-10 text-primary fw-semibold">Go cashless</h3>
                                <p className="margin-b-30 text-gray-300"> Stock up and pay suppliers 24/7. <br /> Buy stock now, pay later.<br />  It’s time to thrive!</p>
                                <div className="form-group margin-b-10">
                                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Cell Phone</label>
                                    <input type="text" className="form-control f-size-12 fw-medium" placeholder="Cell Phone" />
                                    <div className="f-size-12 pt-1 text-error d-none">Username is required</div>
                                </div>
                                <div className="form-group margin-b-10">
                                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Password</label>
                                    <input type="password" className="form-control f-size-12 fw-medium" placeholder="Password" />
                                    <div className="f-size-12 pt-1 text-error d-none">Password is required</div>
                                </div>
                                <div className="form-group margin-b-20">
                                    <Link to="/dashboard"> 
                                        <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Sign In <i className="arrow-right mx-2"></i></button>
                                    </Link>
                                </div>
                            </div>
                            <div className="form-group margin-b-20 text-center">
                                <label className="text-gray-400 f-size-14">
                                    Forgot password? <Link to="/reset-password" title="Reset Password" className="text-primary">Reset Password</Link>
                                </label>
                            </div>
                            <div className="divider margin-b-30"></div>
                            <div className="form-group">
                                <Link to="/signup"> 
                                    <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium">Sign up</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login