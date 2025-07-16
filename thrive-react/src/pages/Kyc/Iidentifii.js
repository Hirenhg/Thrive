import React, { useState } from "react";

const Iidentifii = () => {
  // These would typically come from props, context, or API
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [iframeURL] = useState("https://your-identity-verification-url.com"); // Replace with actual URL

  // You can add logic to update isSuccess/isError based on events or API responses

  if (!isSuccess) {
    return (
      <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
        <iframe
          src={iframeURL}
          allow="camera;fullscreen;accelerometer;gyroscope;magnetometer"
          className="bg-white border-ea border-radius-14 w-100 identifill-box min-vh-100"
          sandbox="allow-same-origin allow-scripts"
          title="Identity Verification"
        />
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 kyc-box">
        <div className="text-center">
          {!isError ? (
            <>
              <div className="icon-block">
                <i className="ico-success-payment"></i>
              </div>
              <h5 className="margin-b-20 text-primary fw-semibold">Identity Verification</h5>
              <p className="margin-b-20 text-gray-300 f-size-14">
                Thanks for verifying your indentity.
              </p>
              <p className="margin-b-30 text-primary fw-semibold">
                Congratulations, you're done!!!
              </p>
            </>
          ) : (
            <>
              <div className="icon-block">
                <i className="ico-status-note"></i>
              </div>
              <h5 className="margin-b-20 text-primary fw-semibold">Identity Verification</h5>
              <p className="margin-b-20 text-gray-300 f-size-14">
                Failed to submit your data to Thrive.
              </p>
              <p className="margin-b-30 text-primary fw-semibold">
                Please try again or contact support
              </p>
            </>
          )}
          <div className="form-group mw-sm-200 m-auto">
            <a className="btn btn-primary w-100 rounded f-size-12 fw-medium" href="/dashboard">Done</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iidentifii;
