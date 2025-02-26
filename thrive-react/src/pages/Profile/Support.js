import React from 'react'

const Support = () => {
    return (
        <div className="support-main">
            <div className="profile-page-heading d-sm-none">
                <h6 className="fw-medium text-primary margin-b-10">Account</h6>
                <div className="f-size-12 fw-medium text-primary">
                    Support
                </div>
            </div>
            <div className="w-100 profile-editform bg-white">
                <div className="margin-b-30">
                    <div className="text-primary f-size-12 fw-medium pb-1">Operating Hours:</div>
                    <div className="text-gray-300 f-size-10 fw-medium">Monday to Friday, 8AM to 6PM Saturday, 8AM to 1PM</div>
                </div>
                <div className="text-primary f-size-12 fw-medium margin-b-30">Support centre:</div>
                <div className="margin-b-30 call-number">
                    <h5 className="fw-semibold text-primary support-title mb-0 pb-1">(0)11 6363 640</h5>
                    <div className="text-gray-300 f-size-10 fw-medium pb-1">Call our support team for help.</div>
                    <a href="tel:11 6363 640" target="_blank" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-call margin-r-10"></i> Call</a>
                </div>
                <div className="margin-b-30 email">
                    <h5 className="fw-semibold text-primary support-title mb-0 pb-1">support@thrive.trade</h5>
                    <div className="text-gray-300 f-size-10 fw-medium pb-1">Email our support team.</div>
                    <a href="mailto:support@thrive.trade" target="_blank" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-email margin-r-10"></i> Email</a>
                </div>
                <div className="margin-b-30 message">
                    <h5 className="fw-semibold text-primary support-title mb-0 pb-1">+27 63 553 1119</h5>
                    <div className="text-gray-300 f-size-10 fw-medium pb-1">WhatsApp our support team.</div>
                    <a href="https://web.whatsapp.com/" target="_blank" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-message margin-r-10"></i> Message</a>
                </div>
            </div>
        </div>
    )
}

export default Support