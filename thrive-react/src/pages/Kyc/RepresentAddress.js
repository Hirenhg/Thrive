import React, { useState } from "react";

const initialForm = {
  countryOfResidence: "",
  streetName: "",
  suburb: "",
  city: "",
  postalCode: "",
  province: "",
  proofOfAddress: null,
  proofOfAddressName: "",
  proofOfIdentification: null,
  proofOfIdentificationName: "",
};

const provinces = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "Kwazulu Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape",
];

const countries = [
  "South Africa",
  "Namibia",
  "Botswana",
  "Zimbabwe",
];

const RepresentAddress = ({ NextStep, PreviousStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [isAccountHolder, setIsAccountHolder] = useState(true); // Set as needed
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === "address") {
        setForm((prev) => ({ ...prev, proofOfAddress: file, proofOfAddressName: file.name }));
      } else {
        setForm((prev) => ({ ...prev, proofOfIdentification: file, proofOfIdentificationName: file.name }));
      }
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0 loading-skeleton">
        <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
          <div className="w-100 personal-documents">
            <div className="margin-b-30 logo">
              <span style={{ width: 60 }} className="custom-skeleton h-24"></span>
            </div>
            <h4 className="margin-b-10 d-sm-flex align-items-center justify-content-sm-between">
              <span className="custom-skeleton w-100 h-24 mw-sm-200"></span>
              <span style={{ width: 35 }} className="custom-skeleton h-24"></span>
            </h4>
            <p className="margin-b-30 custom-skeleton h-20 mw-sm-200"></p>
            <div className="kyc-form">
              <div className="form-group margin-b-10">
                <span className="h-16 mb-1 custom-skeleton w-100 mw-sm-200" />
                <div className="w-100 h-sm-40 custom-skeleton"></div>
              </div>
              <div className="form-group margin-b-10">
                <span className="h-16 mb-1 custom-skeleton w-100 mw-sm-200" />
                <div className="w-100 h-sm-40 custom-skeleton"></div>
              </div>
              <div className="form-group margin-b-30">
                <span className="h-16 mb-1 custom-skeleton w-100 mw-sm-200" />
                <div className="w-100 h-sm-40 custom-skeleton"></div>
              </div>
              <div className="form-group d-flex align-items-center justify-content-between">
                <div className="w-100 h-sm-40 custom-skeleton margin-r-10"></div>
                <div className="w-100 h-sm-40 custom-skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
        <div className="w-100 personal-details">
          <div className="margin-b-30 logo">
            <img alt="logo" src={require("../../assets/logo.svg").default} />
          </div>
          <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">
            Representative <span className="fw-normal">2/2</span>
          </h4>
          <p className="margin-b-30 text-gray-300">Personal details</p>
          <form className="kyc-form" onSubmit={handleNext}>
            <div className="form-group margin-b-10">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Country of Residence</label>
              <select
                className="form-select form-control w-100 f-size-12 fw-medium"
                name="countryOfResidence"
                value={form.countryOfResidence}
                onChange={handleChange}
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className="form-group margin-b-10 position-relative">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Personal Address</label>
              <div className="input-group">
                <input
                  className="form-control f-size-12 fw-medium"
                  placeholder="Personal address"
                  name="streetName"
                  value={form.streetName}
                  onChange={handleChange}
                />
              </div>
              {/* Address suggestions can be implemented here if needed */}
            </div>
            <div className="form-group-row d-sm-flex justify-content-sm-between">
              <div className="form-group margin-b-10 w-100 me-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Suburb</label>
                <input
                  className="form-control f-size-12 fw-medium"
                  placeholder="Suburb"
                  name="suburb"
                  value={form.suburb}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group margin-b-10 w-100 ms-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">City</label>
                <input
                  className="form-control f-size-12 fw-medium"
                  placeholder="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group-row d-sm-flex justify-content-sm-between margin-b-10">
              <div className="form-group margin-b-10 w-100 me-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Postal Code</label>
                <input
                  className="form-control f-size-12 fw-medium"
                  placeholder="Postal Code"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group margin-b-10 w-100 ms-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Province</label>
                <select
                  className="form-select form-control w-100 f-size-12 fw-medium"
                  name="province"
                  value={form.province}
                  onChange={handleChange}
                >
                  <option value="">Select province</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group margin-b-30">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Proof of Address</label>
              <div className="custom-file-input position-relative">
                <span className={`file-upload-placeholder form-control f-size-12 fw-medium ${form.proofOfAddressName ? "file-upload-filename" : ""}`}>
                  {form.proofOfAddressName || "Upload Document"}
                </span>
                <input
                  id="file-upload"
                  className="file-upload d-none"
                  type="file"
                  onChange={(e) => handleFileChange(e, "address")}
                />
                <label htmlFor="file-upload" className={`file-upload-label ${form.proofOfAddressName ? "file-upload-hide" : ""}`}></label>
                {form.proofOfAddressName && (
                  <button type="button" className="icon-delete icon-show" onClick={() => setForm((prev) => ({ ...prev, proofOfAddress: null, proofOfAddressName: "" }))}></button>
                )}
              </div>
            </div>
            {!isAccountHolder && (
              <div className="form-group margin-b-30">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Proof of Identification</label>
                <div className="custom-file-input position-relative">
                  <span className={`file-upload-placeholder form-control f-size-12 fw-medium ${form.proofOfIdentificationName ? "file-upload-filename" : ""}`}>
                    {form.proofOfIdentificationName || "Upload Document"}
                  </span>
                  <input
                    id="file-upload-identity"
                    className="file-upload d-none"
                    type="file"
                    onChange={(e) => handleFileChange(e, "identity")}
                  />
                  <label htmlFor="file-upload-identity" className={`file-upload-label ${form.proofOfIdentificationName ? "file-upload-hide" : ""}`}></label>
                  {form.proofOfIdentificationName && (
                    <button type="button" className="icon-delete icon-show" onClick={() => setForm((prev) => ({ ...prev, proofOfIdentification: null, proofOfIdentificationName: "" }))}></button>
                  )}
                </div>
              </div>
            )}
            <div className="form-group d-flex align-items-center justify-content-between">
              <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
              <button onClick={NextStep} type="submit" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                Next <i className="arrow-right mx-2"></i>
              </button>            </div>
          </form>
          {/* You can implement the confirmation popup as a separate component if needed */}
          {showPopup && (
            <div className="modal">Confirmation popup here. <button onClick={() => setShowPopup(false)}>Close</button></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepresentAddress;