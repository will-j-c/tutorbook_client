import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Avatar from '../avatars/Avatar';
dayjs.extend(relativeTime);

function Thread(props) {
  const { thread, user } = props.data;
  // Select correct data from thread to display
  // If the user is 'u', select the tutor profile picture (i.e. the other party) and name
  const profile_img_url =
    user === 'u' ? thread.tutor.user.profile_img_url : thread.user.profile_img_url;
  const name = user === 'u' ? thread.tutor.user.first_name : thread.user.first_name;
  // Calculate the amount of time ago that this message was sent
  const time = dayjs(thread.updated_at).fromNow();
  return (
    <div
      className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b bg-primary cursor-pointer hover:bg-gray-100 focus:outline-none"
      onClick={props.onClick}
      id={props.id}>
      <Avatar profile_img_url={profile_img_url} size={'h-12 w-12'} />
      <div className="w-full pb-2">
        <div className="flex justify-between">
          <span className="block ml-2 font-semibold">{name}</span>
          <span className="block ml-2 text-sm text-secondaryTitleText">{time}</span>
        </div>
      </div>
    </div>
  );
}

export default Thread;
