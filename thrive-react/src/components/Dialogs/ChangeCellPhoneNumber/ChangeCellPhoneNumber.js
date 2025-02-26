import React from 'react'

const ChangeCellPhoneNumber = () => {
    return (
        <div className='change-cell-phone-number-main'>
            <div className="d-flex align-items-center justify-content-center h-100">
                <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 change-cellphone-number-box text-center">
                    <h5 className="margin-b-20 text-primary fw-medium">Change cellphone number</h5>
                    <p className="margin-b-20 text-primary f-size-12">
                        Please enter you new cellphone number
                    </p>
                    <div className="form-group margin-b-20">
                        <input type="text" className="form-control f-size-12 fw-medium text-center" Value="062 328 4341" placeholder="062 328 4341" />
                    </div>
                    <div className="form-group margin-b-20">
                        <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10">Next</button>
                        <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Cancel</button>
                    </div>
                    <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                        Need help? Contact support <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or <a href="tel:+011 6363 640" title="Contact support" className="text-primary d-block">011 6363 640</a>
                    </div>
                </div>
                <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 change-cellphone-number-box text-center d-none">
                    <h5 className="margin-b-20 text-primary fw-medium">Change cellphone number</h5>
                    <p className="margin-b-20 text-primary f-size-12">
                        An OTP has been send to your phone number <br /> ending with *** *** 4354.
                    </p>
                    <div className="form-group margin-b-20">
                        <input type="text" className="form-control f-size-12 fw-medium text-center" Value="468222" placeholder="468222" />
                    </div>
                    <div className="form-group margin-b-20 text-center">
                        <label className="text-gray-400 f-size-14">
                            Did not receive the code?
                            <a href="javascript:void(0)" title="Resend" className="text-primary">
                                Resend
                            </a>
                        </label>
                        <a href="javascript:void(0)" title="Request new code" className="text-primary f-size-14 d-none">
                            Request new code
                        </a>
                    </div>
                    <div className="margin-b-20 text-primary f-size-12">00:30</div>
                    <div className="form-group margin-b-20">
                        <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">Cancel</button>
                    </div>
                    <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                        Need help? Contact support <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or <a href="tel:+011 6363 640" title="Contact support" className="text-primary d-block">011 6363 640</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeCellPhoneNumber