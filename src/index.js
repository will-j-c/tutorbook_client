import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginRegister from './components/pages/LoginRegister';
import TutorIndex from './components/pages/TutorIndex';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TutorShow from './components/pages/TutorShow';
import UserProfile from './components/pages/UserProfile';
import Home from './components/pages/Home';
import HowItWorks from './components/pages/HowItWorks';
import AssignmentIndex from './components/pages/AssignmentIndex';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="login" element={<LoginRegister component={<Login />} />} />
          <Route path="register" element={<LoginRegister component={<Register />} />} />
          <Route path="tutors">
            <Route index element={<TutorIndex />} />
            <Route path=":uuid" element={<TutorShow />} />
          </Route>
          <Route path="users">
            <Route path=":uuid" element={<UserProfile />} />
          </Route>
          <Route path="assignments" element={<AssignmentIndex />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
