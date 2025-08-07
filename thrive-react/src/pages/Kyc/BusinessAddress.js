import React, { useState } from 'react';

const BusinessAddress = ({ NextStep, PreviousStep }) => {
  const [address, setAddress] = useState({
    street: '45 Alan street',
    suburb: 'Suburb',
    city: 'Johannesburg',
    province: 'Gauteng',
    postalCode: '2000',
  });

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
        <div className="business-address-main">
          <h4 className="text-primary fw-medium mb-3">Business Address</h4>
          <form>
            <div className="form-group mb-2">
              <label>Street Name</label>
              <input type="text" className="form-control" value={address.street} readOnly />
            </div>
            <div className="form-group mb-2">
              <label>Suburb</label>
              <input type="text" className="form-control" value={address.suburb} readOnly />
            </div>
            <div className="form-group mb-2">
              <label>City</label>
              <input type="text" className="form-control" value={address.city} readOnly />
            </div>
            <div className="form-group mb-2">
              <label>Province</label>
              <input type="text" className="form-control" value={address.province} readOnly />
            </div>
            <div className="form-group mb-2">
              <label>Postal Code</label>
              <input type="text" className="form-control" value={address.postalCode} readOnly />
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

export default BusinessAddress;
