import React from 'react'

const ChangeCellphoneNumberSuccess = () => {
    return (
        <div className="h-sm-100 w-100 d-flex flex-column align-items-center">
            <div className="bg-white border-radius-14 padding-40 w-100 mw-sm-340 rounder-sm-0 success-box">
                <div className="w-100 text-center">
                    <div className="icon-block margin-b-30">
                        <i className="ico-success-payment"></i>
                    </div>
                    <h4 className="margin-b-10 text-primary fw-semibold ">
                        Success!
                    </h4>
                    <p className="margin-b-30 text-primary f-size-12">
                        You have successfully changed <br /> your cellphone number.
                    </p>
                    <div className="form-group">
                        <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Sign In<i className="arrow-right mx-2"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeCellphoneNumberSuccess