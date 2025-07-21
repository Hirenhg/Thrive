import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../../components/PageHeading/PageHeading';
import Pagination from '../../components/Pagination/Pagination';
import axios from 'axios';

const TransactionDetail = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransaction = async () => {
      setLoading(true);
      setError('');
      try {
        // For now, fetch all and use index as id
        const res = await axios.get('http://localhost:5000/api/dashboard/recent-activity');
        setTransaction(res.data[id]);
      } catch (err) {
        setError('Failed to load transaction details.');
      }
      setLoading(false);
    };
    fetchTransaction();
  }, [id]);

  if (loading) return <div>Loading transaction details...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!transaction) return <div>No transaction found.</div>;

  return (
    <div className="transaction-detail-main">
      <div className='margin-b-20 page-heading'>
        <PageHeading PageHeadingName={transaction.transaction} iconClassName="ico-back" iconTo="/balance"/>
      </div>
      <div className="bg-white border-radius-14 w-100 contant-detail-box rounder-sm-0 d-flex flex-column justify-content-between border-ea">
        <table className="table" id="tblTransactionDetail">
          <thead>
            <tr>
              <th className="text-primary fw-medium px-0">
                {transaction.processDate}
              </th>
              <th className="mw-sm-300 text-primary fw-medium text-right text-nowrap">
                {transaction.crAmount > 0 ? `+R${transaction.crAmount}` : `-R${transaction.drAmount}`}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-0">
                <label>
                  <span className="pb-1 time f-size-12 text-gray-400 fw-medium w-100 d-block">
                    {transaction.processDate}
                  </span>
                  <span className="pb-1 f-size-14 text-primary fw-medium w-100 d-block line-height-18 text-capitalize text-nowrap">
                    {transaction.transaction}
                  </span>
                  <span className="suppoting-text f-size-12 text-gray-400 fw-medium w-100 d-block">
                    Balance after: R{transaction.balance}
                  </span>
                </label>
              </td>
              <td>
                <table className="ms-auto">
                  <tbody>
                    <tr>
                      <td>
                        {transaction.crAmount > 0 ? `+R${transaction.crAmount}` : `-R${transaction.drAmount}`}
                      </td>
                      <td>
                        <button className="btn btn-outline border border-gray-200 rounded f-size-12 fw-medium d-flex align-items-center justify-content-center btn-pdf">
                          <span className=" d-none d-sm-inline">
                            Proof of payment
                          </span>
                          <i className="ico-download"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination TotalCount="1 to 1 of 1" pgIndex="1" />
      </div>
    </div>
  );
};

export default TransactionDetail;