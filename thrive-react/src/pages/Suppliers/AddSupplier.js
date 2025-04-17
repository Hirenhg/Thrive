import React, { useEffect, useState } from 'react'
import FilterHeading from '../../components/FilterHeading/FilterHeading'
import PageHeading from '../../components/PageHeading/PageHeading'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'

const AddSupplier = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const suppliersData = [
        {
            "id": 1,
            "name": "Distell"
        },
        {
            "id": 2,
            "name": "Supplier A"
        },
        {
            "id": 3,
            "name": "Supplier B"
        }
    ];

    useEffect(() => {
        const fetchSuppliers = () => {
            try {
                setTimeout(() => {
                    setSuppliers(suppliersData);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchSuppliers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="add-supplier-main">
            <div className='margin-b-20 page-heading'>
                <PageHeading PageHeadingName="Supplier" iconClassName="ico-back" iconTo="/Suppliers" />
            </div>
            <div className="bg-white border-radius-14 w-100 rounder-sm-0 padding-30 border-ea supplier-list-block">
                <FilterHeading FilterHeadingName="add supplier" showSelect={true} option1="Type" option2="Supplier" option3="Super Trader" />
                <div className="supplier-list-contant">
                    <table className="table margin-b-20" id="tblSupplier">
                        <thead>
                            <tr>
                                <th className="px-0">
                                </th>
                                <th className="w-sm-75">
                                </th>
                            </tr>
                        </thead>
                        {suppliers.map((supplier) => (
                            <tr key={supplier.id}>
                                <td className="px-0">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0">
                                                    <i className="icon-img icon-placeholder"></i>
                                                </td>
                                                <td className="label-text">
                                                    <div className="suppliers-info">
                                                        <span className="f-size-14 text-primary-hover fw-medium text-capitalize w-100 d-block line-height-18 text-nowrap">
                                                            {supplier.name}
                                                        </span>
                                                        <div className="d-flex align-items-sm-center flex-column flex-sm-row pt-1">
                                                            <label className="bg-gray-200 text-primary-hover f-size-8 fw-medium text-uppercase text-nowrap suppliers-tag">
                                                                Supplier
                                                            </label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="w-sm-75">
                                    <Link className='text-decoration-none' to="/add-supplier-form">
                                        <button className="btn btn-outline border border-gray-200 rounded text-uppercase f-size-12 fw-medium text-capitalize d-flex align-items-center justify-content-center btn-add">
                                            Add <i className="ico-add"></i>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <Pagination TotalCount="1 to 1 of 1" pgIndex="1" />
                </div>
            </div>
        </div>
    )
}

export default AddSupplier