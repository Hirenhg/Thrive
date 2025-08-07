import React, { useState } from 'react';

const Verification = ({ NextStep, PreviousStep}) => {
  const [form, setForm] = useState({
    IDNumber: '',
    Title: 'Mr',
    Name: '',
    Surname: '',
    DateOfBirth: '',
    CountryOfBirth: '',
    CountryOfResidence: '',
  });

  // Placeholder country list
  const countries = [
    { Alpha2: 'ZA', Name: 'South Africa' },
    { Alpha2: 'US', Name: 'United States' },
    { Alpha2: 'GB', Name: 'United Kingdom' },
    // Add more countries as needed
  ];

  // Simple validation (placeholder)
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const handleNext = (e) => {
  //   e.preventDefault();
  //   let newErrors = {};
  //   if (!form.IDNumber) newErrors.IDNumber = 'ID Number is required';
  //   if (!form.Name) newErrors.Name = 'Name is required';
  //   if (!form.Surname) newErrors.Surname = 'Surname is required';
  //   if (!form.DateOfBirth) newErrors.DateOfBirth = 'Date of Birth is required';
  //   if (!form.CountryOfBirth) newErrors.CountryOfBirth = 'Country of Birth is required';
  //   if (!form.CountryOfResidence) newErrors.CountryOfResidence = 'Country of Residence is required';
  //   setErrors(newErrors);
  //   if (Object.keys(newErrors).length === 0 && onNext) onNext();
  // };

  // const handleBack = (e) => {
  //   e.preventDefault();
  //   if (onBack) onBack();
  // };

  return (
    <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0">
      <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-550 kyc-box">
        <div className="w-100 identity-details">
          <div className="margin-b-30 logo">
            <img alt="logo" src="./assets/logo.svg" />
          </div>
          <h4 className="margin-b-10 text-primary fw-medium d-flex align-items-center justify-content-between">Verification</h4>
          <p className="margin-b-30 text-gray-300">Identity details</p>
          <form className="kyc-form" noValidate>
            <div className="f-size-12 text-primary fw-semibold margin-b-10">
              Confirm the details below are the same as on your document
            </div>
            <div className="form-group margin-b-10">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">ID Number</label>
              <input
                className="form-control f-size-12 fw-medium"
                name="IDNumber"
                value={form.IDNumber}
                onChange={handleChange}
                placeholder="ID number"
              />
              {errors.IDNumber && <div className="f-size-12 pt-1 text-error">{errors.IDNumber}</div>}
            </div>
            <div className="form-group-row d-sm-flex justify-content-sm-between">
              <div className="form-group margin-b-10 w-100 me-sm-1 mw-sm-150">
                <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Title</label>
                <select
                  className="form-select form-control f-size-12 fw-medium"
                  name="Title"
                  value={form.Title}
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
                  name="Name"
                  value={form.Name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                {errors.Name && <div className="f-size-12 pt-1 text-error">{errors.Name}</div>}
              </div>
            </div>
            <div className="form-group margin-b-10">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Surname</label>
              <input
                className="form-control f-size-12 fw-medium"
                name="Surname"
                value={form.Surname}
                onChange={handleChange}
                placeholder="Surname"
              />
              {errors.Surname && <div className="f-size-12 pt-1 text-error">{errors.Surname}</div>}
            </div>
            <div className="form-group margin-b-10 w-100 ms-sm-1">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Date of Birth</label>
              <input
                type="date"
                className="form-control f-size-12 fw-medium"
                name="DateOfBirth"
                value={form.DateOfBirth}
                onChange={handleChange}
                placeholder="Date Of Birth"
                min="1900-01-01"
                max="2099-12-31"
              />
              {errors.DateOfBirth && <div className="f-size-12 pt-1 text-error">{errors.DateOfBirth}</div>}
            </div>
            <div className="form-group margin-b-10">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Country of Birth</label>
              <select
                className="form-select form-control w-100 f-size-12 fw-medium text-gray-400"
                name="CountryOfBirth"
                value={form.CountryOfBirth}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                {countries.map((item) => (
                  <option key={item.Alpha2} value={item.Alpha2}>{item.Name}</option>
                ))}
              </select>
              {errors.CountryOfBirth && <div className="f-size-12 pt-1 text-error">{errors.CountryOfBirth}</div>}
            </div>
            <div className="form-group margin-b-30">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Country of Residence</label>
              <select
                className="form-select form-control w-100 f-size-12 fw-medium text-gray-400"
                name="CountryOfResidence"
                value={form.CountryOfResidence}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                {countries.map((item) => (
                  <option key={item.Alpha2} value={item.Alpha2}>{item.Name}</option>
                ))}
              </select>
              {errors.CountryOfResidence && <div className="f-size-12 pt-1 text-error">{errors.CountryOfResidence}</div>}
            </div>
          <div className="form-group d-flex align-items-center justify-content-between">
              <button className="btn btn-outline border border-gray-200 w-100 rounded f-size-12 fw-medium text-center margin-r-10" onClick={PreviousStep}>Back</button>
              <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" type="button" onClick={NextStep}>Continue</button>
            </div> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
