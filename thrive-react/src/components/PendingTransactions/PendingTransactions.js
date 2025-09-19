import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PendingTransactions = () => {
  const [summary, setSummary] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/balance/pending-transactions.json");
        setSummary(res.data.summary);
        setTransactions(res.data.transactions);
      } catch (err) {
      console.error("Error loading pending transactions", err);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="bg-white border-radius-14 w-100 balance-pending-trans-box rounder-sm-0 padding-30 border-ea margin-b-20">
      <h6 className="margin-b-20 text-capitalize">pending transactions</h6>
      {summary && (
        <div className="d-flex align-items-sm-center flex-column flex-sm-row justify-content-between">
          <div className="pending-b-col margin-b-20">
            <div className="f-size-12 text-gray-400 fw-semibold w-100 d-block text-uppercase">
              pending transaction balance
            </div>
            <div className="f-size-20 text-secondary fw-medium w-100 d-block">
              R{summary.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </div>
          <div className="period-date-col text-sm-end margin-b-20">
            <div className="f-size-12 text-gray-400 fw-medium w-100 d-block text-uppercase">
              Period
            </div>
            <div className="f-size-20 text-yellow fw-medium w-100 d-block">
              {summary.startDate}
              {summary.startDate !== summary.endDate && ` - ${summary.endDate}`}
            </div>
          </div>
        </div>
      )}

      <div className="pending-trans-block">
        <div className="table-responsive">
          <table className="table pending-trans-table mb-0">
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-0">
                      <table>
                        <tbody>
                          <tr>
                            <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10">
                              <i className="icon ico-creditcard"></i>
                            </td>
                            <td className="label-text">
                              <label>
                                <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                                  {item.type}
                                </span>
                                <span className="date f-size-12 text-gray-400 fw-medium w-100 d-block">
                                  {item.date}
                                </span>
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="w-sm-100 text-right">
                      <label>
                        <span className="f-size-14 text-secondary fw-medium w-100 d-block line-height-18 text-nowrap">
                          R{item.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                      </label>
                    </td>
                    <td className="w-sm-40">
                      <Link
                        to={`/pending-transaction-detail`}
                        type="button"
                        className="btn btn-outline border border-gray-200 rounded d-flex align-items-center"
                      >
                        <i className="icon ico-arrow-right"></i>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <>
                <tr></tr>
                {/* <tr>
                  <td colSpan="3" className="text-center text-gray-400 f-size-12">
                    No pending transactions found.
                  </td>
                </tr> */}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingTransactions;
