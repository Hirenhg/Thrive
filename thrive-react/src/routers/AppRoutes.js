import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout.js';
import Login from '../pages/Login/Login.js';

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;
