import React, { useState } from 'react';

const TopUp = () => {
  // Example state, replace with real data fetching logic
  const [loading, setLoading] = useState(false);
  const [topupFrom, setTopupFrom] = useState('');
  const [topupTo, setTopupTo] = useState('');
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState(1);

  const handleBackClicked = () => {
    // Implement navigation logic if needed
    window.history.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  return (
    <div className="vas-topup-main">
      <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
        <div className="d-flex align-items-center">
          <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0 d-flex align-items-center justify-content-center" onClick={handleBackClicked} style={{ cursor: 'pointer' }}>
            <i className="icon ico-back"></i>
          </div>
          <h6 className="mb-0 text-primary fw-medium text-capitalize">Account transfer</h6>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-4 pt-2">
        <div className="w-100 mw-sm-340 topup-block">
          {loading ? (
            <div className="loading-skeleton">
              <div className="custom-skeleton mw-sm-150 h-20 m-auto mb-3"></div>
              <div className="custom-skeleton mw-sm-150 h-20 m-auto mb-3"></div>
              <div className="custom-skeleton mw-sm-150 h-20 m-auto mb-3"></div>
            </div>
          ) : step === 1 ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>From</label>
                <input type="text" className="form-control" value={topupFrom} onChange={e => setTopupFrom(e.target.value)} placeholder="Source account" />
              </div>
              <div className="form-group mb-3">
                <label>To</label>
                <input type="text" className="form-control" value={topupTo} onChange={e => setTopupTo(e.target.value)} placeholder="Destination account" />
              </div>
              <div className="form-group mb-3">
                <label>Amount</label>
                <input type="number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
              </div>
              <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" type="submit">Top Up</button>
            </form>
          ) : (
            <div className="text-center">
              <div className="margin-b-20 f-size-20 text-primary fw-medium">Top Up Successful!</div>
              <div className="margin-b-20 f-size-12 text-primary">Your account has been topped up.</div>
              <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" onClick={() => setStep(1)}>Top Up Again</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopUp; 