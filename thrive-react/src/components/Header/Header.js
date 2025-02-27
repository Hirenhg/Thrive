import React, { useEffect, useRef, useState } from "react";
import { images } from "../../config/images";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    const handleCloseDropdown = () => {
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                handleCloseDropdown();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header_main">
            <nav className="navbar navbar-expand-lg">
                <div className="container mw-sm-960 px-4">
                    <div className="navbar-top d-flex align-items-center">
                        <NavLink className="navbar-brand" to="/">
                            <img src={images.Logo} alt="logo" />
                        </NavLink>
                        <button type="button" className="navbar-toggler collapsed" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"} ></button>
                    </div>
                    <div className={`navbar-collapse justify-content-end collapsed collapse ${navbarOpen ? "show" : "collapse"}`} id="collapsibleNavbar">
                        <div className="nav-menubar">
                            <div className="d-flex flex-column-reverse flex-sm-row ms-sm-auto">
                                <ul className="navbar-nav ms-sm-auto flex-sm-row mb-0">
                                    <li className="nav-item margin-r-20">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-dashboard margin-r-10 d-sm-none"></i>Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item margin-r-20">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/balance" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-balance margin-r-10 d-sm-none"></i>Balance
                                        </NavLink>
                                    </li>
                                    <li className="nav-item margin-r-20">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/suppliers" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-supplier margin-r-10 d-sm-none"></i>Suppliers
                                        </NavLink>
                                    </li>
                                    <li className="nav-item margin-r-20">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/bank-transfer" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-balance margin-r-10 d-sm-none"></i>Bank Transfer
                                        </NavLink>
                                    </li>
                                    <li className="nav-item margin-r-20">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/documents" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-document margin-r-10 d-sm-none"></i>Documents
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className="d-flex align-items-center nav-user-details">
                                    <NavLink className="userpic rounded-circle overflow-hidden" to="/profile">
                                        <img src={images.UserPlaceholder} alt="UserPlaceholder" />
                                    </NavLink>
                                    <div className="nav-item dropdown">
                                        <Link
                                            className="nav-link dropdown-toggle userinfo margin-l-10"
                                            onClick={toggleDropdown}
                                        >
                                            <div className="username text-primary fw-medium pb-1 f-size-14 line-height-18">Hiren Gabu</div>
                                            <div className="thrive-id text-primary fw-medium f-size-10">Thrive ID: 3297894</div>
                                        </Link>
                                        {dropdownOpen && (
                                            <ul className="dropdown-menu bg-white border-ea p-1 show">
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item text-primary fw-medium f-size-12 p-2 rounded d-flex align-items-center"
                                                        to="/profile"
                                                        onClick={handleCloseDropdown}
                                                    >
                                                        <i className="nav-icon ico-profile margin-r-10"></i>Profile
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item text-primary fw-medium f-size-12 p-2 rounded d-flex align-items-center"
                                                        to="/login"
                                                        onClick={handleCloseDropdown}
                                                    >
                                                        <i className="nav-icon ico-signout margin-r-10"></i>Sign Out
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="d-sm-none divider margin-t-10 margin-b-10"></div>
                            <div className="d-sm-none account-menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/personal" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-user margin-r-10"></i>Personal
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/shop" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-shop margin-r-10"></i>Shop
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/thrive" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-thrive margin-r-10"></i>Thrive
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/marketing" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-marketing margin-r-10"></i>Marketing
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/tc" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-tc margin-r-10"></i>Terms &amp;
                                            conditions
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/support" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-support margin-r-10"></i>
                                            Support
                                        </NavLink>
                                    </li>
                                    <li className="divider margin-t-10 margin-b-10"></li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/deleteaccount" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-delete margin-r-10"></i>
                                            Delete account
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-sm-none signout-menu position-absolute margin-b-20 w-100 bottom-0">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" to="/login" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
                                            <i className="nav-icon ico-signout margin-r-10"></i>
                                            Sign Out
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button type="button" className="navbar-toggler navbar-close collapsed" onClick={toggleNavbar} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}></button>
                        <div className="menu-overlay collapsed"></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;