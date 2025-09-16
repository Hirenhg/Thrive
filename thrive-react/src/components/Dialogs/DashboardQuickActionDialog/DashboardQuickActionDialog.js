import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import QuickPay from '../QuickPay/QuickPay';
import QRCode from '../QRCode/QRCode';

const DashboardQuickActionDialog = ({ open, onClose }) => {
    const [openQuickPay, setOpenQuickPay] = useState(false);
    const [openQRCode, setOpenQRCode] = useState(false);
   
    if (!open) return null;
    const handleNav = () => {
        if (onClose) onClose();
    };
    const isHidden = openQuickPay || openQRCode; 
    return (
        <>
            <div
                className="modal d-flex align-items-center justify-content-center"
                tabIndex="-1"
                role="dialog"
                style={{
                background: 'rgba(0,0,0,0.3)',
                display: isHidden ? 'none !important' : 'flex'
                }}
            >         
           <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className='quick-action-main'>
                        <div className="quick-action-dialog-block">
                            <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative quick-action-dialog-box">
                                <div className="d-flex align-items-center justify-content-between w-100 margin-b-20">
                                    <div className="fw-medium text-primary">Quick actions</div>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                                </div>
                                <div className="d-grid quick-action-list">
                                    <NavLink to="/documents" className="quick-action-group d-flex align-items-center justify-content-between" onClick={handleNav}>
                                        <div className="me-2">
                                            <div className="text-primary f-size-14 fw-medium mb-1">Statements</div>
                                            <div className="text-gray-400 f-size-12">View and download your statements</div>
                                        </div>
                                        <div className="quick-action-icon bg-primary border-radius-6 w-sm-40 h-sm-40 d-flex align-items-center justify-content-center">
                                            <i className="icon ico-download">
                                            </i>
                                        </div>
                                    </NavLink>
                                    <NavLink to="/bank-transfer" className="quick-action-group d-flex align-items-center justify-content-between" onClick={handleNav}>
                                        <div className="me-2">
                                            <div className="text-primary f-size-14 fw-medium mb-1">Bank Transfer</div>
                                            <div className="text-gray-400 f-size-12">Move your Thrive wallet funds to a bank account</div>
                                        </div>
                                        <div className="quick-action-icon bg-primary border-radius-6 w-sm-40 h-sm-40 d-flex align-items-center justify-content-center">
                                            <i className="icon ico-wallet-transfer">
                                            </i>
                                        </div>
                                    </NavLink>
                                    <NavLink to="/deposit" className="quick-action-group d-flex align-items-center justify-content-between" onClick={handleNav}>
                                        <div className="me-2">
                                            <div className="text-primary f-size-14 fw-medium mb-1">Deposit</div>
                                            <div className="text-gray-400 f-size-12">Find your nearest ATM and Pay reference</div>
                                        </div>
                                        <div className="quick-action-icon bg-primary border-radius-6 w-sm-40 h-sm-40 d-flex align-items-center justify-content-center">
                                            <i className="icon ico-desposit">
                                            </i>
                                        </div>
                                    </NavLink>
                                    <NavLink onClick={() => setOpenQuickPay(true)} className="quick-action-group d-flex align-items-center justify-content-between">
                                        <div className="me-2">
                                            <div className="text-primary f-size-14 fw-medium mb-1">Quick pay</div>
                                            <div className="text-gray-400 f-size-12">Move your Thrive wallet funds to a bank account</div>
                                        </div>
                                        <div className="quick-action-icon bg-primary border-radius-6 w-sm-40 h-sm-40 d-flex align-items-center justify-content-center">
                                            <i className="icon ico-quick-pay">
                                            </i>
                                        </div>
                                    </NavLink>
                                    <NavLink onClick={() => setOpenQRCode(true)}  className="quick-action-group d-flex align-items-center justify-content-between">
                                        <div className="me-2">
                                            <div className="text-primary f-size-14 fw-medium mb-1">QR Code</div>
                                            <div className="text-gray-400 f-size-12">Access your QR code or your payment request code</div>
                                        </div>
                                        <div className="quick-action-icon bg-primary border-radius-6 w-sm-40 h-sm-40 d-flex align-items-center justify-content-center">
                                            <i className="icon ico-qr">
                                            </i>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <QuickPay open={openQuickPay} onClose={() => setOpenQuickPay(false)} />
        <QRCode open={openQRCode} onClose={() => setOpenQRCode(false)} />
        </>)   
}

export default DashboardQuickActionDialog;