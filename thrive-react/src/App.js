import React from 'react'
import Layout from './layout/Layout';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Auth/Login/Login';
import VerificationCode from './pages/Auth/Login/VerificationCode';
import TermsConditions from './pages/Auth/Login/TermsConditions';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import PasswordUpdated from './pages/Auth/ResetPassword/PasswordUpdated';
import SignUp from './pages/Auth/SignUp/SignUp';

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
      </Router> */}
      <Layout />
    </>
  );
}

export default App;


// import React from 'react'

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from './pages/Auth/Login/Login';
// import VerificationCode from './pages/Auth/Login/VerificationCode';
// import TermsConditions from './pages/Auth/Login/TermsConditions';
// import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
// import PasswordUpdated from './pages/Auth/ResetPassword/PasswordUpdated';
// import SignUp from './pages/Auth/SignUp/SignUp';
// import SignUpTC from './pages/Auth/SignUp/SignUpTC';
// import SignUpComplete from './pages/Auth/SignUp/SignUpComplete';
// import Header from './components/Header/Header';
// import Layout from './layout/Layout';
// // 

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <div class="container mw-sm-960 p-0 p-sm-4">
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route path="/login" element={<Login />} />
//               <Route path="/reset-password" element={<ResetPassword />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route index element={<Dashboard />} />
//               <Route path="/balance" element={<Balance />} />
//               <Route path="/atm-deposits" element={<AtmDeposits />} />
//               <Route path="/transaction-detail" element={<TransactionDetail />} />
//               <Route path="/suppliers" element={<Suppliers />} />
//               <Route path="/add-supertrader" element={<AddSuperTrader />} />
//               <Route path="/add-supplier" element={<AddSupplier />} />
//               <Route path="/add-supplier-form" element={<AddSupplierForm />} />
//               <Route path="/supplier-history" element={<SupplierHistory />} />
//               <Route path="/view-supplier-pay" element={<ViewSupplierPay />} />
//               <Route path="/bank-transfer" element={<BankTransfer />} />
//               <Route path="/bank-transfer-form" element={<BankTransferForm />} />
//               <Route path="/documents" element={<Documents />} />
//             </Route>
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;
