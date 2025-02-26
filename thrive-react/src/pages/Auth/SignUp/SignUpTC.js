import React from 'react'

const SignUpTC = () => {
    return (
        <div className='signup-tc-main'>
            <div className="position-fixed top-0 bottom-0 login-skeleton bg-primary min-vh-100">
                <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
                    <div className="bg-white border-radius-14 padding-40 w-100 mw-sm-360 rounder-sm-0 h-sm-100 d-flex flex-column align-items-center signup-tc-form-block">
                        <form className="w-100">
                            <h5 className="margin-b-30 text-primary fw-medium text-center">
                                Terms & conditions
                            </h5>
                            <div className="d-flex align-items-center margin-b-20">
                                <div className="custom-checkbox d-flex align-items-center">
                                    <input type="checkbox" id="checkbox1" className="checkbox d-none" />
                                    <label className="d-flex align-items-center position-relative" for="checkbox1"><span className="f-size-12 text-gray-300 margin-l-10">I agree to the <a href="javascipt:void(0)" className="text-blue text-decoration-underline">Thrive</a> Terms & <br /> conditions</span></label>
                                </div>
                            </div>
                            <div className="d-flex align-items-center margin-b-30">
                                <div className="custom-checkbox d-flex align-items-center">
                                    <input type="checkbox" id="checkbox2" className="checkbox d-none" />
                                    <label className="d-flex align-items-center position-relative" for="checkbox2"><span className="f-size-12 text-gray-300 margin-l-10">I would like to receive marketing communication</span></label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Sign Up</button>
                            </div>
                            <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                                Need help? <a href="tel:+011 6363 640" title="Contact support" className="text-primary">Contact support</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpTC