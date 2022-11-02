import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Select from 'react-select';
import { toast } from 'react-toastify';
import axios from '../../api/axios';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';

function TutorEditForm(props) {
  const [cookies] = useCookies();
  const staticData = props.staticData.current;
  const staticLocations = staticData.locations.map((location) => {
    return { value: location.id, label: location.location_name };
  });
  const staticSubjects = staticData.subjects.map((subject) => {
    return { value: subject.id, label: subject.subject_name };
  });
  const staticLevels = staticData.levels.map((level) => {
    return { value: level.id, label: level.level_name };
  });
  const { levels, subjects, locations, looking_for_assignment, published, about_me, tutor_uuid } =
    props.data;
  const [publishedChecked, setPublishedChecked] = useState(false);
  const [form, setForm] = useState({
    published: published,
    looking_for_assignment: looking_for_assignment,
    about_me: about_me || '',
    locations: locations,
    levels: subjects,
    subjects: levels
  });
  const [selectedLocations, setSelectedLocations] = useState(
    locations.map((location) => {
      return { value: location.id, label: location.location_name };
    })
  );

  const [selectedSubjects, setSelectedSubjects] = useState(
    subjects.map((subject) => {
      return { value: subject.id, label: subject.subject_name };
    })
  );

  const [selectedLevels, setSelectedLevels] = useState(
    levels.map((level) => {
      return { value: level.id, label: level.level_name };
    })
  );

  const handleChange = (type) => (event) => {
    if (event.target?.type === 'radio') {
      setForm((previous) => ({ ...previous, [type]: event.target.value }));
      return;
    }
    if (event.target?.type === 'textarea') {
      setForm((previous) => ({ ...previous, [type]: event.target.value }));
    }
  };

  const handleLocationChange = (event) => {
    setSelectedLocations(event);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubjects(event);
  };

  const handleLevelChange = (event) => {
    setSelectedLevels(event);
  };

  useEffect(() => {
    setPublishedChecked((previous) => {
      return !previous;
    });
  }, [form.published]);

  useEffect(() => {
    const selections = selectedLocations.map((location) => location.value);
    setForm((previous) => ({
      ...previous,
      locations: selections
    }));
  }, [selectedLocations]);

  useEffect(() => {
    const selections = selectedSubjects.map((subject) => subject.value);
    setForm((previous) => ({
      ...previous,
      subjects: selections
    }));
  }, [selectedSubjects]);

  useEffect(() => {
    const selections = selectedLevels.map((level) => level.value);
    setForm((previous) => ({
      ...previous,
      levels: selections
    }));
  }, [selectedLevels]);

  const updateTutor = () => {
    axios
      .patch(`tutors/edit/${tutor_uuid}`, form, {
        headers: { Authorization: `Bearer ${cookies.idToken}` }
      })
      .then(
        (response) => {
          toast.success('Tutor updated successfully');
        },
        (error) => {
          toast.error('Failed to update tutor');
        }
      );
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
              onChange={handleChange('about_me')}
              value={form.about_me}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <label>Publish</label>
          <input
            type="Radio"
            value={true}
            onChange={handleChange('published')}
            checked={publishedChecked}
          />
          <label>Draft</label>
          <input
            type="Radio"
            value={false}
            onChange={handleChange('published')}
            checked={!publishedChecked}
          />
        </div>
        <label>Locations</label>
        <Select
          options={staticLocations}
          value={selectedLocations}
          isMulti
          onChange={handleLocationChange}
          name="locations"
        />
        <label>Subjects</label>
        <Select
          options={staticSubjects}
          value={selectedSubjects}
          isMulti
          onChange={handleSubjectChange}
          name="subjects"
        />
        <label>Levels</label>
        <Select
          options={staticLevels}
          value={selectedLevels}
          isMulti
          onChange={handleLevelChange}
          name="subjects"
        />

        <div className="flex items-center justify-center gap-3">
          <OutlinedButton label="View" linkTo={`/tutors/${tutor_uuid}`} />
          <FilledButton label="Update tutor details" action={updateTutor} />
        </div>
      </form>
    </div>
  );
}

export default TutorEditForm;
