import React, { useState } from 'react';

const CompanyDocuments = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Registration Certificate', uploaded: true },
    { id: 2, name: 'Tax Clearance', uploaded: false },
  ]);

  return (
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
      <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" type="button">Upload Document</button>
    </div>
  );
};

export default CompanyDocuments;