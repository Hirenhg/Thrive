import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from '../../components/Pagination/Pagination'

const PendingTransactionDetail = () => {
  const [transactionDetail, setTransactionDetail] = useState(null);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch("/api/balance/pending-transactions-detail.json");
        const data = await res.json();
        setTransactionDetail(data);
      } catch (err) {
        console.error("Failed to load transaction detail", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, []);


  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return (
      date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      " | " +
      date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (!transactionDetail) return <div className="text-center">No transaction found.</div>;

  const { title, description, date, totalAmount, transactions } = transactionDetail;

  return (
    <div className="transaction-detail-main">
      <div className="d-flex align-items-center margin-b-20 page-heading">
        <Link
          className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 d-flex align-items-center justify-content-center"
          to="/balance"
        >
          <i className="icon ico-back"></i>
        </Link>
        <div className="d-flex flex-column">
          <h6 className="mb-1 fw-bold">{title}</h6>
          <div className="text-muted small">{description}</div>
        </div>
      </div>
      <div className="bg-white border-radius-14 w-100 contant-detail-box rounder-sm-0 d-flex flex-column justify-content-between border-ea">
        <table className="table" id="tblTransactionDetail">
          <thead>
            <tr>
              <th className="text-primary fw-medium px-0">{formatDate(date)}</th>
              <th className="mw-sm-300 text-secondary fw-medium text-right text-nowrap">
                +{totalAmount}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(transactions) && transactions.length > 0 ? (
              transactions.map((item) => (
                <tr key={item.id}>
                  <td className="px-0">
                    <label>
                      <span className="pb-1 time f-size-12 text-gray-400 fw-medium w-100 d-block">
                        {formatDateTime(item.dateTime)}
                      </span>
                      <span className="pb-1 f-size-14 text-primary fw-medium w-100 d-block line-height-18 text-capitalize text-nowrap">
                        {item.title}
                      </span>
                    </label>
                  </td>
                  <td className="mw-sm-300 f-size-14 text-secondary fw-medium text-right text-nowrap">
                    <table className="ms-auto">
                      <tbody>
                        <tr>
                          <td>+ {item.amount}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center text-muted">No transactions found</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination TotalCount={`1 to ${filteredTransactions.length} of ${filteredTransactions.length}`} pgIndex={"1"} />
      </div>
    </div>
  );
};

export default PendingTransactionDetail;
