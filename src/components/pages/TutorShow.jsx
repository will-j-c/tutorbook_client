import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import TutorCard from '../cards/TutorCard';

function TutorShow(props) {
  const [data, setData] = useState(null);
  const { uuid } = useParams();
  const callTutorDetailRoute = (route) => {
    axios.get(route).then(
      (response) => {
        console.log(response.data);
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    callTutorDetailRoute(`tutors/${uuid}`);
  }, []);

  return data ? <TutorCard tutor={data} isFull={true} /> : '';
}

export default TutorShow;
