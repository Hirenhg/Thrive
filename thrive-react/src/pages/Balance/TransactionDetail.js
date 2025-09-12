import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from '../../components/Pagination/Pagination'

const CashDepositDetail = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch("/api/balance/transaction-detail.json");
        const data = await res.json();
        setDetail(data);
      } catch (err) {
        console.error("Failed to load transaction detail", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, []);

  const formatCurrency = (val) =>
    `R${val.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short"
    });
  };

  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return (
      date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) +
      " | " +
      date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit"
      })
    );
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (!detail) return <div className="text-center">No data found.</div>;

  return (
    <div className="transaction-detail-main">
      <div className="d-flex align-items-center margin-b-20 page-heading">
        <Link
          className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 d-flex align-items-center justify-content-center"
          to="/balance"
        >
          <i className="icon ico-back"></i>
        </Link>
        <h6 className="mb-0 text-primary fw-medium text-capitalize">
          {detail.title}
        </h6>
      </div>
      <div className="bg-white border-radius-14 w-100 contant-detail-box rounder-sm-0 d-flex flex-column justify-content-between border-ea">
        <table className="table" id="tblTransactionDetail">
          <thead>
            <tr>
              <th className="text-primary fw-medium px-0">
                {formatDate(detail.date)}
              </th>
              <th className="mw-sm-300 text-primary fw-medium text-right text-nowrap">
                +{formatCurrency(detail.totalAmount)}
              </th>
            </tr>
          </thead>
          <tbody>
            {detail.transactions.map((item) => (
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
                <td className="mw-sm-300 f-size-14 text-primary fw-medium text-right text-nowrap">
                  <table className="ms-auto">
                    <tbody>
                      <tr>
                        <td className={item.amount < 0 ? "text-danger" : "text-success"}>
                          {item.amount < 0 ? `-R${Math.abs(item.amount).toFixed(2)}` : `+R${item.amount.toFixed(2)}`}
                        </td>
                        <td>
                          <button
                            className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf"
                            onClick={() => console.log("Download proof for", item.id)}
                          >
                            <span className="d-none d-sm-inline">Proof of payment</span>
                            <i className="ico-download"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CashDepositDetail;
