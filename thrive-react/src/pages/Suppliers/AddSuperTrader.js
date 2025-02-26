import React from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'

const AddSuperTrader = () => {
    return (
        <div className="add-super-trader-main">
            <div className='margin-b-20'>
                <PageHeading PageHeadingName="Supplier" iconClassName="ico-back" iconTo="/Suppliers" />
            </div>
            <div className="center-block mw-sm-340 m-auto">
                <div className="bg-white border-ea border-radius-14 padding-30 w-100 add-super-trader-form-box">
                    <div className="add-super-trader-form">
                        <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
                            <div className="bg-gray-100 rounded iconbox-large w-sm-60 p-0">
                                <i className="icon-img ico-super-trader"></i>
                            </div>
                            <div className="margin-l-10">
                                <div className="f-size-12 text-primary text-capitalize fw-medium">Distell</div>
                                <div className="f-size-10 text-gray-400 name-subtext text-break">Supplier</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Add super trader</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSuperTrader