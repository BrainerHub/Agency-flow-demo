import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './Routes/Public.Route';
import ProtectedRoute  from "./Routes/Private.Routes";
import Login from './Pages/Login/login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Layout from './Component/Layout/Layout';
import Client from './Pages/Clients/client';
function App() {
  return (
    <React.Fragment>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Client/>} />
            <Route path="settings" element={<>this the setting page</>} />
          </Route>
        </Route>
      </Routes>
  </React.Fragment>
  );
}

export default App;
