import React, { useState } from 'react';

const DeviceSubscriptionBanner = () => {
  // Placeholder state for KYC and device application status
  const [kycLevel, setKycLevel] = useState('KYCYes');
  const [deviceApplicationStatus, setDeviceApplicationStatus] = useState('DeviceApplicationNotRequested');
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);

  // Helper constants for status
  const Constants = {
    KYCPending: 'KYCPending',
    KYCPendingApproval: 'KYCPendingApproval',
    KYCYes: 'KYCYes',
    KYCUnmatchedIdentification: 'KYCUnmatchedIdentification',
    KYCNo: 'KYCNo',
    DeviceApplicationNotRequested: 'DeviceApplicationNotRequested',
    DeviceApplicationDelivered: 'DeviceApplicationDelivered',
    DeviceApplicationApplied: 'DeviceApplicationApplied',
    DeviceApplicationNeedsAttention: 'DeviceApplicationNeedsAttention',
    DeviceApplicationTicketCreated: 'DeviceApplicationTicketCreated',
    DeviceApplicationAwaitingDelivery: 'DeviceApplicationAwaitingDelivery',
    DeviceApplicationUnsuccessful: 'DeviceApplicationUnsuccessful',
    DeviceApplicationCancelled: 'DeviceApplicationCancelled',
    DeviceApplicationNotEligible: 'DeviceApplicationNotEligible',
  };

  const showBanner = [
    Constants.KYCPending,
    Constants.KYCPendingApproval,
    Constants.KYCYes,
    Constants.KYCUnmatchedIdentification,
    Constants.KYCNo,
  ].includes(kycLevel) && deviceApplicationStatus !== null && deviceApplicationStatus !== Constants.DeviceApplicationDelivered;

  if (!showBanner) return null;

  // Banner rendering logic
  if (deviceApplicationStatus === Constants.DeviceApplicationNotRequested) {
    return (
      <div className="card border-radius-14 padding-30 margin-b-20 cashlesspro-card border-0 mx-3 mx-sm-0">
        <div className="d-flex justify-content-between">
          <div className="cashlesspro-left-col d-flex flex-column justify-content-between">
            <div className="cashlesspro-text">
              <h4 className="mb-2 text-white fw-semibold">Apply for a CashlessPro</h4>
              <div className="f-size-10 text-white fw-semibold mb-3">Apply for a fast and reliable card machine with low rates and quick setup — perfect for any business.</div>
            </div>
            {kycLevel === Constants.KYCNo ? (
              <a className="btn btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center mw-sm-130" href="#" style={{ pointerEvents: 'none', color: 'gray' }}>Apply now <i className="arrow-right mx-2"></i></a>
            ) : (
              <a className="btn btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center mw-sm-130" href="/device-subscription">Apply now <i className="arrow-right mx-2"></i></a>
            )}
          </div>
          <div className="cashlesspro-imagebox bg-gray-100 border-radius-6 d-flex align-items-center justify-content-center text-center">
            <img src="./assets/pos-1.png" alt="device" />
          </div>
        </div>
      </div>
    );
  }

  if ([Constants.DeviceApplicationApplied, Constants.DeviceApplicationNeedsAttention, Constants.DeviceApplicationTicketCreated].includes(deviceApplicationStatus) && kycLevel !== Constants.KYCNo) {
    return (
      <div className="card border-radius-14 padding-30 margin-b-20 cashlesspro-card border-0 mx-3 mx-sm-0">
        <div className="d-flex justify-content-between">
          <div className="cashlesspro-left-col d-flex flex-column justify-content-center">
            <div className="cashlesspro-text">
              <h4 className="mb-2 text-white fw-semibold">Application in progress</h4>
              <div className="f-size-10 text-white fw-semibold mb-3">Thank you for applying. We'll be in touch shortly to complete the card machine setup.</div>
            </div>
          </div>
          <div className="cashlesspro-imagebox bg-gray-100 border-radius-6 d-flex align-items-center justify-content-center text-center">
            <img src="./assets/pos-1.png" alt="device" />
          </div>
        </div>
      </div>
    );
  }

  if (deviceApplicationStatus === Constants.DeviceApplicationAwaitingDelivery && kycLevel !== Constants.KYCNo) {
    return (
      <div className="card border-radius-14 padding-30 margin-b-20 cashlesspro-card border-0 mx-3 mx-sm-0">
        <div className="d-flex justify-content-between">
          <div className="cashlesspro-left-col d-flex flex-column justify-content-center">
            <div className="cashlesspro-text">
              <h4 className="mb-2 text-white fw-semibold">Application successful and ready for delivery</h4>
              <div className="f-size-10 text-white fw-semibold mb-3">Your application was successful. Our team will contact you shortly to arrange delivery and help you get started.</div>
            </div>
          </div>
          <div className="cashlesspro-imagebox bg-gray-100 border-radius-6 d-flex align-items-center justify-content-center text-center">
            <img src="./assets/pos-1.png" alt="device" />
          </div>
        </div>
      </div>
    );
  }

  if ([Constants.DeviceApplicationUnsuccessful, Constants.DeviceApplicationCancelled, Constants.DeviceApplicationNotEligible].includes(deviceApplicationStatus) && kycLevel !== Constants.KYCNo) {
    return (
      <div className="card border-radius-14 padding-30 margin-b-20 cashlesspro-card border-0 mx-3 mx-sm-0">
        {/* Modal for support would go here if needed */}
        <div className="d-flex justify-content-between">
          <div className="cashlesspro-left-col d-flex flex-column justify-content-between">
            <div className="cashlesspro-text">
              <h4 className="mb-2 text-white fw-semibold">Application unsuccessful</h4>
              <div className="f-size-10 text-white fw-semibold mb-3">Unfortunately, we’re unable to approve your application at this time. If you believe this was a mistake or would like to reapply, please contact our support team.</div>
            </div>
            <a className="btn btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center mw-sm-130" href="#" onClick={() => setIsProfileModalVisible(true)}>Contact support</a>
          </div>
          <div className="cashlesspro-imagebox bg-gray-100 border-radius-6 d-flex align-items-center justify-content-center text-center">
            <img src="./assets/pos-1.png" alt="device" />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default DeviceSubscriptionBanner;