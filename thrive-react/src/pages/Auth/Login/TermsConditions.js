import React from 'react'

const TermsConditions = () => {
    return (
        <div className="terms-conditions-main">
            <div className="position-fixed top-0 bottom-0 login-skeleton bg-primary min-vh-100">
                <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
                    <div className="bg-white border-radius-14 padding-40 w-100 mw-sm-360 rounder-sm-0 h-sm-100 d-flex flex-column align-items-center terms-conditions-block">
                        <div className="w-100 text-center">
                            <h5 className="margin-b-20 text-primary fw-medium">
                                Thrive is updating its terms
                            </h5>
                            <div className="margin-b-20 f-size-12 text-primary line-height-18">
                                By tapping Agree, you accept the new  <br /> terms and privacy policy.
                            </div>
                            <div className="margin-b-20 f-size-12 text-blue">Thrive Terms & Conditions</div>
                            <div className="form-group margin-b-20 d-flex justify-content-beetween ">
                                <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10">Skip</button>
                                <button className="btn btn-primary w-100 rounded f-size-12 fw-medium text-center">Accept</button>
                            </div>
                            <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                                Need help? Contact support <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or <br /><a href="tel:+011 6363 640" title="Contact support" className="text-primary">011 6363 640</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsConditions