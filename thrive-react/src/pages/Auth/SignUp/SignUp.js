import React from 'react'
import { images } from '../../../config/images';

const SignUp = () => {
  return (
    <div className='signup-main'>
      <div className="position-fixed top-0 bottom-0 login-skeleton bg-primary min-vh-100">
        <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
          <div className="bg-white border-radius-14 padding-40 w-100 mw-sm-360 rounder-sm-0 h-sm-100 d-flex flex-column align-items-center signup-form-block">
            <div className="w-100">
              <div className="margin-b-30 logo">
                <img src={images.Logo} alt="logo" />
              </div>
              <h4 className="margin-b-10 text-primary fw-medium d -flex align-items-center justify-content-between">
                Sign Up
                <span className="fw-normal">1/3</span>
              </h4>
              <p className="margin-b-30 text-gray-300">
                Personal details
              </p>
              <p className="margin-b-30 text-gray-300 d-none">
                Shop details
              </p>
              <p className="margin-b-30 text-gray-300 d-none">
                Bank details
              </p>
              <p className="margin-b-30 text-gray-300 d-none">
                How many purchase devices do you need?
              </p>
              <form>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Surname</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Surname" />
                  <div className="f-size-12 pt-1 text-error d-none">Surname is required</div>
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Name</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Name" />
                  <div className="f-size-12 pt-1 text-error d-none">Name is required</div>
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Cell Phone</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Cell Phone" />
                  <div className="f-size-12 pt-1 text-error d-none">Cell Phone is required</div>
                </div>
                <div className="form-group margin-b-30">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Id</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Id" />
                  <div className="f-size-12 pt-1 text-error d-none">Id is required</div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Next <i className="arrow-right mx-2"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp