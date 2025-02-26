import React from 'react'

const SupplierEmpty = (props) => {
    return (
        <div className='supplier-empty-main'>
            <div class="supplier-empty-block">
                <div class="supplier-contant-title margin-b-20">
                    <div class="f-size-12 fw-medium text-gray-400 margin-b-10">
                        {props.EmptyTitle}
                    </div>
                    <div class="divider"></div>
                </div>
                <div class="empty-box bg-gray-500 text-center d-flex align-items-center justify-content-center flex-column">
                    <i class="ico-star"></i>
                    <div class="f-size-12 fw-medium text-gray-300 margin-t-10">
                        {props.EmptyDes}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupplierEmpty