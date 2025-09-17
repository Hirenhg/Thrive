import React, { useState } from 'react';
import { images } from '../../../config/images';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [maskedPhone, setMaskedPhone] = useState('');

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/request-reset', {
        phone,
        dob,
      });
      setMaskedPhone(phone.replace(/.(?=.{4})/g, '*'));
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to request reset.');
    }
    setLoading(false);
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/verify-reset-code', {
        phone,
        code,
      });
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid code.');
    }
    setLoading(false);
  };

  const handleSetNewPassword = async (e) => {
    e.preventDefault();
    setError('');
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/reset-password', {
        phone,
        code,
        newPassword,
      });
      navigate('/password-updated');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password.');
    }
    setLoading(false);
  };

  return (
    <div className='reset-password-main'>
      <div className="content min-vh-100 mw-sm-940 m-auto">
        <div className="logo px-sm-0 p-3">
          <a href="#">
            <img src={images.Logo} alt="logo" />
          </a>
        </div>
        <div className="bg-white border-radius-14 padding-40 w-100 rounder-sm-0 h-sm-100 d-flex signup-form-block password-reset-form-block verification-code-form-block">
          <div className="w-100">
            <h4 className="margin-b-10 text-primary fw-semibold">Password Reset</h4>
            {error && <div className="alert alert-danger">{error}</div>}
            {step === 1 && (
              <form onSubmit={handleRequestReset}>
                <p className="margin-b-30 text-gray-300">Please confirm your details</p>
                <div className='password-reset-details-box p-3 border-radius-6 margin-b-20'>
                  <div className="form-group margin-b-10 margin-r-10 w-100 mw-sm-380">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Phone number</label>
                    <input className="form-control f-size-12 fw-medium" placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} required />
                  </div>
                  <div className="form-group margin-b-10 margin-r-10 w-100 mw-sm-380">
                    <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Date of birth</label>
                    <input type='date' className="form-control f-size-12 fw-medium" placeholder="DD/MM/YYYY" value={dob} onChange={e => setDob(e.target.value)} required />
                  </div>
                </div>
                <div className="next-btn-action mw-sm-150">
                  <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Next'}<i className="arrow-right mx-2"></i></button>
                </div>
              </form>
            )}
            {step === 2 && (
              <form onSubmit={handleVerifyCode}>
                <p className="margin-b-30 text-gray-300">We have the following number on record for you. We can send a code via SMS or phone to authenticate you.</p>
                <p className='margin-b-30 text-primary fw-medium f-size-16 line-height-20'>{maskedPhone || phone}</p>
                <div className="form-group margin-b-30">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Enter verification code</label>
                  <input type='text' className="form-control f-size-12 fw-medium" placeholder="Verification code" value={code} onChange={e => setCode(e.target.value)} required />
                </div>
                <div className="form-group margin-b-30">
                  <label className="text-gray-400 f-size-14 fw-medium">Did not receive the code?
                    <button type="button" className="f-size-14 fw-medium text-primary text-decoration-underline btn-resend" disabled={loading} onClick={handleRequestReset}>Resend</button>
                  </label>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary w-100 rounded f-size-12 fw-medium" type="submit" disabled={loading}>{loading ? 'Verifying...' : 'Verify code'}</button>
                </div>
              </form>
            )}
            {step === 3 && (
              <form onSubmit={handleSetNewPassword}>
                <p className="margin-b-30 text-gray-300">Please provide the following details</p>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Verified cellphone number</label>
                  <input type='text' className="form-control f-size-12 fw-medium" value={maskedPhone || phone} disabled />
                </div>
                <div className="form-group margin-b-10">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">New Password</label>
                  <input type="password" className="form-control f-size-12 fw-medium" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
                </div>
                <div className="form-group margin-b-30">
                  <label className="form-label text-primary fw-medium mb-1 f-size-12 line-height-20">Confirm new password</label>
                  <input type="password" className="form-control f-size-12 fw-medium" placeholder="Confirm new password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center" type="submit" disabled={loading}>{loading ? 'Updating...' : 'Next'}<i className="arrow-right mx-2"></i></button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between w-100 py-4 px-sm-0 flex-sm-row flex-column text-center">
            <div className="login-link mb-3 mb-sm-0 mx-3 mx-lg-0">
              <div className="f-size-14 text-gray-400">Already have an account? <Link to="/login" className="text-primary text-decoration">Login</Link></div>
            </div>
            <div className="text-center f-size-14 fw-medium text-gray-400 mx-3 mx-lg-0">
              Need help? Contact support <br />
              <a href="mailto:support@thrive.trade" title="support@thrive.trade" className="text-primary">support@thrive.trade</a> or
              <a href="tel:+010 824 2979" title="Contact support" className="text-primary">010 824 2979</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ResetPassword;