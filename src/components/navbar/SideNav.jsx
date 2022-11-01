import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import UserDropdown from './UserDropdown';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import LogOutButton from '../utils/buttons/LogoutButton';
import Avatar from '../avatars/Avatar';

function SideNav(props) {
  const { setOpen, open, isLoggedIn, toggleModal } = props;
  const [cookies] = useCookies();
  const handleClick = () => {
    setOpen(false);
  };
  return open ? (
    <section className="fixed inset-y-0 right-0 z-50 flex text-titleText w-6/12 bg-primary">
      <div className="w-screen max-w-sm">
        <div className="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
          <div className="overflow-y-scroll">
            <header className="flex h-16 items-center justify-between">
              <button
                onClick={handleClick}
                aria-label="Close menu"
                className="h-4 w-4 border-gray-200"
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {isLoggedIn ? <Avatar size={'h-12'} profile_img_url={cookies.profile_img_url} /> : ''}
            </header>

            <nav className="flex flex-col divide-y divide-gray-200 text-sm font-bold">
              <ul className="flex flex-col items-start gap-6 text-sm p-3">
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
                <li>
                  <div
                    className="text-titleText font-bold transition text-sm hover:text-titleText/75 hover:cursor-pointer"
                    onClick={toggleModal}>
                    Create assignment
                  </div>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link
                        to={`/users/${cookies.uuid}`}
                        className="text-titleText font-bold transition text-sm hover:text-titleText/75">
                        Edit Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/messages`}
                        className="text-titleText font-bold transition text-sm hover:text-titleText/75">
                        Messages
                      </Link>
                    </li>
                    <li>
                      <LogOutButton setOpen={setOpen} />
                    </li>
                  </>
                ) : (
                  <>
                    <FilledButton label="Sign Up" linkTo={'/register'} />
                    <OutlinedButton label="Login" linkTo={'/login'} />
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  ) : (
    ''
  );
}

export default SideNav;
