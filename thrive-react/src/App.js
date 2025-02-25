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
      <SignUp />
    </>
  );
}

export default App;
