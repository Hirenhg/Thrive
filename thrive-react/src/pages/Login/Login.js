import React from 'react'
import { images } from '../../config/images';

const Login = () => {
    return (
        <div className='login_main'>
            <div className="position-fixed top-0 bottom-0 login-skeleton bg-primary min-vh-100">
                <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
                    <div className="bg-white border-radius-14 padding-40 w-100 loginbox rounder-sm-0 h-sm-100 d-flex">
                        <div className="imagebox margin-r-30 bg-gray-500 border-radius-10 d-sm-flex align-items-center justify-content-center">
                            <img className="w-auto" src={images.loginImage} alt="login-image" />
                        </div>
                        <div className="loginform-block w-100 mw-sm-300">
                            <div className="margin-b-30 logo">
                                <img src={images.Logo} alt="logo" />
                            </div>
                            <div>
                                <h3 className="margin-b-10 text-primary fw-semibold">Go cashless</h3>
                                <p className="margin-b-30 text-gray-300"> Stock up and pay suppliers 24/7. <br/> Buy stock now, pay later.<br/> Its time to thrive! </p>
                                <div id="api" data-name="Unified" role="main">
                                    <form id="localAccountForm" className="localAccount" aria-label="Sign in with your username">
                                        <div className="entry">
                                            <div className="entry-item">
                                                <label for="UserId">
                                                    Username
                                                </label>
                                                <input type="text" id="UserId" name="Username" title="Please enter a valid username" pattern="^[0-9]+$" autofocus="" placeholder="Username" aria-label="Username" autocomplete="off" className="form-control" />
                                            </div>
                                            <div className="entry-item">
                                                <div className="password-label">
                                                    <label for="password">Password</label>
                                                </div>
                                                <input type="password" id="password" name="Password" placeholder="Password" aria-label="Password" autocomplete="new-password" aria-required="true" className='form-control' />
                                                <span className="eye-icon">
                                                    <img src={images.IcoEye} />
                                                </span>
                                            </div>
                                            <div className="buttons">
                                                <button className='btn btn-primary w-100' id="next" type="submit" form="localAccountForm">Sign in</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
};

export default Login