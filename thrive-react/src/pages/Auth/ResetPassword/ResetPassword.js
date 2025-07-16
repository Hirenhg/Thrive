import React from 'react'
import { images } from '../../../config/images';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className='reset-password-main'>
        <div className="content min-vh-100 mw-sm-940 m-auto">
          <div className="logo px-sm-0 p-3">
              <a href="#">
                  <img src={images.Logo} alt="logo" />
              </a>
          </div>
          <div className="bg-white border-radius-14 padding-40 w-100 rounder-sm-0 h-sm-100 d-flex signup-form-block password-reset-form-block verification-code-form-block">
            <div className="w-100" FormName="ResetPasswordForm">
              <h4 className="margin-b-10 text-primary fw-semibold">Password Reset</h4>
              <form>
                <div className='reset-pwd-step1'>
                  <p className="margin-b-30 text-gray-300">
                    Please confirm your details
                  </p>
                  <div className='password-reset-details-box p-3 border-radius-6 margin-b-20'>
                    <div className="form-group margin-b-10 margin-r-10 w-100 mw-sm-380">
                      <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Username</label>
                      <input id="txtCellPhone" className="form-control f-size-12 fw-medium" placeholder="Phone number"></input>
                    </div>
                    <div className="form-group margin-b-10 margin-r-10 w-100 mw-sm-380">
                      <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Date of birth</label>
                      <input type='date' className="form-control f-size-12 fw-medium" placeholder="DD/MM/YYYY" id="datepicker"></input>
                    </div>
                  </div>
                  <div className="next-btn-action mw-sm-150">
                    <Link to="/login">
                      <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Next<i className="arrow-right mx-2"></i></button>
                    </Link>
                  </div>
                </div>
                <div className='reset-pwd-step2 d-none'>
                  <p className="margin-b-30 text-gray-300">
                    We hve the following number on record for you. We can send a code via SMS or phone to authenticate you.
                  </p>
                  <p className='margin-b-30 text-primary fw-medium f-size-16 line-height-20'>***-***6814</p>
                  <div className="form-group margin-b-10">
                    <button className="btn btn-primary w-100 rounded f-size-12 fw-medium">Send Code</button>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="ico-call-white mx-2"></i> Call Me</button>
                  </div>
                </div>
                <div className='reset-pwd-step3 d-none'>
                  <p className="margin-b-30 text-gray-300">
                    We hve the following number on record for you. We can send a code via SMS or phone to authenticate you.
                  </p>
                  <p className='margin-b-30 text-primary fw-medium f-size-16 line-height-20'>***-***6814</p>
                  <div className="form-group margin-b-30">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Enter verification code</label>
                    <input type='number' className="form-control f-size-12 fw-medium" placeholder="Verification code"></input>
                  </div>
                  <div className="form-group margin-b-30">
                    <label className="text-gray-400 f-size-14 fw-medium">
                      Did not receive the code?
                      <button type="button" href="reset-password" className="f-size-14 fw-medium text-primary text-decoration-underline disabled btn-resend" disabled="">
                        Resend
                      </button>
                    </label>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary w-100 rounded f-size-12 fw-medium">Verify code</button>
                  </div>
                </div>
                <div className='reset-pwd-step4 d-none'>
                  <p className="margin-b-30 text-gray-300">
                    Please provide the following details
                  </p>
                  <div className="form-group margin-b-10">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Verified cellphone number</label>
                    <input type='number' className="form-control f-size-12 fw-medium" placeholder="***-***6814"></input>
                  </div>
                  <div className="form-group margin-b-10">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">New Password</label>
                    <input type="password" className="form-control f-size-12 fw-medium" placeholder="New Password" />
                    <div className="f-size-12 pt-1 text-error d-none">New Password is required</div>
                  </div>
                  <div className="form-group margin-b-30">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Confirm new password</label>
                    <input type="password" className="form-control f-size-12 fw-medium" placeholder="Confirm new password" />
                    <div className="f-size-12 pt-1 text-error d-none">Confirm new password is required</div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Next <i className="arrow-right mx-2"></i></button>
                  </div>
                </div>
              </form>
            </div>
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
  )
}

export default ResetPassword