import { useEffect, useState } from 'react';
import FilterHeading from '../../components/FilterHeading/FilterHeading';
import Pagination from '../../components/Pagination/Pagination';
import TransactionHistoryTable from '../../components/TransactionHistoryTable/TransactionHistoryTable';
import axios from 'axios';
import PageHeading from '../../components/PageHeading/PageHeading';
import PendingTransactions from '../../components/PendingTransactions/PendingTransactions';

const Balance = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get('/api/balance/transaction-history.json');
        const history = res.data['transactions-history'] || [];

        const mapped = history.map(item => ({
          date: item.processDate,
          label: item.transaction,
          amount: item.crAmount > 0 ? item.crAmount : -item.drAmount,
          balance: item.balance, 
          icon:
            item.transaction === 'WalletTransfer'
              ? 'ico-wallet-transfer'
              : item.transaction === 'CardDeposit'
              ? 'ico-desposit'
              : 'ico-cardfees',
          type:
            item.transaction === 'WalletTransfer'
              ? 'Withdrawal'
              : item.transaction === 'CardDeposit'
              ? 'Deposit'
              : 'Fee',
        }));

        setTransactions(mapped);
        setFilteredTransactions(mapped);
      } catch (err) {
        setError('Failed to load transactions.');
      }
      setLoading(false);
    };
    fetchTransactions();
  }, []);

  const handleFilter = (results) => {
    setFilteredTransactions(results);
  };

  return (
    <div className='balance-main'>
      <div className='margin-b-20 page-heading'>
        <PageHeading PageHeadingName="Balance" iconClassName="ico-balance" iconTo="/balance"/>
      </div>
      <div className='margin-b-20'>
        <PendingTransactions/>
      </div>
      <div className="bg-white border-radius-14 w-100 balance-history-box rounder-sm-0 padding-30 border-ea">
        <FilterHeading
          FilterHeadingName="Transaction History"
          showSelect={true}
          option1="Type"
          option2="Deposit"
          option3="Withdrawal"
          data={transactions}
          onSearch={handleFilter}
        />
        <form id="ProfilePersonalForm" className="w-100">
          {loading ? (
            <div>Loading transactions...</div>
          ) : error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            <TransactionHistoryTable transactions={filteredTransactions} />
          )}
          <Pagination
            TotalCount={`1 to ${filteredTransactions.length} of ${filteredTransactions.length}`}
            pgIndex={"1"}
          />
        </form>
      </div>
    </div>
  );
};

export default Balance;
