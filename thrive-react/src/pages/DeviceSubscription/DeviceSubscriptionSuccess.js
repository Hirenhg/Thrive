import React from 'react';

const DeviceSubscriptionSuccess = () => {
  return (
    <div className="device-subscription-block">
      <div className="d-flex align-items-center margin-b-20 page-heading">
        <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 d-flex align-items-center justify-content-center">
          <i className="icon ico-pos"></i>
        </div>
        <h6 className="mb-0 text-primary fw-medium text-capitalize">Card Machine Application</h6>
      </div>
      <div className="bg-white border-radius-14 padding-30 w-100 mw-sm-340 h-sm-100 d-flex flex-column align-items-center device-subscription-success-block m-auto">
        <div className="w-100 text-center">
          <div className="margin-b-20 check-status">
            <img alt="checkstatus" src="./assets/check-status.svg" />
          </div>
          <div className="margin-b-20 f-size-20 text-primary fw-medium">Success!</div>
          <div className="margin-b-20 f-size-20 text-primary fw-semibold">Submitted Card machine application</div>
          <p className="margin-b-30 text-primary f-size-12 ">
            You’ve completed the application. Please be patient while we process your application.
          </p>
          <div className="form-group">
            <a className="btn btn-primary w-100 rounded f-size-12 fw-medium" href="/dashboard">Done</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceSubscriptionSuccess;
