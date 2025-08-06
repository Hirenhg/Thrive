import React, { useState } from "react";
import NetworkProvider from '../../NetworkProvider';
import { Link } from "react-router-dom";
import { images } from "../../../../config/images";

const Airtime = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [topupMethod, setTopupMethod] = useState('VOUCHER');

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  return (
    <>
      {step === 1 && (
        <div className="airtime-contant">
          <h6 className="margin-b-20 text-primary f-size-20 fw-medium">Airtime</h6>
          <div className="divider margin-b-20"></div>
          <div className='airtime-network-block'>
            <NetworkProvider />
            <div className="bundle-network-block margin-b-30">
              <div className="margin-b-20 text-primary f-size-14">
                Select top up method
              </div>
              <div
                className="select-bundle-network-grid d-grid margin-b-20"
                role="radiogroup"
                aria-label="Select bundle"
              >
                <label className="bundle-network-radio" tabIndex="0">
                  <input
                    type="radio"
                    name="topupMethod"
                    value="VOUCHER"
                    checked={topupMethod === 'VOUCHER'}
                    onChange={() => setTopupMethod('VOUCHER')}
                  />
                  <span className="position-relative bg-white border-ea border-radius-14 padding-40 text-center select-bundle-network w-100">
                    <div className="mb-3">
                      <span className="icon ico-direct-topup"></span>
                    </div>
                    <div className="f-size-18 text-primary text-capitalize fw-medium">
                      Voucher
                    </div>
                  </span>
                </label>

                <label className="bundle-network-radio" tabIndex="0">
                  <input
                    type="radio"
                    name="topupMethod"
                    value="DIRECT"
                    checked={topupMethod === 'DIRECT'}
                    onChange={() => setTopupMethod('DIRECT')}
                  />
                  <span className="position-relative bg-white border-ea border-radius-14 padding-40 text-center select-bundle-network w-100">
                    <div className="mb-3">
                      <span className="icon ico-direct-topup"></span>
                    </div>
                    <div className="f-size-18 text-primary text-capitalize fw-medium">
                      Direct Top Up
                    </div>
                  </span>
                </label>
              </div>
            </div>

            <div className="btns text-end">
              <button className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center margin-b-20">
            <div className="iconbox margin-r-10" onClick={handleBack}>
              <i className="icon ico-back"></i>
            </div>
            <h6 className="text-primary f-size-20 fw-medium text-capitalize mb-0">Back</h6>
          </div>

          <div className="divider margin-b-20 mx-2"></div>

          <div className="airtime-contant">
            <div className="airtime-network-block">
              <div className="airtime-network-grid margin-b-20 full-grid">
                <span className="network-card mtn border-radius-6 text-center">
                  <a className="network-logo">
                    <img src={images.Logo} alt="Selected Network" style={{ objectFit: 'contain' }} />
                  </a>
                </span>
              </div>

              <div className="form-contant">
                <div className="margin-b-20 bg-gray-100 padding-10 rounded-3">
                  <div className="mb-3 text-primary f-size-14">Enter custom amount</div>
                  <div className="form-group">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Amount</label>
                    <input
                      type="number"
                      className="form-control f-size-12 fw-medium"
                      placeholder="R 0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div className="margin-b-20 bg-gray-100 padding-10 rounded-3">
                  <div className="mb-3 text-primary f-size-14">Enter cellphone number</div>
                  <div className="form-group">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                      Cellphone number
                    </label>
                    <input
                      type="tel"
                      className="form-control f-size-12 fw-medium"
                      placeholder="Cellphone number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group d-flex align-items-center justify-content-between">
                  <Link className="btn btn-outline border border-gray-200 w-100 mw-sm-150 rounded f-size-12 fw-medium text-center margin-r-10" to="/vas">
                    Cancel
                  </Link>
                  <button className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Airtime;
