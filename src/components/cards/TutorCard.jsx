function TutorCard(props) {
  console.log(props);
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
    user,
  } = props.tutor;
  const isFull = props?.isFull;
  return (
    <div className="relative bg-primary text-titleText max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-md mt-16">
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
              <div className="flex justify-start gap-6 text-xs">
                <p className="text-secondaryTitleText mr-3 w-1/3">Locations</p>
                <ul className="w-max flex gap-2">
                  {locations.map((location) => {
                    return <li className="inline grow">{`${location?.location_name}`}</li>;
                  })}
                </ul>
              </div>
              <div className="flex gap-6 justify-space text-xs">
                <p className="text-secondaryTitleText mr-3 w-1/3">Subjects</p>
                <ul className="w-max col-span-6">
                  {subjects.map((subject) => {
                    return <li className="inline">{`${subject?.subject_name},`}</li>;
                  })}
                </ul>
              </div>
              <div className="flex gap-6 justify-space text-xs">
                <p className="text-secondaryTitleText mr-3">Levels</p>
                <ul className="w-max">
                  {levels.map((level) => {
                    return <li className="inline">{`${level?.level_name},`}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorCard;
