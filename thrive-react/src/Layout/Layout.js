import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <div class="page bg-gray-100 min-vh-100">
        <main>
          <Router>
            <Header />
            <div class="container mw-sm-960 p-0 p-sm-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
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
              </Routes>
            </div>
          </Router>
        </main>
      </div>
    </div>
  );
};

export default Layout;

// import React from "react";
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     <div className="layout_main">
//       <div class="page bg-gray-100 min-vh-100">
//         <main>
//           <div className="flex">
//             <div className="flex-auto">
//               <Outlet />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
