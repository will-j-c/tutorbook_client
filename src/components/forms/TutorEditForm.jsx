import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';

function TutorEditForm(props) {
  console.log(props)
  const { subjects, levels, locations } = props.staticData.current;
  //   const { email, first_name, last_name, profile_img_url } = props.data;
  const handleChange = (event) => {
    if (event.target.type === 'radio') {
      console.log(event.target.value);
    }
    if (event.target.type === 'select-multiple') {
      console.log(Array.from(event.target.selectedOptions));
      // Turn the HTML collection into an array
      // Iterate over array and set form to new array
    }
    if (event.target.type === 'textarea') {
      console.log(event.target.value);
    }
  };
  return (
    <div className="max-w-screen-xl py-4 sm:px-6 lg:px-8 text-titleText bg-primary rounded">
      <form className="mx-auto mt-8 mb-0 max-w-md space-y-4 flex flex-col gap-5">
        <div>
          <div className="relative">
            <textarea
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              placeholder="About me"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <label>Publish</label>
          <input type="Radio" name="published" onChange={handleChange} value={true} />
          <label>Draft</label>
          <input type="Radio" name="published" onChange={handleChange} value={false} />
        </div>
        <label>Locations</label>
        <select multiple onChange={handleChange}>
          {locations.map((location) => {
            return (
              <option key={location.location_name} value={location.id}>
                {location.location_name}
              </option>
            );
          })}
        </select>
        <label>Subjects</label>
        <select multiple onChange={handleChange}>
          {subjects.map((subject) => {
            return (
              <option key={subject.subject_name} value={subject.id}>
                {subject.subject_name}
              </option>
            );
          })}
        </select>
        <label>Levels</label>
        <select multiple onChange={handleChange}>
          {levels.map((level) => {
            return (
              <option key={level.level_name} value={level.id}>
                {level.level_name}
              </option>
            );
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
