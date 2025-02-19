import React from 'react'

const TopBalance = () => {
    return (
        <div className="topbalance_main">
            <div class="bg-primary border-radius-14 w-100 balance-box rounder-sm-0 padding-30 margin-b-20">
                <div class="d-flex align-items-start justify-content-between margin-b-20">
                    <h5 class="text-white fw-medium mb-0">
                        Balance
                    </h5>
                    <div class="d-flex align-items-center btns">
                        <a href="#" class="f-size-12 fw-medium btn btn-primary btn-primary-hover margin-l-10 d-flex align-items-center justify-content-center">
                            <span class="text-white fw-medium margin-r-10 d-none d-sm-block">Statements</span>
                            <i class="icon ico-download">
                            </i>
                        </a>
                        <a href="#" class="f-size-12 fw-medium btn btn-primary btn-primary-hover margin-l-10 d-flex align-items-center justify-content-center">
                            <span class="text-white fw-medium margin-r-10 d-none d-sm-block">Deposit</span>
                            <i class="icon ico-desposit">
                            </i>
                        </a>
                        <a href="#" class="f-size-12 fw-medium btn btn-primary btn-primary-hover margin-l-10 d-flex align-items-center justify-content-center">
                            <span class="text-white fw-medium margin-r-10 d-none d-sm-block">Bank Transfer</span>
                            <i class="icon ico-wallet-transfer">
                            </i>
                        </a>
                    </div>
                </div>
                <div class="margin-b-20">
                    <div class="f-size-10 text-gray-400 fw-semibold text-uppercase pb-1">Available Amount</div>
                    <h1 class="text-white fw-medium mb-0"> R15,732 <span class="fs-3">.00</span></h1>
                </div>
                <div class="d-flex align-items-end justify-content-between flex-wrap flex-sm-nowrap">
                    <div class="d-flex margin-b-20 mb-sm-0 w-100">
                        <div class="incoming-col margin-r-30">
                            <div class="f-size-10 text-gray-400 fw-semibold text-uppercase">
                                INCOMING
                            </div>
                            <div id="divIn" class="text-white">
                                R5,732.00
                            </div>
                        </div>
                        <div class="outgoing-col">
                            <div class="f-size-10 text-gray-400 fw-semibold text-uppercase">
                                OUTGOING
                            </div>
                            <div id="divOut" class="text-white">
                                R3,732.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBalance