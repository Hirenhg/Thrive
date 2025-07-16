import React from 'react';

const PricingStructureDetails = () => {
  // Placeholder data
  const feeData = { numberOfDevices: 1, fee: 100 };

  return (
    <div className="w-100 pricing-structure-details">
      <div className="d-flex justify-content-between margin-b-20">
        <div className="title-left-col">
          <h5 className="fw-semibold mb-1">Pricing Structure</h5>
          <p className="text-gray-300 mb-0">Do you agree to pay the following fees?</p>
        </div>
        <div className="fs-4 text-primary">1/3</div>
      </div>
      <div className="d-grid justify-content-between margin-b-20 pricing-structure-row">
        <div className="bg-gray-200 border-radius-14 padding-30 d-flex justify-content-center align-items-center pricing-structure-img-block">
          <img alt="cashless-pos" src="./assets/pos-1.png" />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="border border-ea border-radius-14 padding-20 margin-b-20">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-primary">Number of Devices</span>
              <span>{feeData.numberOfDevices}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-primary">Fee</span>
              <span>{feeData.fee}</span>
            </div>
          </div>
          <button className="btn btn-primary w-100 rounded f-size-12 fw-medium">Agree & Continue</button>
        </div>
      </div>
    </div>
  );
};

export default PricingStructureDetails;