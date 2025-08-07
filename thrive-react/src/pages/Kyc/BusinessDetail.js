import React, { useState } from 'react';

const BusinessDetail = ({ NextStep, PreviousStep}) => {
  const [details, setDetails] = useState({
    businessName: 'Sample Business',
    registrationNumber: '123456789',
    taxNumber: '987654321',
  });

  return (
           <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
    <div className="business-detail-main">
      <h4 className="text-primary fw-medium mb-3">Business Details</h4>
      <form>
        <div className="form-group mb-2">
          <label>Business Name</label>
          <input type="text" className="form-control" value={details.businessName} readOnly />
        </div>
        <div className="form-group mb-2">
          <label>Registration Number</label>
          <input type="text" className="form-control" value={details.registrationNumber} readOnly />
        </div>
        <div className="form-group mb-2">
          <label>Tax Number</label>
          <input type="text" className="form-control" value={details.taxNumber} readOnly />
        </div>
          <div className="form-group d-flex align-items-center justify-content-between">
            <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" type="button" onClick={NextStep}>Continue</button>
          </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
