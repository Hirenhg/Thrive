import React from "react";
import { images } from "../../../config/images";

const ViewBarcode = ({ open, onClose, referenceNumber }) => {
  if (!open) return null;
  return (
      <div className="modal d-flex align-items-center justify-content-center" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="modal-dialog modal-dialog-centered align-items-end align-items-sm-center mx-auto w-100" role="viewbarcode">
        <div className="modal-content border-radius-14 mw-sm-340 mx-auto">
          <div className="modal-body p-0">
            <div className="w-100 mw-sm-340 view-barcode-dialog-block text-center">
              <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative view-barcode-dialog-box">
                <a className="payat-logo margin-b-20 d-block">
                    <img src={images.payaLogo} alt="payat" />
                </a>
                <div className="fw-medium text-primary-hover f-size-14 margin-b-10">
                  My reference number <br />
                  <span className="pt-1 d-block">{referenceNumber}</span>
                </div>
                <div className="barcode-img margin-b-20">
                   <img src={images.barcodeImage} alt="barcode" className="mx-auto" />
                </div>
                <button className="btn btn-primary w-100 f-size-12" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ViewBarcode;
