import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import TutorCard from '../cards/TutorCard';

function UserProfile(props) {
  const [data, setData] = useState(null);
  const { uuid } = useParams();

  const callUserDetailRoute = (route) => {
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
    callUserDetailRoute(`tutors/${uuid}`);
  }, []);

  return data ? 'This is working' : '';
}

export default UserProfile;