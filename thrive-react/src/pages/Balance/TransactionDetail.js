import React from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import Pagination from '../../components/Pagination/Pagination'

const TransactionDetail = () => {
    return (
        <div className="transaction-detail-main">
            <div className='margin-b-20'>
                <PageHeading PageHeadingName="Wallet Transfers" iconClassName="ico-back" iconTo="/balance"/>
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
                <Pagination TotalCount="1 to 1 of 1" pgIndex="1" />
            </div>
        </div>
    )
}

export default TransactionDetail