import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {
  // Example state, replace with real data fetching logic
  const [loadingSummaryData, setLoadingSummaryData] = React.useState(false);
  const [model, setModel] = React.useState({
    Year: new Date().getFullYear(),
    TotalSalesAmount: 0,
    TotalCommissionAmount: 0,
    TotalWalletTransfers: 0,
    AirtimeAndDataSummary: { CommissionAmountPercentage: 0, CommissionAmount: 0 },
    ElectricitySummary: { CommissionAmountPercentage: 0, CommissionAmount: 0 },
    EntertainmentSummary: { CommissionAmountPercentage: 0, CommissionAmount: 0 },
    BillPaymentSummary: { CommissionAmountPercentage: 0, CommissionAmount: 0 },
  });

  return (
    <div className="{`tab-pane fade${active ? ' active show' : ''}`}" id="pills-vas-summary" role="tabpanel" aria-labelledby="pills-vas-summary-tab" tabIndex={0}>
      <div className="flex-grow-1 d-flex flex-column">
        <div className="summary-box border-ea padding-30 border-radius-14 margin-b-20 bg-white">
          {loadingSummaryData ? (
            <div className="loading-skeleton">
              <div className="d-flex justify-content-between margin-b-20">
                <div className="summary-month-year">
                  <div className="custom-skeleton mw-sm-120 w-100 h-20 mb-1"></div>
                  <div className="custom-skeleton w-sm-60 h-16"></div>
                </div>
                <div className="custom-skeleton w-sm-60 h-12"></div>
              </div>
              <div className="divider margin-b-20"></div>
              <div className="d-flex justify-content-between mb-3">
                <span className="custom-skeleton mw-sm-120 w-100 h-12"></span>
                <span className="custom-skeleton w-sm-75 h-14"></span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="custom-skeleton mw-sm-150 w-100 h-12"></span>
                <span className="custom-skeleton w-sm-75 h-14"></span>
              </div>
              <div className="d-flex justify-content-between small">
                <span className="custom-skeleton mw-sm-120 w-100 h-12"></span>
                <span className="custom-skeleton w-sm-75 h-14"></span>
              </div>
            </div>
          ) : (
            <>
              <div className="d-flex justify-content-between margin-b-20">
                <div className="summary-month-year">
                  <div className="fw-semibold mb-2 text-primary">{model.Year} Summary</div>
                  <div className="text-gray-300 f-size-12 fw-medium">{new Date().toLocaleDateString(undefined, { day: '2-digit', month: 'long' })}</div>
                </div>
                <Link to="/history" className="f-size-12 text-blue fw-semibold cursor-pointer">View all</Link>
              </div>
              <div className="divider margin-b-20"></div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-gray-300 f-size-12 fw-medium">Total VAS sales</span>
                <span className="text-primary f-size-12 fw-medium">{model.TotalSalesAmount}</span>
              </div>
              <div className="d-flex justify-content-between summary-highlight mb-3 p-1">
                <span className="text-primary f-size-12 fw-medium">Total Commission Earned</span>
                <span className="text-primary f-size-12 fw-medium">{model.TotalCommissionAmount}</span>
              </div>
              <div className="d-flex justify-content-between small text-muted">
                <span className="text-gray-300 f-size-12 fw-medium">Total Wallet transfers</span>
                <span className="text-primary f-size-12 fw-medium">{model.TotalWalletTransfers}</span>
              </div>
            </>
          )}
        </div>
        <div className="commission-box border-ea padding-30 border-radius-14 margin-b-20 bg-white">
          {loadingSummaryData ? (
            <div className="loading-skeleton">
              <div className="custom-skeleton mw-sm-200 w-100 h-20 margin-b-30"></div>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="commission-chart margin-r-30">
                  <div className="custom-skeleton w-sm-150 mw-sm-150" style={{ height: 150, maxHeight: 150, borderRadius: '100%' }}></div>
                </div>
                <div className="d-grid justify-content-between summary-commission-data">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="commission-data-col">
                      <div className="d-flex align-items-center mb-1">
                        <span className="custom-skeleton legend-bg-circle"></span>
                        <span className="custom-skeleton w-sm-120 mw-sm-120 h-14"></span>
                      </div>
                      <div className="custom-skeleton w-sm-120 mw-sm-120 h-14 commission-amount"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="fw-semibold margin-b-30 text-primary">{model.Year} Commission Breakdown</div>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="commission-chart margin-r-30" style={{ width: 150, height: 150 }}>
                  {/* Chart placeholder */}
                  <canvas id="doughnutChart" width="150" height="150"></canvas>
                </div>
                <div className="d-grid justify-content-between summary-commission-data">
                  <div className="commission-data-col">
                    <div className="d-flex align-items-center mb-1">
                      <span className="legend-bg-circle legend-airtime"></span>
                      <span className="text-gray-400 f-size-14">Airtime & Data</span>
                    </div>
                    <div className="f-size-14 fw-semibold text-danger commission-amount">
                      {model.AirtimeAndDataSummary.CommissionAmountPercentage}% {model.AirtimeAndDataSummary.CommissionAmount}
                    </div>
                  </div>
                  <div className="commission-data-col">
                    <div className="d-flex align-items-center mb-1">
                      <span className="legend-bg-circle legend-electricity"></span>
                      <span className="text-gray-400 f-size-14">Electricity</span>
                    </div>
                    <div className="f-size-14 fw-semibold text-darkblue commission-amount">
                      {model.ElectricitySummary.CommissionAmountPercentage}% {model.ElectricitySummary.CommissionAmount}
                    </div>
                  </div>
                  <div className="commission-data-col">
                    <div className="d-flex align-items-center mb-1">
                      <span className="legend-bg-circle legend-entertainment"></span>
                      <span className="text-gray-400 f-size-14">Entertainment</span>
                    </div>
                    <div className="f-size-14 fw-semibold text-darkyellow commission-amount">
                      {model.EntertainmentSummary.CommissionAmountPercentage}% {model.EntertainmentSummary.CommissionAmount}
                    </div>
                  </div>
                  <div className="commission-data-col">
                    <div className="d-flex align-items-center mb-1">
                      <span className="legend-bg-circle legend-bill"></span>
                      <span className="text-gray-400 f-size-14">Bill Payments</span>
                    </div>
                    <div className="f-size-14 fw-semibold text-primary commission-amount">
                      {model.BillPaymentSummary.CommissionAmountPercentage}% {model.BillPaymentSummary.CommissionAmount}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
