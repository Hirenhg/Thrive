import React from 'react'
import FilterHeading from '../../components/FilterHeading/FilterHeading'
import Pagination from '../../components/Pagination/Pagination'

const SupplierHistory = () => {
    return (
        <div className="bg-white border-radius-14 w-100 contant-detail-box view-supplier-contant rounder-sm-0 padding-30 border-ea">
            <FilterHeading FilterHeadingName="History" showSelect={false} showdatepicker={true} />
            <table className="table margin-b-20">
                <tbody>
                    <tr>
                        <td className="px-0">
                            <table>
                                <tr>
                                    <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                                        <i className="icon-img icon-placeholder"></i>
                                    </td>
                                    <td className="label-text">
                                        <label>
                                            <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18">
                                                Payment to Rozetka Thrive ID 6565576
                                            </span>
                                            <span className="date f-size-12 text-gray-400 fw-medium w-100 d-block">
                                                24 February 2025
                                            </span>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td className="f-size-12 text-primary fw-medium text-right text-nowrap">
                            R10.00
                        </td>
                        <td className="w-sm-100 m-width-auto">
                            <button className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf"><span className="d-none d-sm-inline">Pdf</span> <i className="ico-download"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-0">
                            <table>
                                <tr>
                                    <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                                        <i className="icon-img icon-placeholder"></i>
                                    </td>
                                    <td className="label-text">
                                        <label>
                                            <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18">
                                                Payment to Rozetka Thrive ID 6565576
                                            </span>
                                            <span className="date f-size-12 text-gray-400 fw-medium w-100 d-block">
                                                21 February 2025
                                            </span>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td className="f-size-12 text-primary fw-medium text-right text-nowrap">
                            R10.95
                        </td>
                        <td className="w-sm-100 m-width-auto">
                            <button className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf"><span className="d-none d-sm-inline">Pdf</span> <i className="ico-download"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination TotalCount="1 to 10 of 40" pgIndex={"1" || "2"  || "3"  || "4"} />
        </div>
    )
}

export default SupplierHistory