import React from 'react'
import { images } from '../../../config/images';

const ResetPassword = () => {
  return (
    <div className='reset-password-main'>
      <div className="position-fixed top-0 bottom-0 login-skeleton bg-primary min-vh-100">
        <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
          <div className="bg-white border-radius-14 padding-40 w-100 mw-sm-380 rounder-sm-0 h-sm-100 d-flex resetform-block">
            <div className="w-100" Model="@_resetPasswordRequestDto" FormName="ResetPasswordForm">
              <div className="margin-b-30 logo">
                <img src={images.Logo} alt="logo" />
              </div>
              <h4 className="margin-b-10 text-primary fw-semibold">Password Reset</h4>
              <p className="margin-b-30 text-gray-300">
                Please provide the following details
              </p>
              <div className="form-group margin-b-10">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Cell Phone</label>
                <input id="txtCellPhone" className="form-control f-size-12 fw-medium" placeholder="Cell Phone"></input>
              </div>
              <div className="form-group margin-b-30">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Date of birth</label>
                <input type='date' className="form-control f-size-12 fw-medium" placeholder="DD/MM/YYYY" id="datepicker"></input>
              </div>
              <div className="form-group margin-b-10">
                <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Next<i className="arrow-right mx-2"></i></button>
              </div>
              <div className="form-group">
                <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="arrow-left mx-2"></i> Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword