import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';

function TutorEditForm(props) {
  const {subjects, levels, locations} = props.staticData.current;
  //   const { email, first_name, last_name, profile_img_url } = props.data;
  return (
    <div className="max-w-screen-xl py-4 sm:px-6 lg:px-8 text-titleText bg-primary rounded">
      <form className="mx-auto mt-8 mb-0 max-w-md space-y-4 flex flex-col gap-5">
        <div>
          <div className="relative">
            <textarea
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              placeholder="About me"
            />
          </div>
        </div>
        <div className='flex gap-5'>
          <label>Publish</label>
          <input type='Radio' name='published' />
          <label>Draft</label>
          <input type='Radio' name='published' />
        </div>
        <label>Locations</label>
        <select multiple>
          {locations.map(location => {
            return <option key={location.location_name}>{location.location_name}</option>
          })}
        </select>
        <label>Subjects</label>
        <select multiple>
          {subjects.map(subject => {
            return <option key={subject.subject_name}>{subject.subject_name}</option>
          })}
        </select>
        <label>Levels</label>
        <select multiple>
          {levels.map(level => {
            return <option key={level.level_name}>{level.level_name}</option>
          })}
        </select>
       
        <div className="flex items-center justify-center gap-3">
          <OutlinedButton label="Preview" />
          <FilledButton label="Update tutor details" />
        </div>
      </form>
    </div>
  );
}

export default TutorEditForm;
