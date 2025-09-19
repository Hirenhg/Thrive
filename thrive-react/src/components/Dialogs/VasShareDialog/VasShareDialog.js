import React, { useState } from "react";

const VasShareDialog = ({ open, onClose, productType }) => {
  const [cellphoneNumber, setCellphoneNumber] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  const getTitle = () => {
    switch (productType) {
      case "Electricity":
        return "Electricity";
      case "Airtime":
        return "Airtime";
      case "Data":
        return "Data Bundle";
      case "Entertainment":
        return "Entertainment Voucher";
     case "Individual history":
        return "Individual sales";
      default:
        return "";
    }
  };

  const handleShare = async () => {
    if (!cellphoneNumber && !email) {
      alert("Please provide SMS or Email to share.");
      return;
    }
  };

  return (
    <div
      className="modal d-flex align-items-center justify-content-center"
      style={{ background: "rgba(0,0,0,0.3)", display: "flex" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="mw-sm-550 vas-dialog-block">
            <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative vas-dialog-box vas-share-electricity-box">
              <h5 className="margin-b-30 text-primary fw-medium text-center">
                Share {getTitle()}
              </h5>

              <div className="bg-gray-100 rounded padding-10 margin-b-30">
                <div className="form-contant">
                  <div className="d-flex justify-content-between flex-column flex-sm-row">
                    {/* SMS */}
                    <div className="sms-col w-100 mb-3 mb-sm-0">
                      <label className="f-size-14 text-primary mb-3">
                        SMS
                      </label>
                      <div className="form-group">
                        <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                          Cellphone number
                        </label>
                        <input
                          type="text"
                          className="form-control f-size-12 fw-medium"
                          placeholder="Cellphone number"
                          value={cellphoneNumber}
                          onChange={(e) => setCellphoneNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <label className="f-size-14 text-primary fw-medium mx-0 mx-sm-3 my-3 my-sm-0 position-relative text-or d-none d-sm-block">
                      Or
                    </label>

                    <div className="email-col w-100">
                      <label className="f-size-14 text-primary mb-3">
                        Email
                      </label>
                      <div className="form-group">
                        <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control f-size-12 fw-medium"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group d-flex align-items-center justify-content-between">
                <button
                  className="btn btn-outline border border-ea w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center mx-1"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center mx-1"
                  onClick={onClose}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VasShareDialog;
