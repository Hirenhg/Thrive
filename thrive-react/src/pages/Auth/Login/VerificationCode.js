import React from 'react'

const VerificationCode = () => {
  return (
    <div className='verification_code_main'>
      <div>
        <div className="content min-vh-100 d-flex align-items-end align-items-sm-center justify-content-center">
          <div className="bg-white border-radius-14 padding-40 w-100 mw-sm-360 rounder-sm-0 h-sm-100 d-flex flex-column align-items-center verification-code-form-block">
            <div>
              <h5 className="margin-b-20 text-primary text-center fw-medium">
                Enter verification code
              </h5>
              <p className="margin-b-20 text-primary f-size-12 text-center">
                An OTP has been send to your phone number ending with *** *** 4329.
              </p>
              <p className="margin-b-20 text-primary text-center d-none">00:0</p>
              <div className="form-group margin-b-20 d-grid code-grid-row">
                <div className="input-col">
                  <input maxlength="1" id="txtFirstDigit" autocomplete="off" className="form-control f-size-12 fw-medium valid" />
                </div>
              </div>
              <div className="form-group margin-b-20 text-center d-none">
                <label className="text-gray-400 f-size-14 fw-medium">
                  Did not receive the code?
                  <button type="button" href="reset-password" className="f-size-14 fw-medium text-primary text-decoration-underline disabled btn-resend" disabled="">
                    Resend
                  </button>
                </label>
              </div>
              <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                Need help? Contact support <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or <a href="tel:+011 6363 640" title="Contact support" className="text-primary">011 6363 640</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerificationCode