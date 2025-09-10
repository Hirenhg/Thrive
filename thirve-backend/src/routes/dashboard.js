const express = require('express');
const router = express.Router();


// GET /api/dashboard/transaction-history
router.get('/transaction-history', (req, res) => {
  res.json([
    {
      transaction: 'CardFee',
      processDate: '14 July 2025',
      crAmount: 0,
      drAmount: 2002.38,
      balance: 848607.55,
    },
    {
      transaction: 'CardDeposit',
      processDate: '14 July 2025',
      crAmount: 809095.27,
      drAmount: 0,
      balance: 850609.93,
    },
    {
      transaction: 'WalletTransfer',
      processDate: '9 July 2025',
      crAmount: 0,
      drAmount: 20.0,
      balance: 41514.66,
    },
  ]);
});

// GET /api/dashboard/transaction-detail
router.get('/transaction-detail', (req, res) => {
  res.json([
    {
      transaction: 'CardFee',
      processDate: '14 July 2025',
      crAmount: 0,
      drAmount: 2002.38,
      balance: 848607.55,
    },
    {
      transaction: 'CardDeposit',
      processDate: '14 July 2025',
      crAmount: 809095.27,
      drAmount: 0,
      balance: 850609.93,
    },
    {
      transaction: 'WalletTransfer',
      processDate: '9 July 2025',
      crAmount: 0,
      drAmount: 20.0,
      balance: 41514.66,
    },
  ]);
});


module.exports = router; 