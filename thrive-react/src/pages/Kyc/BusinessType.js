import React, { useState } from "react";

const BusinessTypeForm = ({ NextStep }) => {
  const [selected, setSelected] = useState("");

  const businessTypes = [
    "Sole Proprietor",
    "Private Company (PTY)Ltd",
    "Close Corporation (CC)",
  ];

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0 m-center-box center-box">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 kyc-box">
        <div className="text-center">
          <h5 className="margin-b-30 text-primary fw-semibold">Type of Business</h5>
          <form>
            {businessTypes.map((type, index) => (
              <div key={index} className="d-flex align-items-center margin-b-20">
                <div className="custom-radio d-flex align-items-center">
                  <input
                    id={`type-${index}`}
                    className="radio d-none"
                    type="radio"
                    name="BusinessDetailViewModel.BusinessType"
                    value={type}
                    checked={selected === type}
                    onChange={() => setSelected(type)}
                  />
                  <label
                    className="d-flex align-items-center position-relative"
                    htmlFor={`type-${index}`}
                  >
                    <span className="f-size-12 text-gray-300 margin-l-10">{type}</span>
                  </label>
                </div>
              </div>
            ))}
            <div className="form-group margin-b-30">
              <button onClick={NextStep} type="submit" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                Next <i className="arrow-right mx-2"></i>
              </button>
            </div>
          </form>
          <div className="form-group text-center f-size-14 fw-medium text-gray-400">
            Need help? Contact support <br />
            <a href="mailto:support@thrive.trade" className="text-primary">
              support@thrive.trade 
            </a>
            <span className="mx-1">or</span>
            <a href="tel:+0108242979" className="text-primary">
               010 824 2979
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTypeForm;
