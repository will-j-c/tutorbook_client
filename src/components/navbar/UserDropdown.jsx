import { useState } from 'react';
import Avatar from '../avatars/Avatar';

function UserDropdown() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className="inline-flex items-stretch rounded-md text-titleText">
      <div className="relative hover:cursor-pointer">
        <div onClick={handleClick}>
          <Avatar />
        </div>
        {open ? (
          <div
            className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border bg-primary shadow-lg"
            role="menu">
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem">
                Profile
              </a>
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
