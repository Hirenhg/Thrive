import React from 'react';

const Transfers = () => {
  // Placeholder data
  const transfers = [
    { id: 1, from: 'Wallet', to: 'VAS', amount: 40, date: '2024-06-01' },
    { id: 2, from: 'VAS', to: 'Bank', amount: 60, date: '2024-06-02' },
  ];

  return (
    <div className="transfers-main">
      <h4 className="text-primary fw-medium mb-3">Transfers</h4>
      <ul className="list-group">
        {transfers.map(transfer => (
          <li key={transfer.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{transfer.from} → {transfer.to}</span>
            <span>{transfer.amount}</span>
            <span>{transfer.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transfers;