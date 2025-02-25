import React from 'react'
import { images } from '../../config/images'
import TopBalance from '../../components/TopBalance/TopBalance';
import PageHeading from '../../components/PageHeading/PageHeading';

const Dashboard = () => {
    return (
        <div className="dashboard-block">
            <PageHeading/>
            <TopBalance/>
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-radius-14 border-ea activity-card padding-30 margin-b-20 overlay">
                        <div className="card-heading margin-b-20">
                            <div className="d-flex justify-content-between margin-b-20">
                                <div>
                                    <h6 className="card-title mb-1 text-primary fw-medium text-capitalize">
                                        Activity
                                    </h6>
                                    <div className="card-title-label f-size-10 text-gray-400 fw-medium text-uppercase">This week</div>
                                </div>
                                <div className="w-40 action-calender">
                                    <button type="button" className="btn btn-outline border border-gray-200 rounded d-flex align-items-center"><i className="icon ico-calender"></i></button>
                                </div>
                            </div>
                            <div className="divider"></div>
                        </div>
                        <div className="d-flex">
                            <div className="progress margin-r-30">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar w-100" role="progressbar">
                                    <div className="f-size-14 text-primary fw-medium text-center">
                                        75%
                                    </div>
                                </div>
                            </div>
                            <div className="chart-details">
                                <div className="f-size-10 text-gray-400 fw-medium text-uppercase mb-2">
                                    Today's Card Sales:
                                </div>
                                <div className="f-size-14 text-primary fw-medium margin-b-20"> R3000 <span className="f-size-8 text-gray-300 fw-medium">/ R4000</span></div>
                                <div className="d-flex week-progressbar">
                                    <div className="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar w-100" role="progressbar">
                                            <div className="f-size-8 text-primary fw-medium text-center">
                                                M
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar w-100" role="progressbar">
                                            <div className="f-size-8 text-primary fw-medium text-center">
                                                t
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar w-100" role="progressbar">
                                            <div className="f-size-8 text-primary fw-medium text-center">
                                                w
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar w-100" role="progressbar">
                                            <div className="f-size-8 text-primary fw-medium text-center">
                                                t
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar w-100" role="progressbar">
                                            <div className="f-size-8 text-primary fw-medium text-center">
                                                f
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar w-100" role="progressbar">
                                            <div className="f-size-8 text-primary fw-medium text-center">
                                                s
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar w-100" role="progressbar">
                                            <div className="f-size-8 text-primary fw-medium text-center">
                                                s
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid rewards-row">
                        <div className="card border-radius-14 border-ea rewards-summary-card padding-30 overlay">
                            <div className="card-heading margin-b-20">
                                <h6 className="card-title mb-1 text-primary fw-medium text-capitalize">
                                    Rewards Summary
                                </h6>
                                <div className="card-title-label f-size-10 text-gray-400 fw-medium text-uppercase margin-b-20">This Month</div>
                                <div className="divider"></div>
                            </div>
                            <div className="margin-b-20">
                                <h5 className="mb-1 text-primary">R356,342.90</h5>
                                <div className="f-size-10 text-gray-400 fw-medium text-uppercase">Total Card Sales</div>
                            </div>
                            <div className="margin-b-20">
                                <h5 className="mb-1 text-primary">R390.90</h5>
                                <div className="f-size-10 text-gray-400 fw-medium text-uppercase"> Cashback Earnings</div>
                            </div>
                            <div className="bg-gray-100 rounded padding-10">
                                <p className="mb-0 f-size-10 text-primary fw-medium"> Your cashback earnings are calculated with a <span className="fw-bold">40%</span> discount on the <span className="fw-bold">2.5%</span> transaction fee, based on total card sales of  <span className="fw-bold">R356,342.13</span></p>
                            </div>
                        </div>
                        <div className="card border-radius-14 border-ea rewards-level-card padding-30 overlay">
                            <div className="card-heading margin-b-20">
                                <h6 className="card-title mb-1 text-primary fw-medium text-capitalize">
                                    Rewards Level
                                </h6>
                                <div className="card-title-label f-size-10 text-gray-400 fw-medium text-uppercase margin-b-20">This Month</div>
                                <div className="divider"></div>
                            </div>
                            <div className="reward-level-details">
                                <div className="level-details-title d-flex align-items-center justify-content-between">
                                    <div className="f-size-10 text-primary-hover fw-medium text-capitalize">Fee Discount</div>
                                    <div className="f-size-10 text-primary-hover fw-medium text-capitalize">Away</div>
                                </div>
                                <ul className="p-0 m-0 list-unstyled">
                                    <li className="d-flex align-items-center justify-content-between bg-gray-100 rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-gray-400 fw-medium discount-text">12% <span className="icon ico-check mx-2"></span></lable>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between bg-gray-100 rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-gray-400 fw-medium discount-text">28% <span className="icon ico-check mx-2"></span></lable>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between bg-secondary rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-primary fw-medium discount-text">40% </lable>
                                        <span className="text-primary-hover fw-medium text-uppercase away-text">40% Active</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between bg-secondary-light rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-primary fw-medium discount-text">50% <span className="icon ico-lock mx-2"></span></lable>
                                        <span className="text-primary-hover fw-medium text-uppercase away-text">R150K Away</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between bg-secondary-light rounded mt-2 p-2">
                                        <lable className="d-flex align-items-center f-size-10 text-primary fw-medium discount-text">60% <span className="icon ico-lock mx-2"></span></lable>
                                        <span className="text-primary-hover fw-medium text-uppercase away-text">R650K Away</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card border-radius-14 border-ea sales-card padding-30 margin-b-20 overlay">
                        <div className="card-heading margin-b-20">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="card-title mb-1 text-primary fw-medium text-capitalize">
                                        Card Sales
                                    </h6>
                                    <div className="card-title-label f-size-10 text-gray-400 fw-medium text-uppercase">This Month</div>
                                </div>
                                <div>
                                    <span className="f-size-10 text-gray-400 fw-medium text-uppercase margin-r-10">
                                        This Week
                                    </span>
                                    <span className="f-size-10 text-gray-400 fw-medium text-uppercase">
                                        Last Week
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="chart">
                            <img src={images.saleschartImage} alt="Barchart" className="w-100 h-100" />
                        </div>
                    </div>
                    <div className="card border-radius-14 border-ea devices-card padding-30 overlay">
                        <div className="card-heading margin-b-20">
                            <h6 className="card-title mb-1 text-primary fw-medium text-capitalize">
                                Devices
                            </h6>
                            <div className="card-title-label f-size-10 text-gray-400 fw-medium text-uppercase">hardware</div>
                        </div>
                        <div className="devices-details">
                            <div className="d-flex align-items-center py-2 devices-status-list">
                                <div className="f-size-12 fw-medium text-gray-400">Device 1</div>
                                <div className="device-number f-size-14 fw-medium text-primary">78486237598</div>
                                <div className="f-size-10 text-white device-status-tag">Active</div>
                            </div>
                            <div className="d-flex align-items-center py-2 devices-status-list">
                                <div className="f-size-12 fw-medium text-gray-400">Device 2</div>
                                <div className="device-number f-size-14 fw-medium text-primary">78486237598</div>
                                <div className="f-size-10 text-white device-status-tag">Active</div>
                            </div>
                            <div className="d-flex align-items-center py-2 devices-status-list">
                                <div className="f-size-12 fw-medium text-gray-400">Device 3</div>
                                <div className="device-number f-size-14 fw-medium text-primary">78486237598</div>
                                <div className="f-size-10 text-white  device-status-tag inactive">inActive</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;