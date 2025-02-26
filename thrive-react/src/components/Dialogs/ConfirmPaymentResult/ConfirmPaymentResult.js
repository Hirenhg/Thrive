import React from 'react'

const ConfirmPaymentResult = () => {
    return (
        <div className='confirm-payment-result-main'>
            <div className="padding-30 w-100 position-relative supplier-success-payment-box">
                <div className="text-center">
                    <div className="icon-block">
                        <i className="ico-success-payment"></i>
                    </div>
                    <h5 className="text-primary fw-medium margin-b-10">
                        Successfully Paid
                    </h5>
                    <div className="f-size-12 text-gray-300 margin-b-30">Supplier</div>
                    <div className="payment-logo d-flex align-items-center justify-content-center">
                        <span className="bg-primary rounded iconbox w-sm-40 thrive-logo position-relative margin-r-10">
                            <i className="icon-img ico-logo"></i>
                        </span>
                        <span className="bg-gray-200 rounded iconbox w-sm-40">
                            <i className="icon-img icon-placeholder"></i>
                        </span>
                    </div>
                    <div className="f-size-12 text-gray-300 margin-b-10 pt-2">You paid Rozetka</div>
                    <h2 className="text-primary fw-medium margin-b-30">
                        R15,732
                        <span className="fs-4">.00</span>
                    </h2>
                    <div className="form-group">
                        <a className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10" href="/suppliers">Done</a>
                        <button id="btnDownloadPOP" className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Download proof of payment</button>
                    </div>
                </div>
            </div>
            <div className="padding-30 w-100 position-relative mw-sm-340 supplier-payment-failed-box">
                <div className="text-center">
                    <div className="icon-block">
                        <i className="ico-payment-failed"></i>
                    </div>
                    <div className="text-primary fw-medium margin-b-20">
                        Payment failed
                    </div>
                    <div className="f-size-12 text-gray-300 margin-b-20">There was an error with your payment to Rozetka. </div>
                    <div className="f-size-12 text-primary margin-b-20">Error code: <span className="fw-bold">S-H-500</span></div>
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
    )
}

export default ConfirmPaymentResult