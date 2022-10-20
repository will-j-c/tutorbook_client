import LoginRegister from './components/pages/LoginRegister';
import PageNavbar from './components/navbar/Navbar';
import TutorIndex from './components/pages/TutorIndex';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <PageNavbar className="bg-primary" />
      <Routes>
        <Route path="/login" element={<LoginRegister component={<Login />} />} />
        <Route path="/register" element={<LoginRegister component={<Register />} />} />
        <Route path="/tutors" element={<TutorIndex />} />
      </Routes>
    </>
  );
}

export default App;
