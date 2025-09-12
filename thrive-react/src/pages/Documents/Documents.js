import React, { useState } from 'react'
import FilterHeading from '../../components/FilterHeading/FilterHeading';
import PageHeading from '../../components/PageHeading/PageHeading';
import Pagination from '../../components/Pagination/Pagination';

const Documents = () => {
    const [activeTab, setActiveTab] = useState("statements");
    return (
        <div className="documents-main">
            <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
                <PageHeading PageHeadingName="Documents" iconClassName="ico-documents" />
                <div className="nav nav-pills heading-tabs bg-gray-200 p-1 rounded" id="pills-tab" role="tablist">
                    <button className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === "statements" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("statements")}>Statements</button>
                    <button className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === "proof-payments" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("proof-payments")}>Proof of payments</button>
                    <button className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === "credit-notes" ? "active" : ""}`} type="button" role="tab" onClick={() => setActiveTab("credit-notes")}>Credit Notes</button>
                </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
                {activeTab === "statements" && (
                    <div className="tab-pane fade show active" role="tabpanel">
                        <div className="bg-white border-radius-14 w-100 contant-detail-box document-detail-box rounder-sm-0 border-ea">
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="custom-statement-box margin-r-30 h-100 rounded accordion" id="custom-statement-accordion">
                                    <div className="accordion-item bg-gray-100 border-gray-200">
                                        <h6 className="accordion-header d-sm-none d-block" id="statement-heading">
                                            <button className="bg-gray-100 rounded text-primary fw-medium padding-20 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsestatement" aria-expanded="true" aria-controls="collapsestatement">
                                                Custom statement
                                            </button>
                                        </h6>
                                        <h6 className="bg-gray-100 padding-20 text-primary fw-medium d-none d-sm-block mb-0">
                                            Custom statement
                                        </h6>
                                        <div className="divider d-none d-sm-block"></div>
                                        <div id="collapsestatement" className="accordion-collapse collapse hide d-sm-block bg-gray-100" aria-labelledby="statement-heading" data-bs-parent="#custom-statement-accordion">
                                            <div className="divider d-sm-none"></div>
                                            <div className="accordion-body padding-20">
                                                <div className="custom-statement-form-details">
                                                    <div className="w-100" >
                                                        <div className="form-group margin-b-10">
                                                            <label htmlFor="startDate" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Start Date</label>
                                                            <input type='date' className="form-control f-size-12 fw-medium" id="startDate" placeholder="DD/MM/YYYY"></input>
                                                        </div>
                                                        <div className="form-group margin-b-10">
                                                            <label htmlFor="endDate" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">End Date</label>
                                                            <input type='date' className="form-control f-size-12 fw-medium" id="endData" placeholder="DD/MM/YYYY"></input>
                                                        </div>
                                                        <div className="form-group margin-b-20">
                                                            <label htmlFor="format" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Format</label>
                                                            <select className="form-select form-control f-size-12 fw-medium" id="format">
                                                                <option value="excel">Excel</option>
                                                                <option value="csv">Csv</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Download <i className="ico-download mx-2"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="statement-list-col">
                                    <div className="statement-list-heading d-flex justify-content-between align-items-center margin-b-20">
                                        <h6 className="mb-0 text-primary fw-medium text-capitalize">Statements</h6>
                                        <div className="form-group w-sm-150">
                                            <select id="ddYear" className="form-select form-control f-size-12 fw-medium">
                                                <option value="2025" selected>2025</option>
                                                <option value="2024">2024</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="statement-list-contant">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="bg-gray-100 rounded iconbox w-sm-40 margin-r-10">
                                                        <i className="ico-invoice"></i>
                                                    </div>
                                                    <span className="f-size-14 text-primary fw-medium w-100 d-block line-height-18 text-nowrap">
                                                        January 2025
                                                    </span>
                                                </div>
                                                <a href="@statement.Path" download="" className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf"><span className="d-none d-sm-inline">Pdf</span>  <i className="ico-download"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "proof-payments" && (
                    <div className="tab-pane fade show active" role="tabpanel">
                        <div className="bg-white border-radius-14 w-100 contant-detail-box document-detail-box rounder-sm-0 border-ea">
                            <FilterHeading FilterHeadingName="Proof of payments" showSelect={false} />
                            <table className="table margin-b-20 border-t" id="tblPOPList">
                                <tbody>
                                    <tr>
                                        <td className="px-0">
                                            <table>
                                                <tr>
                                                    <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                                                        <i className="icon-img icon-placeholder">
                                                        </i>
                                                    </td>
                                                    <td className="document-info">
                                                        <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                                                            Rozetka
                                                        </span>
                                                        <p className="d-flex align-items-sm-center flex-column flex-sm-row pt-1 mb-0">
                                                            <label className="bg-gray-200 text-primary-hover f-size-8 fw-medium text-uppercase text-nowrap suppliers-tag">
                                                                Super Trader
                                                            </label>
                                                            <span className="date f-size-10 text-gray-400 fw-medium w-100 d-block">
                                                                Paid
                                                                <span>
                                                                    21 Feb 2025
                                                                </span>
                                                            </span>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td className="f-size-12 text-primary fw-medium text-right payment-amount text-nowrap">
                                            +R 10.95
                                        </td>
                                        <td className="w-sm-75 m-width-auto">
                                            <button className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf">
                                                <span className=" d-none d-sm-inline">
                                                    Pdf
                                                </span>
                                                <i className="ico-download">
                                                </i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Pagination TotalCount="1 to 10 of 119" pgIndex={"1" || "2"  || "3"  || "4"} />
                        </div>
                    </div>
                )}
                {activeTab === "credit-notes" && (
                    <div className="tab-pane fade show active" role="tabpanel">
                        <div className="bg-white border-radius-14 w-100 contant-detail-box document-detail-box rounder-sm-0 border-ea">
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="statement-list-col">
                                    <div className="statement-list-heading d-flex justify-content-between align-items-center margin-b-20">
                                        <h6 className="mb-0 text-primary fw-medium text-capitalize">
                                            Credit Notes
                                        </h6>
                                        <div className="form-group w-sm-150">
                                            <select className="form-select form-control f-size-12 fw-medium">
                                                <option value="2025">
                                                    2025
                                                </option>
                                                <option value="2024">
                                                    2024
                                                </option>
                                                <option value="2023" selected="">
                                                    2023
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="statement-list-contant">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="bg-gray-100 rounded iconbox w-sm-40 margin-r-10">
                                                        <i className="ico-invoice">
                                                        </i>
                                                    </div>
                                                    <span className="f-size-14 text-primary fw-medium w-100 d-block line-height-18 text-nowrap">
                                                        August 2023
                                                    </span>
                                                </div>
                                                <a href="#" download="" className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf">
                                                    <span className="d-none d-sm-inline">
                                                        Pdf
                                                    </span>
                                                    <i className="ico-download"></i>
                                                </a>
                                            </li>
                                        </ul>
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

export default Documents