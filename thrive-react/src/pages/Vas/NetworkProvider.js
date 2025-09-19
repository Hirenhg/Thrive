import React, { useState, useEffect } from 'react';
import { images } from '../../config/images'

const NetworkProvider = () => {
  const [loading, setLoading] = useState(true);
  const [networkProviders, setNetworkProviders] = useState([]);
  const [selectedProviderId, setSelectedProviderId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setNetworkProviders([
        { Id: 1, Description: 'Provider A', },
        { Id: 2, Description: 'Provider B', },
        { Id: 3, Description: 'Provider C', },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='vas-detail-box'>
      <div className='vas-feature-col'>
        <div className="margin-b-20 text-primary f-size-14">Select the network</div>
        {loading ? (
          <div className="loading-skeleton network-grid d-grid margin-b-20">
            {[...Array(4)].map((_, i) => (
              <label key={i} className="network-radio">
                <span className="network-card custom-skeleton"></span>
              </label>
            ))}
          </div>
        ) : (
          <div className={`network-grid d-grid margin-b-20${selectedProviderId > 0 ? ' network-select' : ''}`} role="radiogroup" aria-label="Select network">
            {networkProviders.map((provider) => (
              <label className="network-radio" tabIndex={0} key={provider.Id}>
                <input
                  type="radio"
                  value={provider.Id}
                  checked={selectedProviderId === provider.Id}
                  onChange={() => setSelectedProviderId(provider.Id)}
                  className="d-none"
                />
                <span className="network-card border-radius-6 text-center">
                  <span className="network-logo">
                    <img src={images.Logo} style={{ objectFit: 'contain' }}/>
                  </span>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NetworkProvider;
