import React from 'react'

const ModalPopup = ({ title, body, onClose }) => {
    return (
        <div className='modal-popup-main'>
            <div className="modal fade modal-profile show" style={{ display: 'block' }}>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header p-0">
                            <h6 className="fw-medium text-primary mb-0 modal-profile-label">{title}</h6>
                            <div className="d-flex align-items-center w-100 modal-profile-title">
                                <h5 className="f-size-14 fw-medium text-primary mb-0">{title}</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                            </div>
                        </div>
                        <div className="modal-body p-0">
                            {body}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" onClick={onClose}></div>
        </div>
    )
}

export default ModalPopup