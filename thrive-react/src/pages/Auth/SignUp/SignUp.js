import React, { useState } from 'react'
import { images } from '../../../config/images';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='signup-main'>
      <div className="content min-vh-100 mw-sm-940 m-auto">
        <div className="logo px-sm-0 p-3">
          <a href="#">
            <img src={images.Logo} alt="logo" />
          </a>
        </div>
        <div className="bg-white border-radius-14 padding-40 w-100 rounder-sm-0 h-sm-100 d-flex signup-form-block ">
          <form className="w-100">
            <div className="w-100 personal-details">
              <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">Sign Up for Free</h4>
              <p className="mb-2 mb-sm-3 text-gray-300">Personal details</p>
              <div className="signup-details-box p-3 border-radius-6 margin-b-20"><div className="form-row d-flex flex-sm-row flex-column">
                <div className="form-group margin-b-10 margin-r-10 w-100 mw-sm-150"><label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Title</label>
                  <select name="Title" className="form-select form-control w-100 f-size-12 fw-medium text-primary valid">
                    <option value="" selected="" disabled="" hidden="">Select Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option></select>
                </div>
                <div className="form-group margin-b-10 margin-r-10 w-100">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Name</label>
                  <input placeholder="Name" name="Name" className="form-control f-size-12 fw-medium valid" />
                </div>
                <div className="form-group margin-b-10 w-100">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Surname</label>
                  <input placeholder="Surname" name="Surname" className="form-control f-size-12 fw-medium valid" />
                </div></div>
                <div className="form-row d-flex flex-sm-row flex-column">
                  <div className="form-group margin-b-10 margin-r-10 w-100">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Cell Phone</label>
                    <input placeholder="Cell Phone" name="MobileNumber" className="form-control f-size-12 fw-medium valid" />
                  </div>
                  <div className="form-group margin-b-10 w-100"><label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Date of Birth</label>
                    <input placeholder="Date of Birth" type="date" min="1900-01-01" max="2099-12-31" className="form-control f-size-12 fw-medium date-control text-uppercase valid" />
                  </div></div>
                <div className="form-row d-flex flex-sm-row flex-column">
                  <div className="form-group margin-b-10 w-100 margin-r-10">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Email</label>
                    <input placeholder="Email" name="EmailAddress" className="form-control f-size-12 fw-medium valid" />
                  </div>
                  <div className="form-group margin-b-10 w-100">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Confirm Email</label>
                    <input placeholder="Confirm Email" name="ConfirmEmailAddress" className="form-control f-size-12 fw-medium valid" />
                  </div></div>
                <div className="form-row d-flex flex-sm-row flex-column">
                  <div className="form-group margin-b-10 w-100">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Referral Code(Optional)</label>
                    <input placeholder="Referral Code" name="ReferralCode" className="form-control f-size-12 fw-medium valid" />
                  </div>
                </div>
                <div className="form-row d-flex flex-sm-row flex-column"><div className="form-group  mb-2 mb-sm-0 w-100 margin-r-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Password</label>
                  <div className="input-pwd-group position-relative">
                    <input type="password" placeholder="Password" name="Password" className="form-control f-size-12 fw-medium valid" />
                    <a className="eye-icon">
                      <img src={images.IcoEye} alt="eye-img" />
                      {/* <img src="../assets/ico-eye-hide.svg" alt="eye-img"/> */}
                    </a>
                  </div>
                </div>
                  <div className="form-group w-100"><label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Confirm Password</label>
                    <div className="input-pwd-group position-relative">
                      <input type="password" placeholder="Confirm Password" name="ConfirmPassword" className="form-control f-size-12 fw-medium valid" />
                      <a className="eye-icon">
                      <img src={images.IcoEye} alt="eye-img" />
                        {/* <img src="../assets/ico-eye-hide.svg" alt="eye-img"/> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next-btn-action mw-sm-150">
                <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Next <i className="arrow-right mx-2"></i></button>
              </div>
            </div>
            <div className="w-100 tc-details d-none">
                <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">Verify OTP</h4>
                  <div className="mb-2 mb-sm-3 text-gray-300">An OTP has been send to your phone number ending with XXX XXX 2588</div>
                  <div className="signup-details-box p-3 border-radius-6 margin-b-20">
                    <div className="otp-input-row">
                          <input maxlength="1" inputmode="numeric" name="Model.Otp1" className="form-control f-size-12 fw-medium text-center otp-input valid"/>
                          <input maxlength="1" inputmode="numeric" name="Model.Otp2" className="form-control f-size-12 fw-medium text-center otp-input valid"/>
                          <input maxlength="1" inputmode="numeric" name="Model.Otp3" className="form-control f-size-12 fw-medium text-center otp-input valid"/>
                          <input maxlength="1" inputmode="numeric" name="Model.Otp4" className="form-control f-size-12 fw-medium text-center otp-input valid"/>
                          <input maxlength="1" inputmode="numeric" name="Model.Otp5" className="form-control f-size-12 fw-medium text-center otp-input valid"/>
                          <input maxlength="1" inputmode="numeric" name="Model.Otp6" className="form-control f-size-12 fw-medium text-center otp-input valid"/>
                      </div>
                      <div className="f-size-14 fw-medium text-gray-400 margin-t-10">Did not receive the code?
                          <a href="#" title="Resend OTP" className="text-primary">Resend</a>
                      </div>
                  </div>
                  <div className="next-btn-action mw-sm-150">
                    <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Sign Up now <i className="arrow-right mx-2"></i></button>
                  </div>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-between w-100 py-4 px-sm-0 flex-sm-row flex-column text-center">
          <div className="login-link mb-3 mb-sm-0 mx-3 mx-lg-0">
            <div className="f-size-14 text-gray-400">Already have an account? <Link to="/login" className="text-primary text-decoration">Login</Link></div>
          </div>
          <div className="text-center f-size-14 fw-medium text-gray-400 mx-3 mx-lg-0">
            Need help? Contact support <br />
            <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or
            <a href="tel:+010 824 2979" title="Contact support" className="text-primary">010 824 2979</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;