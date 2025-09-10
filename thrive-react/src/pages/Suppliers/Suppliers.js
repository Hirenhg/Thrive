import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import FilterHeading from '../../components/FilterHeading/FilterHeading';
import PageHeading from '../../components/PageHeading/PageHeading';
import Pagination from '../../components/Pagination/Pagination';
import SupplierEmpty from '../../components/SupplierEmpty/SupplierEmpty';

const Suppliers = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [recentSuppliers, setRecentSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [pageIndex, setPageIndex] = useState(1);

    const fetchSuppliers = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/suppliers/suppliers.json?page=${pageIndex}`);
            const { recent, linked } = response.data;

            setRecentSuppliers(recent || []);
            setSuppliers(linked || []);
        } catch (err) {
           setError('Failed to fetch suppliers.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSuppliers();
    }, [pageIndex]);

    const renderSupplierItem = (supplier) => (
        <li className="list-group-item d-flex align-items-center justify-content-between" key={supplier.id}>
            <div className="d-flex align-items-center">
                <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                   {supplier.img && supplier.img !== "" ? (
                    <img src={supplier.img} alt={supplier.name} className="icon-img" />
                    ) : (
                    <i className="icon-img icon-placeholder"></i>
                    )}
                </div>
                <div className="suppliers-info">
                    <span className="f-size-14 text-primary-hover fw-medium text-capitalize w-100 d-block line-height-18 text-nowrap">
                        {supplier.name}
                    </span>
                    <div className="d-flex align-items-sm-center flex-column flex-sm-row pt-1">
                        <label className="bg-gray-200 text-primary-hover f-size-8 fw-medium text-uppercase text-nowrap suppliers-tag">
                            {supplier.type}
                        </label>
                        <span className="date f-size-10 text-gray-400 fw-medium w-100 d-block">
                            Last paid <span>{supplier.lastPaidDate}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <Link to="/view-supplier-pay" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pay text-decoration-none">Pay</Link>
                <Link to={`/supplier-history`} className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium margin-l-10 d-flex align-items-center justify-content-center btn-history text-decoration-none">History</Link>
            </div>
        </li>
    );

    if (loading) return <div>Loading suppliers...</div>;
    if (error) return <div className="text-danger">{error}</div>;

    return (
        <div className='Suppliers-main'>
            <div className="d-flex align-items-center justify-content-between margin-b-20 page-heading">
                <PageHeading PageHeadingName="Supplier" iconClassName="ico-supplier" />
                <div className="heading-btns">
                    <Link className='text-decoration-none' to="/add-supplier">
                        <button className="btn btn-primary rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                            <span className="margin-r-10">Add supplier</span><i className="icon ico-plus"></i>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-white border-radius-14 w-100 rounder-sm-0 padding-30 border-ea supplier-list-block">
                <div className='supplier-datashow'>
                    <FilterHeading FilterHeadingName="My suppliers" showSelect={true} option1="Type" option2="Supplier" option3="Super Trader" />

                    <div className="supplier-list-contant">
                        {/* Recently Paid */}
                        <div className="margin-b-30">
                            <div className="supplier-contant-title">
                                <div className="f-size-12 fw-medium text-gray-400 margin-b-10">
                                    Recently Paid
                                </div>
                            </div>
                            {recentSuppliers.length > 0 ? (
                                <ul className="list-group">
                                    {recentSuppliers.map(renderSupplierItem)}
                                </ul>
                            )
                             : (
                                <SupplierEmpty EmptyDes="No suppliers paid yet" />
                            )}
                        </div>

                        {/* All Linked Suppliers */}
                        <div className="linked-suppliers">
                            <div className="supplier-contant-title">
                                <div className="f-size-12 fw-medium text-gray-400 margin-b-10">
                                    All linked suppliers
                                </div>
                            </div>
                            {suppliers.length > 0 ? (
                                <>
                                    <ul className="list-group margin-b-20">
                                        {suppliers.map(renderSupplierItem)}
                                    </ul>
                                    <Pagination
                                        TotalCount={`Page ${pageIndex}`}
                                        pgIndex={pageIndex}
                                        onPageChange={setPageIndex}
                                    />
                                </>
                            ) : (
                                <SupplierEmpty EmptyTitle="All linked suppliers" EmptyDes="No suppliers found" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suppliers;
