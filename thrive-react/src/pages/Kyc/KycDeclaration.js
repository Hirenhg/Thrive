import React, { useState } from "react";

const relationshipTypes = [
  "Parent",
  "Sibling",
  "Spouse",
  "Child",
  "Other",
];

const countries = [
  { Alpha2: "ZA", Name: "South Africa" },
  { Alpha2: "NA", Name: "Namibia" },
  { Alpha2: "BW", Name: "Botswana" },
  { Alpha2: "ZW", Name: "Zimbabwe" },
  // Add more countries as needed
];

const incomeSources = [
  { Value: "salary", DisplayName: "Salary" },
  { Value: "business", DisplayName: "Business" },
  { Value: "investment", DisplayName: "Investment" },
  { Value: "other", DisplayName: "Other" },
];

const KycDeclaration = ({ NextStep, PreviousStep}) => {
  const [isSoleProp, setIsSoleProp] = useState(false); // Set as needed
  const [form, setForm] = useState({
    isPublicOfficial: "",
    isRelated: "",
    relationshipType: "",
    officialName: "",
    isTaxPayerOtherCountry: "",
    taxCountry: "",
    taxNumber: "",
    incomeType: "",
    amount: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "radio" ? value === "true" : value }));
  };

  const handleAmountChange = (e) => {
    // Optionally format input as currency
    setForm((prev) => ({ ...prev, amount: e.target.value.replace(/[^0-9.]/g, "") }));
  };

  const handleBack = (e) => {
    e.preventDefault();
    // Implement back navigation logic here
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Implement next step logic here
    setShowPopup(true);
  };

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
        <div className="w-100 declarations-details">
          <div className="margin-b-30 logo">
            <img alt="logo" src={require("../../assets/logo.svg").default} />
          </div>
          <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">Director Declarations</h4>
          <form className="kyc-form" onSubmit={handleNext}>
            <p className="margin-b-30 text-gray-300">
              {isSoleProp ? "Sole Proprietor" : "Public official"}
            </p>
            <div className="form-group mb-3">
              <label className="form-label text-primary fw-medium mb-2 f-size-12 line-height-20">
                {isSoleProp
                  ? "Are you a public official in a position of authority?"
                  : "Are you a public official?"}
              </label>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center me-2">
                  <div className="custom-radio d-flex align-items-center">
                    <input
                      className="checkbox radio d-none"
                      type="radio"
                      name="isPublicOfficial"
                      value={true}
                      checked={form.isPublicOfficial === true}
                      id="radioyes"
                      onChange={handleChange}
                    />
                    <label className="d-flex align-items-center position-relative" htmlFor="radioyes">
                      <span className="f-size-12 text-gray-300 margin-l-10">Yes</span>
                    </label>
                  </div>
                </div>
                <div className="d-flex align-items-center ms-2">
                  <div className="custom-radio d-flex align-items-center">
                    <input
                      className="radio d-none"
                      type="radio"
                      name="isPublicOfficial"
                      value={false}
                      checked={form.isPublicOfficial === false}
                      id="radiono"
                      onChange={handleChange}
                    />
                    <label className="d-flex align-items-center position-relative" htmlFor="radiono">
                      <span className="f-size-12 text-gray-300 margin-l-10">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="form-label text-primary fw-medium mb-2 f-size-12 line-height-20">
                Are you related or associated to a public official in a position of authority?
              </label>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center me-2">
                  <div className="custom-radio d-flex align-items-center">
                    <input
                      className="checkbox radio d-none"
                      type="radio"
                      name="isRelated"
                      value={true}
                      checked={form.isRelated === true}
                      id="radioyes-associated"
                      onChange={handleChange}
                    />
                    <label className="d-flex align-items-center position-relative" htmlFor="radioyes-associated">
                      <span className="f-size-12 text-gray-300 margin-l-10">Yes</span>
                    </label>
                  </div>
                </div>
                <div className="d-flex align-items-center ms-2">
                  <div className="custom-radio d-flex align-items-center">
                    <input
                      className="radio d-none"
                      type="radio"
                      name="isRelated"
                      value={false}
                      checked={form.isRelated === false}
                      id="radiono-associated"
                      onChange={handleChange}
                    />
                    <label className="d-flex align-items-center position-relative" htmlFor="radiono-associated">
                      <span className="f-size-12 text-gray-300 margin-l-10">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {form.isRelated === true && (
              <>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Nature of Relationship</label>
                  <select
                    className="form-select form-control w-100 f-size-12 fw-medium"
                    name="relationshipType"
                    value={form.relationshipType}
                    onChange={handleChange}
                  >
                    <option value="">Select Nature of Relationship</option>
                    {relationshipTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Name of Public Official</label>
                  <input
                    className="form-control f-size-12 fw-medium"
                    name="officialName"
                    value={form.officialName}
                    onChange={handleChange}
                    placeholder="Name of Public Official"
                  />
                </div>
              </>
            )}
            <p className="margin-b-10 text-gray-300">Declaration</p>
            <div className="form-group mb-3">
              <label className="form-label text-primary fw-medium mb-2 f-size-12 line-height-20">
                Do you have tax residency in a country outside of South Africa?
              </label>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center me-2">
                  <div className="custom-radio d-flex align-items-center">
                    <input
                      className="checkbox radio d-none"
                      type="radio"
                      name="isTaxPayerOtherCountry"
                      value={true}
                      checked={form.isTaxPayerOtherCountry === true}
                      id="radioyes-country"
                      onChange={handleChange}
                    />
                    <label className="d-flex align-items-center position-relative" htmlFor="radioyes-country">
                      <span className="f-size-12 text-gray-300 margin-l-10">Yes</span>
                    </label>
                  </div>
                </div>
                <div className="d-flex align-items-center ms-2">
                  <div className="custom-radio d-flex align-items-center">
                    <input
                      className="radio d-none"
                      type="radio"
                      name="isTaxPayerOtherCountry"
                      value={false}
                      checked={form.isTaxPayerOtherCountry === false}
                      id="radiono-country"
                      onChange={handleChange}
                    />
                    <label className="d-flex align-items-center position-relative" htmlFor="radiono-country">
                      <span className="f-size-12 text-gray-300 margin-l-10">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {form.isTaxPayerOtherCountry === true && (
              <>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Country</label>
                  <select
                    className="form-select form-control w-100 f-size-12 fw-medium"
                    name="taxCountry"
                    value={form.taxCountry}
                    onChange={handleChange}
                  >
                    <option value="">Select Country</option>
                    {countries.map((item) => (
                      <option key={item.Alpha2} value={item.Alpha2}>{item.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Enter Tax ID Number</label>
                  <input
                    className="form-control f-size-12 fw-medium"
                    name="taxNumber"
                    value={form.taxNumber}
                    onChange={handleChange}
                    placeholder="Enter Tax ID Number"
                  />
                </div>
              </>
            )}
            <p className="margin-b-10 text-gray-300">Source of Income</p>
            <div className="form-group margin-b-10">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Select main source of income</label>
              <select
                className="form-select form-control w-100 f-size-12 fw-medium"
                name="incomeType"
                value={form.incomeType}
                onChange={handleChange}
              >
                <option value="">Select main source of income</option>
                {incomeSources.map((item) => (
                  <option key={item.Value} value={item.Value}>{item.DisplayName}</option>
                ))}
              </select>
            </div>
            <div className="form-group margin-b-20">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Amount received per month</label>
              <div className="position-relative w-100">
                <input
                  className="form-control f-size-12 fw-medium text-right"
                  name="amount"
                  value={form.amount}
                  onChange={handleAmountChange}
                  placeholder="Enter Amount"
                />
                <span className="control-sign r-sign f-size-12 fw-medium text-gray-300">R</span>
              </div>
            </div>
            <a
              className="f-size-12 margin-b-20 text-primary fw-semibold text-link d-block"
              href="#"
              onClick={(e) => { e.preventDefault(); setShowPopup(true); }}
            >
              Public official
            </a>
            <div className="form-group d-flex align-items-center justify-content-between">
              <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
              <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" type="button" onClick={NextStep}>Continue</button>
            </div> 
          </form>
          {/* You can implement the declaration information popup as a separate component if needed */}
          {showPopup && (
            <div className="modal">Declaration information popup here. <button onClick={() => setShowPopup(false)}>Close</button></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KycDeclaration;