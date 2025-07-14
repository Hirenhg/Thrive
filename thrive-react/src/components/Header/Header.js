import React, { useEffect, useRef, useState } from "react";
import { images } from "../../config/images";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalPopup from "../ModalPopup/ModalPopup";
import Profile from "../../pages/Profile/Profile";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalType, setModalType] = useState(null); // null, 'profile', etc.
    const dropdownRef = useRef(null);
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        getProfileData();
    }, [])

    const Token = localStorage.getItem('token')

    const getProfileData = () => {
        const profileToken = localStorage.getItem('token')

        const header = {
            headers: {
                Authorization: `Bearer ${profileToken}`
            }
        }

        axios.get('http://localhost:5000/api/auth/user', header)
            .then((res) => {
                setUserData(res.data)
            })
            .catch((err) => {
                console.log("Error occurred", err)
                // Don't show alert for profile fetch errors, just log them
            })
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }

    // Modal close handler
    const handleCloseModal = () => {
        setModalType(null);
    }

    if (!Token) {
        return <Navigate to="/login" />;
    }

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
                                    <NavLink className="userpic rounded-circle overflow-hidden">
                                        <img src={userData?.avatar || images.UserPlaceholder} alt="UserPlaceholder" />
                                    </NavLink>
                                    <div className="nav-item dropdown" ref={dropdownRef}>
                                        <Link
                                            className="nav-link dropdown-toggle userinfo margin-l-10"
                                            onClick={toggleDropdown}
                                        >
                                            <div className="username text-primary fw-medium pb-1 f-size-14 line-height-18">{userData?.name || "User"}</div>
                                            <div className="thrive-id text-primary fw-medium f-size-10">Thrive ID: {userData?.id || "N/A"}</div>
                                        </Link>
                                        {dropdownOpen && (
                                            <ul className="dropdown-menu bg-white border-ea p-1 show">
                                                <li>
                                                    <button
                                                        className="dropdown-item text-primary fw-medium f-size-12 p-2 rounded d-flex align-items-center"
                                                        type="button"
                                                        onClick={() => { setModalType('profile'); setDropdownOpen(false); }}
                                                    >
                                                        <i className="nav-icon ico-profile margin-r-10"></i>Profile
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item text-primary fw-medium f-size-12 p-2 rounded d-flex align-items-center"
                                                        type="button"
                                                        onClick={handleLogout}
                                                    >
                                                        <i className="nav-icon ico-signout margin-r-10"></i>Sign Out
                                                    </button>
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
                                        <NavLink className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" onClick={handleLogout} aria-label={navbarOpen ? "Close navigation" : "Open navigation"}>
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
            {/* ModalPopup for Profile */}
            {modalType === 'profile' && (
                <ModalPopup
                    title="Profile"
                    body={<Profile/>}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Header;