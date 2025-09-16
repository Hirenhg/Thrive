import React from "react";
import { images } from "../../../config/images";

const QRCode = ({ open, onClose }) => {
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
        role="QRcode"
      >
        <div className="modal-content border-radius-14 mw-sm-550 mx-auto">
          <div className="modal-body p-0">
            <div className="mw-sm-550 qrcode-dialog-block text-center">
              <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative qrcode-dialog-box">
                <h4 className="fw-semibold text-primary margin-b-10">
                  QR Code
                </h4>
                <div className="text-gray-300 margin-b-20">
                  MyShare these details with the person making the payment, or print and display them in your store for customers to scan easily.
                </div>
                <h4 className="fw-medium text-primary margin-b-10">My Thrive ID: <span>5098544</span></h4>
                <div className="qrcode-div">
                  <img src={images.qrcodeImage} alt="qrcode" />
                </div>
                   <div class="btns">
                    <button class="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium margin-b-10 d-flex align-items-center justify-content-center">
                      Download QR code<i class="ico-download ms-2"></i>
                    </button>
                    <button class="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium" onClick={onClose}>Close</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
