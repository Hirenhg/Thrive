import React from 'react';

const IndividualSales = () => {
  // Placeholder data
  const sales = [
    { id: 1, product: 'Airtime', amount: 30, date: '2024-06-01' },
    { id: 2, product: 'Electricity', amount: 70, date: '2024-06-02' },
  ];

  return (
    <div className="individual-sales-main">
      <h4 className="text-primary fw-medium mb-3">Individual Sales</h4>
      <ul className="list-group">
        {sales.map(sale => (
          <li key={sale.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{sale.product}</span>
            <span>{sale.amount}</span>
            <span>{sale.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualSales;

