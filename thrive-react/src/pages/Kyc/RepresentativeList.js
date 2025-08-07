import React, { useState } from 'react';

// Placeholder for RepresentativeData component
const RepresentativeData = ({ representative, onNavigate, onRemove }) => (
  <div className="accordion-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded">
    <div>
      <strong>{representative.name}</strong> <span className="text-gray-400">({representative.role})</span>
    </div>
    <div>
      <button className="btn btn-link text-primary p-0 me-2" onClick={() => onNavigate(representative)}>Edit</button>
      <button className="btn btn-link text-danger p-0" onClick={() => onRemove(representative.id)}>Remove</button>
    </div>
  </div>
);

const RepresentativeList = ({ NextStep, PreviousStep}) => {
  // Placeholder state for representatives
  const [representatives, setRepresentatives] = useState([
    { id: 1, name: 'John Doe', role: 'Director', share: 60 },
    { id: 2, name: 'Jane Smith', role: 'Shareholder', share: 40 },
  ]);
  const [showPopup, setShowPopup] = useState(false);

  const handleNavigateToForm = (rep) => {
    // Placeholder: open form to add/edit representative
    alert('Navigate to representative form' + (rep ? ` for ${rep.name}` : ''));
  };

  const handleRemoveRepresentative = (id) => {
    setRepresentatives((prev) => prev.filter((r) => r.id !== id));
  };

  // const NextStep = (e) => {
  //   e.preventDefault();
  //   const totalShare = representatives.reduce((sum, r) => sum + r.share, 0);
  //   if (totalShare !== 100) {
  //     setShowPopup(true);
  //     return;
  //   }
  // };

  const handlePopupYes = () => {
    setShowPopup(false);
  };

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
        <div className="w-100 shareholders-details">
          <div className="margin-b-30 logo">
            <img alt="logo" src="./assets/logo.svg" />
          </div>
          <p className="text-center text-primary f-size-12 margin-b-30">
            This includes the directors (as per CIPCI registration) <br />
            and shareholders of the business
          </p>
          <h4 className="margin-b-20 text-primary fw-semibold d-flex align-items-center justify-content-between">
            Directors & Shareholders
            <span
              className="plus-shareholders btn btn-link text-primary p-0"
              style={{ fontSize: 24, cursor: 'pointer' }}
              onClick={() => handleNavigateToForm(null)}
              title="Add Representative"
            >
              +
            </span>
          </h4>
          <div className="kyc-form">
            <div className="accordion shareholder-accordion margin-b-10">
              {representatives.map((item) => (
                <RepresentativeData
                  key={item.id}
                  representative={item}
                  onNavigate={handleNavigateToForm}
                  onRemove={handleRemoveRepresentative}
                />
              ))}
            </div>
            <p className="text-center text-primary f-size-12 margin-b-30">
              Shareholder % must be equal to 100% before proceeding
            </p>
          <div className="form-group d-flex align-items-center justify-content-between">
              <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
              <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" type="button" onClick={NextStep}>Continue</button>
            </div> 
            {/* Popup for share validation */}
            {showPopup && (
              <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.3)' }}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content p-4">
                    <div className="modal-body">
                      <p className="mb-3">Shareholder % must be equal to 100% before proceeding.</p>
                      <button className="btn btn-primary" onClick={handlePopupYes}>OK</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepresentativeList;
