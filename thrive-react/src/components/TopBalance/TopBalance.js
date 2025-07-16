import React from "react";
import { Link } from "react-router-dom";

const TopBalance = ({
  availableAmount = 0,
  incomingAmount = 0,
  outgoingAmount = 0,
  availableAmountfractional = 20,
}) => {
  const formatAmount = (amount) => {
    return typeof amount === "number" ? amount.toLocaleString() : "0";
  };
  return (
    <div className="topbalance_main">
      <div className="bg-primary border-radius-14 w-100 balance-box rounder-sm-0 padding-30 margin-b-20">
        <div className="d-flex align-items-center justify-content-between margin-b-20">
          <h5 className="text-white fw-medium mb-0">Balance</h5>
          <div className="d-flex align-items-center btns">
            <button className="f-size-12 fw-medium btn btn-primary btn-primary-hover d-flex align-items-center justify-content-center">
              <span className="text-white fw-medium margin-r-10">
                Quick actions
              </span>
              <i className="icon ico-more"></i>
            </button>
          </div>
        </div>
        <div className="divider-dark margin-b-20"></div>
        <div className="d-grid balance-main-row">
          <div className="balance-amount-row">
            <div className="available-amount-col mb-0 mb-md-3">
              <div className="f-size-10 text-gray-400 fw-semibold text-uppercase pb-1">
                Available Amount
              </div>
                <h1 className="text-white fw-medium mb-0">
                    R{formatAmount(availableAmount)}
                    <span className="fs-3">
                    .{formatAmount(availableAmountfractional)}
                    </span>
                </h1>
            </div>

            <div className="d-flex mb-3 mb-md-0">
              <div className="incoming-col margin-r-30">
                <div className="f-size-10 text-gray-400 fw-semibold text-uppercase">
                    INCOMING
                </div>
                <div id="divIn" className="text-white">
                    R{formatAmount(incomingAmount)}
                </div>
              </div>
             <div className="outgoing-col">
              <div className="f-size-10 text-gray-400 fw-semibold text-uppercase">
                OUTGOING
              </div>
              <div id="divOut" className="text-white">
                R{formatAmount(outgoingAmount)}
              </div>
            </div>
            </div>
          </div>
          <div className="balance-bottom-row">
            <div className="pending-b-col mb-0 mb-md-3">
              <div className="f-size-10 text-secondary fw-semibold w-100 d-block text-uppercase pb-1">
                pending transaction balance
              </div>
              <h1 className="text-secondary fw-medium mb-0 w-100 d-block">
                R0<span className="fs-3">.00</span>
              </h1>
            </div>

            <div className="period-date-col">
              <div className="f-size-10 text-gray-400 fw-semibold w-100 d-block text-uppercase">
                Period
              </div>
              <div className="f-size-20 text-white w-100 d-block">
                15 Jul 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBalance;
