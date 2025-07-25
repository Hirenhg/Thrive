import React from 'react'
import NetworkProvider from '../../NetworkProvider'

export default function BillPayment() {
  return (
      <div className="d-flex flex-column">
        <h6 className="margin-b-20 text-primary f-size-20 fw-medium">Bill Payments</h6>
        <div className="divider margin-b-20"></div>
        <div><NetworkProvider/></div>
      </div>
  )
}
