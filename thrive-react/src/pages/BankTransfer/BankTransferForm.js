import React, { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import BankTransferPaymentResult from '../../components/Dialogs/BankTransferPaymentResult/BankTransferPaymentResult';
import { images } from '../../config/images'

function BankTransferForm() {
  const [balance, setBalance] = useState(5000); 
  const [bankAccount, setBankAccount] = useState({
    accountHolderName: "Hiren Doe",
    bankName: "Standard Bank of South Africa",
    accountNumber: "1234567890"
  });
  const [amount, setAmount] = useState('');
  const [fees, setFees] = useState({ standard: 0, other: 0 });
  const [step, setStep] = useState('form'); 
  const [showResult, setShowResult] = useState(false);
 const [error, setError] = useState('');

    useEffect(() => {
        const fetchBankData = async () => {
            try {
            } catch (err) {
                setError('Unable to fetch bank details. Please try again.');
            }
        };
        fetchBankData();
    }, []);
  // Calculate fees dynamically
  useEffect(() => {
    const amt = parseFloat(amount) || 0;
    setFees({
      standard: (amt * 0.57 / 100).toFixed(2),
    });
  }, [amount]);

  const handleNext = () => {
    if (amount > 0 && amount <= balance) setStep('confirm');
  };

    const handleConfirmPayment = () => {
    setShowResult(true);
  };

  const handleCloseResult = () => {
    setShowResult(false);
  };

  return (
    <>
       <div className="bank-transfer-main">
      <div className='margin-b-20 page-heading'>
        <PageHeading PageHeadingName="Bank Transfer" iconClassName="ico-bank-transfer" />
      </div>

      <div className="d-flex align-items-center justify-content-center m-center-box">
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
          {/* Step 1: Form */}
          {step === 'form' && (
            <>
              <div className="bg-primary border-radius-14 w-100 balance-box padding-30 margin-b-20 text-center">
                <h5 className="text-white fw-medium mb-2">Balance</h5>
                <div className="f-size-10 text-gray-400 fw-semibold mb-2">Available Amount</div>
                <h2 className="text-white fw-medium">R {balance.toFixed(2)}</h2>
              </div>

              <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative bank-transfer-form-box">
                <div className="bank-transfer-form">
                  <div className="bg-gray-100 border-ea rounded padding-10 margin-b-20 d-flex align-items-center">
                  <div className="bg-gray-200 rounded iconbox w-sm-40 p-0 overflow-hidden">
                        <img src={images.SafariLogo} alt="logo" className='w-100 ico-img' />
                  </div>
                    <div className="margin-l-10">
                      <div className="f-size-14 text-primary fw-medium">{bankAccount.accountHolderName}</div>
                      <div className="f-size-10 text-gray-400">
                        {bankAccount.bankName}<br />{bankAccount.accountNumber}
                      </div>
                    </div>
                  </div>

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

                  <div className="form-group margin-b-10 text-center">
                    <label className="form-label text-gray-300 f-size-10 w-100">Bank transfer fees</label>
                    <div className="bg-gray-500 rounded d-flex justify-content-between padding-10 mb-1">
                      <span className="text-primary f-size-10">Standard Bank 0.57% incl. VAT</span>
                      <span className="text-primary fw-semibold f-size-10">R {fees.standard}</span>
                    </div>
                  </div>
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

          {/* Step 2: Confirm */}
          {step === 'confirm' && (
            <div className="bg-white border-ea border-radius-14 padding-30 w-100 position-relative bank-transfer-confirm-payment-box text-center">
              <h5 className="text-primary fw-medium margin-b-20">Confirm Payment</h5>
              <div className="payment-logo d-flex align-items-center justify-content-center">
                  <span className="bg-primary rounded iconbox w-sm-40 thrive-logo position-relative margin-r-10">
                    <i className="icon-img ico-logo"></i>
                  </span>
                  <span className="bg-gray-200 rounded iconbox w-sm-40">
                    <img src={images.SafariLogo} alt='safarilogo' className="w-100 icon-img" />
                  </span>
              </div>
              <div className="f-size-12 text-gray-300 margin-b-10">You are about to transfer</div>
              <h2 className="text-primary fw-medium margin-b-20">R {amount}</h2>
              <div className="bg-gray-500 rounded d-flex justify-content-between padding-10 margin-b-10">
                <span className="text-primary f-size-10">Bank transfer fee 0.92%</span>
                <span className="text-primary fw-semibold f-size-10">R {fees.other}</span>
              </div>
              <div className="form-group">
                <button onClick={handleConfirmPayment} className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center margin-b-10">Pay now</button>
                <button onClick={() => setStep('form')} className="btn btn-outline border border-gray-200 rounded w-100 f-size-12 fw-medium d-flex align-items-center justify-content-center"><i className="icon ico-edit margin-r-10"></i> Edit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
      {showResult && (
        <BankTransferPaymentResult
          status="success"   // or "failed"
          onClose={() => setShowResult(false)}
        />
      )}
    </>
  );
}

export default BankTransferForm;