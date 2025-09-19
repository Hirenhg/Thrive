import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopUp = () => {
  const handleBackClicked = () => {
    window.history.back();
  };

  return (
    <div className="vas-topup-main">
      <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading">
        <div className="d-flex align-items-center">
          <div
            className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 p-0 d-flex align-items-center justify-content-center cursor-pointer"
            onClick={handleBackClicked}
          >
            <i className="icon ico-back"></i>
          </div>
          <h6 className="mb-0 text-primary fw-medium text-capitalize">
            Account transfer
          </h6>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-4 pt-2">
        <div className="w-100 mw-sm-340 topup-block">
          <div className="bg-primary border-radius-14 w-100 wallet-box rounder-sm-0 padding-30 margin-b-20 text-center">
            <h5 className="text-white fw-medium mb-2">Thrive account</h5>
            <div className="f-size-10 text-gray-400 fw-semibold text-uppercase mb-2">
              Available Amount
            </div>
            <h2 className="text-white fw-medium mb-0">
              R848,609<span className="fs-3">.57</span>
            </h2>
          </div>
          <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative topup-form-box">
            <div className="topup-form">
              <a className="cursor-pointer f-size-12 text-blue fw-semibold text-link m-auto mb-4 text-center d-block">
                switch
              </a>
              <div className="bg-primary rounded padding-10 margin-b-30 d-flex align-items-center">
                <div className="bg-white rounded iconbox w-sm-40 p-0">
                  <i className="icon-img icon-vas"></i>
                </div>
                <div className="margin-l-10">
                  <div className="f-size-20 text-white fw-medium">
                    VAS wallet
                  </div>
                  <div className="f-size-14 text-white amount-text">
                    R43,241<span>.68</span>
                  </div>
                </div>
              </div>
              <div className="form-group margin-b-10 text-center">
                <label className="f-size-10 text-gray-400 margin-b-10 text-center text-uppercase w-100">
                  How much would you like to transfer?
                </label>
                <input
                  id="paymentAmount"
                  type="number"
                  className="form-control fw-medium text-center"
                  placeholder="R 0.00"
                />
              </div>
              <div className="form-group">
                <Link to="/bank-transfer-form" className=" btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center">
                  Next <i className="arrow-right margin-l-10"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUp;
