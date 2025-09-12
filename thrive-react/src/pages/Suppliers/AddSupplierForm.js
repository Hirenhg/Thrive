import React, { useState } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import axios from 'axios';

const AddSupplierForm = () => {
  const [customerNumber, setCustomerNumber] = useState('');
  const [useCustomReference, setUseCustomReference] = useState(false);
  const [customReference, setCustomReference] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Example supplier
  const supplier = {
    id: 1,
    name: 'Distell',
    description: 'Business, Consumer goods, 15 Nollsworth Crescent, Nollsworth Park, Kwazulu Natal, South Africa, 4051',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await axios.get('/api/suppliers/addSupplier.json');
      if (response.data.status === 'success') {
        setSuccessMsg(response.data.message);
        setCustomerNumber('');
        setCustomReference('');
        setUseCustomReference(false);
      } else {
        setErrorMsg('Something went wrong.');
      }
    } catch (error) {
      console.error('Error linking supplier:', error);
      setErrorMsg('Failed to link supplier. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-suppliers-form-main">
      <div className="margin-b-20 page-heading">
        <PageHeading PageHeadingName="Add Distell" iconClassName="ico-back" iconTo="/add-supplier" />
      </div>

      <div className="d-flex align-items-center justify-content-center p-sm-3 m-sm-1">
        <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 suppliers-form-box">
          <form className="w-100 suppliers-form" onSubmit={handleSubmit}>
            <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
              <div className="bg-gray-200 rounded iconbox-large w-sm-60 p-0">
                <i className="icon-img icon-placeholder"></i>
              </div>
              <div className="margin-l-10">
                <div className="f-size-12 text-primary text-capitalize fw-medium">{supplier.name}</div>
                <div className="f-size-10 text-gray-400 name-subtext text-break">{supplier.description}</div>
              </div>
            </div>

            {successMsg && <div className="alert alert-success f-size-12 margin-b-10">{successMsg}</div>}
            {errorMsg && <div className="alert alert-danger f-size-12 margin-b-10">{errorMsg}</div>}

            <div className="form-group margin-b-20">
              <label htmlFor="txtCustomerNumber" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                Customer number & payment reference
              </label>
              <input
                type="text"
                id="txtCustomerNumber"
                className="form-control f-size-12 fw-medium"
                placeholder="12345 or 123456"
                value={customerNumber}
                onChange={(e) => setCustomerNumber(e.target.value)}
                required
              />
            </div>

            <div className="d-flex align-items-center margin-b-20">
              <div className="custom-checkbox d-flex align-items-center">
                <input
                  type="checkbox"
                  id="checkbox-reference"
                  className="checkbox d-none"
                  checked={useCustomReference}
                  onChange={() => setUseCustomReference(!useCustomReference)}
                />
                <label htmlFor="checkbox-reference" className="d-flex align-items-center position-relative">
                  <span className="f-size-12 text-gray-300 margin-l-10">Use custom payment reference</span>
                </label>
              </div>
            </div>

            {useCustomReference && (
              <div className="form-group margin-b-20">
                <label htmlFor="txtPayReferenceNumber" className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
                  Custom payment reference
                </label>
                <input
                  type="text"
                  id="txtPayReferenceNumber"
                  className="form-control f-size-12 fw-medium"
                  value={customReference}
                  onChange={(e) => setCustomReference(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"
                disabled={loading}
              >
                {loading ? 'Linking...' : 'Link supplier'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSupplierForm;