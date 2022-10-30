import Avatar from '../avatars/Avatar';
import FilledButton from '../utils/buttons/FilledButton';

function UserEditForm(props) {
  const { email, first_name, last_name, profile_img_url } = props.data;
  return (
    <div className="max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 text-titleText bg-primary rounded">
      <form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <Avatar size={'h-34'} profile_img_url={profile_img_url} />
        <div className='flex flex-col items-center gap-3'>
          <label for="files" className="block text-sm font-medium">
            Update profile image
          </label>
          <div className="flex">
            <input
              type="file"
              name="files"
              id="files"
              className="px-6 py-8 border-2 border-dashed rounded-md"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              value={`${first_name}`}
              name="firstName"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              value={`${last_name}`}
              name="lastName"
            />
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              value={`${email}`}
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex column items-center flex-col justify-between">
          <FilledButton label="Update user profile" />
        </div>
      </form>
    </div>
  );
}

export default UserEditForm;
