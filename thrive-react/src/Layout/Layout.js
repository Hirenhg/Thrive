import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import Header from "../components/Header/Header";
import Dashboard from "../pages/Dashboard/Dashboard";
import Balance from "../pages/Balance/Balance";
import TransactionDetail from "../pages/Balance/TransactionDetail";
import AtmDeposits from "../pages/Balance/AtmDeposits";
import Suppliers from "../pages/Suppliers/Suppliers";
import AddSuperTrader from "../pages/Suppliers/AddSuperTrader";
import AddSupplier from "../pages/Suppliers/AddSupplier";
import AddSupplierForm from "../pages/Suppliers/AddSupplierForm";
import SupplierHistory from "../pages/Suppliers/SupplierHistory";
import ViewSupplierPay from "../pages/Suppliers/ViewSupplierPay";
import BankTransfer from "../pages/BankTransfer/BankTransfer";
import BankTransferForm from "../pages/BankTransfer/BankTransferForm";
import Documents from "../pages/Documents/Documents";

const Layout = () => {
  return (
    <div className="layout_main">
      {/* <div className="flex">
        <div className="flex-auto p-6">
          <Outlet />
        </div>
      </div> */}
      <div class="page bg-gray-100 min-vh-100">
        <main>
          <Router>
            <Header />
            <div class="container mw-sm-960 p-0 p-sm-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/balance" element={<Balance />} />
                <Route path="/suppliers" element={<ViewSupplierPay />} />
                <Route path="/bank-transfer" element={<BankTransfer />} />
                <Route path="/documents" element={<Documents />} />
              </Routes>
            </div>
          </Router>
        </main>
      </div>
    </div>
  );
};

export default Layout;
