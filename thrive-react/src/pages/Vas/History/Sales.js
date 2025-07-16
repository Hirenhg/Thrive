import React from 'react';

const Sales = () => {
  // Placeholder data
  const salesSummary = [
    { id: 1, category: 'Airtime', total: 300 },
    { id: 2, category: 'Electricity', total: 500 },
  ];

  return (
    <div className="sales-summary-main">
      <h4 className="text-primary fw-medium mb-3">Sales Summary</h4>
      <ul className="list-group">
        {salesSummary.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.category}</span>
            <span>{item.total}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;

