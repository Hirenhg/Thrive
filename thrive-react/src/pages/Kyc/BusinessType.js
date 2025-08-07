import React, { useState } from 'react';

const BusinessType = ({NextStep, PreviousStep}) => {
  const [selectedType, setSelectedType] = useState('Sole Proprietor');
  const types = ['Sole Proprietor', 'Partnership', 'Company', 'Non-Profit'];
  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
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
          <div className="form-group d-flex align-items-center justify-content-between">
            <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" type="button" onClick={NextStep}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessType;
