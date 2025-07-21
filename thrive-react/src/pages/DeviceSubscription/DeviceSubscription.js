import React, { useState } from 'react';
// Import subcomponents as needed
import DisplayDeviceList from './DisplayDeviceList';
import PricingStructureDetails from './PricingStructureDetails';
import TradingAddressDetails from './TradingAddressDetails';
import TCDetails from './TCDetails';

const DeviceSubscription = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // Placeholder data for subcomponents
  const selectedFeeData = {};
  const tradingAddressDetails = {};
  const AccountHolderId = '';

  const NextStep = () => setCurrentStep((s) => s + 1);
  const PreviousStep = () => setCurrentStep((s) => s - 1);

  return (
    <div className="device-subscription-block">
      <div className="d-flex align-items-center margin-b-20 page-heading">
        <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 d-flex align-items-center justify-content-center">
          <i className="icon ico-pos"></i>
        </div>
        <h6 className="mb-0 text-primary fw-medium text-capitalize">Card Machine Application</h6>
      </div>
      {currentStep === 1 && (
        <>
          <DisplayDeviceList OnClickNextStep={NextStep} />
        </>
      )}
      {(currentStep === 2 || currentStep === 3 || currentStep === 4) && (
        <div className="bg-white border-radius-14 padding-30 w-100 rounder-sm-0 h-sm-100 device-subscription-step-block">
          {currentStep === 2 && (
              <>
                <PricingStructureDetails OnClickNextStep={NextStep} FeeData={selectedFeeData} />
              </>
          )}
          {currentStep === 3 && (
            <>
              <TradingAddressDetails OnClickNextStep={NextStep} OnClickPreviousStep={PreviousStep} TradingAddressDetailsData={tradingAddressDetails} />
            </>
          )}
          {currentStep === 4 && (
            <>
              <TCDetails OnClickPreviousStep={PreviousStep} AccountHolderId={AccountHolderId} FeeData={selectedFeeData} TradingAddressDetails={tradingAddressDetails} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DeviceSubscription;
