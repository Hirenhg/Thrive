import React from 'react'

const BankTransferPaymentResult = () => {
    return (
        <div className='bank-transfer-payment-result-main'>
            {/* Successfully Paid */}
            <div className="w-100 mw-sm-340 bank-transfer-block">
                <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative bank-transfer-success-payment-box ">
                    <div className="text-center">
                        <div className="icon-block">
                            <i className="ico-success-payment"></i>
                        </div>
                        <h5 className="text-primary fw-medium margin-b-30">
                            Successfully Paid
                        </h5>
                        <div className="payment-logo d-flex align-items-center justify-content-center">
                            <span className="bg-primary rounded iconbox w-sm-40 thrive-logo position-relative margin-r-10">
                                <i className="icon-img ico-logo"></i>
                            </span>
                            <span className="bg-gray-200 rounded iconbox w-sm-40">
                                <i className="icon-img icon-placeholder"></i>
                            </span>
                        </div>
                        <div className="margin-b-20"></div>
                        <div className="margin-b-20 text-center d-none">
                            <div className="f-size-14 text-primary text-capitalize fw-medium">LH Mbali</div>
                            <div className="f-size-10 text-gray-400 name-subtext text-break"> Standard bank <br /> 223 9919 2021</div>
                        </div>
                        <h2 className="text-primary fw-medium margin-b-20">
                            R 3000 <span className="fs-4">.00</span>
                        </h2>
                        <div className="bg-gray-500 rounded d-flex align-items-center justify-content-between padding-10 margin-b-10  bank-transfer-fee-block">
                            <label className="text-primary f-size-10">
                                Bank transfer fee 0.5%
                            </label>
                            <div className="fee-amount text-primary fw-semibold f-size-10">R 150.00</div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10">Done</button>
                            <button id="btnDownloadPOP" className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Download proof of payment</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Payment failed */}
            <div className="w-100 mw-sm-340 bank-transfer-block">
                <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative bank-transfer-payment-failed-box ">
                    <div className="text-center">
                        <div className="icon-block">
                            <i className="ico-payment-failed"></i>
                        </div>
                        <div className="text-primary fw-medium margin-b-20">
                            Payment failed
                        </div>
                        <div className="f-size-12 text-gray-300 margin-b-20">There was an error with your payment to Rozetka. </div>
                        <div className="f-size-12 text-primary margin-b-20">Error code: <span className="fw-bold"> S-H-500</span></div>
                        <div className="form-group margin-b-20">
                            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10">Try again</button>
                            <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Cancel</button>
                        </div>
                        <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                            Need help? Contact support <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or <a href="tel:+011 6363 640" title="Contact support" className="text-primary d-block">011 6363 640</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankTransferPaymentResult