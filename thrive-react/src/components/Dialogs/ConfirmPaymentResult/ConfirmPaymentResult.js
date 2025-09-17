import React from 'react';

const ConfirmPaymentResult = ({ result, onClose, amount, supplierName }) => {
    if (!result) return null;

    return (
        <div
            className="modal d-flex align-items-center justify-content-center"
            tabIndex="-1"
            role="dialog"
            style={{ background: "rgba(0,0,0,0.3)" }}
        >
            <div className="modal-dialog w-100 mw-sm-340" role="document">
                <div className="modal-content bg-white border-0 border-radius-14 overflow-hidden">
                    <div className='confirm-payment-result-main'>
                        {result === 'success' && (
                            <div className="w-100 mw-sm-340 bank-transfer-block">
                                <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative supplier-success-payment-box">
                                    <div className="text-center">
                                        <div className="icon-block">
                                            <i className="ico-success-payment"></i>
                                        </div>
                                        <h5 className="text-primary fw-medium margin-b-10">Successfully Paid</h5>
                                        <div className="f-size-12 text-gray-300 margin-b-30">{supplierName} Supplier</div>
                                          <div className="payment-logo d-flex justify-content-center mb-2 position-relative">
                                            <span className="bg-primary rounded iconbox w-sm-40 thrive-logo margin-r-10">
                                                <i className="icon-img ico-logo"></i>
                                            </span>
                                            <span className="bg-gray-200 iconbox rounded w-sm-40">
                                                <i className="icon-img icon-placeholder"></i>
                                            </span>
                                        </div>
                                        <div className="f-size-12 text-gray-300 margin-b-10 pt-2">You paid {supplierName} Alpha Traders</div>
                                        <h2 className="text-primary fw-medium margin-b-30">
                                            R{amount ? parseFloat(amount).toFixed(2) : '0.00'}<span className="fs-4">.00</span>
                                        </h2>
                                        <div className="form-group">
                                            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10" onClick={onClose}>Done</button>
                                            <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Download proof of payment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {result === 'failed' && (
                            <div className="w-100 mw-sm-340 bank-transfer-block">
                                <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative supplier-payment-failed-box">
                                    <div className="text-center">
                                        <div className="icon-block">
                                            <i className="ico-payment-failed"></i>
                                        </div>
                                        <div className="text-primary fw-medium margin-b-20">Payment failed</div>
                                        <div className="f-size-12 text-gray-300 margin-b-20">There was an error with your payment to {supplierName}.</div>
                                        <div className="f-size-12 text-primary margin-b-20">Error code: <span className="fw-bold">S-H-500</span></div>
                                        <div className="form-group margin-b-20">
                                            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10" onClick={onClose}>Try again</button>
                                            <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center" onClick={onClose}>Cancel</button>
                                        </div>
                                        <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                                            Need help? Contact support <a href="mailto:support@thrive.trade" className="text-primary">support@thrive.trade</a> or <a href="tel:+0116363640" className="text-primary d-block">011 6363 640</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPaymentResult;
