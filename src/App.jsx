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

  const [uuid, setUuid] = useState('');

  const [profile_img_url, setProfile_img_url] = useState('');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <UserContext.Provider
      value={{ user, setUser, uuid, setUuid, profile_img_url, setProfile_img_url }}>
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
    </UserContext.Provider>
  );
}

export default App;
