import PageNavbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <PageNavbar className="bg-primary" />
      <Outlet />
    </>
  );
}

export default App;
