import React from "react";

const QuickPay = ({ open, onClose }) => {
  if (!open) return null;
  
  return (
    <div
      className="modal d-flex align-items-center justify-content-center"
      tabIndex="-1"
      role="dialog"
      style={{ background: "rgba(0,0,0,0.3)" }}
    >
      <div
        className="modal-dialog modal-dialog-centered align-items-end align-items-sm-center mx-auto w-100"
        role="quickpay"
      >
        <div className="modal-content border-radius-14 mw-sm-550 mx-auto">
          <div className="modal-body p-0">
            <div className="mw-sm-550 quick-pay-dialog-block text-center">
              <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative quick-pay-dialog-box">
                <h4 className="fw-semibold text-primary margin-b-10">
                  Quick Pay
                </h4>
                <div className="text-gray-300 margin-b-20 text-des">
                  Provide the details below to the person who is <br />
                  initiating the payment
                </div>
                <form method="post">
                  <div className="form-group margin-b-20 text-start">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                      Recipient Thrive ID
                    </label>
                    <input
                      placeholder="1234567"
                      name="ThriveInput.ThriveId"
                      className="form-control f-size-12 fw-medium valid"
                    />
                  </div>
                  <div className="qr-reader-video-block d-lg-none d-block">
                    <button
                      type="button"
                      className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"
                    >
                      Scan QR Code <i className="ico-qr mx-2"></i>
                    </button>
                    <div id="qr-reader" className="video-reader"></div>
                  </div>
                  <div className="btns">
                    <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium margin-b-10">
                      Pay recipient
                    </button>
                    <button className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium" onClick={onClose}>
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPay;
