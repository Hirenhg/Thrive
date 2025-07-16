import React from "react";
import { images } from "../../config/images";
import TopBalance from "../../components/TopBalance/TopBalance";
import PageHeading from "../../components/PageHeading/PageHeading";

const Dashboard = () => {
    return (
        <div className="dashboard-block">
            <div className="margin-b-20 page-heading">
                <PageHeading
                    PageHeadingName="Dashboard"
                    iconClassName="ico-dashboard"
                />
            </div>
            <TopBalance />
            <div className="card border-radius-14 padding-30 margin-b-20 cashlesspro-card border-0 mx-3 mx-sm-0">
                <div className="d-flex justify-content-between">
                    <div className="cashlesspro-left-col d-flex flex-column justify-content-between">
                        <div className="cashlesspro-text">
                            <h4 className="mb-2 text-white fw-semibold">Apply for a CashlessPro</h4>
                            <div className="f-size-10 text-white fw-semibold mb-3">Apply for a fast and reliable card machine with low rates and quick setup — perfect for any business.</div>
                        </div>
                        <a className="btn btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center mw-sm-130" href="/device-subscription">Apply now <i className="arrow-right mx-2"></i></a>
                    </div>
                    <div className="cashlesspro-imagebox bg-gray-100 border-radius-6 d-flex align-items-center justify-content-center text-center">
                        <img src={images.PosDevice} alt="device" />
                    </div>
                </div>
            </div>
            <div className="card border-radius-14 padding-30 margin-b-20 complete-profile-card border-0 mx-3 mx-sm-0">
                <h4 className="mb-1 text-primary fw-bold">Complete your profile verification</h4>
                <div className="f-size-10 text-primary fw-semibold mb-3">Your account has limited functionality without KYC verification. Complete verification to unlock all features.</div>
                <a className="btn btn-primary rounded f-size-12 fw-medium margin-b-20 mw-sm-150" href="/kyc">Complete now</a>
                <a className="f-size-10 text-primary fw-semibold text-link" href="#">Why do I need to be verified? </a>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-radius-14 border-ea sales-card padding-30 margin-b-20">
                        <div className="card-heading margin-b-20">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="card-title mb-1 text-primary fw-medium text-capitalize">
                                        Card Sales (R)
                                    </h6>
                                    <div className="card-title-label f-size-10 text-gray-400 fw-medium text-uppercase">
                                        This Week: Week 29
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chart">
                            <img
                                src={images.saleschartImage}
                                alt="Barchart"
                                className="w-100 h-100"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="rewards-row">
                        <div className="card border-radius-14 border-ea rewards-level-card padding-30 margin-b-30">
                            <div className="card-heading margin-b-20">
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="title-left">
                                        <h6 className="card-title mb-1 text-primary fw-medium text-capitalize">
                                            Rewards Level
                                        </h6>
                                        <div className="card-title-label f-size-10 text-gray-400 text-uppercase">
                                            Last Updated <span className="fw-medium">Tue 12:33</span>
                                        </div>
                                    </div>
                                    <div className="tier-number-box border-radius-14">
                                        <div className="text-center text-white fw-medium">
                                            You are on <br />
                                            <span className="tier-number fw-bold">Tier 3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider mb-3"></div>
                            </div>
                            <div className="reward-level-details">
                                <div className="level-details-title d-flex align-items-center justify-content-between">
                                    <div className="f-size-10 text-primary-hover fw-medium text-capitalize">
                                        Fee Discount
                                    </div>
                                    <div className="f-size-10 text-primary-hover fw-medium text-capitalize">
                                        Away
                                    </div>
                                </div>
                                <ul className="p-0 m-0 list-unstyled">
                                    <li className="d-flex align-items-center justify-content-between bg-gray-100 rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-gray-400 fw-medium discount-text">
                                            12% <span className="icon ico-check mx-2"></span>
                                        </lable>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between bg-gray-100 rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-gray-400 fw-medium discount-text">
                                            28% <span className="icon ico-check mx-2"></span>
                                        </lable>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between bg-secondary rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-primary fw-medium discount-text">
                                            40%{" "}
                                        </lable>
                                        <span className="text-primary-hover fw-medium text-uppercase away-text">
                                            40% Active
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between bg-secondary-light rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-primary fw-medium discount-text">
                                            50% <span className="icon ico-lock mx-2"></span>
                                        </lable>
                                        <span className="text-primary-hover fw-medium text-uppercase away-text">
                                            R150K Away
                                        </span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between bg-secondary-light rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-primary fw-medium discount-text">
                                            60% <span className="icon ico-lock mx-2"></span>
                                        </lable>
                                        <span className="text-primary-hover fw-medium text-uppercase away-text">
                                            R650K Away
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-white border-radius-14 w-100 border-ea padding-30 recent-activity-card">
                        <div className="d-flex justify-content-between align-items-center mb-3 border-b pb-3">
                            <h6 className="mb-0">Recent Activity</h6>
                            <button href="#" className="btn btn-outline border rounded f-size-12 fw-medium">
                                See All
                            </button>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="f-size-10 text-gray-400 fw-medium text-uppercase px-0">
                                            TRANSACTION
                                        </th>
                                        <th className="f-size-10 text-gray-400 fw-medium text-uppercase text-end">
                                            PROCESS DATE
                                        </th>
                                        <th className="f-size-10 text-gray-400 fw-medium text-uppercase text-end">
                                            CR AMOUNT
                                        </th>
                                        <th className="f-size-10 text-gray-400 fw-medium text-uppercase text-end">
                                            DR AMOUNT
                                        </th>
                                        <th className="f-size-10 text-gray-400 fw-medium text-uppercase text-end">
                                            BALANCE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            CardFee
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            14 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R2,002.38
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R848,607.55
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            CardDeposit
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            14 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R809,095.27
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R850,609.93
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            WalletTransfer
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            9 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R20.00
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R41,514.66
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            WalletTransfer
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            9 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R13.00
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R41,534.66
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            WalletTransfer
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            9 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R21.21
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R41,547.66
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            VasTransfer
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            9 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R33,322.89
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R41,568.87
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            WalletTransfer
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            9 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R20.00
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R74,891.76
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            WalletTransfer
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            7 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R20.00
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R74,911.76
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            WalletTransfer
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            7 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R23.25
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R74,931.76
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                            WalletTransfer
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            6 July 2025
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R0.00
                                        </td>
                                        <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                            R21.00
                                        </td>
                                        <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                            R74,955.01
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
