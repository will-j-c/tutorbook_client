import PageNavbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import UserContext from './components/utils/users/UserContext';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState(() => {
    const user = auth.currentUser;
    return user;
  });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(auth.currentUser);
    } else {
      setUser(null);
    }
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>
  );
}

export default App;
