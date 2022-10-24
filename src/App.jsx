import PageNavbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Loading from './components/utils/feedback/Loading';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <PageNavbar className="bg-primary" />
      <Outlet />
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
