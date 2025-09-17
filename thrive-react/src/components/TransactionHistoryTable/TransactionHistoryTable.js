import React from "react";
import { Link } from "react-router-dom";

const TransactionHistoryTable = ({ transactions = [] }) => {
  // group by date
  const grouped = transactions.reduce((acc, t) => {
    acc[t.date] = acc[t.date] || [];
    acc[t.date].push(t);
    return acc;
  }, {});

  return (
    <div className="transactionhistorytable_main">
      <table
        className="table transaction-history-table"
        id="tblBalance"
      >
        <tbody>
          {Object.entries(grouped).map(([date, items]) => {
            const endOfDayBalance = items[items.length - 1]?.balance ?? 0;
            return (
              <React.Fragment key={date}>
                <tr>
                    <td colSpan={3} className="rounded px-3 py-2 thead">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="f-size-12 text-primary-hover fw-medium">
                          {date} - End of day balance
                        </span>
                        <span className="f-size-14 fw-bold text-primary-hover">
                          R {endOfDayBalance.toFixed(2)}
                        </span>
                      </div>
                    </td>
                </tr>

                {items.map((transaction, idx) => (
                  <tr key={idx}>
                    <td className="px-0">
                      <table>
                        <tbody>
                          <tr>
                            <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 border-0">
                              <i className={`icon ${transaction.icon}`}></i>
                            </td>
                            <td className="label-text border-0">
                              <label>
                                <span className="f-size-14 text-primary-hover fw-medium d-block line-height-18 text-nowrap">
                                  {transaction.label}
                                </span>
                                <span className="date f-size-12 text-gray-400 fw-medium d-block">
                                  {transaction.date}
                                </span>
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="w-sm-100 f-size-14 text-primary-hover fw-medium text-right">
                      <label>
                        <span className="f-size-14 text-primary-hover fw-medium d-block line-height-18 text-nowrap">
                          {transaction.amount < 0 ? "-" : ""}R {Math.abs(transaction.amount).toFixed(2)}
                        </span>
                      </label>
                    </td>
                    <td className="w-sm-40">
                      <Link to="/transaction-detail">
                        <button type="button" className="btn btn-outline border border-gray-200 rounded d-flex align-items-center">
                          <i className="icon ico-arrow-right"></i>
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryTable;
