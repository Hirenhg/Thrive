import React, { useState } from "react";
import NetworkProvider from '../../NetworkProvider';
import { Link } from "react-router-dom";
import { images } from "../../../../config/images";

const Data = () => {
  const [step, setStep] = useState(1);
  const [topupMethod, setTopupMethod] = useState('VOUCHER');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [activeTab, setActiveTab] = useState('sms');
  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProductChange = (e) => {
    setSelectedProductId(e.target.value);
  };

  const handleNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedProductId, mobileNumber });
  };

  return (
    <>
      {step === 1 && (
        <div className="data-contant">
          <h6 className="margin-b-20 text-primary f-size-20 fw-medium">Data & SMS Bundles</h6>
          <div className="divider margin-b-20"></div>
          <div className='data-network-block'>
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
                    checked={topupMethod === "VOUCHER"}
                    onChange={() => setTopupMethod('VOUCHER')}
                    aria-checked={topupMethod === "VOUCHER"}
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
                    checked={topupMethod === "DIRECT"}
                    onChange={() => setTopupMethod('DIRECT')}
                    aria-checked={topupMethod === "DIRECT"}
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
              <button className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium" onClick={handleNext}>Next</button>
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
          <div className="data-contant">
            <div className="data-contant">
              <div className="network-block">
                <div className="network-grid margin-b-20 full-grid">
                  <span
                    className="network-card border-radius-6 text-center"
                    style={{ backgroundColor: '#FFCB05' }}
                  >
                    <a className="network-logo">
                      <img
                        alt="MTN"
                        src="https://stthriveglobal.blob.core.windows.net/vasimages/banner/MTN.svg"
                        style={{ objectFit: 'contain' }}
                      />
                    </a>
                  </span>
                </div>
              </div>

              <div className="network-plans">
                <div
                  className="nav nav-pills detail-tabs bg-gray-200 p-1 rounded margin-b-20 d-grid"
                  role="tablist"
                >
                  <button
                    className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center w-100 ${activeTab === 'sms' ? 'active' : ''}`}
                    type="button"
                    onClick={() => handleTabChange('sms')}
                  >
                    SMS Bundle
                  </button>
                  <button
                    className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center w-100 ${activeTab === 'data' ? 'active' : ''}`}
                    type="button"
                    onClick={() => handleTabChange('data')}
                  >
                    Data Bundle
                  </button>
                </div>

                <div className="tab-content">
                  {activeTab === 'sms' && (
                    <div className="tab-pane fade show active" id="tab-pane-0" role="tabpanel">
                      <div className="bg-gray-100 border-gray-200 rounded-3 p-3 data-plans-block margin-b-20">
                        <div className="d-grid data-card-grid data-select" role="radiogroup" aria-label="Select Data">
                          {[
                            { value: '863', label: '50 SMS R17.00', price: 'R17' },
                            { value: '864', label: '30 SMS R10.00', price: 'R10' },
                            { value: '865', label: '100 SMS R30.00', price: 'R30' },
                            { value: '889', label: '15 SMS R5.00', price: 'R5' },
                          ].map((item) => (
                            <label className="data-radio" key={item.value} tabIndex="0">
                              <input
                                type="radio"
                                name="MobileProductId"
                                value={item.value}
                                checked={selectedProductId === item.value}
                                onChange={handleProductChange}
                              />
                              <span className="card-data border-ea padding-20 border-radius-14 text-center">
                                <div className="fw-medium f-size-20 text-primary data-value text-uppercase">{item.label}</div>
                                <div className="f-size-20 text-primary data-amount">{item.price}</div>
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'data' && (
                    <div className="tab-pane fade show active">
                      {/* Your Data bundle content goes here */}
                      <p>Data Plans coming here...</p>
                    </div>
                  )}
                </div>
              </div>
              <form className="form-contant" onSubmit={handleSubmit}>
                <div className="margin-b-20 bg-gray-100 padding-10 rounded-3">
                  <div className="mb-3 text-primary f-size-14">Enter cellphone number</div>
                  <div className="form-group">
                    <input
                      className="form-control f-size-12 fw-medium"
                      placeholder="Cellphone number"
                      name="MobileNumber"
                      value={mobileNumber}
                      onChange={handleNumberChange}
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
                  <button type="submit" className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium">
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

export default Data;
