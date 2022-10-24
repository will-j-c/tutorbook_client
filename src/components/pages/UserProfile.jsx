import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { retrieveTokenAndCreatePrivateAxiosInstance } from '../../api/axios';
import { toast } from 'react-toastify';

function UserProfile(props) {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { uuid } = useParams();

  const callUserDetailRoute = async (route) => {
    console.log(auth)
    const axios = await retrieveTokenAndCreatePrivateAxiosInstance(auth);
    if (!axios) {
      toast.error('Could not get user details');
      navigate('/login');
      return;
    }
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

  return data ? <h1>This is working</h1> : <h1>This isn't working</h1>;
}

export default UserProfile;
