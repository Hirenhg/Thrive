import React from 'react';

const FrequentlyBoughts = () => {
  // Example state, replace with real data fetching logic
  const [isLoading, setIsLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  return (
    <div className="most-frequently-bought-block">
      <div className="text-primary f-size-14 margin-b-20">Most frequently bought</div>
      {isLoading ? (
        <div className="most-freq-grid d-grid loading-skeleton">
          {products.map((model, idx) => (
            <div key={idx} className="freq-card border-radius-14 text-center">
              <a className="mb-3 freq-logo overflow-hidden">
                <div className="custom-skeleton h-100 mw-sm-150 m-auto"></div>
              </a>
              <span className="custom-skeleton h-20 w-75 m-auto"></span>
            </div>
          ))}
        </div>
      ) : (
        <div className="most-freq-grid d-grid">
          {products.map((model, idx) => (
            <div key={idx} className="freq-card border-radius-14 text-center" style={{ backgroundColor: model.ProfileLogoColour }}>
              <a className="mb-3 freq-logo overflow-hidden">
                <img alt={model.ProfileLogoPath} src={model.ProfileLogoPath} />
              </a>
              <span className="text-white fw-semibold">{model.Description}</span>
            </div>
          ))}
          {products.length < 6 &&
            Array.from({ length: 6 - products.length }).map((_, i) => (
              <div key={i + products.length} className="freq-card no-data border-radius-14 text-center">No data yet</div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FrequentlyBoughts;

