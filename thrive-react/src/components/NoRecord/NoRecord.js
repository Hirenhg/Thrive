import React from 'react'

const NoRecord = () => {
    return (
        <div className='no-record-main'>
            <div className="supplier-empty-block margin-b-20">
                <div className="empty-box bg-gray-500 text-center d-flex align-items-center justify-content-center flex-column">
                    <i className="ico-star"></i>
                    <div className="f-size-12 fw-medium text-gray-300 margin-t-10">
                        EmptyMessage
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoRecord