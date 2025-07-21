import React from "react";
import { images } from "../../../config/images";
import { Link } from 'react-router-dom'

const SignUpComplete = () => {
    return (
        <div className="signup-complete-main">
            <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
                <div className="bg-white border-radius-14 padding-30 w-100 mw-sm-380 rounder-sm-0 h-sm-100 d-flex flex-column align-items-center signup-success-block m-3">
                    <div className="signup-success-comp-block w-100">
                        <div className="w-100 text-center">
                            <div className="margin-b-20 check-status">
                                <img alt="checkstatus" src={images.CheckStatus} />
                            </div>
                            <div className="margin-b-20 f-size-20 text-primary fw-medium">
                                Success!
                            </div>
                            <div className="margin-b-20 f-size-20 text-primary fw-semibold">
                                Profile Created
                            </div>
                            <p className="margin-b-30 text-primary f-size-12 ">
                                You have successfully created your profile.
                            </p>
                            <div className="form-group margin-b-30">
                                <Link to="/Login" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                                    Login
                                </Link>
                            </div>
                            <div className="text-center f-size-14 fw-medium text-gray-400">
                                Need help? Contact support <br />
                                <a href="#" className="text-primary me-1">
                                    Support@thrive.trade 
                                </a>
                                or 
                                <a href="#" title="Contact support" className="text-primary ms-1">
                                    011 6363 640     
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpComplete;
