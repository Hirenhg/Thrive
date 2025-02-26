import React, { useState } from 'react'
import SupplierHistory from './SupplierHistory'
import PageHeading from '../../components/PageHeading/PageHeading';

const ViewSupplierPay = () => {
    const [activeTab, setActiveTab] = useState("pay");
    return (
        <div className="view-supplier-pay-main">
            <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
                <PageHeading PageHeadingName="Rozetka" iconClassName="ico-back" iconTo="/Suppliers" />
                <div className="nav nav-pills heading-tabs bg-gray-200 p-1 rounded" id="pills-tab" role="tablist">
                    <button className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === "pay" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("pay")}>Pay</button>
                    <button className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === "history" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("history")}>History</button>
                    <button className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === "info" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("info")}>Info</button>
                </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
                {activeTab === "pay" && (
                    <div className="tab-pane fade show active" role="tabpanel">
                        <div className="w-100 mw-sm-340 view-supplier-contant view-supplier-pay-contant center-block">
                            <div className="bg-primary border-radius-14 w-100 balance-box rounder-sm-0 padding-30 margin-b-20 text-center">
                                <h5 className="text-white fw-medium mb-2">
                                    Balance
                                </h5>
                                <div className="f-size-10 text-gray-400 fw-semibold text-uppercase mb-2">Available Amount</div>
                                <h2 className="text-white fw-medium mb-2">R36
                                    <span className="fs-4">.24</span>
                                </h2>
                                <div className="d-none text-white fw-medium f-size-10 bg-gray-600 rounded last-update-tag text-nowrap m-auto">
                                    Last updated 20h ago ?????
                                </div>
                            </div>
                            <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative supplier-pay-box">
                                <div className="supplier-pay-form">
                                    <h5 className="text-primary fw-medium margin-b-10 text-center">
                                        Pay
                                    </h5>
                                    <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
                                        <div className="bg-gray-200 rounded iconbox w-sm-40 h-sm-40  p-0 overflow-hidden">
                                            <i className="icon-img icon-placeholder"></i>
                                        </div>
                                        <div className="margin-l-10">
                                            <div className="f-size-14 text-primary text-capitalize fw-medium">Rozetka</div>
                                        </div>
                                    </div>
                                    <div className="form-group margin-b-10 text-center">
                                        <label className="form-label text-gray-300 fw-semibold margin-b-10 f-size-10 text-center w-100">ENTER AMOUNT</label>
                                        <input type="number" id="paymentAmount" className="form-control fw-medium text-center" placeholder="R 0.00" />
                                    </div>
                                    <div className="form-group">
                                        <button id="btnNext" type="button" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center disabled">
                                            Next <i className="arrow-right margin-l-10"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative supplier-confirm-payment-box d-none">
                                <div className="text-center">
                                    <h5 className="text-primary fw-medium margin-b-20">
                                        Confirm Payment
                                    </h5>
                                    <div className="payment-logo d-flex align-items-center justify-content-center">
                                        <span className="bg-primary rounded iconbox w-sm-40 thrive-logo position-relative margin-r-10">
                                            <i className="icon-img ico-logo"></i>
                                        </span>
                                        <span className="bg-gray-200 rounded iconbox w-sm-40 overflow-hidden">
                                            <i className="icon-img icon-placeholder"></i>
                                        </span>
                                    </div>
                                    <div className="f-size-12 text-gray-300 margin-b-10">You are about to pay Rozetka</div>
                                    <h2 className="text-primary fw-medium margin-b-20">10
                                        <span className="fs-4">.00</span>
                                    </h2>
                                    <div className="form-group">
                                        <button id="btnPayNow" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center  margin-b-10">Pay now</button>
                                        <button id="btnPayCancel" className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="ico-edit margin-r-10"></i>Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "history" && (
                    <div className="tab-pane fade show active" role="tabpanel">
                        <SupplierHistory />
                    </div>
                )}
                {activeTab === "info" && (
                    <div>
                        <div className="tab-pane fade show active" role="tabpanel">
                            <div className="w-100 mw-sm-340 view-supplier-contant center-block">
                                <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative supplier-info-box">
                                    <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
                                        <div className="bg-gray-200 rounded iconbox-large w-sm-60 p-0">
                                            <i className="icon-img icon-placeholder"></i>
                                        </div>
                                        <div className="margin-l-10">
                                            <div className="f-size-12 text-primary text-capitalize fw-medium">
                                                DriveCo
                                            </div>
                                            <div className="f-size-10 text-gray-400 name-subtext text-break">
                                                Business, HEAD OFFICE, Unknown, Unknown, Gauteng, Unknown, Unknown
                                            </div>
                                        </div>
                                    </div>
                                    <div className="margin-b-20 d-flex align-items-center justify-content-between call-number">
                                        <div className="call-info">
                                            <div className="fw-bold text-primary f-size-12 pb-1">Number</div>
                                            <div className="text-gray-300 f-size-12 fw-medium">
                                                11 123 4567
                                            </div>
                                        </div>
                                        <a href="tel:@SupplierPaymentModel.SupplierContact" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-call margin-r-10"></i> Call</a>
                                    </div>
                                    <div className="margin-b-20">
                                        <div className="hours-info">
                                            <div className="fw-bold text-primary f-size-12 pb-1">Hours</div>
                                            <div className="text-gray-300 f-size-12 fw-medium">
                                                WorkingHours
                                            </div>
                                        </div>
                                    </div>
                                    <div className="margin-b-20 d-flex align-items-center justify-content-between customer-id">
                                        <div className="customer-info">
                                            <div className="fw-bold f-size-12 text-primary  pb-1">Customer ID</div>
                                            <div className="text-blue f-size-12 fw-medium d-flex align-items-center">
                                                brandId1 <i className="ico-check"></i>
                                            </div>
                                        </div>
                                        <button id="btnCustomerID" type="button" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-edit margin-r-10"></i> Edit</button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between reference-number">
                                        <div className="reference-info">
                                            <div className="fw-bold f-size-12 text-primary pb-1">Payment reference number</div>
                                            <div className="text-blue f-size-12 fw-medium">accountIdWithRecipient1</div>
                                        </div>
                                        <button id="btnPayNumber" type="button" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-edit margin-r-10"></i> Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show active d-none" role="tabpanel">
                            <div className="w-100 mw-sm-340 view-supplier-contant center-block">
                                <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative supplier-info-box">
                                    <div className="bg-gray-100 border-ea rounded padding-10 d-flex align-items-center">
                                        <div className="bg-gray-300 rounded iconbox-large w-sm-60 p-0">
                                            <i className="icon-img ico-super-trader"></i>
                                        </div>
                                        <div className="margin-l-10">
                                            <div className="f-size-12 text-primary text-capitalize fw-medium">
                                                Rozetka
                                            </div>
                                            <div className="f-size-10 text-gray-400 name-subtext text-break">
                                                ThriveWebApp.Client.Models.Supplier.LinkedSupplierProfileData+SupplierAddress
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ViewSupplierPay