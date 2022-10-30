import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import {retrieveTokenAndCreatePrivateAxiosInstance} from '../../api/axios'
import TutorCard from '../cards/TutorCard';

function TutorShow(props) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const { uuid } = useParams();


  return data ? <TutorCard tutor={data} isFull={true} /> : '';
}

export default TutorShow;
