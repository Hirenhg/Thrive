import React, { useState } from "react";
import { images } from "../../config/images";
import { Link } from "react-router-dom";

const BusinessAddress = ({ NextStep, PreviousStep }) => {
  const [formData, setFormData] = useState({
    tradingAddress: {
      street: "",
      suburb: "",
      city: "",
      postalCode: "",
      province: "",
    },
    registeredAddress: {
      street: "",
      suburb: "",
      city: "",
      postalCode: "",
      province: "",
    },
    isBothSame: "False", // ✅ Default to "No"
  });

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

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      isBothSame: value,
      registeredAddress:
        value === "True" ? { ...prev.tradingAddress } : prev.registeredAddress,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
        <div className="business-address-main w-100 company-address">
          <div className="margin-b-30 logo">
            <img alt="logo" src={images.Logo} />
          </div>
          <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">
            Business Setup <span className="fw-normal">2/3</span>
          </h4>
          <p className="margin-b-30 text-gray-300">Company address</p>

          <form onSubmit={handleSubmit}>
            <div className="kyc-form">
              {/* ✅ Trading Address */}
              <div className="form-group margin-b-10 position-relative">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                  Trading Address
                </label>
                <input
                  placeholder="Street Name & Number"
                  name="street"
                  className="form-control f-size-12 fw-medium"
                  value={formData.tradingAddress.street}
                  onChange={(e) => handleChange(e, "tradingAddress")}
                />
              </div>

              <div className="form-group-row d-sm-flex justify-content-sm-between">
                <div className="form-group margin-b-10 w-100 me-sm-1">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                    Suburb
                  </label>
                  <input
                    placeholder="Suburb"
                    name="suburb"
                    className="form-control f-size-12 fw-medium"
                    value={formData.tradingAddress.suburb}
                    onChange={(e) => handleChange(e, "tradingAddress")}
                  />
                </div>
                <div className="form-group margin-b-10 w-100 ms-sm-1">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                    City
                  </label>
                  <input
                    placeholder="City"
                    name="city"
                    className="form-control f-size-12 fw-medium"
                    value={formData.tradingAddress.city}
                    onChange={(e) => handleChange(e, "tradingAddress")}
                  />
                </div>
              </div>

              <div className="form-group-row d-sm-flex justify-content-sm-between margin-b-10">
                <div className="form-group margin-b-10 w-100 me-sm-1">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                    Postal Code
                  </label>
                  <input
                    placeholder="Postal Code"
                    name="postalCode"
                    className="form-control f-size-12 fw-medium"
                    value={formData.tradingAddress.postalCode}
                    onChange={(e) => handleChange(e, "tradingAddress")}
                  />
                </div>
                <div className="form-group margin-b-10 w-100 ms-sm-1">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                    Province
                  </label>
                  <select
                    name="province"
                    className="form-select form-control w-100 f-size-12 fw-medium"
                    value={formData.tradingAddress.province}
                    onChange={(e) => handleChange(e, "tradingAddress")}
                  >
                    <option value="">Select province</option>
                    {provinces.map((p, idx) => (
                      <option key={idx} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ✅ Radio Buttons */}
              <div className="form-group margin-b-20">
                <label className="form-label text-primary fw-medium f-size-12 line-height-20 margin-b-10">
                  Is Registered Address same as Trading Address?
                </label>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center me-2">
                    <div className="custom-radio d-flex align-items-center">
                      <input
                        id="Yes"
                        type="radio"
                        name="isBothSame"
                        className="radio d-none"
                        value="True"
                        checked={formData.isBothSame === "True"}
                        onChange={() => handleRadioChange("True")}
                      />
                      <label htmlFor="Yes" className="d-flex align-items-center position-relative">
                        <span className="f-size-12 text-gray-300 margin-l-10">Yes</span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex align-items-center me-2">
                    <div className="custom-radio d-flex align-items-center">
                      <input
                        id="No"
                        type="radio"
                        name="isBothSame"
                        className="radio d-none"
                        value="False"
                        checked={formData.isBothSame === "False"}
                        onChange={() => handleRadioChange("False")}
                      />
                      <label htmlFor="No" className="d-flex align-items-center position-relative">
                        <span className="f-size-12 text-gray-300 margin-l-10">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* ✅ Show Registered Address ONLY if "No" */}
              {formData.isBothSame === "False" && (
                <>
                  <div className="margin-b-10">
                    <Link className="f-size-12 text-blue text-decortion">Share my location</Link>
                  </div>

                  <div className="form-group margin-b-10 position-relative">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                      Registered Address
                    </label>
                    <input
                      placeholder="Street Name & Number"
                      name="street"
                      className="form-control f-size-12 fw-medium"
                      value={formData.registeredAddress.street}
                      onChange={(e) => handleChange(e, "registeredAddress")}
                    />
                  </div>

                  <div className="form-group-row d-sm-flex justify-content-sm-between">
                    <div className="form-group margin-b-10 w-100 me-sm-1">
                      <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                        Suburb
                      </label>
                      <input
                        placeholder="Suburb"
                        name="suburb"
                        className="form-control f-size-12 fw-medium"
                        value={formData.registeredAddress.suburb}
                        onChange={(e) => handleChange(e, "registeredAddress")}
                      />
                    </div>
                    <div className="form-group margin-b-10 w-100 ms-sm-1">
                      <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                        City
                      </label>
                      <input
                        placeholder="City"
                        name="city"
                        className="form-control f-size-12 fw-medium"
                        value={formData.registeredAddress.city}
                        onChange={(e) => handleChange(e, "registeredAddress")}
                      />
                    </div>
                  </div>

                  <div className="form-group-row d-sm-flex justify-content-sm-between margin-b-10">
                    <div className="form-group margin-b-10 w-100 me-sm-1">
                      <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                        Postal Code
                      </label>
                      <input
                        placeholder="Postal Code"
                        name="postalCode"
                        className="form-control f-size-12 fw-medium"
                        value={formData.registeredAddress.postalCode}
                        onChange={(e) => handleChange(e, "registeredAddress")}
                      />
                    </div>
                    <div className="form-group margin-b-10 w-100 ms-sm-1">
                      <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                        Province
                      </label>
                      <select
                        name="province"
                        className="form-select form-control w-100 f-size-12 fw-medium"
                        value={formData.registeredAddress.province}
                        onChange={(e) => handleChange(e, "registeredAddress")}
                      >
                        <option value="">Select province</option>
                        {provinces.map((p, idx) => (
                          <option key={idx} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* ✅ Navigation */}
              <div className="form-group d-flex align-items-center justify-content-between">
                <button
                  className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10"
                  onClick={PreviousStep}
                >
                  Back
                </button>
                <button onClick={NextStep} type="submit" className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                  Next <i className="arrow-right mx-2"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessAddress;
