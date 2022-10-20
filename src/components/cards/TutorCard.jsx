import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';

function TutorCard(props) {
  const {
    about_me,
    created_at,
    levels,
    locations,
    looking_for_assignment,
    published,
    published_at,
    subjects,
    updated_at,
    user
  } = props.tutor;
  const isFull = props?.isFull;
  return (
    <div className="relative bg-primary text-titleText max-w-md mx-auto md:max-w-2xl min-w-0 break-words w-full mb-6 shadow-lg rounded-md mt-16">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center">
            <div className="relative flex justify-center">
              <img
                src={user.profile_img_url}
                alt="Tutor"
                className="shadow-xl rounded-full align-middle border border-tertiary -m-14 absolute max-w-[100px]"
              />
            </div>
          </div>
          <div className="w-full text-center mt-10"></div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-2xl text-secondaryTitleText font-bold leading-normal mb-1">
            {user.first_name}
          </h3>
        </div>
        <div className="mt-6">
          <div className="flex flex-col justify-between">
            <div className="w-full flex flex-col justify-between gap-3">
              <div className="grid-container grid grid-cols-6 text-xs">
                <p className="text-secondaryTitleText mr-3 col-span-2">Locations</p>
                <div className="w-max grid grid-cols-2 gap-1 text-left">
                  {locations.map((location) => {
                    return <div key={location?.location_name}>{`${location?.location_name}`}</div>;
                  })}
                </div>
              </div>
              <div className="grid-container grid grid-cols-6 text-xs">
                <p className="text-secondaryTitleText mr-3 col-span-2">Subjects</p>
                <div className="w-max grid grid-cols-2 gap-1 text-left">
                  {subjects.map((subject) => {
                    return <div key={subject?.subject_name}>{`${subject?.subject_name}`}</div>;
                  })}
                </div>
              </div>
              <div className="grid-container grid grid-cols-6 text-xs">
                <p className="text-secondaryTitleText mr-3 col-span-2">Levels</p>
                <div className="w-max grid grid-cols-2 gap-1 text-left">
                  {levels.map((level) => {
                    return <div key={level?.level_name}>{`${level?.level_name}`}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 px-6 my-4">
        <OutlinedButton label="Message" className='h'/>
        <FilledButton label="View" />
      </div>
    </div>
  );
}

export default TutorCard;
