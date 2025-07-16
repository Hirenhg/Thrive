import React, { useState } from 'react';

const TCDetails = () => {
  const [agree, setAgree] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheckbox = () => setAgree(!agree);

  return (
    <div className="w-100 tc-details">
      <div className="d-flex justify-content-between margin-b-30">
        <div className="title-left-col">
          <h4 className="fw-semibold margin-b-10 text-primary">Terms & conditions</h4>
          <p className="text-gray-300 mb-0">Please read and agree to the terms and conditions</p>
        </div>
        <div className="fs-4 text-primary">3/3</div>
      </div>
      <div className="padding-20 border-radius-6 margin-b-20 bg-gray-500">
        <div className="custom-checkbox d-flex align-items-center">
          <input type="checkbox" id="AgreeTermsAndConditions" className="checkbox d-none" checked={agree} onChange={handleCheckbox} />
          <label className="d-flex align-items-center position-relative" htmlFor="AgreeTermsAndConditions">
            <span className="f-size-12 text-gray-300 margin-l-10">
              I agree to the <a href="#" target="_blank" className="text-blue text-decoration-underline">Standard Bank Acquisition Terms & Conditions</a>
            </span>
          </label>
        </div>
        {errorMsg && <div className="f-size-12 pt-2 text-error">{errorMsg}</div>}
      </div>
    </div>
  );
};

export default TCDetails;