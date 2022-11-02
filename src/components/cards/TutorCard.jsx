import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import Pill from '../utils/pills/Pill';
import dayjs from 'dayjs';
import StarRating from './StarRating';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import MessageModal from '../modals/MessageModal';
import Avatar from '../avatars/Avatar';

function TutorCard(props) {
  const {
    about_me,
    created_at,
    levels,
    locations,
    looking_for_assignment,
    subjects,
    tutor_uuid,
    average_rating,
    user,
    id
  } = props.tutor;
  const [cookies] = useCookies();
  const { toggleModal, isFull, toggleOpen } = props;

  const [messageModalIsOpen, setMessageModalIsOpen] = useState(false);

  const rating = average_rating?.rating__avg?.toFixed(1);

  const handleMessageClick = (event) => {
    setMessageModalIsOpen(previous => !previous);
  };

  return (
    <div className="relative px-6 bg-primary text-titleText max-w-md mx-auto md:max-w-2xl min-w-0 w-full pb-6 shadow-lg rounded-md mt-16">
      <div className="flex flex-wrap justify-center">
        <div className="w-full flex justify-center -m-16">
        <Avatar profile_img_url={user.profile_img_url} size='h-36' />
        </div>
        <div className="w-full text-center mt-10"></div>
      </div>

      <div className="text-center mt-10">
        <h3 className="text-3xl text-secondaryTitleText font-bold leading-normal mb-1">
          {user.first_name}
        </h3>
        {/* Buttons  */}
        <div className="flex justify-center gap-2 px-6 my-4">
          {isFull ? (
            <>
              {cookies.user_type !== '2' ? (
                <>
                  <OutlinedButton label="Review" action={toggleModal} />
                  <FilledButton label="Message" action={handleMessageClick} />
                </>
              ) : (
                ''
              )}
            </>
          ) : (
            <>
              <FilledButton label="View" linkTo={tutor_uuid} />
            </>
          )}
        </div>
      </div>

      <div className="mt-6">
        <div className="w-full flex flex-col justify-between gap-8">
          {/* Location section */}
          <div className="grid grid-cols-3 gap-4">
            <p className="text-secondaryTitleText mr-3 col-span-1 font-bold text-lg">Locations</p>
            <div className="flex col-span-2 max-w-max flex-wrap gap-2 items-center">
              {locations.map((location) => {
                return <Pill key={location?.location_name} content={location?.location_name} />;
              })}
            </div>
          </div>
          {/* Subject section */}
          <div className="grid grid-cols-3 gap-4">
            <p className="text-secondaryTitleText mr-3 col-span-1 font-bold text-lg">Subjects</p>
            <div className="flex col-span-2 max-w-max flex-wrap gap-2 items-center">
              {subjects.map((subject) => {
                return <Pill key={subject?.subject_name} content={subject?.subject_name} />;
              })}
            </div>
          </div>
          {/* Level section */}
          <div className="grid grid-cols-3 gap-4">
            <p className="text-secondaryTitleText mr-3 col-span-1 font-bold text-lg">Levels</p>
            <div className="flex col-span-2 max-w-max flex-wrap gap-2 items-center">
              {levels.map((level) => {
                return <Pill key={level?.level_name} content={level?.level_name} />;
              })}
            </div>
          </div>

          {isFull ? (
            <>
              <div>
                <p className="text-secondaryTitleText mr-3 font-bold text-lg">About me</p>
                <p className="text-justify mt-4">{about_me}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <p className="text-secondaryTitleText mr-3 col-span-1 font-bold text-lg">
                  Average rating
                </p>
                <div className="text-left flex col-span-2 max-w-max flex-wrap gap-5 items-center">
                  <p>{rating ? rating : 'No ratings yet'}</p>
                  <div>{rating ? <StarRating stars={average_rating.rating__avg} /> : ''}</div>
                </div>
              </div>
            </>
          ) : (
            ''
          )}
          <div className="grid grid-cols-3 gap-4">
            <p className="text-secondaryTitleText mr-3 col-span-1 font-bold text-lg">Joined</p>
            <div className="flex col-span-2 max-w-max flex-wrap gap-2 items-center">
              {dayjs(created_at).format('DD MMMM YYYY')}
            </div>
          </div>
          {looking_for_assignment ? (
            <div>
              <p className="text-tertiary mr-3 col-span-1 font-bold text-lg">
                Looking for an assignment!
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <MessageModal isOpen={messageModalIsOpen} toggleOpen={setMessageModalIsOpen} source='tutor' tutor={id} />
    </div>
  );
}

export default TutorCard;
