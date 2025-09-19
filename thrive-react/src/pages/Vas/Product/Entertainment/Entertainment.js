import React, { useState } from "react";
import NetworkProvider from "../../NetworkProvider";

const Entertainment = () => {
  const [step, setStep] = useState(1);
  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [cellphone, setCellphone] = useState('');

  const voucherOptions = [
    { value: 32, label: 'R 20' },
    { value: 33, label: 'R 10' },
    { value: 37, label: 'R 200' },
    { value: 38, label: 'R 500' },
    { value: 39, label: 'R 1000' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do validation if needed
    console.log('Selected Amount ID:', selectedAmount);
    console.log('Cellphone:', cellphone);
  };
  return (
    <>
      {step === 1 && (
        <div className="entertainment-main">
          <h6 className="margin-b-20 text-primary f-size-20 fw-medium">
            Entertainment
          </h6>
          <div className="divider margin-b-20"></div>
          <div>
            <NetworkProvider />
          </div>
          <div className="btns text-end">
            <button
              className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center margin-b-20">
            <div className="iconbox margin-r-10" onClick={handleBack}>
              <i className="icon ico-back"></i>
            </div>
            <h6 className="text-primary f-size-20 fw-medium text-capitalize mb-0">
              Back
            </h6>
          </div>
          <div className="divider margin-b-20 mx-2"></div>
            <div className="enternainment-contant">
              <div className="network-block">
                <div className="network-grid margin-b-20 full-grid">
                  <span className="network-card mtn border-radius-6 text-center">
                    <a className="network-logo">
                      <img
                        alt="Lotto Star"
                        src="https://stthriveglobal.blob.core.windows.net/vasimages/banner/Lottostar.svg"
                        Style={"object-fit: contain"}
                      />
                    </a>
                  </span>
                </div>
                <div className="data-plans-block mh-100 overflow-hidden bg-gray-100 rounded-3 p-3 margin-b-20">
                  <div className="text-primary fw-medium f-size-14 mb-3">
                    Select the voucher amount
                  </div>
                  <div className="divider margin-b-20 border-ea"></div>
                  <div className="d-grid data-card-grid data-select" role="radiogroup" aria-label="Select Data">
                    {voucherOptions.map((option) => (
                      <label className="data-radio" tabIndex={0} key={option.value}>
                        <input
                          type="radio"
                          name="ProductId"
                          value={option.value}
                          checked={selectedAmount === option.value}
                          onChange={() => setSelectedAmount(option.value)}
                        />
                        <span className="card-data border-ea padding-20 border-radius-14 text-center">
                          <div className="f-size-20 text-primary data-amount">{option.label}</div>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="divider margin-b-20"></div>
                <form className="form-contant" onSubmit={handleSubmit}>
                  <div className="margin-b-20 bg-gray-100 padding-10 rounded-3">
                    <div className="mb-3 text-primary f-size-14">
                      Enter cellphone number
                    </div>
                    <div className="form-group">
                      <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                        Cellphone number
                      </label>
                      <input
                        className="form-control f-size-12 fw-medium"
                        placeholder="Cellphone number"
                        name="MobileNumber"
                        value={cellphone}
                        onChange={(e) => setCellphone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group d-flex align-items-center justify-content-between">
                    <a
                      className="btn btn-outline border border-gray-200 w-100 mw-sm-150 rounded f-size-12 fw-medium text-center margin-r-10"
                      href="/vas"
                    >
                      Cancel
                    </a>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Entertainment;
