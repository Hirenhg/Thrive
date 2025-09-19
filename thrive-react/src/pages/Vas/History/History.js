import React, { useState } from "react";
import Sales from "./Sales";
import Transfers from "./Transfers";

const VasHistory = () => {
    const [activeTab, setActiveTab] = useState("sales");

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
          <div className="vas-feature-col">
            <div className="flex-grow-1 d-flex flex-column">
              <div className="nav nav-pills detail-tabs bg-gray-200 p-1 rounded margin-b-30">
                <button
                  className={`nav-link f-size-12 fw-medium ${activeTab === "sales" ? "active" : ""}`}
                  onClick={() => setActiveTab("sales")}
                >
                  Sales
                </button>
                <button
                  className={`nav-link f-size-12 fw-medium ${activeTab === "transfers" ? "active" : ""}`}
                  onClick={() => setActiveTab("transfers")}
                >
                  Transfers
                </button>
              </div>
              <div className="tab-content">
                {activeTab === "sales" && <Sales />}
                {activeTab === "transfers" && <Transfers />}
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default VasHistory;
