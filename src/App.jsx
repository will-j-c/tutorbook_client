import LoginRegister from "./components/pages/LoginRegister"
import PageNavbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <PageNavbar className="bg-primary" />
    <Routes>
      <Route path="/login" element={LoginRegister}/>
    </Routes>
    </>
    
  );
}

export default App;
