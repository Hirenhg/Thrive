import React, { useState } from "react";
import NetworkProvider from '../../NetworkProvider';

const Airtime = ({ selectedProvider }) => {
    const [topupMethod, setTopupMethod] = useState("VOUCHER");

    const handleChange = (value) => {
        setTopupMethod(value);
        console.log("Selected Topup Method:", value);
    };

    const isDirectTopupVisible =
        !selectedProvider?.name || !selectedProvider.isRingasProvider;

  return (
    <div className="airtime-contant">
      <h6 className="margin-b-20 text-primary f-size-20 fw-medium">Airtime</h6>
      <div className="divider margin-b-20"></div>
      <div className='airtime-network-block'>
        <NetworkProvider />
        <div className="bundle-network-block margin-b-30">
          <div className="margin-b-20 text-primary f-size-14">
            Select top up method
          </div>
          <div
            className="select-bundle-network-grid d-grid margin-b-20"
            role="radiogroup"
            aria-label="Select bundle"
          >
            <label className="bundle-network-radio" tabIndex="0">
              <input
                type="radio"
                name="topupMethod"
                value="VOUCHER"
                checked={topupMethod === "VOUCHER"}
                onChange={() => handleChange("VOUCHER")}
                aria-checked={topupMethod === "VOUCHER"}
              />
              <span className="position-relative bg-white border-ea border-radius-14 padding-40 text-center select-bundle-network w-100">
                <div className="mb-3">
                  <span className="icon ico-direct-topup"></span>
                </div>
                <div className="f-size-18 text-primary text-capitalize fw-medium">
                  Voucher
                </div>
              </span>
            </label>

            {isDirectTopupVisible && (
              <label className="bundle-network-radio" tabIndex="0">
                <input
                  type="radio"
                  name="topupMethod"
                  value="DIRECT"
                  checked={topupMethod === "DIRECT"}
                  onChange={() => handleChange("DIRECT")}
                  aria-checked={topupMethod === "DIRECT"}
                />
                <span className="position-relative bg-white border-ea border-radius-14 padding-40 text-center select-bundle-network w-100">
                  <div className="mb-3">
                    <span className="icon ico-direct-topup"></span>
                  </div>
                  <div className="f-size-18 text-primary text-capitalize fw-medium">
                    Direct Top Up
                  </div>
                </span>
              </label>
            )}
          </div>
        </div>
        <div className="btns text-end">
          <button className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Airtime;