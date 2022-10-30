import Avatar from '../avatars/Avatar';
import dayjs from 'dayjs';

function UserProfileCard(props) {
  const {
    first_name,
    last_name,
    user_type,
    email,
    profile_img_url,
    email_is_verified,
    created_at
  } = props.data;
  // const isFull = props?.isFull;
  return (
    <div className='max-w-xl p-8 sm:flex text-titleText sm:space-x-6 bg-primary rounded-md mt-10'>
      <div className='flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0'>
        <Avatar profile_img_url={profile_img_url} />
      </div>
      <div className='flex flex-col space-y-4'>
        <div>
          <h2 className='text-2xl font-bold text-secondaryTitleText'>{`${first_name} ${last_name}`}</h2>
          <p className='text-md'>{user_type === 2 ? 'Tutor' : 'User'}</p>
          <p className='text-md'>{email_is_verified ? 'Verified email' : 'Email not verified'}</p>
          <p className='text-md'>{`Member since ${dayjs(created_at).format('DD/MM/YYYY')}`}</p>
        </div>
        <div className='space-y-1'>
          <span className='flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              aria-label='Email address'
              className='w-4 h-4'>
              <path
                fill='currentColor'
                d='M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z'></path>
            </svg>
            <span className='text-md'>{email}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
