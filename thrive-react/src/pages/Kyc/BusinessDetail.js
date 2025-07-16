import React, { useState } from 'react';

const BusinessDetail = () => {
  const [details, setDetails] = useState({
    businessName: 'Sample Business',
    registrationNumber: '123456789',
    taxNumber: '987654321',
  });

  return (
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
        <button className="btn btn-primary w-100 rounded f-size-12 fw-medium mt-3" type="button">Continue</button>
      </form>
    </div>
  );
};

export default BusinessDetail;
