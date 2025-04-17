import React from 'react';
import { Link } from 'react-router-dom';

const TransactionHistoryTable = ({ transactions }) => {
    const groupedTransactions = transactions.reduce((acc, transaction) => {
        const date = transaction.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(transaction);
        return acc;
    }, {});

    return (
        <div className='transactionhistorytable_main'>
            <table className="table transaction-history-table" id="tblBalance">
                {Object.entries(groupedTransactions).map(([date, transactions]) => (
                    <React.Fragment key={date}>
                        <thead className="bg-gray-100 rounded">
                            <tr>
                                <th className='f-size-12 text-primary-hover text-nowrap fw-medium border-0'>{date} - End of day balance</th>
                                <th className="w-sm-100 f-size-14 fw-bold text-primary-hover text-nowrap text-right border-0">R{transactions.reduce((sum, t) => sum + t.amount, 0).toFixed(2)}</th>
                                <th className="w-sm-40 border-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td className="px-0">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="bg-gray-200 rounded iconbox w-sm-40 margin-r-10 border-0">
                                                        <i className={`icon ${transaction.icon}`}></i>
                                                    </td>
                                                    <td className="label-text border-0">
                                                        <label>
                                                            <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                                                                {transaction.label}
                                                            </span>
                                                            <span className="date f-size-12 text-gray-400 fw-medium w-100 d-block">
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
                                            <span className="f-size-14 text-primary-hover fw-medium w-100 d-block line-height-18 text-nowrap">
                                                {transaction.amount < 0 ? '-' : ''}R {Math.abs(transaction.amount).toFixed(2)}
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
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
        </div>
    );
};

export default TransactionHistoryTable;