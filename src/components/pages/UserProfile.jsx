import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

function UserProfile(props) {
  const [data, setData] = useState(null);
  const { uuid } = useParams();
  const callUserDetailRoute = (route) => {
    axios.get(route).then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    callUserDetailRoute(`users/${uuid}`);
  }, []);

  return data ? 'This is working' : '';
}

export default UserProfile;