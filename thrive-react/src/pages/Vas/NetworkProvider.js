import React, { useState, useEffect } from 'react';

const NetworkProvider = () => {
  // Example state, replace with real data fetching logic
  const [loading, setLoading] = useState(true);
  const [networkProviders, setNetworkProviders] = useState([]);
  const [selectedProviderId, setSelectedProviderId] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setNetworkProviders([
        { Id: 1, Description: 'Provider A', ProfileLogoURL: '/assets/logo.svg' },
        { Id: 2, Description: 'Provider B', ProfileLogoURL: '/assets/logo.svg' },
        { Id: 3, Description: 'Provider C', ProfileLogoURL: '/assets/logo.svg' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
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
                  <img src={provider.ProfileLogoURL} alt={provider.Description} />
                </span>
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default NetworkProvider;
