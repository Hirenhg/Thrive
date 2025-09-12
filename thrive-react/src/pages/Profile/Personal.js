import React from 'react'

const Personal = () => {
    return (
        <div className='Personal-main'>
            <div className="profile-page-heading d-sm-none">
                <h6 className="fw-medium text-primary margin-b-10">Account</h6>
                <div className="f-size-12 fw-medium text-primary">
                    Personal
                </div>
            </div>
            <div className="w-100 profile-editform bg-white">
                <div className="form-group margin-b-20">
                    <label htmlFor="surname" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Surname</label>
                    <input type='text' className="form-control f-size-12 fw-medium" readOnly />
                </div>
                <div className="form-group margin-b-20">
                    <label htmlFor="name" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Name</label>
                    <input type='text' className="form-control f-size-12 fw-medium" readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="cellphone" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Cell Phone</label>
                    <div className="d-flex align-items-center change-number">
                        <input type='number' className="form-control f-size-12 fw-medium margin-r-10" readOnly />
                        <button type="button" className="btn btn-outline border border-gray-200 mw-sm-90 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center disabled"><i className="icon ico-edit margin-r-10"></i> Change</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal