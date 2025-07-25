import React from 'react';
import NetworkProvider from '../../NetworkProvider';

const Entertainment = () => {
  return (
    <div className="entertainment-main">
      <h6 className="margin-b-20 text-primary f-size-20 fw-medium">Entertainment</h6>
      <div className="divider margin-b-20"></div>
      <div><NetworkProvider/></div>
    </div>
  );
};

export default Entertainment;