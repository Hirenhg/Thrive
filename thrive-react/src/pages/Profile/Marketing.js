import React from 'react'

const Marketing = () => {
    return (
        <div className='Marketing-main'>
            <div className="profile-page-heading d-sm-none">
                <h6 className="fw-medium text-primary margin-b-10">Account</h6>
                <div className="f-size-12 fw-medium text-primary">
                    Marketing
                </div>
            </div>
            <div className="w-100 profile-editform bg-white">
                <div className="d-flex align-items-center custom-checkbox">
                    <input className="margin-r-10 rounded-1" type="checkbox" disabled />
                    <span className="f-size-12 text-gray-300">Send me marketing communication</span>
                </div>
            </div>
        </div>
    )
}

export default Marketing