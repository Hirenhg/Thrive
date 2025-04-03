import React from 'react'
import BankTransferForm from './BankTransferForm'
import PageHeading from '../../components/PageHeading/PageHeading'
import { Link } from 'react-router-dom'

const BankTransfer = () => {
    return (
        <div className='bank-transfer-main'>
            <div className='margin-b-20 page-heading'>
                <PageHeading PageHeadingName="Bank Transfer" iconClassName="ico-bank-transfer" />
            </div>
            <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0 m-center-box">
                <div className="bg-white border-ea border-radius-14 padding-30 w-100 mw-sm-340 bank-transfer-box">
                    <div className="text-center">
                        <div className="icon-block">
                            <i className="ico-status"></i>
                        </div>
                        <h5 className="margin-b-20 text-primary fw-medium">Bank Transfer Access</h5>
                        <p className="margin-b-20 text-primary f-size-12">
                            You are about to initiate a bank transfer. Please proceed carefully.
                        </p>
                        <p className="margin-b-20 text-primary f-size-12 d-none">
                            Please enter your password to start the bank transfer process
                        </p>
                        <div className="form-group margin-b-30">
                            <Link to="/bank-transfer-form">
                                <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center" onClick={BankTransferForm}>Next<i className="arrow-right margin-l-10"></i></button>
                            </Link>
                        </div>
                        <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                            Need help? Contact support <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or <a href="tel:+011 6363 640" title="Contact support" className="text-primary d-block">011 6363 640</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankTransfer