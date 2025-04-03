import React from 'react'
import FilterHeading from '../../components/FilterHeading/FilterHeading'
import PageHeading from '../../components/PageHeading/PageHeading'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'
import SupplierEmpty from '../../components/SupplierEmpty/SupplierEmpty'

const Suppliers = () => {
    return (
        <div className='Suppliers-main'>
            <div className="d-flex align-items-center justify-content-between margin-b-20 page-heading">
                <PageHeading PageHeadingName="Supplier" iconClassName="ico-supplier" />
                <div className="heading-btns">
                    <Link className='text-decoration-none' to="/add-supplier">
                        <button className="btn btn-primary rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><span className="margin-r-10">Add supplier</span><i className="icon ico-plus"></i></button>
                    </Link>
                </div>
            </div>
            <div className="bg-white border-radius-14 w-100 rounder-sm-0 padding-30 border-ea supplier-list-block">
                <div className='supplier-datashow'>
                    <FilterHeading FilterHeadingName="My suppliers" showSelect={true} option1="Type" option2="Supplier" option3="Super Trader" />
                    <div className="supplier-list-contant">
                        <div className="margin-b-30">
                            <div className="supplier-contant-title">
                                <div className="f-size-12 fw-medium text-gray-400 margin-b-10">
                                    Recently Paid
                                </div>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                                            <i className="icon-img ico-super-trader"></i>
                                        </div>
                                        <div className="suppliers-info">
                                            <span className="f-size-14 text-primary-hover fw-medium text-capitalize w-100 d-block line-height-18 text-nowrap">
                                                Rozetka
                                            </span>
                                            <div className="d-flex align-items-sm-center flex-column flex-sm-row pt-1">
                                                <label className="bg-gray-200 text-primary-hover f-size-8 fw-medium text-uppercase text-nowrap suppliers-tag">Super Trader</label>
                                                <span className="date f-size-10 text-gray-400 fw-medium w-100 d-block">
                                                    Last paid <span>21 Feb 2025</span>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Link to="/view-supplier-pay" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pay text-decoration-none">Pay</Link>
                                        <Link to="/supplier-history" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium margin-l-10 d-flex align-items-center justify-content-center btn-history text-decoration-none">History</Link>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                                            <img className="icon-img icon-placeholder" />
                                        </div>
                                        <div className="suppliers-info">
                                            <span className="f-size-14 text-primary-hover fw-medium text-capitalize w-100 d-block line-height-18 text-nowrap">
                                                Clover
                                            </span>
                                            <div className="d-flex align-items-sm-center flex-column flex-sm-row pt-1">
                                                <label className="bg-gray-200 text-primary-hover f-size-8 fw-medium text-uppercase text-nowrap suppliers-tag">Supplier</label>
                                                <span className="date f-size-10 text-gray-400 fw-medium w-100 d-block">
                                                    Last paid <span>12 Feb 2025</span>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Link to="/view-supplier-pay" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pay text-decoration-none">Pay</Link>
                                        <Link to="/supplier-history" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium margin-l-10 d-flex align-items-center justify-content-center btn-history text-decoration-none">History</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="linked-suppliers">
                            <div className="supplier-contant-title">
                                <div className="f-size-12 fw-medium text-gray-400 margin-b-10">
                                    All linked suppliers
                                </div>
                            </div>
                            <ul className="list-group margin-b-20">
                                <li className="list-group-item d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                                            <img className="icon-img icon-placeholder" />
                                        </div>
                                        <div className="suppliers-info">
                                            <span className="f-size-14 text-primary-hover fw-medium text-capitalize w-100 d-block line-height-18 text-nowrap">
                                                Clover
                                            </span>
                                            <div className="d-flex align-items-sm-center flex-column flex-sm-row pt-1">
                                                <label className="bg-gray-200 text-primary-hover f-size-8 fw-medium text-uppercase text-nowrap suppliers-tag">Supplier</label>
                                                <span className="date f-size-10 text-gray-400 fw-medium w-100 d-block">
                                                    Last paid <span>12 Feb 2025</span>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Link to="/view-supplier-pay" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pay text-decoration-none">Pay</Link>
                                        <Link to="/supplier-history" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium margin-l-10 d-flex align-items-center justify-content-center btn-history text-decoration-none">History</Link>
                                    </div>
                                </li>
                            </ul>
                            <Pagination TotalCount="1 to 10 of 26" pgIndex={"1" || "2" || "3"} />
                        </div>
                    </div>
                </div>
                <div className='supplier-nodata d-none'>
                    <div className="margin-b-20">
                        <SupplierEmpty EmptyTitle="Recently Paid" EmptyDes="No suppliers paid yet" />
                    </div>
                    <SupplierEmpty EmptyTitle="All linked suppliers" EmptyDes="No suppliers found" />
                </div>
            </div>
        </div>
    )
}

export default Suppliers