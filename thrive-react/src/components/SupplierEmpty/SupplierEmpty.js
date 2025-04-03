import React from 'react'

const SupplierEmpty = (props) => {
    return (
        <div className='supplier-empty-main'>
            <div className="supplier-empty-block">
                <div className="supplier-contant-title margin-b-20">
                    <div className="f-size-12 fw-medium text-gray-400 margin-b-10">
                        {props.EmptyTitle}
                    </div>
                    <div className="divider"></div>
                </div>
                <div className="empty-box bg-gray-500 text-center d-flex align-items-center justify-content-center flex-column">
                    <i className="ico-star"></i>
                    <div className="f-size-12 fw-medium text-gray-300 margin-t-10">
                        {props.EmptyDes}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupplierEmpty