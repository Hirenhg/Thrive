import React from 'react'

const AddSupplierResult = () => {
    return (
        <div className='add-supplier-result-main'>
            <div className="add-suppliers-success-main">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 suppliers-success-box">
                        <div className="icon-block text-center margin-b-30">
                            <i className="ico-success-payment"></i>
                        </div>
                        <h5 className="margin-b-10 text-primary fw-medium text-center">Successfully linked</h5>
                        <p className="margin-b-30 text-gray-300 f-size-12 text-center">
                            Make your first payment now
                        </p>
                        <div className="bg-gray-100 border-ea rounded padding-10 margin-b-30 d-flex align-items-center">
                            <div className="bg-gray-200 rounded iconbox-large w-sm-60 p-0">
                                <i className="icon-img icon-placeholder"></i>
                            </div>
                            <div className="margin-l-10">
                                <div className="f-size-12 text-primary text-capitalize fw-medium">ABC Wholesaler</div>
                                <div className="f-size-10 text-gray-400 text-uppercase name-subtext">SUPER TRADER</div>
                            </div>
                        </div>
                        <div className="btns">
                            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10">Pay now</button>
                            <button className="btn btn-outline border border-gray-200 rounded w-100 f-size-12 fw-medium d-flex align-items-center justify-content-center">Go to all suppliers</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add-suppliers-success-main">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 suppliers-success-box">
                        <div className="icon-block text-center">
                            <i className="ico-payment-failed"></i>
                        </div>
                        <h5 className="margin-b-20 text-primary fw-medium text-center">Something Went Wrong</h5>
                        <p className="margin-b-20 text-gray-300 f-size-12 text-center">
                            Unfortunately we could not add ABC Wholesaler. Please try again.
                        </p>
                        <div className="form-group margin-b-20">
                            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10">Try again</button>
                            <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Cancel</button>
                        </div>
                        <div className="form-group text-center f-size-14 fw-medium text-gray-400 ">
                            Need help? Contact support <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or <a href="tel:+011 6363 640" title="Contact support" className="text-primary d-block">011 6363 640</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSupplierResult