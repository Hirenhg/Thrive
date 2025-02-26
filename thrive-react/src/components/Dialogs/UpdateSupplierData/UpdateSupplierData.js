import React from 'react'

const UpdateSupplierData = () => {
    return (
        <div className='update-supplier-data-main'>
            <div className="padding-30 w-100 position-relative supplier-customer-info-edit">
                <div className="customer-edit-form">
                    <div className="form-group margin-b-10">
                        <label className="form-label text-primary mb-2 f-size-12 w-100">Customer ID</label>
                        <input id="txtCustomerID" className="form-control f-size-12 fw-medium bg-gray-100 text-blue" placeholder="Search" type="text" value="32 3213 1231"/>
                    </div>
                    <div className="form-group">
                        <button id="btnUpdate" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10">
                            Update
                        </button>
                        <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Cancel</button>
                    </div>
                </div>
            </div>
            <div className="padding-30 w-100 position-relative supplier-reference-info-edit">
                <div className="reference-edit-form">
                    <div className="form-group margin-b-10">
                        <label className="form-label text-primary mb-2 f-size-12 w-100">Payment reference number</label>
                        <input id="txtPayNumber" className="form-control f-size-12 fw-medium bg-gray-100 text-blue" placeholder="Search" type="text" value="82347 897234 97239" />
                    </div>
                    <div className="form-group">
                        <button id="btnUpdate" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10">
                            Update
                        </button>
                        <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateSupplierData