import React, { useState } from 'react';

const RepresentativeData = ({ representative, onEdit, onRemove }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteConfirm = () => {
    onRemove(representative.id);
    setShowPopup(false);
  };

  const openConfirmDialog = (e) => {
    e.stopPropagation(); // prevent accordion from toggling
    setShowPopup(true);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit(representative);
  };

  const collapseId = `collapse-${representative.id}`;
  const headerId = `header-${representative.id}`;

  return (
    <div className="accordion-item margin-b-20 border rounded">
      <div className="accordion-header d-block" id={headerId}>
        <button
          className="accordion-button border-0 bg-transparent f-size-12 fw-medium text-primary shadow-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          {`${representative.name} ${representative.surname}`}
        </button>
      </div>
      <div
        id={collapseId}
        className="accordion-collapse collapse"
        aria-labelledby={headerId}
        data-bs-parent="#accordionbody-contant"
      >
        <div className="accordion-body mw-sm-340 m-auto px-sm-0 pt-2">
          {/* Displaying data as text. Form inputs would be in an edit view */}
          <div className="form-group-row d-sm-flex justify-content-sm-between">
            <div className="form-group margin-b-10 w-100 me-sm-1">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Name</label>
              <div className="form-control f-size-12 fw-medium bg-light">{representative.name}</div>
            </div>
            <div className="form-group margin-b-10 w-100 ms-sm-1">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Surname</label>
              <div className="form-control f-size-12 fw-medium bg-light">{representative.surname}</div>
            </div>
          </div>
          <div className="form-group-row d-sm-flex justify-content-sm-between">
            <div className="form-group margin-b-10 w-100 me-sm-1">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Identity Number</label>
              <div className="form-control f-size-12 fw-medium bg-light">{representative.identityNumber}</div>
            </div>
            <div className="form-group margin-b-10 w-100 ms-sm-1">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Cell Phone</label>
              <div className="form-control f-size-12 fw-medium bg-light">{representative.cellphoneNumber}</div>
            </div>
          </div>
          <div className="form-group-row d-sm-flex ustify-content-sm-between">
            <div className="form-group margin-b-10 w-100 me-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Date of Birth</label>
                <div className="form-control f-size-12 fw-medium bg-light">{representative.dateOfBirth}</div>
            </div>
            <div className="form-group margin-b-10 w-100 ms-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Country of Residence</label>
                <div className="form-control f-size-12 fw-medium bg-light">{representative.countryOfResidence}</div>
            </div>
          </div>
          <div className="form-group-row d-sm-flex justify-content-sm-between">
            <div className="form-group margin-b-10 w-100 me-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Director</label>
                <div className="form-control f-size-12 fw-medium bg-light">{representative.isDirector ? "Yes" : "No"}</div>
            </div>
            <div className="form-group margin-b-10 w-100 ms-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Percentage Shares</label>
                <div className="form-control f-size-12 fw-medium bg-light">{representative.sharePercentage}%</div>
            </div>
          </div>

          <div className="form-group d-flex align-items-center justify-content-between mt-3">
            {!representative.isAccountHolder && (
              <button
                className="btn btn-outline border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10"
                onClick={openConfirmDialog}
              >
                Remove
              </button>
            )}
            <button
              className="btn btn-outline border-gray-200 bg-gray-200 text-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Placeholder for Delete Confirmation Modal */}
      {showPopup && (
         <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.3)' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content p-4">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Deletion</h5>
                        <button type="button" className="btn-close" onClick={() => setShowPopup(false)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to remove this representative?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowPopup(false)}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={handleDeleteConfirm}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default RepresentativeData;
