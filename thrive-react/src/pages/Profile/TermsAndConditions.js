import React from 'react'

const TermsAndConditions = () => {
    return (
        <div className='terms-condition-main'>
            <div className="profile-page-heading d-sm-none">
                <h6 className="fw-medium text-primary margin-b-10">Account</h6>
                <div className="f-size-12 fw-medium text-primary">
                    Terms & conditions
                </div>
            </div>
            <div className="w-100 profile-editform bg-white">
                <div className="tc-lists-block">
                    <div className="list">
                        <div className="d-flex align-items-center py-2">
                            <div className="f-size-12 fw-medium text-primary margin-r-10 tc-label-title">Thrive agreement</div>
                            <a href="@_termsAndCondition.ThriveAgreement" target="_blank"
                                className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                                View
                            </a>
                        </div>
                        <div className="divider"></div>
                        <div className="d-flex align-items-center py-2">
                            <div className="f-size-12 fw-medium text-primary margin-r-10 tc-label-title">Merchant agreement</div>
                            <a href="@_termsAndCondition.MerchantAgreement" target="_blank"
                                className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                                View
                            </a>
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions