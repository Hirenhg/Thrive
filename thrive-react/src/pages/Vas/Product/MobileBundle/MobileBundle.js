import React from 'react';
import NetworkProvider from '../../NetworkProvider';

const MobileBundle = () => {
  return (
    <div className="mobile-bundle-main">
      <h6 className="margin-b-20 text-primary f-size-20 fw-medium">Mobile Bundle</h6>
      <div className="divider margin-b-20"></div>
      <div><NetworkProvider/></div>
    </div>
  );
};

export default MobileBundle;
