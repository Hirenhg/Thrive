import React, { useState } from 'react'
import NetworkProvider from '../../NetworkProvider'

export default function BillPayment() {
  const [step, setStep] = useState(1);
  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  return (
    <>
      {step === 1 && (
        <div className="d-flex flex-column">
          <h6 className="margin-b-20 text-primary f-size-20 fw-medium">Bill Payments</h6>
          <div className="divider margin-b-20"></div>
          <div><NetworkProvider /></div>
          <div className="form-group d-flex align-items-center justify-content-between">
            <a
              className="btn btn-outline border border-gray-200 w-100 mw-sm-150 rounded f-size-12 fw-medium text-center margin-r-10"
              href="/vas"
            >
              Cancel
            </a>
            <button
              type="submit"
              className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center margin-b-20">
            <div className="iconbox margin-r-10" onClick={handleBack}>
              <i className="icon ico-back"></i>
            </div>
            <h6 className="text-primary f-size-20 fw-medium text-capitalize mb-0">
              Back
            </h6>
          </div>
          <div className="form-group d-flex align-items-center justify-content-between">
            <a
              className="btn btn-outline border border-gray-200 w-100 mw-sm-150 rounded f-size-12 fw-medium text-center margin-r-10"
              href="/vas"
            >
              Cancel
            </a>
            <button
              type="submit"
              className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}
