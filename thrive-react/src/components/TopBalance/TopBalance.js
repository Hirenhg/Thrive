import React from 'react'
import { Link } from 'react-router-dom'

const TopBalance = ({ availableAmount = 0, incomingAmount = 0, outgoingAmount = 0 , availableAmountfractional = 20}) => {
    const formatAmount = (amount) => {
        return typeof amount === 'number' ? amount.toLocaleString() : '0';
    };
    return (
        <div className="topbalance_main">
            <div className="bg-primary border-radius-14 w-100 balance-box rounder-sm-0 padding-30 margin-b-20">
                <div className="d-flex align-items-start justify-content-between margin-b-20">
                    <h5 className="text-white fw-medium mb-0">
                        Balance
                    </h5>
                    <div className="d-flex align-items-center btns">
                        <Link to="/documents" className="f-size-12 fw-medium btn btn-primary btn-primary-hover margin-l-10 d-flex align-items-center justify-content-center">
                            <span className="text-white fw-medium margin-r-10 d-none d-sm-block">Statements</span>
                            <i className="icon ico-download"></i>
                        </Link>
                        <Link to="/atm-deposits" className="f-size-12 fw-medium btn btn-primary btn-primary-hover margin-l-10 d-flex align-items-center justify-content-center">
                            <span className="text-white fw-medium margin-r-10 d-none d-sm-block">Deposit</span>
                            <i className="icon ico-desposit">
                            </i>
                        </Link>
                        <Link to="/bank-transfer" className="f-size-12 fw-medium btn btn-primary btn-primary-hover margin-l-10 d-flex align-items-center justify-content-center">
                            <span className="text-white fw-medium margin-r-10 d-none d-sm-block">Bank Transfer</span>
                            <i className="icon ico-wallet-transfer">
                            </i>
                        </Link>
                    </div>
                </div>
                <div className="margin-b-20">
                    <div className="f-size-10 text-gray-400 fw-semibold text-uppercase pb-1">Available Amount</div>
                    <h1 className="text-white fw-medium mb-0">
                        R{formatAmount(availableAmount)}<span className="fs-3">.{formatAmount(availableAmountfractional)}</span>
                    </h1>
                </div>
                <div className="d-flex align-items-end justify-content-between flex-wrap flex-sm-nowrap">
                    <div className="d-flex margin-b-20 mb-sm-0 w-100">
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
            </div>
        </div>
    )
}

export default TopBalance