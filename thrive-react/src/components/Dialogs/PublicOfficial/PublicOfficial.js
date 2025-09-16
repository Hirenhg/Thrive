import React from "react";

const PublicOfficial = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="modal d-flex align-items-center justify-content-center"
      tabIndex="-1"
      role="dialog"
      style={{ background: "rgba(0,0,0,0.3)" }}
    >
      <div className="modal-dialog modal-dialog-centered align-items-end align-items-sm-center mx-auto w-100" role="PublicOfficial" >
        <div className="modal-content border-radius-14 mw-sm-340 mx-auto">
          <div className="modal-body p-0">
            <div className="verify-msg-main">
              <div className="d-flex align-items-center justify-content-center">
                <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 verify-msg-box">
                  <div className="icon-block text-center margin-b-30"><i className="ico-que"></i></div>
                  <h5 className="margin-b-20 text-primary fw-medium text-center">How does this work?</h5>
                  <p className="margin-b-30 text-gray-300 f-size-12 text-center">
                    A public official is a
                  </p>
                  <div className="margin-b-30">
                    <ul className="m-0 p-0">
                      <li className="text-gray-300 f-size-12 py-1">Head of state, country or government</li>
                      <li className="text-gray-300 f-size-12 py-1">Member of any royal family</li>
                      <li className="text-gray-300 f-size-12 py-1">Government minister</li>
                      <li className="text-gray-300 f-size-12 py-1">Serving Judge</li>
                      <li className="text-gray-300 f-size-12 py-1">Senior executive of a state owned corporation</li>
                      <li className="text-gray-300 f-size-12 py-1">High-ranking military member</li>
                    </ul>
                  </div>
                  <div className="btns">
                    <button type="button" className="btn btn-primary w-100 rounded f-size-12 fw-medium" onClick={onClose}>Okay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicOfficial;
