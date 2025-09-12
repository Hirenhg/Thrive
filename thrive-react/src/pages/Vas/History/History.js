import React from "react";

const VasHistory = () => {
  return (
    <div className="vas-main">
      <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
        <div className="d-flex align-items-center">
          <div className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0 d-flex align-items-center justify-content-center">
            <i className="icon ico-documents"></i>
          </div>
          <h6 className="mb-0 text-primary fw-medium text-capitalize">
            VAS history
          </h6>
        </div>
      </div>

      <div className="bg-white border-radius-14 w-100 contant-detail-box vas-detail-box rounder-sm-0">
        <div className="d-flex flex-column flex-md-row">
          {/* Filter Section */}
          <div className="vas-filter-box-col padding-20 margin-r-30 h-100 bg-gray-100 border-radius-6 border-ea">
            <h6 className="margin-b-20 text-primary f-size-20">Filter by Date</h6>
            <div className="divider margin-b-20"></div>
            <div className="filter-form-details">
              <form method="post" className="w-100">
                <div className="form-group margin-b-10">
                  <label
                    htmlFor="startDate"
                    className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20"
                  >
                    Start Date
                  </label>
                  <input
                    placeholder="DD/MM/YYYY"
                    type="date"
                    name="HistoryDateFilterViewModel.StartDate"
                    className="form-control f-size-12 fw-medium"
                  />
                </div>

                <div className="form-group margin-b-20">
                  <label
                    htmlFor="endDate"
                    className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20"
                  >
                    End Date
                  </label>
                  <input
                    placeholder="DD/MM/YYYY"
                    type="date"
                    name="HistoryDateFilterViewModel.EndDate"
                    className="form-control f-size-12 fw-medium"
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded f-size-12 fw-medium"
                  >
                    View
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sales Section */}
          <div className="vas-feature-col flex-grow-1 d-flex flex-column">
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

              {/* Accordion Example */}
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
                                  style={{ objectFit: "contain" }}
                                />
                              </a>
                            </span>
                            <div className="sale-info">
                              <div className="item-name f-size-10 text-gray-300 fw-medium pb-1 text-capitalize">
                                DSTV sales
                              </div>
                              <a
                                style={{ cursor: "pointer" }}
                                className="f-size-12 fw-semibold text-underline"
                              >
                                View items
                              </a>
                            </div>
                          </div>
                          <div className="sale-amount f-size-10 text-gray-300 fw-medium text-center">
                            R20.00
                          </div>
                          <div className="sale-commission f-size-10 text-gray-300 fw-medium text-end">
                            R6.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Repeat accordion items dynamically here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default VasHistory;
