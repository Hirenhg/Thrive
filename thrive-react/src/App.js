import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from './pages/Auth/Login/Login';
import VerificationCode from './pages/Auth/Login/VerificationCode';
import TermsConditions from './pages/Auth/Login/TermsConditions';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import PasswordUpdated from './pages/Auth/ResetPassword/PasswordUpdated';
import SignUp from './pages/Auth/SignUp/SignUp';
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
import Vas from './pages/Vas/Home/Index';
import Home from './pages/Auth/Home';

function AppWrapper() {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const isHome = location.pathname === "/home";
  return (
    <div className={isHome ? 'page bg-primary min-vh-100 homepage-tem' : 'page bg-gray-100 min-vh-100'}>
      <Routes>
        {/* Public Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-updated" element={<PasswordUpdated />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-complete" element={<SignUpComplete />} />
        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute />}> 
          <Route index element={<Dashboard />} />
          <Route path="balance" element={<Balance />} />
          <Route path="atm-deposits" element={<AtmDeposits />} />
          <Route path="transaction-detail" element={<TransactionDetail />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="add-supertrader" element={<AddSuperTrader />} />
          <Route path="add-supplier" element={<AddSupplier />} />
          <Route path="add-supplier-form" element={<AddSupplierForm />} />
          <Route path="supplier-history" element={<SupplierHistory />} />
          <Route path="view-supplier-pay" element={<ViewSupplierPay />} />
          <Route path="bank-transfer" element={<BankTransfer />} />
          <Route path="bank-transfer-form" element={<BankTransferForm />} />
          <Route path="documents" element={<Documents />} />
          <Route path="profile" element={<Profile />} />
          <Route path="vas" element={<Vas />} />
        </Route>
        {/* Redirect root to /home if not authenticated */}
        <Route path="/" element={token ? <Navigate to="/" /> : <Navigate to="/home" />} />
        {/* Catch all route - redirect to login if not authenticated, otherwise to dashboard */}
        <Route path="*" element={token ? <Navigate to="/" /> : <Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
