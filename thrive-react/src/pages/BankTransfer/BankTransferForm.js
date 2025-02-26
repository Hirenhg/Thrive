import React from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'

const BankTransferForm = () => {
    return (
        <div className="bank-transfer-main">
            <PageHeading PageHeadingName="Bank Transfer" iconClassName="ico-bank-transfer"/>
            <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0 m-center-box">
                <div className="w-100 mw-sm-340 bank-transfer-block">
                    <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 d-none">
                        <div className="text-center">
                            <div className="icon-block">
                                <i className="ico-status"></i>
                            </div>
                            <h5 className="margin-b-20 text-primary fw-medium">No Bank Account Linked</h5>
                            <p className="margin-b-30 text-primary f-size-12">
                                It looks like there’s no bank account linked to your Thrive account. Please contact your Support for assistance with setting this up.
                            </p>
                            <p className="margin-b-30 text-primary f-size-12">
                                ErrorMessage
                            </p>
                            <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                                Need help? Contact support <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or <a href="tel:+011 6363 640" title="Contact support" className="text-primary d-block">011 6363 640</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary border-radius-14 w-100 balance-box rounder-sm-0 padding-30 margin-b-20 text-center">
                        <h5 className="text-white fw-medium mb-2">
                            Balance
                        </h5>
                        <div className="f-size-10 text-gray-400 fw-semibold text-uppercase mb-2">Available Amount</div>
                        <h2 className="text-white fw-medium mb-2">
                        R36<span className="fs-4">.24</span>
                        </h2>
                        <div className="text-white fw-medium f-size-10 bg-gray-600 rounded last-update-tag text-nowrap m-auto d-none">
                            Last updated 20h ago
                        </div>
                    </div>
                    <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative bank-transfer-form-box">
                        <div className="bank-transfer-form">
                            <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
                                <div className="bg-gray-200 rounded iconbox w-sm-40 p-0 overflow-hidden">
                                    <i className="icon-img icon-placeholder"></i>
                                </div>
                                <div className="margin-l-10">
                                    <div className="f-size-14 text-primary text-capitalize fw-medium">Testing</div>
                                    <div className="f-size-10 text-gray-400 name-subtext text-break">
                                    Absa Bank Limited
                                        <br /> 212121212121
                                    </div>
                                </div>
                            </div>
                            <div className="form-group margin-b-10 text-center">
                                <label className="form-label text-gray-300 fw-semibold margin-b-10 f-size-10 text-center w-100">ENTER AMOUNT</label>
                                <input type="number" id="paymentAmount" className="form-control fw-medium text-center" placeholder="R 0.00" />
                            </div>
                            <div className="form-group margin-b-10 text-center">
                                <label className="form-label text-gray-300 fw-semibold margin-b-10 f-size-10 text-center w-100">Bank transfer fees</label>
                                <div className="bg-gray-500 rounded d-flex align-items-center justify-content-between padding-10 bank-transfer-fee-block mb-1">
                                    <label className="text-primary f-size-10">Standard Bank 0.57 % incl. VAT</label>
                                    <div className="fee-amount text-primary fw-semibold f-size-10">R0.00</div>
                                </div>
                                <div className="bg-gray-500 rounded d-flex align-items-center justify-content-between padding-10 bank-transfer-fee-block">
                                    <label className="text-primary f-size-10">Other Bank 0.92 % incl. VAT</label>
                                    <div className="fee-amount text-primary fw-semibold f-size-10">R0.00</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button id="btnNext" type="button" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                                    Next <i className="arrow-right margin-l-10"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 mw-sm-340 bank-transfer-block d-none">
                        <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative bank-transfer-confirm-payment-box">
                            <div className="text-center">
                                <h5 className="text-primary fw-medium margin-b-20">
                                    Confirm Payment
                                </h5>
                                <div className="payment-logo d-flex align-items-center justify-content-center">
                                    <span className="bg-primary rounded iconbox w-sm-40 thrive-logo position-relative margin-r-10">
                                        <i className="icon-img ico-logo"></i>
                                    </span>
                                    <span className="bg-gray-200 rounded iconbox w-sm-40">
                                        <i className="icon-img icon-placeholder"></i>
                                    </span>
                                </div>
                                <div className="f-size-12 text-gray-300 margin-b-10">You are about to transfer</div>
                                <h2 className="text-primary fw-medium margin-b-20">
                                    10
                                    <span className="fs-4">.00</span>
                                </h2>
                                <div className="bg-gray-500 rounded d-flex align-items-center justify-content-between padding-10 margin-b-10  bank-transfer-fee-block">
                                    <label className="text-primary f-size-10">
                                     Bank transfer fee 0.92 %
                                    </label>
                                    <div className="fee-amount text-primary fw-semibold f-size-10">R0.09</div>
                                </div>
                                <div className="form-group">
                                    <button id="btnPayNow" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10">Pay now</button>
                                    <button id="btnPayCancel" className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="ico-edit margin-r-10"></i>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankTransferForm