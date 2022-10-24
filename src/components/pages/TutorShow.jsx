import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getIdTokenAndSendRequest, auth } from '../../firebaseConfig';
import axios from '../../api/axios';
import TutorCard from '../cards/TutorCard';

function TutorShow(props) {
  const [data, setData] = useState(null);
  const { uuid } = useParams();

  useEffect(() => {
    getIdTokenAndSendRequest(`tutors/${uuid}`, 'get', setData);
  }, []);

  return data ? <TutorCard tutor={data} isFull={true} /> : '';
}

export default TutorShow;
