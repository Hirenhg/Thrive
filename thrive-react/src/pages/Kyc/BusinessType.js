import React, { useState } from 'react';

const BusinessType = () => {
  const [selectedType, setSelectedType] = useState('Sole Proprietor');
  const types = ['Sole Proprietor', 'Partnership', 'Company', 'Non-Profit'];

  return (
    <div className="business-type-main">
      <h4 className="text-primary fw-medium mb-3">Business Type</h4>
      <div className="form-group mb-3">
        <label>Select Business Type</label>
        <select className="form-control" value={selectedType} onChange={e => setSelectedType(e.target.value)}>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary w-100 rounded f-size-12 fw-medium mt-3" type="button">Continue</button>
    </div>
  );
};

export default BusinessType;
