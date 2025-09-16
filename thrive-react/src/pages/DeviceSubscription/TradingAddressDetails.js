import React from 'react';

const TradingAddressDetails = () => {
  // Placeholder data
  const addressDetails = { address: '123 Main St', city: 'Johannesburg', postalCode: '2000' };

  return (
    <div className="trading-address-details-main">
      <h4 className="text-primary fw-medium mb-3">Trading Address Details</h4>
      <div className="mb-2">Address: {addressDetails.address}</div>
      <div className="mb-2">City: {addressDetails.city}</div>
      <div className="mb-2">Postal Code: {addressDetails.postalCode}</div>
      <button className="btn btn-primary w-100 rounded f-size-12 fw-medium mt-3">NExt</button>
    </div>
  );
};

export default TradingAddressDetails;