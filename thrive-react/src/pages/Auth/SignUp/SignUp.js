import React, { useState } from 'react'
import { images } from '../../../config/images';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  return (
    <div className='signup-main'>
      <div className="position-fixed top-0 bottom-0 login-skeleton bg-primary min-vh-100">
        <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
          <div className="bg-white border-radius-14 padding-40 w-100 mw-sm-360 rounder-sm-0 h-sm-100 d-flex flex-column align-items-center signup-form-block">
            <div className="w-100 personal-details">
              <div className="margin-b-30 logo">
                <img src={images.Logo} alt="logo" />
              </div>
              <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">
                Sign Up
                <span className="fw-normal">1/3</span>
              </h4>
              <p className="margin-b-30 text-gray-300">
                Personal details
              </p>
              <form>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Title</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Title" />
                  <div className="f-size-12 pt-1 text-error d-none">Title is required</div>
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Name</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Name" />
                  <div className="f-size-12 pt-1 text-error d-none">Name is required</div>
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Surname</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Surname" />
                  <div className="f-size-12 pt-1 text-error d-none">Surname is required</div>
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Cell Phone</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Cell Phone" />
                  <div className="f-size-12 pt-1 text-error d-none">Cell Phone is required</div>
                </div>
                <div className="form-group margin-b-30">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Date of Birth</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Date of Birth" />
                  <div className="f-size-12 pt-1 text-error d-none">Date of Birth is required</div>
                </div>
                <div className="form-group margin-b-30">
                  <Link to="/login">
                    <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Next <i className="arrow-right mx-2"></i></button>
                  </Link>
                </div>
              </form>
            </div>
            <div className="w-100 business-details d-none">
              <div className="margin-b-30 logo">
                <img src={images.Logo} alt="logo" />
              </div>
              <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">
                Sign Up
                <span className="fw-normal">2/2</span>
              </h4>
              <p className="margin-b-30 text-gray-300">
                Business details
              </p>
              <form>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Business Name</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Business Name" />
                  <div className="f-size-12 pt-1 text-error d-none">Business Name is required</div>
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Select nature</label>
                  <select className="form-select form-control w-100 f-size-12 fw-medium text-gray-400">
                    <option>Select nature</option>
                    <option>Select business</option>
                  </select>
                  <div className="f-size-12 pt-1 text-error d-none">Select is required</div>
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Street name</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Street name" />
                  <div className="f-size-12 pt-1 text-error d-none">Street name is required</div>
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Suburb</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Suburb" />
                  <div className="f-size-12 pt-1 text-error d-none">Suburb is required</div>
                </div>
                <div className="form-group margin-b-30">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">City</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="City" />
                  <div className="f-size-12 pt-1 text-error d-none">City is required</div>
                </div>
                <div className="form-group margin-b-30">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Province</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Province" />
                  <div className="f-size-12 pt-1 text-error d-none">Province is required</div>
                </div>
                <div className="form-group margin-b-30">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Postal code</label>
                  <input type="text" className="form-control f-size-12 fw-medium" placeholder="Postal code" />
                  <div className="f-size-12 pt-1 text-error d-none">Postal code is required</div>
                </div>
                <div className="form-group d-flex justify-content-beetween ">
                  <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10">Back</button>
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