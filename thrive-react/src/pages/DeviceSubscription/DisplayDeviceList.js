import React, { useState } from 'react';
import { images } from '../../config/images';
import { Link } from "react-router-dom";

const DisplayDeviceList = () => {
  const [selectedDevices, setSelectedDevices] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);

  const feeDatas = [
    { NumberOfDevices: 1, FeesTotal: 299, RentalFees: 99, ConnectionFees: 50 },
    { NumberOfDevices: 2, FeesTotal: 499, RentalFees: 89, ConnectionFees: 45 },
    { NumberOfDevices: 3, FeesTotal: 699, RentalFees: 79, ConnectionFees: 40 },
    { NumberOfDevices: 4, FeesTotal: 899, RentalFees: 69, ConnectionFees: 35 },
  ];

  const selectedFeeData = feeDatas.find(fee => fee.NumberOfDevices === selectedDevices);

  const handleDeviceSelect = (value) => {
    setSelectedDevices(value);
  };

  const formatCurrency = (value) => `₹${value}`;

  const getDeviceImage = (count) => {
    const imgIndex = [1, 2, 3, 4].includes(count) ? count : 1;
    return `./assets/pos-${imgIndex}.png`;
  };

  return (
    <div className="device-devicelist-contant">
      <div className="margin-b-20 device-heading">
        <h5 className="text-primary fw-semibold mb-1">N910 Cashless Pro</h5>
        <div className="text-gray-400 f-size-10">Printer, 4g & Wi-fi compatible. Accept all major credit cards</div>
      </div>
      <div className="d-flex justify-content-between flex-wrap select-pos">
        <div className="cashless-device-col">
          <div className="d-flex align-items-center justify-content-center margin-b-20 bg-white border-radius-14 padding-30 w-100">
            <a className="device-img text-center">
                   {/* <img alt="cashless-pos" src={getDeviceImage(selectedDevices)} /> */}
              <img alt="cashless-pos" src={images.PosDevice} /> 
            </a>
          </div>
        </div>

        <div className="device-package-list-col">
          <div className="fw-semibold text-primary mb-3">Select payment package</div>
          {isLoading ? (
            <div className="loading-skeleton device-option-group">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="device-option">
                  <label className="bg-gray-500 border-ea border-radius-14 d-flex justify-content-between align-items-center p-3 margin-b-10">
                    <span className="w-sm-75 custom-skeleton h-20"></span>
                    <span className="w-sm-100 d-flex text-amount custom-skeleton h-20"></span>
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div className="device-option-group">
              {feeDatas.map(item => (
                <div key={item.NumberOfDevices} className="device-option">
                  <input
                    type="radio"
                    name="deviceCount"
                    className="custom-radio-input d-none"
                    id={`device-${item.NumberOfDevices}`}
                    checked={selectedDevices === item.NumberOfDevices}
                    onChange={() => handleDeviceSelect(item.NumberOfDevices)}
                  />
                  <label
                    htmlFor={`device-${item.NumberOfDevices}`}
                    className="custom-radio-box border-radius-14 d-flex justify-content-between align-items-center p-3 margin-b-10"
                  >
                    <span className="form-check-label fw-medium">
                      {item.NumberOfDevices} Device
                    </span>
                    <span className="fw-medium d-flex text-amount">
                      {formatCurrency(item.FeesTotal)}
                      <div className="fw-normal f-size-10">p/m</div>
                    </span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-3 border-radius-14 device-helpbox d-flex align-items-center">
        <div className="callicon margin-r-20"></div>
        <div className="device-help-text">
          <div className="text-primary fw-medium mb-1">Need more than 4 devices?</div>
          <div className="text-primary-hover fw-medium f-size-10">
            <a
              className="text-primary text-underline"
              onClick={() => setIsProfileModalVisible(true)}
              style={{ cursor: 'pointer' }}
            >
              Get in touch
            </a>{' '}
            with us
          </div>
        </div>
      </div>

      {selectedFeeData && (
        <div className="bg-secondary p-3 d-flex justify-content-between align-sm-items-center flex-column flex-sm-row fixed-bottom device-sub-fixed">
          <div className="d-flex flex-column">
            <div className="text-primary fw-medium margin-b-10">Fees per device</div>
            <div className="fees-amount-text d-flex align-items-center margin-b-10 mb-sm-0">
              <div className="margin-r-20 d-flex flex-column">
                <label className="text-primary-hover f-size-10 fw-normal">Rental Fees: </label>
                <span className="text-primary-hover f-size-10 fw-semibold">
                  {formatCurrency(selectedFeeData.RentalFees)}
                </span>
              </div>
              <div className="d-flex flex-column">
                <label className="text-primary-hover f-size-10 fw-normal">Connection fees: </label>
                <span className="text-primary-hover f-size-10 fw-semibold">
                  {formatCurrency(selectedFeeData.ConnectionFees)}
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="margin-r-20 d-flex align-items-center">
              <div className="margin-r-20 text-primary fw-medium">
                {selectedFeeData.NumberOfDevices} Device
                {selectedFeeData.NumberOfDevices > 1 ? 's' : ''}
              </div>
              <div className="text-primary fw-medium">
                {formatCurrency(selectedFeeData.FeesTotal)} <span className="fw-normal mx-1">p/m</span>
              </div>
            </div>
            <Link className="btn btn-primary rounded-2 f-size-12 fw-medium" to="/device-subscription">
              Confirm
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayDeviceList;