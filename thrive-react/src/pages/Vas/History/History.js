import React from 'react';

const History = () => {
  // Placeholder data
  const historyItems = [
    { id: 1, type: 'Sale', amount: 100, date: '2024-06-01' },
    { id: 2, type: 'Transfer', amount: 50, date: '2024-06-02' },
  ];

  return (
    <div className="vas-history-main">
      <h4 className="text-primary fw-medium mb-3">VAS History</h4>
      <ul className="list-group">
        {historyItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.type}</span>
            <span>{item.amount}</span>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;