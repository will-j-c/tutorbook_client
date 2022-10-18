import LoginRegister from "./components/pages/LoginRegister"
import PageNavbar from "./components/navbar/Navbar";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <PageNavbar className="bg-primary" />
    <Routes>
      <Route path="/login" element={<LoginRegister component={ <Login/> } />}/>
    </Routes>
    </>
    
  );
}

export default App;
