import React from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'

const AtmDeposits = () => {
    return (
        <div className="atm-desposits-main">
            <div className='margin-b-20 page-heading'>
                <PageHeading PageHeadingName="Deposit" iconClassName="ico-desposit" />
            </div>
            <div className="bg-white border-radius-14 w-100 contant-detail-box rounder-sm-0 border-ea atm-desposits-detail-box">
                <div className="atm-desposits-detail-info-title">
                    <h5 className="margin-b-20 text-primary">Nearest Standard Bank ATM’s</h5>
                    <div className="margin-b-30 des-text-contant">
                        <div className="margin-b-10 text-primary f-size-14 fw-medium des-text-title">How does this work?</div>
                        <p className="f-size-14 mb-0">1. At the Standard Bank ATM select ‘Deposit’ in the menu. Select ‘business directory’.</p>
                        <p className="f-size-14 mb-0">2. Select ‘yes’ on the terms and conditions page. Enter the word ‘Thrive’ and proceed. Enter your correct Thrive ID and deposit your money into the ATM with the next step. </p>
                        <p className="f-size-14 mb-0">3. You will receive a notification and SMS on your phone. The deposited amount will  be added to your Thrive balance.</p>
                    </div>
                </div>
                <div className="table-scroll">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="px-0">
                                    <table>
                                        <tr>
                                            <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 px-0">
                                                <i className="icon ico-atm"></i>
                                            </td>
                                            <td className="label-text">
                                                <label>
                                                    <span className="pb-1 f-size-14 text-primary fw-medium w-100 d-block line-height-18 text-capitalize text-nowrap">
                                                        7.15 km away
                                                    </span>
                                                    <span className="suppoting-text f-size-12 text-gray-400 w-100 d-block">
                                                        Standard Chartered Bank Ahmedabad Branch
                                                    </span>
                                                </label>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td className="f-size-14 text-primary fw-medium text-nowrap">
                                    <a href="https://www.google.com/maps" target="_blank" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center btn-direction">Directions <i className="ico-location"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-0">
                                    <table>
                                        <tr>
                                            <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 px-0">
                                                <i className="icon ico-atm"></i>
                                            </td>
                                            <td className="label-text">
                                                <label>
                                                    <span className="pb-1 f-size-14 text-primary fw-medium w-100 d-block line-height-18 text-capitalize text-nowrap">
                                                        18.45 km away
                                                    </span>
                                                    <span className="suppoting-text f-size-12 text-gray-400 w-100 d-block">
                                                        GUJARAT MOBILE
                                                    </span>
                                                </label>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td className="f-size-14 text-primary fw-medium text-nowrap">
                                    <a href="https://www.google.com/maps" target="_blank" className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center btn-direction">Directions <i className="ico-location"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AtmDeposits