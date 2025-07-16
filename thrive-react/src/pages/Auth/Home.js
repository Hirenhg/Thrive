import React from 'react'
import { images } from "../../config/images";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className='home_main'>
            <div className="header-main">
                <nav className="navbar navbar-expand-lg">
                    <div className="container mw-sm-960 px-4">
                        <div className="navbar-top d-flex align-items-center justify-content-between w-100">
                            <NavLink className="navbar-brand py-0" to="/">
                                <img src={images.LogoWhite} alt="logowhite" />
                            </NavLink>
                            <div className="login-text d-flex align-items-center">
                                <NavLink to="/login" className="nav-link text-white fw-medium f-size-12 mx-2 p-0">
                                    Login
                                </NavLink>
                                <NavLink to="/signup" className="nav-link text-white fw-medium f-size-12 mx-2 p-0">
                                    Register
                                </NavLink>
                                <NavLink to="/reset-password" className="nav-link text-white fw-medium f-size-12 mx-2 forgot-link p-0">
                                    Forgot Password
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container mw-sm-960 p-0 p-sm-4'>
                <div className="d-none d-sm-block dot-image"></div>
                <div className="d-block d-sm-none dot-image-mobile"></div>
                <div className="landing-image">
                    <img src={images.landingImage} alt="landingImage" className="d-none d-sm-block" />
                    <img src={images.landingImageMobile} alt="landingImage" className="d-block d-sm-none" />
                </div>
            </div>
        </div>
    )
}
