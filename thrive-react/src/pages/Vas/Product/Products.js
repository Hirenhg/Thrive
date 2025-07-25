import React, { useState } from 'react';
import Airtime from './Airtime/Airtime';
import Data from './Data/Data';
import Electricity from './Electricity/Electricity';
import Entertainment from './Entertainment/Entertainment';
import BillPayment from './BillPayment/BillPayment';

const categories = [
  { TabUrl: 'vas-airtime', IconClass: 'ico-airtime', Description: 'Airtime' },
  { TabUrl: 'vas-data', IconClass: 'ico-data', Description: 'Data' },
  { TabUrl: 'vas-electricity', IconClass: 'ico-electricity', Description: 'Electricity' },
  { TabUrl: 'vas-entertainment', IconClass: 'ico-gaming', Description: 'Entertainment' },
  { TabUrl: 'vas-billpayments', IconClass: 'ico-vas-voucher', Description: 'Bill Payments' },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState(categories[0].TabUrl);

  return (
    <div className="vas-main">
      <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
        <div className="d-flex align-items-center" onClick={() => window.history.back()} style={{ cursor: 'pointer' }}>
          <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0 d-flex align-items-center justify-content-center">
            <i className="icon ico-back"></i>
          </div>
          <h6 className="mb-0 text-primary fw-medium text-capitalize">Back</h6>
        </div>
      </div>
      <div className="bg-white border-radius-14 w-100 contant-detail-box vas-detail-box rounder-sm-0">
      <div className='d-flex flex-column flex-md-row'>
        <div className="vas-detail-tabs-col margin-r-30 h-100">
          <div className="nav nav-pills flex-column w-100" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {categories.map((category) => (
              <button
                key={category.TabUrl}
                className={`nav-link rounded-0 text-primary f-size-12 fw-medium text-start d-flex align-items-center text-capitalize ${activeTab === category.TabUrl ? 'active' : ''}`}
                type="button"
                role="tab"
                aria-controls={`pills-${activeTab}`}
                aria-selected={activeTab === category.TabUrl}
                onClick={() => setActiveTab(category.TabUrl)}
              >
                <i className={`tab-icon ${category.IconClass} mx-1`}></i>
                <span className="mx-1">{category.Description}</span>
              </button>
            ))}
          </div>
        </div>
        <div className='vas-feature-content-col'>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" role="tabpanel" aria-labelledby={`pills-${activeTab}-tab`} tabIndex={0}>
              {(() => {
                switch (activeTab) {
                  case 'vas-airtime':
                    return <Airtime/>;
                  case 'vas-data':
                    return <Data/>;
                  case 'vas-electricity':
                    return <Electricity/>;
                  case 'vas-entertainment':
                    return <Entertainment/>;
                  case 'vas-billpayments':
                    return (<BillPayment/>);
                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Products;