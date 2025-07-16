import React from 'react';

const TransferPaymentResult = ({ isSuccess, isVisible, onClose, availableBalance, message }) => {
  if (!isVisible) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {isSuccess ? 'Payment Successful' : 'Payment Failed'}
            </h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <div className="mb-3">
              {isSuccess ? (
                <span className="text-success">&#10003;</span>
              ) : (
                <span className="text-danger">&#10007;</span>
              )}
            </div>
            <div className="mb-2 f-size-16 fw-medium text-primary">{message || (isSuccess ? 'Your payment was successful.' : 'Your payment failed.')}</div>
            {typeof availableBalance !== 'undefined' && (
              <div className="mb-2 f-size-14 text-gray-400">Available Balance: {availableBalance}</div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferPaymentResult;