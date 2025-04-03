import React from 'react'

const ModalPopup = () => {
    return (
        <div className='modal-popup-main'>
            <div className="modal fade modal-profile" id="@PopupId">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header p-0">
                            <h6 className="fw-medium text-primary mb-0 modal-profile-label">FirstTitle</h6>
                            <div className="d-flex align-items-center w-100 modal-profile-title">
                                <h5 className="f-size-14 fw-medium text-primary mb-0" id="@(PopupId)Label">SecondTitle</h5>
                                <button type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body p-0">
                            body
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </div>
    )
}

export default ModalPopup