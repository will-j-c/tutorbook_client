import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import TutorCard from '../cards/TutorCard';

function TutorShow() {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { uuid } = useParams();

  const callUserDetailRoute = async (route) => {

    axios.get(route, { headers: { Authorization: `Bearer ${cookies.idToken}` } }).then(
      (response) => {
        setData(response.data);
        return;
      },
      (error) => {
        toast.error(error.message);
        navigate('/login');
        return;
      }
    );
  };

  useEffect(() => {
    callUserDetailRoute(`tutors/${uuid}`);
  }, []);

  return data ? <TutorCard tutor={data} isFull={true} /> : '';
}

export default TutorShow;
