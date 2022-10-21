import PageNavbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loading from './components/utils/feedback/Loading';
import 'react-toastify/dist/ReactToastify.css';

export const LoadingContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <PageNavbar className="bg-primary" />
      <LoadingContext.Provider value={{setIsLoading}}>
        <Outlet />
      </LoadingContext.Provider>
      <Loading props={isLoading} />
      <ToastContainer isLoading={isLoading} />
    </>
  );
}

export default App;
