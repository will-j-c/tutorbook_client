import PageNavbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [, setCookie, removeCookie] = useCookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        currentUser.getIdTokenResult(false).then(
          (idToken) => {
            setCookie('idToken', idToken?.token);
            setCookie('email', currentUser.email);
            setIsLoggedIn(true);
          },
          (error) => {
            toast.error(error.message)
          }
        );
      } else {
        removeCookie('idToken');
        removeCookie('email');
        removeCookie('uuid');
        removeCookie('profile_pic_url');
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <PageNavbar className="bg-primary" isLoggedIn={isLoggedIn} />
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
