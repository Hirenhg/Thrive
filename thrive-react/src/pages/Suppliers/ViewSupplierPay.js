import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SupplierHistory from './SupplierHistory';
import PageHeading from '../../components/PageHeading/PageHeading';
import { Link, useLocation, useParams } from 'react-router-dom';

const ViewSupplierPay = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("pay");
  const [supplierData, setSupplierData] = useState(null);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/suppliers/suppliers.json');
        setSupplierData(res.data);
        setBalance(res.data.balance);
      } catch (err) {
        console.error("Error fetching supplier data", err);
      }
    };
    fetchData();
  }, []);

  const handleNext = () => {
    if (amount > 0) setShowConfirm(true);
  };

  const handlePayNow = async () => {
    try {
      await axios.post('/api/supplier/pay', {
        supplierId: supplierData.id,
        amount,
      });
      alert('Payment Successful');
      setAmount('');
      setShowConfirm(false);
    } catch (err) {
      console.error("Payment failed", err);
    }
  };
  
  if (!supplierData) return <div>Loading...</div>;

  return (
    <div className="view-supplier-pay-main">
      <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
        <PageHeading PageHeadingName="Alpha Traders" iconClassName="ico-back" iconTo="/Suppliers" />
        <div className="nav nav-pills heading-tabs bg-gray-200 p-1 rounded">
          {["pay", "history", "info"].map(tab => (
            <button
              key={tab}
              className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === tab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                setShowConfirm(false);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "pay" && (
          <div className="tab-pane fade show active">
            <div className="w-100 mw-sm-340 view-supplier-contant view-supplier-pay-contant center-block">
              <div className="bg-primary border-radius-14 w-100 balance-box rounder-sm-0 padding-30 margin-b-20 text-center">
                <h5 className="text-white fw-medium mb-2">Balance</h5>
                <div className="f-size-10 text-gray-400 fw-semibold text-uppercase mb-2">Available Amount</div>
                {/* <h2 className="f-size-10 text-gray-400 fw-semibold text-uppercase mb-2">R{balance.toFixed(2)}</h2> */}
                <h2 className="text-white fw-medium mb-2">R100<span className="fs-4">.24</span></h2>
              </div>

              {!showConfirm ? (
                <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative supplier-pay-box">
                <div className='supplier-pay-form'>
                  <h5 className="text-primary text-center mb-3">Pay</h5>
                  <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
                    <div className="iconbox bg-gray-200 rounded w-sm-40 h-sm-40">
                      <i className="icon-img icon-placeholder"></i>
                    </div>
                    <div className="mx-2">{supplierData.name} Alpha Traders</div>
                  </div>
                  <div className="form-group text-center mb-3">
                    <label className="form-label text-gray-300 fw-semibold f-size-10">ENTER AMOUNT</label>
                    <input
                      type="number"
                      className="form-control fw-medium text-center"
                      placeholder="R 0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={!amount || parseFloat(amount) <= 0}
                    className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"
                  >
                    Next <i className="arrow-right margin-l-10" />
                  </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white border-ea border-radius-14 padding-30">
                  <h5 className="text-primary text-center mb-3">Confirm Payment</h5>
                  <div className="payment-logo d-flex justify-content-center mb-2 position-relative">
                    <span className="bg-primary iconbox rounded w-sm-40 text-white thrive-logo me-2">
                      <i className="icon-img ico-logo"></i>
                    </span>
                    <span className="bg-gray-200 iconbox rounded w-sm-40">
                      <i className="icon-img icon-placeholder"></i>
                    </span>
                  </div>
                  <div className="f-size-12 text-gray-300 text-center mb-2">You are about to pay {supplierData.name}</div>
                  <h2 className="text-primary text-center fw-medium">R{parseFloat(amount).toFixed(2)}</h2>
                  <button onClick={handlePayNow} className="btn btn-primary w-100 rounded f-size-12 fw-medium mb-2">Pay Now</button>
                  <button onClick={() => setShowConfirm(false)} className="btn btn-outline border border-ea f-size-12 fw-medium w-100 rounded">Edit</button>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === "history" && (
          <div className="tab-pane fade show active">
            <SupplierHistory supplierId={supplierData.id} />
          </div>
        )}
        {activeTab === "info" && (
          <div className="tab-pane fade show active">
            <div className="w-100 mw-sm-340 view-supplier-contant center-block">
              <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative supplier-info-box">
                <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
                  <div className="iconbox-large w-sm-60 p-0 bg-gray-200 rounded me-2">
                    <i className="icon-img icon-placeholder"></i>
                  </div>
                  <div>
                    <div className="f-size-12 text-primary fw-medium">{supplierData.name} CCBSA</div>
                    <div className="f-size-10 text-gray-400">{supplierData.address} 56 Kloof street, Contantia, Johannesburg, 2916</div>
                  </div>
                </div>
                <div className="margin-b-20 d-flex align-items-center justify-content-between call-number">
                  <div className='call-info'>
                    <strong className="f-size-12 text-primary">Number</strong>
                    <div className="text-gray-300 f-size-12">{supplierData.phone} 011 323 4232</div>
                  </div>
                  <Link to="tel:@SupplierPaymentModel.SupplierContact" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-call margin-r-10"></i> Call</Link>
                </div>
                <div className="margin-b-20">
                  <div className="hours-info">
                    <strong className="f-size-12 text-primary">Hours</strong>
                    <div className="text-gray-300 f-size-12">{supplierData.workingHours} Weekdays 8pm - 5pm <br />Saturdays & Sundays closed</div>
                  </div>
                </div>
                <div className="margin-b-20 d-flex align-items-center justify-content-between customer-id">
                  <div className='customer-info'>
                    <strong className="f-size-12 text-primary">Customer ID</strong>
                    <div className="text-blue f-size-12">{supplierData.customerId} 32 3213 1231 <i className="ico-check"></i></div>
                  </div>
                  <button id="btnCustomerID" type="button" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-edit margin-r-10"></i> Edit</button>
                </div>
                <div className="d-flex align-items-center justify-content-between reference-number">
                  <div className="reference-info">
                    <strong className="f-size-12 text-primary">Reference No.</strong>
                    <div className="text-blue f-size-12">{supplierData.paymentReference} 82347 897234 97239</div>
                  </div>
                  <button id="btnPayNumber" type="button" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-edit margin-r-10"></i> Edit</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewSupplierPay;
