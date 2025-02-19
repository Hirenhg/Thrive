import React from 'react'
import { images } from '../../config/images'

const Header = () => {
    return (
        <div className='header_main'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container mw-sm-960 px-4">
                        <div className="navbar-top d-flex align-items-center">
                            <a className="navbar-brand" href="/dashboard">
                                <img src={images.Logo} alt="logo" />
                            </a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            </button>
                        </div>
                        <div className="navbar-collapse justify-content-end collapsed" id="collapsibleNavbar">
                            <div className="nav-menubar">
                                <div className="d-flex flex-column-reverse flex-sm-row ms-sm-auto">
                                    <ul className="navbar-nav ms-sm-auto flex-sm-row mb-0">
                                        <li className="nav-item margin-r-20">
                                            <a className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center active" href="#" aria-current="page" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"><i className="nav-icon ico-dashboard margin-r-10 d-sm-none"></i>Dashboard</a>
                                        </li>
                                        <li className="nav-item margin-r-20">
                                            <a className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" href="#" Match="NavLinkMatch.Prefix"><i className="nav-icon ico-balance margin-r-10 d-sm-none"></i>Balance</a>
                                        </li>
                                        <li className="nav-item margin-r-20">
                                            <a className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" href="#" Match="NavLinkMatch.Prefix" aria-current="page"><i className="nav-icon ico-supplier margin-r-10 d-sm-none"></i>Suppliers</a>
                                        </li>
                                        <li className="nav-item margin-r-20">
                                            <a className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" href="#" Match="NavLinkMatch.Prefix" aria-current="page"><i className="nav-icon ico-balance margin-r-10 d-sm-none"></i>Bank Transfer</a>
                                        </li>
                                        <li className="nav-item margin-r-20">
                                            <a className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" href="#" aria-current="page"><i className="nav-icon ico-document margin-r-10 d-sm-none"></i>Documents</a>
                                        </li>
                                    </ul>
                                    <div className="d-flex align-items-center nav-user-details">
                                        <a classNameName="userpic rounded-circle overflow-hidden">
                                            <img src={images.UserPlaceholder} alt="UserPlaceholder" />
                                        </a>
                                        <div className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle userinfo margin-l-10" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="username text-primary fw-medium pb-1 f-size-14 line-height-18">Hiren Gabu</div>
                                                <div className="thrive-id text-primary fw-medium f-size-10">Thrive ID: 3297894</div>
                                            </a>
                                            <ul className="dropdown-menu bg-white border-ea p-1" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item text-primary fw-medium f-size-12 p-2 rounded d-flex align-items-center" href="#"><i className="nav-icon ico-profile margin-r-10"></i>Profile</a></li>
                                                <li><a className="dropdown-item text-primary fw-medium f-size-12 p-2 rounded d-flex align-items-center" href="#"><i className="nav-icon ico-signout margin-r-10"></i>Sign Out</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-sm-none divider margin-t-10 margin-b-10"></div>
                                    <div className="d-sm-none account-menu">
                                        <ul className="navbar-nav">
                                            <li className="nav-item"><a data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-current="page" className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" aria-expanded="true"><i className="nav-icon ico-user margin-r-10"></i>Personal</a></li>
                                            <li className="nav-item"><a data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" aria-expanded="true"><i className="nav-icon ico-shop margin-r-10"></i>Shop</a></li>
                                            <li className="nav-item"><a data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" aria-expanded="true"><i className="nav-icon ico-thrive margin-r-10"></i>Thrive</a></li>
                                            <li className="nav-item"><a data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" aria-expanded="true"><i className="nav-icon ico-marketing margin-r-10"></i>Marketing</a></li>
                                            <li className="nav-item"><a data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" aria-expanded="true"><i className="nav-icon ico-tc margin-r-10"></i>Terms &amp; conditions</a></li>
                                            <li className="nav-item"><a data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" aria-expanded="true"><i className="nav-icon ico-support margin-r-10"></i>Support</a></li>
                                            <li className="divider margin-t-10 margin-b-10"></li>
                                            <li className="nav-item">
                                                <a data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" className="nav-link rounded-0 delete-account text-danger f-size-12 fw-medium d-flex align-items-center" aria-expanded="true"><i className="nav-icon ico-delete margin-r-10"></i>Delete account</a></li>
                                        </ul>
                                </div>
                                <div className="d-sm-none signout-menu position-absolute margin-b-20 w-100 bottom-0">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link text-primary fw-medium f-size-12 d-flex align-items-center" aria-current="page" href="javascript:void(0)"><i className="nav-icon ico-signout margin-r-10"></i>Sign Out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="navbar-toggler navbar-close" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"></button>
                            <div className="menu-overlay" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"></div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Header