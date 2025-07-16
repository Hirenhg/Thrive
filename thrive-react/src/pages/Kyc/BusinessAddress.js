import React, { useState } from 'react';

const BusinessAddress = () => {
  const [address, setAddress] = useState({
    street: '45 Alan street',
    suburb: 'Suburb',
    city: 'Johannesburg',
    province: 'Gauteng',
    postalCode: '2000',
  });

  return (
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
        <button className="btn btn-primary w-100 rounded f-size-12 fw-medium mt-3" type="button">Continue</button>
      </form>
    </div>
  );
};

export default BusinessAddress;
