import React from 'react'

const NotificationPopup = () => {
    return (
        <div className='notification-popup-main'>
            <div className="modal fade" id="@PopupId">
                <div className="modal-dialog modal-dialog-centered align-items-end align-items-sm-center mx-auto">
                    <div className="modal-content border-radius-14 mw-sm-340 mx-auto">
                        <div className="modal-body p-0">
                            BodyContent
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </div>
    )
}

export default NotificationPopup