import React, { useState } from 'react';

const CompanyDocuments = ({ NextStep, PreviousStep}) => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Registration Certificate', uploaded: true },
    { id: 2, name: 'Tax Clearance', uploaded: false },
  ]);

  return (
       <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
    <div className="company-documents-main">
      <h4 className="text-primary fw-medium mb-3">Company Documents</h4>
      <ul className="list-group mb-3">
        {documents.map(doc => (
          <li key={doc.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{doc.name}</span>
            <span>{doc.uploaded ? 'Uploaded' : 'Not Uploaded'}</span>
          </li>
        ))}
      </ul>
         <div className="form-group d-flex align-items-center justify-content-between">
            <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
            <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" type="button" onClick={NextStep}>Upload Document</button>
          </div> 
    </div>
    </div>
    </div>
  );
};

export default CompanyDocuments;