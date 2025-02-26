import React from 'react'

const DeleteAccount = () => {
    return (
        <div className="delete-account-main">
            <div className="profile-page-heading d-sm-none">
                <h6 className="fw-medium text-primary margin-b-10">Account</h6>
                <div className="f-size-12 fw-medium text-primary">
                    Delete Account
                </div>
            </div>
            <div className="margin-b-30">
                <button type="button" className="btn btn-outline border rounded text-error f-size-12 fw-medium text-center btn-delete">Request  to delete account</button>
            </div>
        </div>
    )
}

export default DeleteAccount