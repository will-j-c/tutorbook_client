import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import Pill from '../utils/pills/Pill';

function TutorCard(props) {
  const {
    about_me,
    created_at,
    levels,
    locations,
    looking_for_assignment,
    published,
    subjects,
    tutor_uuid,
    user
  } = props.tutor;
  const isFull = props?.isFull;
  return (
    <div className='relative bg-primary text-titleText max-w-md mx-auto md:max-w-2xl min-w-0 w-full mb-6 shadow-lg rounded-md mt-16 md:h-[40vh]'>
      

        <div className='flex flex-wrap justify-center'>
          <div className='w-full flex justify-center'>
            <div className='relative flex justify-center'>
              <img
                src={user.profile_img_url}
                alt='Tutor'
                className='shadow-xl rounded-full align-middle border border-tertiary -m-14 absolute max-w-[100px]'
              />
            </div>
          </div>
          <div className='w-full text-center mt-10'></div>
        </div>

        <div className='text-center mt-2'>
          <h3 className='text-3xl text-secondaryTitleText font-bold leading-normal mb-1'>
            {user.first_name}
          </h3>
        </div>

        <div className='mt-6'>
          <div className='w-full flex flex-col justify-between gap-8'>
            {/* Location section */}
            <div className='text-xs grid grid-cols-3 gap-4'>
              <p className='text-secondaryTitleText mr-3 col-span-1 font-bold text-lg'>Locations</p>
              <div className='flex col-span-2 max-w-max flex-wrap gap-2'>
                {locations.map((location) => {
                  return <Pill key={location?.location_name} content={location?.location_name} />;
                })}
              </div>
            </div>
            {/* Subject section */}
            <div className='text-xs grid grid-cols-3 gap-4'>
              <p className='text-secondaryTitleText mr-3 col-span-1 font-bold text-lg'>Subjects</p>
              <div className='flex col-span-2 max-w-max flex-wrap gap-2'>
                {subjects.map((subject) => {
                  return <Pill key={subject?.subject_name} content={subject?.subject_name} />;
                })}
              </div>
            </div>
            {/* Level section */}
            <div className='text-xs grid grid-cols-3 gap-4'>
              <p className='text-secondaryTitleText mr-3 col-span-1 font-bold text-lg'>Levels</p>
              <div className='flex col-span-2 max-w-max flex-wrap gap-2'>
                {levels.map((level) => {
                  return <Pill key={level?.level_name} content={level?.level_name} />;
                })}
              </div>
            </div>

            {isFull ? (
              <>
                <div className='grid-container grid grid-cols-6 text-xs'>
                  <p className='text-secondaryTitleText mr-3 col-span-2'>About me</p>
                  <p className='w-max text-left'>{about_me}</p>
                </div>
                <div className='grid-container grid grid-cols-6 text-xs'>
                  <p className='text-secondaryTitleText mr-3 col-span-2'>Average rating</p>
                  <p className='w-max text-left'>rating</p>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
     
      {/* Buttons  */}
      <div className='flex justify-end gap-2 px-6 my-4 absolute bottom-0'>
        {isFull ? (
          <>
            <OutlinedButton label='Review' />
            <FilledButton label='Message' />
          </>
        ) : (
          <>
            <OutlinedButton label='Message' />
            <FilledButton label='View' linkTo={tutor_uuid} />
          </>
        )}
      </div>
    </div>
  );
}

export default TutorCard;
