import React from 'react';
import { Link } from 'react-router-dom';

const VasBalance = () => {
  // Example state, replace with real data fetching logic
  const [loadingSummaryData, setLoadingSummaryData] = React.useState(false);
  const [balance, setBalance] = React.useState(0);

  return (
    <div className="vas-balance-box-col padding-20 margin-r-20 h-100 bg-gray-100 border-radius-6 border-ea text-center">
      <div className="margin-b-10 text-gray-300 f-size-12">VAS balance</div>
      {loadingSummaryData ? (
        <div className="loading-skeleton margin-b-20">
          <div className="custom-skeleton mw-sm-150 h-20 m-auto"></div>
        </div>
      ) : (
        <h6 className="margin-b-20 text-primary f-size-20">{balance}</h6>
      )}
      <div className="divider margin-b-20"></div>
      <Link className="btn btn-primary w-100 rounded f-size-12 fw-medium" to="/topup">
        Top Up
      </Link>
    </div>
  );
};

export default VasBalance;