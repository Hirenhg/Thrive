import React from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'

const AddSupplierForm = () => {
    return (
        <div className="add-suppliers-form-main">
            <div className='margin-b-20 page-heading'>
                <PageHeading PageHeadingName="Add Distell" iconClassName="ico-back" iconTo="/add-supplier" />
            </div>
            <div className="d-flex align-items-center justify-content-center p-sm-3 m-sm-1">
                <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 suppliers-form-box">
                    <div className="w-100">
                        <div className="suppliers-form">
                            <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
                                <div className="bg-gray-200 rounded iconbox-large w-sm-60 p-0">
                                    <i className="icon-img icon-placeholder"></i>
                                </div>
                                <div className="margin-l-10">
                                    <div className="f-size-12 text-primary text-capitalize fw-medium">Distell</div>
                                    <div className="f-size-10 text-gray-400 name-subtext text-break">Business, Consumer goods, 15 Nollsworth Crescent, Nollsworth Park, Kwazulu Natal, South Africa, 4051</div>
                                </div>
                            </div>
                            <div className="form-group margin-b-20">
                                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Customer number & payment reference</label>
                                <input type="text" id="txtCustomerNumber" className="form-control f-size-12 fw-medium" placeholder='12345 or 123456' />
                            </div>
                            <div className="d-flex align-items-center margin-b-20">
                                <div className="custom-checkbox d-flex align-items-center">
                                    <input type="checkbox" id="checkbox-reference" className="checkbox d-none" />
                                    <label className=" d-flex align-items-center position-relative" for="checkbox-reference"><span className="f-size-12 text-gray-300 margin-l-10">Use custom payment reference</span></label>
                                </div>
                            </div>
                            <div className="form-group mb-3 d-none">
                                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Custom payment reference</label>
                                <input type="text" id="txtPayReferenceNumber" className="form-control f-size-12 fw-medium" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Link supplier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSupplierForm