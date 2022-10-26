import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import SideNav from './SideNav';
import UserDropdown from './UserDropdown';
import UserContext from '../utils/users/UserContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function PageNavbar() {
  const cookies = useCookies();
  const [sidenavIsOpen, setSidenavIsOpen] = useState(false);

  const handleClick = () => {
    setSidenavIsOpen(true);
  };

  return (
    <header aria-label="Site Header" className="bg-primary">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link to={'/'}>
          <div className="mx-auto flex gap-2 items-center">
            <img src="/logo.png" className="object-contain h-6 w-6" alt="Logo" />
            <h5 className="text-secondaryTitleText font-bold transition text-sm hover:text-titleText-500/75">
              TutorBook
            </h5>
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-titleText font-bold transition text-sm hover:text-titleText/75"
                  to="/tutors">
                  Browse Tutors
                </Link>
              </li>
              <li>
                <Link
                  className="text-titleText font-bold transition text-sm hover:text-titleText/75"
                  to="/assignments">
                  Browse Assignments
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <div className="sm:flex hidden">
              {cookies[0].signedIn ? (
                <UserDropdown />
              ) : (
                <>
                  <FilledButton label="Sign Up" linkTo={'/register'} />
                  <OutlinedButton label="Login" linkTo={'/login'} />
                </>
              )}
            </div>
            <button
              className="block rounded p-2.5 text-titleText transition hover:text-gray-600/75 md:hidden"
              onClick={handleClick}>
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <SideNav open={sidenavIsOpen} setOpen={setSidenavIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default PageNavbar;
