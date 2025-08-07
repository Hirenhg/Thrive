import React, { useState, useEffect } from 'react';
import VasBalance from './VasBalance';
import Summary from './Summary';
import FrequentlyBoughts from './FrequentlyBoughts';
import { Link} from "react-router-dom";

const Vas = () => {
  const [activeTab, setActiveTab] = useState('products');
  
  return (
    <div className="vas-main">
      <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
        <div className="d-flex align-items-center">
          <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0 d-flex align-items-center justify-content-center">
            <i className="icon ico-vas"></i>
          </div>
          <h6 className="mb-0 text-primary fw-medium text-capitalize">Vas</h6>
        </div>
      </div>
      <div className="bg-white border-radius-14 w-100 contant-detail-box vas-detail-box rounder-sm-0">
        <div className="d-flex flex-column flex-lg-row">
          <VasBalance />
          <div className="vas-feature-col">
            <div className="nav nav-pills detail-tabs bg-gray-200 p-1 rounded margin-b-20" id="pills-tab" role="tablist">
              <button className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === 'products' ? 'active' : ''}`} id="pills-vas-products-tab" type="button" role="tab" onClick={() => setActiveTab('products')}>VAS products</button>
              <button className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === 'summary' ? 'active' : ''}`} id="pills-vas-summary-tab" type="button" role="tab" onClick={() => setActiveTab('summary')}>Summary</button>
            </div>
            <div className="divider margin-b-20"></div>
            <div className="tab-content" id="pills-tabContent">
              {activeTab === 'products' && (
                <div className="tab-pane fade active show" id="pills-vas-products" role="tabpanel" aria-labelledby="pills-vas-products-tab" tabIndex={0}>
                  <div className="flex-grow-1 d-flex flex-column">
                    <div className="d-grid margin-b-20 product-list-grid">
                        <Link to="/" className="bg-white border-radius-14 w-100 d-flex align-items-center product-card">
                          <span className="icon-circle"><i className="icon ico-airtime"></i></span>
                          <label className="product-name text-primary fw-medium">Airtime</label>
                        </Link>
                          <Link to="/" className="bg-white border-radius-14 w-100 d-flex align-items-center product-card">
                          <span className="icon-circle"><i className="icon ico-gaming"></i></span>
                          <label className="product-name text-primary fw-medium">Entertainment</label>
                        </Link>
                          <Link to="/" className="bg-white border-radius-14 w-100 d-flex align-items-center product-card">
                          <span className="icon-circle"><i className="icon ico-data"></i></span>
                          <label className="product-name text-primary fw-medium">Data</label>
                        </Link>
                          <Link to="/" className="bg-white border-radius-14 w-100 d-flex align-items-center product-card">
                          <span className="icon-circle"><i className="icon ico-vas-voucher"></i></span>
                          <label className="product-name text-primary fw-medium">Bill Payments</label>
                        </Link>
                          <Link to="/" className="bg-white border-radius-14 w-100 d-flex align-items-center product-card">
                          <span className="icon-circle"><i className="icon ico-electricity"></i></span>
                          <label className="product-name text-primary fw-medium">Electricity</label>
                        </Link>
                    </div>
                    <div className="divider margin-b-20" />
                    <FrequentlyBoughts />
                  </div>
                </div>
              )}
              {activeTab === 'summary' && <Summary />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vas;