import React from 'react';
import { images } from '../../../config/images';
import { Link, useNavigate } from 'react-router-dom';

const PasswordUpdated = () => {
  const navigate = useNavigate();
  return (
    <div className='password-updated-main'>
      <div className="content min-vh-100 mw-sm-940 m-auto">
        <div className="logo px-sm-0 p-3">
          <a href="#">
            <img src={images.Logo} alt="logo" />
          </a>
        </div>
        <div className="bg-white border-radius-14 padding-40 w-100 mw-sm-360 rounder-sm-0 h-sm-100 d-flex flex-column align-items-center password-updated-block">
          <div className="w-100 text-center">
            <div className="margin-b-30 check-status">
              <img src={images.CheckStatus || images.Logo} alt="check status" />
            </div>
            <h4 className="margin-b-30 text-primary fw-semibold ">Password Updated</h4>
            <div className="form-group">
              <button
                className="btn btn-primary w-100 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center"
                onClick={() => navigate('/login')}
              >
                Go to sign In<i className="arrow-right mx-2"></i>
              </button>
            </div>
          </div>
        </div>
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
  );
};

export default PasswordUpdated;