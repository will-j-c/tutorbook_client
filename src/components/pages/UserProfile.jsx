import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { retrieveTokenAndCreatePrivateAxiosInstance } from '../../api/axios';
import { toast } from 'react-toastify';
import UserContext from '../utils/users/UserContext';
import UserProfileCard from '../cards/UserProfileCard';

function UserProfile(props) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { uuid } = useParams();

  const callUserDetailRoute = async (route) => {
    const axios = await retrieveTokenAndCreatePrivateAxiosInstance(user);
    if (!axios) {
      toast.error('Could not get user details');
      navigate('/login');
      return;
    }

    axios.get(route).then(
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
    callUserDetailRoute(`users/${uuid}`);
  }, []);

  return data ? (
    <div className="container flex justify-center">
      <UserProfileCard data={data} />
    </div>
  ) : (
    <h1>User Profile isn't working</h1>
  );
}

export default UserProfile;
