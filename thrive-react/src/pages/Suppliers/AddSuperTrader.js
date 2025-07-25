import React, { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import axios from 'axios';

const AddSuperTrader = () => {
  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Example supplier ID to fetch (can be from route param or props)
  const supplierId = 1;

  // Fetch supplier data (you can also use useParams() from react-router if needed)
  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const response = await axios.get(`/api/suppliers/${supplierId}`);
        setSupplier(response.data);
      } catch (error) {
        console.error('Error fetching supplier:', error);
        setErrorMessage('Failed to load supplier information.');
      } finally {
        setLoading(false);
      }
    };

    fetchSupplier();
  }, [supplierId]);

  const handleAddSuperTrader = async () => {
    setSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post(`/api/super-traders`, {
        supplierId: supplier?.id
      });

      setSuccessMessage('Super trader added successfully!');
    } catch (error) {
      console.error('Error adding super trader:', error);
      setErrorMessage('Failed to add super trader.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="text-center p-4">Loading supplier...</div>;

  return (
    <div className="add-super-trader-main">
      <div className='margin-b-20 page-heading'>
        <PageHeading PageHeadingName="Supplier" iconClassName="ico-back" iconTo="/Suppliers" />
      </div>

      <div className="center-block mw-sm-340 m-auto">
        <div className="bg-white border-ea border-radius-14 padding-30 w-100 add-super-trader-form-box">
          <div className="add-super-trader-form">
            <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
              <div className="bg-gray-100 rounded iconbox-large w-sm-60 p-0">
                <i className="icon-img ico-super-trader"></i>
              </div>
              <div className="margin-l-10">
                <div className="f-size-12 text-primary text-capitalize fw-medium">
                  {supplier?.name || 'Unnamed Supplier'}
                </div>
                <div className="f-size-10 text-gray-400 name-subtext text-break">
                  {supplier?.type || 'Supplier'}
                </div>
              </div>
            </div>

            {successMessage && (
              <div className="alert alert-success f-size-12 margin-b-10">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="alert alert-danger f-size-12 margin-b-10">{errorMessage}</div>
            )}

            <div className="form-group">
              <button
                className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"
                onClick={handleAddSuperTrader}
                disabled={submitting}
              >
                {submitting ? 'Adding...' : 'Add super trader'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSuperTrader;