const express = require('express');
const router = express.Router();

// GET /api/dashboard/summary
router.get('/summary', (req, res) => {
  res.json({
    year: new Date().getFullYear(),
    totalSalesAmount: 123456.78,
    totalCommissionAmount: 23456.78,
    totalWalletTransfers: 3456.78,
    salesChart: [1000, 2000, 3000, 4000, 5000, 6000, 7000],
  });
});

// GET /api/dashboard/recent-activity
router.get('/recent-activity', (req, res) => {
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

// GET /api/dashboard/rewards
router.get('/rewards', (req, res) => {
  res.json({
    tier: 3,
    lastUpdated: 'Tue 12:33',
    levels: [
      { discount: '12%', status: 'active' },
      { discount: '28%', status: 'active' },
      { discount: '40%', status: 'active' },
      { discount: '50%', status: 'locked', away: 'R150K Away' },
      { discount: '60%', status: 'locked', away: 'R650K Away' },
    ],
  });
});

module.exports = router; 