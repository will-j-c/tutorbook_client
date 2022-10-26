import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import UserContext from '../utils/users/UserContext';
import UserProfileCard from '../cards/UserProfileCard';

function UserProfile(props) {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { uuid } = useParams();

  const callUserDetailRoute = async (route) => {
    if (!axios) {
      toast.error('Could not get user details');
      navigate('/login');
      return;
    }

    axios.get(route, {headers: {Authorization: `Bearer ${cookies.idToken}`}}).then(
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
    console.log(cookies)
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
