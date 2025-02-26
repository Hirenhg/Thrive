import React from 'react'

const Marketing = () => {
    return (
        <div className='Marketing-main'>
            <div class="profile-page-heading d-sm-none">
                <h6 class="fw-medium text-primary margin-b-10">Account</h6>
                <div class="f-size-12 fw-medium text-primary">
                    Marketing
                </div>
            </div>
            <div class="w-100 profile-editform bg-white">
                <div class="d-flex align-items-center custom-checkbox">
                    <input class="margin-r-10 rounded-1" type="checkbox" disabled />
                    <span class="f-size-12 text-gray-300">Send me marketing communication</span>
                </div>
            </div>
        </div>
    )
}

export default Marketing