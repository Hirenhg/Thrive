import React, { useState } from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import AtmDeposit from './AtmDeposit'
import StoreDeposit from './StoreDeposit'

const Desposit = () => {
    const [activeTab, setActiveTab] = useState("statements");
    return (
        <div className="desposit-main">
            <div className='d-flex align-items-sm-center flex-column flex-sm-row justify-content-between margin-b-20 page-heading'>
                <PageHeading PageHeadingName="Deposit" iconClassName="ico-desposit" />
                <div className="nav nav-pills heading-tabs bg-gray-200 p-1 rounded" id="pills-tab" role="tablist">
                    <button
                        className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === "statements" ? "active" : ""
                            }`}
                        type="button"
                        role="tab"
                        onClick={() => setActiveTab("statements")}
                    >
                        ATM Deposit
                    </button>
                    <button
                        className={`nav-link rounded text-gray-300 f-size-12 fw-medium text-center ${activeTab === "proof-payments" ? "active" : ""
                            }`}
                        type="button"
                        role="tab"
                        onClick={() => setActiveTab("proof-payments")}
                    >
                        Store Deposit
                    </button>
                </div>
            </div>
            <>
                {/* Statements Tab */}
                {activeTab === "statements" && (
                    <div className="tab-pane fade show active" role="tabpanel">
                        <AtmDeposit />
                    </div>
                )}
                {/* Proof of Payments Tab */}
                {activeTab === "proof-payments" && (
                    <div className="tab-pane fade show active store-deposit-tab" role="tabpanel">
                        <StoreDeposit />
                    </div>
                )}

            </>
        </div>
    )
}

export default Desposit;