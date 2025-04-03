import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Auth/Login/Login';
import VerificationCode from './pages/Auth/Login/VerificationCode';
import TermsConditions from './pages/Auth/Login/TermsConditions';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import PasswordUpdated from './pages/Auth/ResetPassword/PasswordUpdated';
import SignUp from './pages/Auth/SignUp/SignUp';
import SignUpTC from './pages/Auth/SignUp/SignUpTC';
import SignUpComplete from './pages/Auth/SignUp/SignUpComplete';
import ProtectedRoute from './protected/ProtectedRoute';
import Dashboard from "./pages/Dashboard/Dashboard";
import Balance from "./pages/Balance/Balance";
import TransactionDetail from "./pages/Balance/TransactionDetail";
import AtmDeposits from "./pages/Balance/AtmDeposits";
import Suppliers from "./pages/Suppliers/Suppliers";
import AddSuperTrader from "./pages/Suppliers/AddSuperTrader";
import AddSupplier from "./pages/Suppliers/AddSupplier";
import AddSupplierForm from "./pages/Suppliers/AddSupplierForm";
import SupplierHistory from "./pages/Suppliers/SupplierHistory";
import ViewSupplierPay from "./pages/Suppliers/ViewSupplierPay";
import BankTransfer from "./pages/BankTransfer/BankTransfer";
import BankTransferForm from "./pages/BankTransfer/BankTransferForm";
import Documents from "./pages/Documents/Documents";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className='page bg-gray-100 min-vh-100'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/verification-code" element={<VerificationCode />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password" element={<PasswordUpdated />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-tc" element={<SignUpTC />} />
          <Route path="/signup-complete" element={<SignUpComplete />} />
        </Routes>
        <div>
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route index element={<Dashboard />} />
              <Route path="/balance" element={<Balance />} />
              <Route path="/atm-deposits" element={<AtmDeposits />} />
              <Route path="/transaction-detail" element={<TransactionDetail />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/add-supertrader" element={<AddSuperTrader />} />
              <Route path="/add-supplier" element={<AddSupplier />} />
              <Route path="/add-supplier-form" element={<AddSupplierForm />} />
              <Route path="/supplier-history" element={<SupplierHistory />} />
              <Route path="/view-supplier-pay" element={<ViewSupplierPay />} />
              <Route path="/bank-transfer" element={<BankTransfer />} />
              <Route path="/bank-transfer-form" element={<BankTransferForm />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
