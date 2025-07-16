import React, { useState } from 'react';

const DeviceSubscriptionSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="device-subscription-block">
      <div className="d-flex align-items-center margin-b-20 page-heading">
        <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 d-flex align-items-center justify-content-center">
          <i className="icon ico-pos"></i>
        </div>
        <h6 className="mb-0 text-primary fw-medium text-capitalize">Card Machine Application</h6>
      </div>
      <div className="bg-white border-radius-14 padding-30 w-100 rounder-sm-0 h-sm-100 device-subscription-step-block">
        {currentStep === 1 && <div>Step 1: Pricing Structure <button onClick={() => setCurrentStep(2)}>Next</button></div>}
        {currentStep === 2 && <div>Step 2: Trading Address <button onClick={() => setCurrentStep(1)}>Back</button> <button onClick={() => setCurrentStep(3)}>Next</button></div>}
        {currentStep === 3 && <div>Step 3: Terms & Conditions <button onClick={() => setCurrentStep(2)}>Back</button></div>}
      </div>
    </div>
  );
};

export default DeviceSubscriptionSteps;
