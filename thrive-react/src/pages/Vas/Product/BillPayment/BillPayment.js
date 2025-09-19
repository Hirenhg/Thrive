import React, { useState } from 'react'
import NetworkProvider from '../../NetworkProvider'
import { Link } from 'react-router-dom';

export default function BillPayment() {
  return (
    <>
      <div className="d-flex flex-column">
        <h6 className="margin-b-20 text-primary f-size-20 fw-medium">Bill Payments</h6>
        <div className="divider margin-b-20"></div>
        <div><NetworkProvider /></div>
        <div className='form-contant'>
            <div className="margin-b-20 bg-gray-100 padding-10 rounded-3"><div className="mb-3 text-primary f-size-14">
              Enter the multichoice account number below
            </div>
            <div className="form-group">
              <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Multichoice account</label>
              <input placeholder="Multichoice account number" className="form-control f-size-12 fw-medium" />
            </div>
          </div>
          <div className="form-group d-flex align-items-center justify-content-between">
            <Link className="btn btn-outline border border-gray-200 w-100 mw-sm-150 rounded f-size-12 fw-medium text-center margin-r-10" to="/vas">
              Cancel
            </Link>
            <button
              type="submit"
              className="btn btn-primary w-100 mw-sm-150 rounded f-size-12 fw-medium"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
