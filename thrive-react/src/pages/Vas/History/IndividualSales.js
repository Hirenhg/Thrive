import React from 'react';
import Pagination from '../../../components/Pagination/Pagination';

const IndividualSales = () => {
  return (
    <div className="individual-sales-main">
      <div className="margin-b-20 full-grid">
        <span className="network-card ott border-radius-6 text-center" style={{ background: "#1F50B2" }}>
          <a className="network-logo">
            <img alt="ott-logo" src="https://stthriveglobal.blob.core.windows.net/vasimages/banner/DSTV.svg" className="object-fit-contain" />
          </a>
        </span>
      </div>
      <div className="mb-3 text-primary fw-medium">Individual sales</div>
      <div className="vas-history-list" id="VasHistoryList">
        <ul className="history-list-title d-grid align-items-center pb-3">
          <li className="f-size-12 text-gray-300 text-nowrap">Trade Date</li>
          <li className="f-size-12 text-gray-300 text-nowrap text-center">
            Sale amount
          </li>
          <li className="f-size-12 text-gray-300 text-nowrap text-right">
            Commission Accrued
          </li>
          <li></li>
        </ul>
        <div className="history-list-content-block">
          <div
            className="history-list-data accordion margin-b-20"
            id="accordion-history-individual"
          >
            <div className="accordion-item border-0">
              <div className="accordion-header" id="headingOne">
                <div className="list-item-row d-grid align-items-center">
                  <span className="f-size-14 text-primary fw-medium text-nowrap">
                    12 September 2025
                  </span>
                  <span className="f-size-12 text-gray-300 fw-medium text-center">
                    R20.00
                  </span>
                  <span className="f-size-12 text-gray-300 fw-medium text-end">
                    R6.00
                  </span>
                  <span>
                    <button
                      className="accordion-button border-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    ></button>
                  </span>
                </div>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion-history-individual"
              >
                <div className="accordion-body p-3">
                  <div className="sale-item d-grid align-items-center">
                    <div className="d-flex align-items-center">
                      <span
                        className="network-card mtn border-radius-6 text-center margin-r-10"
                        style={{ flex: "0 0 45px" }}
                      >
                        <a className="network-logo">
                          <img
                            alt="DSTV-logo"
                            src="https://stthriveglobal.blob.core.windows.net/vasimages/profile/DSTV.svg"
                           className='w-100'
                          />
                        </a>
                      </span>
                      <div className="sale-info">
                        <div className="item-name f-size-10 text-gray-300 fw-medium pb-1 text-capitalize">
                          DSTV
                        </div>
                        <a
                          style={{ cursor: "pointer" }}
                          className="f-size-12 fw-semibold text-underline"
                        >
                          Share
                        </a>
                      </div>
                    </div>
                    <div className="sale-amount f-size-10 text-gray-300 fw-medium text-center">
                      R20.00
                    </div>
                    <div className="text-end">
                      <div className="sale-commission f-size-10 text-gray-300 fw-medium ">
                        R6.00
                      </div>
                      <div className="sale-date f-size-10 text-gray-300 fw-medium">
                        12 September 2025 | 08:44
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination TotalCount="1 to 10 of 11" pgIndex={"1" || "2"  || "3"  || "4"} />    </div>
  );
};

export default IndividualSales;

