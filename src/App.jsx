import PageNavbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useCookies } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        currentUser.getIdTokenResult(false).then(
          (idToken) => {
            console.log(idToken);
            setCookie('idToken', idToken?.token);
            setCookie('email', currentUser.email);
            setCookie('signedIn', true);
            console.log(cookies);
          },
          (error) => {
            console.log(error)
          }
        );
      } else {
        removeCookie('idToken');
        removeCookie('email');
        removeCookie('uuid');
        removeCookie('profile_pic_url');
        setCookie('signedIn', false);
      }
    });
  }, []);

  return (
    <>
      <PageNavbar className="bg-primary" />
      <Outlet />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
    </>
  );
}

export default App;
