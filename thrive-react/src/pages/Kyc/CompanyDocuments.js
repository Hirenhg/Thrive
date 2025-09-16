import React, { useState } from 'react';
import { images } from '../../config/images';

const CompanyDocuments = ({ NextStep, PreviousStep }) => {
  const [files, setFiles] = useState({
    businessCert: "dummy.pdf",
    proofAddress: "dummy1.pdf",
    incomeTaxCert: "dummy2.pdf",
  });

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({
        ...prev,
        [key]: file.name,
      }));
    }
  };

  const handleDelete = (key) => {
    setFiles((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
        <div className="company-documents-main w-100 company-documents">
          <div className="margin-b-30 logo">
            <img alt="logo" src={images.Logo} />
          </div>
          <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">Business Setup <span className="fw-normal">3/3</span></h4>
          <p className="margin-b-30 text-gray-300">Company Documents</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="kyc-form">
              {/* Business Registration Certificate */}
              <div className="form-group margin-b-10">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                  Business Registration Certificate
                </label>
                <div className="custom-file-input position-relative">
                  <span className="file-upload-placeholder form-control f-size-12 fw-medium file-upload-filename">
                    {files.businessCert || "No file chosen"}
                  </span>
                  <input
                    id="business_registration_certificate"
                    className="file-upload d-none"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "businessCert")}
                  />
                  <label
                    htmlFor="business_registration_certificate"
                    className="file-upload-label file-upload-hide"
                  ></label>
                  {files.businessCert && (
                    <button
                      type="button"
                      className="icon-delete icon-show"
                      onClick={() => handleDelete("businessCert")}
                    ></button>
                  )}
                </div>
              </div>

              {/* Proof of Registered Address */}
              <div className="form-group margin-b-10">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                  Proof of Registered Address
                </label>
                <div className="custom-file-input position-relative">
                  <span className="file-upload-placeholder form-control f-size-12 fw-medium file-upload-filename">
                    {files.proofAddress || "No file chosen"}
                  </span>
                  <input
                    id="proof_of_address"
                    className="file-upload d-none"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "proofAddress")}
                  />
                  <label
                    htmlFor="proof_of_address"
                    className="file-upload-label file-upload-hide"
                  ></label>
                  {files.proofAddress && (
                    <button
                      type="button"
                      className="icon-delete icon-show"
                      onClick={() => handleDelete("proofAddress")}
                    ></button>
                  )}
                </div>
              </div>

              {/* Income Tax Registration Certificate */}
              <div className="form-group margin-b-30">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                  Income Tax Registration Certificate
                </label>
                <div className="custom-file-input position-relative">
                  <span className="file-upload-placeholder form-control f-size-12 fw-medium file-upload-filename">
                    {files.incomeTaxCert || "No file chosen"}
                  </span>
                  <input
                    id="income_tax_registration_certificate"
                    className="file-upload d-none"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, "incomeTaxCert")}
                  />
                  <label
                    htmlFor="income_tax_registration_certificate"
                    className="file-upload-label file-upload-hide"
                  ></label>
                  {files.incomeTaxCert && (
                    <button
                      type="button"
                      className="icon-delete icon-show"
                      onClick={() => handleDelete("incomeTaxCert")}
                    ></button>
                  )}
                </div>
              </div>
              {/* Buttons */}
              <div className="form-group d-flex align-items-center justify-content-between">
                <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
                <button onClick={NextStep} type="submit" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                  Next <i className="arrow-right mx-2"></i>
                </button>              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyDocuments;