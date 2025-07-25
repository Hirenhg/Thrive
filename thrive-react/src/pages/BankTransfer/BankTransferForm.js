import React, { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import axios from 'axios';

const BankTransferForm = () => {
    const [balance, setBalance] = useState(0);
    const [bankAccount, setBankAccount] = useState(null);
    const [amount, setAmount] = useState('');
    const [fees, setFees] = useState({ standard: 0, other: 0 });
    const [step, setStep] = useState('form'); // 'form' | 'confirm'
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch balance & bank details
    useEffect(() => {
        const fetchBankData = async () => {
            try {
                setLoading(true);
                // Example API endpoints
                const [balanceRes, bankRes] = await Promise.all([
                    axios.get('/api/user/balance'),
                    axios.get('/api/user/bank-account')
                ]);
                setBalance(balanceRes.data.balance);
                setBankAccount(bankRes.data);
            } catch (err) {
                setError('Unable to fetch bank details. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchBankData();
    }, []);

    // Calculate fees dynamically
    useEffect(() => {
        const amt = parseFloat(amount) || 0;
        setFees({
            standard: (amt * 0.57 / 100).toFixed(2),
            other: (amt * 0.92 / 100).toFixed(2),
        });
    }, [amount]);

    const handleNext = () => {
        if (amount > 0 && amount <= balance) setStep('confirm');
    };

    const handleConfirmPayment = async () => {
        try {
            await axios.post('/api/user/transfer', { amount });
            alert('Transfer Successful!');
            setAmount('');
            setStep('form');
        } catch (err) {
            alert('Payment failed. Please try again.');
        }
    };

    if (loading) return <div className="text-center p-4">Loading...</div>;

    return (
        <div className="bank-transfer-main">
            <div className='margin-b-20 page-heading'>
                <PageHeading PageHeadingName="Bank Transfer" iconClassName="ico-bank-transfer" />
            </div>
            <div className="d-flex align-items-center justify-content-center mx-4 px-1 mx-sm-0 px-sm-0 m-center-box">
                <div className="w-100 mw-sm-340 bank-transfer-block">
                    {/* No Bank Account Linked */}
                    {!bankAccount && (
                        <div className="bg-white border-ea border-radius-14 padding-30 text-center">
                            <div className="icon-block"><i className="ico-status"></i></div>
                            <h5 className="margin-b-20 text-primary fw-medium">No Bank Account Linked</h5>
                            <p className="margin-b-30 text-primary f-size-12">
                                It looks like there’s no bank account linked to your Thrive account. Please contact support.
                            </p>
                            <p className="margin-b-30 text-primary f-size-12">{error}</p>
                            <div className="form-group text-center f-size-14 fw-medium text-gray-400">
                                Need help? Contact <a href="mailto:support@thrive.trade" className="text-primary">support@thrive.trade</a> or <a href="tel:+0116363640" className="text-primary">011 6363 640</a>
                            </div>
                        </div>
                    )}

                    {/* Bank Transfer Form */}
                    {bankAccount && step === 'form' && (
                        <>
                            {/* Balance */}
                            <div className="bg-primary border-radius-14 w-100 balance-box padding-30 margin-b-20 text-center">
                                <h5 className="text-white fw-medium mb-2">Balance</h5>
                                <div className="f-size-10 text-gray-400 fw-semibold mb-2">Available Amount</div>
                                <h2 className="text-white fw-medium mb-2">R {balance.toFixed(2)}</h2>
                            </div>

                            {/* Transfer Form */}
                            <div className="bg-white border-ea border-radius-14 padding-30">
                                <div className="bank-transfer-form">
                                    <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
                                        <div className="bg-gray-200 rounded iconbox w-sm-40 p-0 overflow-hidden">
                                            <i className="icon-img icon-placeholder"></i>
                                        </div>
                                        <div className="margin-l-10">
                                            <div className="f-size-14 text-primary fw-medium">{bankAccount.accountHolderName}</div>
                                            <div className="f-size-10 text-gray-400">{bankAccount.bankName}<br />{bankAccount.accountNumber}</div>
                                        </div>
                                    </div>

                                    {/* Amount Input */}
                                    <div className="form-group margin-b-10 text-center">
                                        <label className="form-label text-gray-300 f-size-10 w-100">ENTER AMOUNT</label>
                                        <input
                                            type="number"
                                            className="form-control fw-medium text-center"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            placeholder="R 0.00"
                                        />
                                    </div>

                                    {/* Fees */}
                                    <div className="form-group margin-b-10 text-center">
                                        <label className="form-label text-gray-300 f-size-10 w-100">Bank transfer fees</label>
                                        <div className="bg-gray-500 rounded d-flex justify-content-between padding-10 mb-1">
                                            <span className="text-primary f-size-10">Standard Bank 0.57% incl. VAT</span>
                                            <span className="text-primary fw-semibold f-size-10">R {fees.standard}</span>
                                        </div>
                                        <div className="bg-gray-500 rounded d-flex justify-content-between padding-10">
                                            <span className="text-primary f-size-10">Other Bank 0.92% incl. VAT</span>
                                            <span className="text-primary fw-semibold f-size-10">R {fees.other}</span>
                                        </div>
                                    </div>

                                    {/* Next Button */}
                                    <div className="form-group">
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            disabled={!amount || amount <= 0 || amount > balance}
                                            className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"
                                        >
                                            Next <i className="arrow-right margin-l-10"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Confirm Payment */}
                    {step === 'confirm' && (
                        <div className="bg-white border-ea border-radius-14 padding-30 text-center">
                            <h5 className="text-primary fw-medium margin-b-20">Confirm Payment</h5>
                            <div className="payment-logo d-flex align-items-center justify-content-center">
                                <span className="bg-primary rounded iconbox w-sm-40 margin-r-10"><i className="icon-img ico-logo"></i></span>
                                <span className="bg-gray-200 rounded iconbox w-sm-40"><i className="icon-img icon-placeholder"></i></span>
                            </div>
                            <div className="f-size-12 text-gray-300 margin-b-10">You are about to transfer</div>
                            <h2 className="text-primary fw-medium margin-b-20">R {amount}</h2>
                            <div className="bg-gray-500 rounded d-flex justify-content-between padding-10 margin-b-10">
                                <span className="text-primary f-size-10">Bank transfer fee 0.92%</span>
                                <span className="text-primary fw-semibold f-size-10">R {fees.other}</span>
                            </div>
                            <div className="form-group">
                                <button onClick={handleConfirmPayment} className="btn btn-primary w-100 margin-b-10">Pay now</button>
                                <button onClick={() => setStep('form')} className="btn btn-outline border w-100">Edit</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BankTransferForm;