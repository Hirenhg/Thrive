import React from 'react'
import { images } from '../../../config/images'
const ATMDespositesLoc = () => {
    return (
        <div className='atm-desposites-loc-main'>
            <div className="loc-permissions-box padding-20 border-radius-14">
                <div className="permission-logo text-center">
                    <img src={images.SafariLogo} alt="safari-logo" className="w-100 h-100"  />
                </div>
                <p className="f-size-14 margin-b-20 text-center f-size-14 text-white fw-semibold">"google.com" would like to use <br /> your current location.</p>
                <div className="loc-permissions-btns margin-b-20">
                    <a href="javascript:void(0)" className="btn btn-primary rounded f-size-12 fw-medium w-100 btn-allow mb-2">Allow</a>
                    <a href="javascript:void(0)" className="btn btn-primary rounded f-size-12 fw-medium w-100 btn-dont-allow">Don't Allow</a>
                </div>
                <div className="custom-checkbox d-flex align-items-center">
                    <input type="checkbox" id="checkbox-remember" className="checkbox d-none" />
                    <label className=" d-flex align-items-center position-relative" for="checkbox-remember"><span className="f-size-12 text-white mx-2">Remember my decision for one day</span></label>
                </div>
            </div>
        </div>
    )
}

export default ATMDespositesLoc