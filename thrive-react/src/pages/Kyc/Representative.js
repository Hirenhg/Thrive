import React, { useState } from "react";

const Representative = ({ NextStep, PreviousStep }) => {
  const [form, setForm] = useState({
    isDirector: false,
    isShareHolder: false,
    sharePercentage: "",
    identityNumber: "",
    title: "Mr",
    name: "",
    surname: "",
    cellphoneNumber: "",
    dateOfBirth: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [sharePercentageMessage, setSharePercentageMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSharePercentageBlur = () => {
    if (form.isShareHolder && (!form.sharePercentage || isNaN(form.sharePercentage))) {
      setSharePercentageMessage("Please enter a valid percentage");
    } else {
      setSharePercentageMessage("");
    }
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
        <div className="w-100 personal-details">
          <div className="margin-b-30 logo">
            <img alt="logo" src={require("../../assets/logo.svg").default} />
          </div>
          <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">
            Business Representative <span className="fw-normal">1/2</span>
          </h4>
          <p className="margin-b-30 text-gray-300">Personal details</p>
          <form className="kyc-form" onSubmit={handleNext}>
            <div className="f-size-12 text-primary fw-semibold margin-b-10">
              Confirm role in the Business?
            </div>
            <div className="form-group-row d-sm-flex justify-content-sm-between">
              <div className="form-group checkbox-form-group margin-b-10 w-100 me-sm-1 ">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Director</label>
                <div className="custom-checkbox d-flex align-items-center">
                  <input
                    type="checkbox"
                    name="isDirector"
                    checked={form.isDirector}
                    onChange={handleChange}
                    className="checkbox d-none"
                    id="checkbox-director"
                  />
                  <label className="d-flex align-items-center position-relative" htmlFor="checkbox-director"></label>
                </div>
              </div>
              <div className="form-group checkbox-form-group margin-b-10 w-100 ms-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Shareholder</label>
                <div className="d-flex">
                  <div className="custom-checkbox d-flex align-items-center me-2">
                    <input
                      type="checkbox"
                      name="isShareHolder"
                      checked={form.isShareHolder}
                      onChange={handleChange}
                      className="checkbox d-none"
                      id="checkbox-shareholder"
                    />
                    <label className="d-flex align-items-center position-relative" htmlFor="checkbox-shareholder"></label>
                  </div>
                  {form.isShareHolder && (
                    <div className="position-relative w-100">
                      <input
                        className="form-control f-size-12 fw-medium"
                        placeholder="Enter Percentage"
                        name="sharePercentage"
                        value={form.sharePercentage}
                        onChange={handleChange}
                        onBlur={handleSharePercentageBlur}
                      />
                      <span className="control-sign f-size-12 fw-medium text-gray-300">%</span>
                    </div>
                  )}
                </div>
                {form.isShareHolder && sharePercentageMessage && (
                  <label className="f-size-12 pt-1 text-error">{sharePercentageMessage}</label>
                )}
              </div>
            </div>
            <div className="form-group margin-b-10">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Identity Number</label>
              <input
                className="form-control f-size-12 fw-medium"
                name="identityNumber"
                value={form.identityNumber}
                onChange={handleChange}
                placeholder="Identity number"
                type="text"
              />
            </div>
            <div className="form-group-row d-sm-flex justify-content-sm-between">
              <div className="form-group margin-b-10 w-100 me-sm-1 mw-sm-120">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Title</label>
                <select
                  className="form-select form-control w-100 f-size-12 fw-medium valid"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                >
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                </select>
              </div>
              <div className="form-group margin-b-10 w-100 ms-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Name</label>
                <input
                  className="form-control f-size-12 fw-medium"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group margin-b-10 w-100">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Surname</label>
              <input
                className="form-control f-size-12 fw-medium"
                name="surname"
                value={form.surname}
                onChange={handleChange}
                placeholder="Surname"
              />
            </div>
            <div className="form-group-row d-sm-flex justify-content-sm-between margin-b-20">
              <div className="form-group margin-b-10 w-100 me-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Cell Phone</label>
                <input
                  className="form-control f-size-12 fw-medium"
                  name="cellphoneNumber"
                  value={form.cellphoneNumber}
                  onChange={handleChange}
                  placeholder="Cell phone"
                />
              </div>
              <div className="form-group margin-b-10 w-100 ms-sm-1">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Date of Birth</label>
                <input
                  className="form-control f-size-12 fw-medium"
                  name="dateOfBirth"
                  value={form.dateOfBirth}
                  onChange={handleChange}
                  type="date"
                  min="1900-01-01"
                  max="2099-12-31"
                />
              </div>
            </div>
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

export default Representative;
