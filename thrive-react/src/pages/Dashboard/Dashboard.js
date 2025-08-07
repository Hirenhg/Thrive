import React, { useEffect, useState } from "react";
import { images } from "../../config/images";
import TopBalance from "../../components/TopBalance/TopBalance";
import PageHeading from "../../components/PageHeading/PageHeading";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [summary, setSummary] = useState(null);
    const [rewards, setRewards] = useState(null);
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetch("/api/dashboard/summary").then(res => res.json()),
            fetch("/api/dashboard/rewards").then(res => res.json()),
            fetch("/api/dashboard/recent-activity").then(res => res.json()),
        ]).then(([summaryData, rewardsData, activityData]) => {
            setSummary(summaryData);
            setRewards(rewardsData);
            setActivity(activityData);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    return (
        <div className="dashboard-block">
            <div className="margin-b-20 page-heading">
                <PageHeading
                    PageHeadingName="Dashboard"
                    iconClassName="ico-dashboard"
                />
            </div>
            <TopBalance />
            {/* CashlessPro Card - static */}
            <div className="card border-radius-14 padding-30 margin-b-20 cashless-payment-card border-0 mx-3 mx-sm-0">
                <div className="cashless-payment-shape-logo">
                    <Link to="/" className="thrive-logo d-flex align-items-center justify-content-center overflow-hidden">
                    <img src={images.thriveLogo} alt="thrive_mobile" />
                    </Link>
                </div>

                <div className="d-flex flex-column justify-content-between">
                    <div className="margin-b-10">
                    <h5 className="mb-1 text-white fw-semibold">Start Accepting Cashless Payments</h5>
                    <div className="f-size-12 text-white">Fast, reliable, and affordable solutions for your business</div>
                    </div>

                    <div className="mb-3">
                    <div className="mb-3 d-flex flex-column flex-sm-row justify-content-between w-100">
                        <div className="cashless-payment-option position-relative">
                        <div className="option-text ms-4 me-0 me-sm-2">
                            <div className="f-size-12 text-white fw-semibold">Thrive.Mobile</div>
                            <div className="f-size-10 text-white">Turn your Android device into a card machine</div>
                        </div>
                        </div>
                        <Link to="/device-subscription" className="btn btn-primary rounded f-size-12 text-nowrap d-flex align-items-center justify-content-center btn-pos">
                        Get Thrive.Mobile <i className="arrow-right mx-2"></i>
                        </Link>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between w-100">
                        <div className="cashless-payment-option position-relative">
                        <div className="option-text ms-4 me-0 me-sm-2">
                            <div className="f-size-12 text-white fw-semibold">Thrive.Mobile + CashlessPro</div>
                            <div className="f-size-10 text-white">All-in-one card machine with printer, 4G & Wi-Fi</div>
                        </div>
                        </div>
                        <Link to="/device-subscription" className="btn btn-primary rounded f-size-12 text-nowrap d-flex align-items-center justify-content-center btn-cashless">
                        Get CashlessPro <i className="arrow-right mx-2"></i>
                        </Link>
                    </div>
                    </div>

                    <div className="d-grid align-items-center cashless-payment-logos">
                    <div className="payment-logo d-flex align-items-center justify-content-center overflow-hidden">
                        <img src={images.mastercardLogo} alt="mastercard_logo" />
                    </div>
                    <div className="payment-logo d-flex align-items-center justify-content-center overflow-hidden">
                        <img src={images.visaLogo} alt="visa_logo" />
                    </div>
                    <div className="payment-logo d-flex align-items-center justify-content-center overflow-hidden">
                        <img src={images.applepayLogo} alt="applepay_logo" />
                    </div>
                    <div className="payment-logo d-flex align-items-center justify-content-center overflow-hidden">
                        <img src={images.gpayLogo} alt="gpay_logo" />
                    </div>
                    <div className="payment-logo d-flex align-items-center justify-content-center overflow-hidden">
                        <img src={images.samsungpayLogo} alt="samsungpay_logo" />
                    </div>
                    <div className="payment-logo d-flex align-items-center justify-content-center overflow-hidden">
                        <img src={images.contactlessLogo} alt="contactless_logo" />
                    </div>
                    </div>
                </div>
                </div>
            {/* Profile Verification Card - static */}
            <div className="card border-radius-14 padding-30 margin-b-20 complete-profile-card border-0 mx-3 mx-sm-0">
                <h4 className="mb-1 text-primary fw-bold">Complete your profile verification</h4>
                <div className="f-size-10 text-primary fw-semibold mb-3">Your account has limited functionality without KYC verification. Complete verification to unlock all features.</div>
                <Link className="btn btn-primary rounded f-size-12 fw-medium margin-b-20 mw-sm-150" to="/kyc">Complete now</Link>
                <Link className="f-size-10 text-primary fw-semibold text-link" href="#">Why do I need to be verified? </Link>
            </div>
            {/* Sales Card - dynamic */}
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
                                        {summary ? `This Year: ${summary.year}` : "This Year"}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chart">
                            {summary && summary.salesChart ? (
                                // You can replace this with a real chart component
                                <div style={{height: 200, display: 'flex', alignItems: 'flex-end', gap: 4}}>
                                    {summary.salesChart.map((val, idx) => (
                                        <div key={idx} style={{width: 20, height: val/100, background: '#007bff'}} title={val}></div>
                                    ))}
                                </div>
                            ) : (
                            <img
                                src={images.saleschartImage}
                                alt="Barchart"
                                className="w-100 h-100"
                            />
                            )}
                        </div>
                    </div>
                </div>
                {/* Rewards Card - dynamic */}
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
                                            Last Updated <span className="fw-medium">{rewards ? rewards.lastUpdated : "Tue 12:33"}</span>
                                        </div>
                                    </div>
                                    <div className="tier-number-box border-radius-14">
                                        <div className="text-center text-white fw-medium">
                                            You are on <br />
                                            <span className="tier-number fw-bold">Tier {rewards ? rewards.tier : "3"}</span>
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
                                {/* <ul className="p-0 m-0 list-unstyled">
                                    {rewards && rewards.levels ? rewards.levels.map((level, idx) => (
                                        <li key={idx} className={`d-flex align-items-center justify-content-between ${level.status === 'active' ? 'bg-gray-100' : 'bg-secondary-light'} rounded mt-2 p-2`}>
                                            <label className={`d-flex align-items-center f-size-10 ${level.status === 'active' ? 'text-gray-400' : 'text-primary'} fw-medium discount-text`}>
                                                {level.discount} {level.status === 'active' ? <span className="icon ico-check mx-2"></span> : <span className="icon ico-lock mx-2"></span>}
                                            </label>
                                            {level.away && <span className="text-primary-hover fw-medium text-uppercase away-text">{level.away}</span>}
                                            {level.status === 'active' && !level.away && <span className="text-primary-hover fw-medium text-uppercase away-text">{level.discount} Active</span>}
                                    </li>
                                    )) : null}
                                </ul> */}
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
            {/* Recent Activity - dynamic */}
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
                                    {loading ? (
                                        <tr>
                                            <td colSpan="5" className="f-size-12 text-primary fw-semibold text-nowrap p-2 text-center">Loading...</td>
                                        </tr>
                                    ) : activity && activity.length > 0 ? (
                                        activity.map((item, idx) => (
                                        <tr key={idx}>
                                            <td className="f-size-12 text-primary fw-semibold text-nowrap px-0">
                                                        {item.transaction}
                                            </td>
                                            <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                                        {item.processDate}
                                            </td>
                                            <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                                        R{item.crAmount.toLocaleString(undefined, {minimumFractionDigits:2})}
                                            </td>
                                            <td className="f-size-12 text-primary fw-semibold text-end text-nowrap">
                                                        R{item.drAmount.toLocaleString(undefined, {minimumFractionDigits:2})}
                                            </td>
                                            <td className="f-size-12 text-gray-400 fw-medium text-end text-nowrap">
                                                        R{item.balance.toLocaleString(undefined, {minimumFractionDigits:2})}
                                            </td>
                                        </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="5" className="f-size-12 text-primary fw-semibold text-nowrap p-2 text-center">No activity found.</td></tr>
                                    )}
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
