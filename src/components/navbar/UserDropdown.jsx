import { useContext, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../avatars/Avatar';
import LogOutButton from '../utils/buttons/LogoutButton';
import UserContext from '../utils/users/UserContext';

function UserDropdown() {
  const [open, setOpen] = useState(false);
  const { uuid, profile_img_url } = useContext(UserContext);
  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="inline-flex items-stretch rounded-md text-titleText">
      <div className="relative hover:cursor-pointer">
        <div onClick={handleClick}>
          <Avatar profile_img_url={profile_img_url} size={'h-12'}/>
        </div>
        {open ? (
          <div
            className="absolute right-0 z-10 mt-3 origin-top-right text-right rounded-md border bg-primary shadow-lg"
            role="menu">
            <div className="p-2">
              <Link
                to={`/users/${uuid}`}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem">
                Profile
              </Link>
            </div>
            <div className="p-2">
              <Link
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem">
                Messages
              </Link>
            </div>
            <div className="p-2">
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
