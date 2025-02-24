import React from 'react'

const TransactionDetail = () => {
    return (
        <div className="transaction-detail-main">
            <div className="d-flex align-items-center margin-b-20 page-heading">
                <a className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 d-flex align-items-center justify-content-center" href="/balance">
                    <i className="icon ico-back"></i>
                </a>
                <h6 className="mb-0 text-primary fw-medium text-capitalize">
                    Wallet Transfers
                </h6>
            </div>
            <div className="bg-white border-radius-14 w-100 contant-detail-box rounder-sm-0 d-flex flex-column justify-content-between border-ea">
                <table className="table" id="tblTransactionDetail">
                    <thead>
                        <tr>
                            <th className="text-primary fw-medium px-0">
                                24 Feb
                            </th>
                            <th className="mw-sm-300 text-primary fw-medium text-right text-nowrap">
                                -R10.00
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-0">
                                <label>
                                    <span className="pb-1 time f-size-12 text-gray-400 fw-medium w-100 d-block">
                                        24 February 2025 | 11:26 am
                                    </span>
                                    <span className="pb-1 f-size-14 text-primary fw-medium w-100 d-block line-height-18 text-capitalize text-nowrap">
                                        Trader Payment
                                    </span>
                                    <span className="suppoting-text f-size-12 text-gray-400 fw-medium w-100 d-block">
                                        Payment to Rozetka Thrive ID 6565576
                                    </span>
                                </label>
                            </td>
                            <td className="mw-sm-300 f-size-14 text-primary fw-medium text-right text-nowrap">
                                <table className="ms-auto">
                                    <tr>
                                        <td>
                                            -R10.00
                                        </td>
                                        <td>

                                            <button className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf">
                                                <span className=" d-none d-sm-inline">
                                                    Proof of payment
                                                </span>
                                                <i className="ico-download"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex align-items-center justify-content-between pt-1">
                    <div class="f-size-14 text-primary line-height-20 text-nowrap margin-r-10">
                        <span class="d-none d-sm-inline"> Showing </span> 1 to 1 of 1 <span class="d-none d-sm-inline">results</span></div>
                    <div class="pagination-block">
                        <ul class="pagination mb-0">
                            <li class="page-item w-sm-40 page-first page-back disabled">
                                <a class="page-link text-center d-flex align-items-center justify-content-center h-100">
                                    <i class="icon ico-back"></i>
                                    <i class="icon ico-back"></i>
                                </a>
                            </li>
                            <li class="page-item w-sm-40 page-back disabled">
                                <a class="page-link text-center d-flex align-items-center justify-content-center h-100">
                                    <i class="icon ico-back"></i>
                                </a>
                            </li>
                            <li class="page-item w-sm-40 active">
                                <a class="page-link text-center f-size-14 fw-semibold">1</a>
                            </li>
                            <li class="page-item w-sm-40 page-next ">
                                <a class="page-link text-center d-flex align-items-center justify-content-center h-100">
                                    <i class="icon ico-next"></i>
                                </a>
                            </li>
                            <li class="page-item w-sm-40 page-last page-next ">
                                <a class="page-link text-center d-flex align-items-center justify-content-center h-100">
                                    <i class="icon ico-next"></i>
                                    <i class="icon ico-next"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionDetail