import React from 'react'
import FilterHeading from '../../components/FilterHeading/FilterHeading'
import Pagination from '../../components/Pagination/Pagination'
import TransactionHistoryTable from '../../components/TransactionHistoryTable/TransactionHistoryTable'

const Balance = () => {

  const transactions = [
    {
        date: '21 Feb 2025',
        label: 'Wallet Transfers',
        amount: -10.95,
        icon: 'ico-wallet-transfer',
    },
    {
        date: '21 Feb 2025',
        label: 'Redemption',
        amount: 25.00,
        icon: 'ico-withdrwal',
    },
    {
        date: '19 Feb 2025',
        label: 'Wallet Transfers',
        amount: -100.00,
        icon: 'ico-wallet-transfer',
    },
];

  return (
    <div className='balance-main'>
      <div className="bg-white border-radius-14 w-100 balance-history-box rounder-sm-0 padding-30 border-ea">
        <FilterHeading FilterHeadingName="Transaction History" showSelect={true} option1="Type" option2="Deposit" option3="Withdrawal" />
        <form id="ProfilePersonalForm" FormName="ProfilePersonalForm" className="w-100">
          <TransactionHistoryTable transactions={transactions}  />
          <Pagination TotalCount="1 to 10 of 51" pgIndex={"1" || "2"  || "3"  || "4"} />
        </form>
      </div>
    </div>
  )
}

export default Balance