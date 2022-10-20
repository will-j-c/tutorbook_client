import axios from '../../api/axios';
import { useEffect, useState } from 'react';
import TutorCard from '../cards/TutorCard';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';

function TutorIndex(props) {
  const [data, setData] = useState(null);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  useEffect(() => {
    axios.get('/tutors').then(
      (response) => {
        console.log(response.data);
        setData(response.data.results);
        setNext(response.data.next);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <>
      <section className="bg-background mt-4 sm:grid sm:grid-cols-3 gap-4 px-6">
        {!data
          ? ''
          : data.map((tutor) => {
              return <TutorCard tutor={tutor} />;
            })}
      </section>
      <div className="flex justify-end gap-4 px-6">
        <OutlinedButton label='Previous'/>
        <FilledButton label='Next' />
      </div>
    </>
  );
}

export default TutorIndex;
