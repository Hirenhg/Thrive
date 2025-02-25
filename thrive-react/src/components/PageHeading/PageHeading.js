import React from 'react'

const PageHeading = () => {
    return (
        <div className='page-heading-main'>
            <div className="d-flex align-items-center margin-b-20 page-heading">
                <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 d-flex align-items-center justify-content-center">
                    <a className="icon ico-dashboard" href="/dashboard"></a>
                </div>
                <h6 className="mb-0 text-primary fw-medium text-capitalize">
                    Dashboard
                </h6>
            </div>
        </div>
    )
}

export default PageHeading