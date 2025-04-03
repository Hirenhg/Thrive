import React from 'react'
import { images } from '../../../config/images';

const SignUpComplete = () => {
    return (
        <div className="signup-complete-main">
            <div className="page bg-primary min-vh-100">
                <div className="content signup-comp-content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
                    <div className="bg-white border-radius-14 padding-40 w-100 mw-sm-360 rounder-sm-0 h-sm-100 d-flex flex-column align-items-center signup-comp-block">
                        <div className="w-100 text-center">
                            <div className="margin-b-30 check-status">
                                <img src={images.CheckStatus} alt="check status" />
                            </div>
                            <h4 className="margin-b-10 text-primary fw-semibold ">
                                Welcome to Thrive
                            </h4>
                            <p className="margin-b-30 text-gray-300">
                                Let’s get you thriving
                            </p>
                            <div id="api" role="main"></div>
                            <div className="form-group">
                                <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Take me to my dashboard<i className="arrow-right mx-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpComplete