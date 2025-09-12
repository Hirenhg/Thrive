import React from "react";

const Electricity = () => {
  return (
    <div className="electricity-main">
      <h6 className="margin-b-20 text-primary f-size-20 fw-medium">
        Electricity
      </h6>
     <div className="divider margin-b-20"></div>
      <form method="post">
        <div className="form-contant">
          <div className="margin-b-20 text-primary f-size-14">
            Enter detail below
          </div>
          <div className="form-group margin-b-20">
            <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
              Meter number
            </label>
            <input
              placeholder="Enter meter number"
              name="ElectricityModel.MeterNumber"
              className="form-control f-size-12 fw-medium valid"
            />
          </div>
          <div className="form-group margin-b-20">
            <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
              Token amount
            </label>
            <input
              className="form-control f-size-12 fw-medium valid"
              placeholder="R 0.00"
              name="TokenAmount"
              type="text"
            />
          </div>
          <div className="form-group margin-b-30">
            <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
              Cellphone number
            </label>
            <input
              className="form-control f-size-12 fw-medium valid"
              placeholder="Cellphone number"
              name="CellphoneNumber"
            />
          </div>
          <div className="form-group margin-b-30">
            <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">
              Transaction type
            </label>
            <input
              placeholder="Enter transaction type"
              name="ElectricityModel.TransactionType"
              className="form-control f-size-12 fw-medium valid"
            />
          </div>
          <div className="form-group d-flex align-items-center justify-content-between">
            <a
              className="btn btn-outline border border-gray-200 w-100 mw-sm-150 rounded f-size-12 fw-medium text-center margin-r-10"
              href="vas"
            >
              Cancel
            </a>
            <button className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Electricity;
