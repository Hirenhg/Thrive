import React from 'react'

const Shop = () => {
    return (
        <div className='shop-main'>
            <div className="profile-page-heading d-sm-none">
                <h6 className="fw-medium text-primary margin-b-10">Account</h6>
                <div className="f-size-12 fw-medium text-primary">
                    Shop
                </div>
            </div>
            <div className="w-100 profile-editform bg-white">
                <div className="form-group margin-b-20">
                    <label htmlFor="shopname" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Shop Name</label>
                    <input className="form-control f-size-12 fw-medium" readonly></input>
                </div>
                <div className="form-group margin-b-20">
                    <label htmlFor="shopname" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Nature of business</label>
                    <input className="form-control f-size-12 fw-medium" readonly></input>
                </div>
                <div className="form-group margin-b-20">
                    <label htmlFor="typebusiness" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Business Type</label>
                    <input className="form-control f-size-12 fw-medium" readonly></input>
                </div>
                <div className="form-group margin-b-20">
                    <label htmlFor="streetname" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">VAT Number</label>
                    <input className="form-control f-size-12 fw-medium" readonly></input>
                </div>
                <div className="form-group margin-b-20">
                    <label htmlFor="streetname" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Street Name</label>
                    <input className="form-control f-size-12 fw-medium" readonly></input>
                </div>
                <div className="form-row d-flex">
                    <div className="form-col margin-r-10">
                        <div className="form-group margin-b-20">
                            <label htmlFor="suburb" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Suburb</label>
                            <input className="form-control f-size-12 fw-medium" readonly></input>
                        </div>
                    </div>
                    <div className="form-col margin-l-10">
                        <div className="form-group margin-b-20">
                            <label htmlFor="city" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">City</label>
                            <input className="form-control f-size-12 fw-medium" readonly></input>
                        </div>
                    </div>
                </div>
                <div className="form-row d-flex">
                    <div className="form-col margin-r-10">
                        <div className="form-group margin-b-20">
                            <label htmlFor="province" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Province</label>
                            <input className="form-control f-size-12 fw-medium" readonly></input>
                        </div>
                    </div>
                    <div className="form-col margin-l-10">
                        <div className="form-group">
                            <label htmlFor="postalcode" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Postal code</label>
                            <input className="form-control f-size-12 fw-medium" readonly></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop