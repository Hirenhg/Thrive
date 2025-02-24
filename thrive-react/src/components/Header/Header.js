import React, { useState } from 'react'
import { images } from '../../config/images'
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="header_main">
            <nav className="navbar navbar-expand-lg">
                <div className="container mw-sm-960 px-4">
                    <div className="navbar-top d-flex align-items-center">
                        <NavLink className="navbar-brand" to="/">
                            <img src={images.Logo} alt="logo" />
                        </NavLink>
                        <button type="button" className="navbar-toggler" onClick={toggleNavbar}></button>
                    </div>
                    <div className={`navbar-collapse ${isOpen ? "show" : "collapsed"}`}>
                        <ul className="navbar-nav ms-auto flex-sm-row mb-0">
                            <li className="nav-item margin-r-20">
                                <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/" onClick={toggleNavbar}>
                                    <i className="nav-icon ico-dashboard margin-r-10 d-sm-none"></i>Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item margin-r-20">
                                <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/balance" onClick={toggleNavbar}>
                                    <i className="nav-icon ico-balance margin-r-10 d-sm-none"></i>Balance
                                </NavLink>
                            </li>
                            <li className="nav-item margin-r-20">
                                <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/suppliers" onClick={toggleNavbar}>
                                    <i className="nav-icon ico-supplier margin-r-10 d-sm-none"></i>Suppliers
                                </NavLink>
                            </li>
                            <li className="nav-item margin-r-20">
                                <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/bank-transfer" onClick={toggleNavbar}>
                                    <i className="nav-icon ico-balance margin-r-10 d-sm-none"></i>Bank Transfer
                                </NavLink>
                            </li>
                            <li className="nav-item margin-r-20">
                                <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/documents" onClick={toggleNavbar}>
                                    <i className="nav-icon ico-document margin-r-10 d-sm-none"></i>Documents
                                </NavLink>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center nav-user-details">
                            <NavLink className="userpic rounded-circle overflow-hidden" to="/profile">
                                <img src={images.UserPlaceholder} alt="UserPlaceholder" />
                            </NavLink>
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle userinfo margin-l-10" href="#" id="navbarDropdown" role="button">
                                    <div className="username text-primary fw-medium pb-1 f-size-14 line-height-18">Hiren Gabu</div>
                                    <div className="thrive-id text-primary fw-medium f-size-10">Thrive ID: 3297894</div>
                                </a>
                                <ul className="dropdown-menu bg-white border-ea p-1">
                                    <li>
                                        <NavLink className="dropdown-item text-primary fw-medium f-size-12 p-2 rounded d-flex align-items-center" to="/profile">
                                            <i className="nav-icon ico-profile margin-r-10"></i>Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item text-primary fw-medium f-size-12 p-2 rounded d-flex align-items-center" to="/logout">
                                            <i className="nav-icon ico-signout margin-r-10"></i>Sign Out
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-sm-none account-menu">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/personal" onClick={toggleNavbar}>
                                        <i className="nav-icon ico-user margin-r-10"></i>Personal
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/shop" onClick={toggleNavbar}>
                                        <i className="nav-icon ico-shop margin-r-10"></i>Shop
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/marketing" onClick={toggleNavbar}>
                                        <i className="nav-icon ico-marketing margin-r-10"></i>Marketing
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {isOpen && <div className="menu-overlay" onClick={toggleNavbar}></div>}
                </div>
            </nav>
        </div>
    )
}

export default Header