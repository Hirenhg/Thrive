import React, { useState } from 'react';
import { images } from '../../config/images';

const BusinessDetail = ({ NextStep, PreviousStep }) => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    registrationName: "",
    tradingName: "",
    taxNumber: "",
    vatNumber: "",
    natureOfBusiness: "",
    sourceOfFunds: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const natureOptions = [
    "Spaza (Tuckshop)",
    "Tavern",
    "General Wholesale (Cash and Carry)",
    "Restaurant",
    "Distributor",
    "Nightclubs",
    "Restaurant with on-prem beverage",
  ];

  const sourceOptions = [
    "Profit from business activities",
    "Alternative Lenders",
    "Angel Investors",
    "Bank Loans",
    "Bootstrapping",
    "Corporate Partnerships",
    "Crowdfunding",
    "Family and Friends",
    "Grants",
    "Incubators and Accelerators",
    "Personal Savings",
    "Private Placements",
    "Shareholder Loans",
    "Small Business Administration (SBA) Loans",
    "Strategic Investors",
    "Venture Capital",
  ];

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
        <div className="business-detail-main w-100 company-details">
          <div className="margin-b-30 logo">
            <img alt="logo" src={images.Logo} />
          </div>
          <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">Business Setup <span className="fw-normal">1/3</span></h4>
          <p className="margin-b-30 text-gray-300">Company details</p>
          <form onSubmit={handleSubmit}>
            <div className="kyc-form">
              <div className="form-group margin-b-10">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                  Registration Number
                </label>
                <input
                  type="text"
                  maxLength="14"
                  placeholder="Registration number"
                  name="registrationNumber"
                  className="form-control f-size-12 fw-medium"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group margin-b-10">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                  Registration Name
                </label>
                <input
                  type="text"
                  placeholder="Registration name"
                  name="registrationName"
                  className="form-control f-size-12 fw-medium"
                  value={formData.registrationName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group margin-b-10">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                  Trading Name
                </label>
                <input
                  type="text"
                  placeholder="Trading name"
                  name="tradingName"
                  className="form-control f-size-12 fw-medium"
                  value={formData.tradingName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-row d-sm-flex justify-content-sm-between">
                <div className="form-group margin-b-10 w-100 me-sm-1">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                    Tax Number
                  </label>
                  <input
                    type="text"
                    placeholder="Tax number"
                    name="taxNumber"
                    className="form-control f-size-12 fw-medium"
                    value={formData.taxNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group margin-b-10 w-100 ms-sm-1">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                    VAT Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="VAT number"
                    name="vatNumber"
                    className="form-control f-size-12 fw-medium"
                    value={formData.vatNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group-row d-sm-flex justify-content-sm-between margin-b-20">
                <div className="form-group margin-b-10 w-100 me-sm-1">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                    Nature of Business
                  </label>
                  <select
                    name="natureOfBusiness"
                    className="form-select form-control w-100 f-size-12 fw-medium"
                    value={formData.natureOfBusiness}
                    onChange={handleChange}
                  >
                    <option value="">Select nature of business</option>
                    {natureOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group margin-b-10 w-100 ms-sm-1">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                    Source of Funds
                  </label>
                  <select
                    name="sourceOfFunds"
                    className="form-select form-control w-100 f-size-12 fw-medium"
                    value={formData.sourceOfFunds}
                    onChange={handleChange}
                  >
                    <option value="">Select source of fund</option>
                    {sourceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group d-flex align-items-center justify-content-between">
                <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
                <button onClick={NextStep} type="submit" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                  Next <i className="arrow-right mx-2"></i>
                </button>                  </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
