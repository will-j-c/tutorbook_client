import { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../avatars/Avatar';
import LogOutButton from '../utils/buttons/LogoutButton';
import { useCookies } from 'react-cookie';

function UserDropdown() {
  const [open, setOpen] = useState(false);
  const [cookies] = useCookies();
  
  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="inline-flex items-stretch rounded-md text-titleText dropdown">
      <div className="relative hover:cursor-pointer dropdown">
        <div onClick={handleClick} className='dropdown'>
          <Avatar size={'h-12 dropdown'} profile_img_url={cookies.profile_img_url} />
        </div>
        {open ? (
          <div
            className="absolute right-0 z-10 mt-3 origin-top-right rounded-md border bg-primary shadow-lg dropdown"
            role="menu">
            <div className="p-2 dropdown">
              <Link
                to={`/users/${cookies.uuid}`}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dropdown"
                role="menuitem">
                Profile
              </Link>
            </div>
            <div className="p-2">
              <Link
                to={`/messages`}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dropdown"
                role="menuitem">
                Messages
              </Link>
            </div>
            <div className="p-2 dropdown">
              <LogOutButton setOpen={setOpen} />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default UserDropdown;
