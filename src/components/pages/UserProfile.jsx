import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import UserEditForm from '../forms/UserEditForm';
import TutorEditForm from '../forms/TutorEditForm';

function UserProfile() {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [tutorData, setTutorData] = useState(null);
  const { uuid } = useParams();
  let staticData = useRef(null);
  const callUserDetailRoute = async (route) => {
    axios.get(route, { headers: { Authorization: `Bearer ${cookies.idToken}` } }).then(
      (response) => {
        setUserData(response.data);
        return;
      },
      (error) => {
        toast.error(error.message);
        navigate('/login');
        return;
      }
    );
  };

  const callUserTutorRoute = async (route) => {
    axios.get(route, { headers: { Authorization: `Bearer ${cookies.idToken}` } }).then(
      (response) => {
        setTutorData(response.data);
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

  useEffect(() => {
    if (userData?.user_type === 2) {
      
      axios.get('static-data', { headers: { Authorization: `Bearer ${cookies.idToken}` } }).then(
        (response) => {
          console.log(response.data);
          staticData.current = response.data;
          return;
        },
        (error) => {
          toast.error(error.message);
          navigate('/login');
          return;
        }
      );
      callUserTutorRoute('users/tutor-profile');
    }
  }, [userData]);

  return userData ? (
    <div className="flex justify-center gap-5 mt-5">
      <UserEditForm data={userData} />
      {userData.user_type === 2 && tutorData && staticData ? (
        <TutorEditForm data={tutorData} staticData={staticData} />
      ) : (
        ''
      )}
    </div>
  ) : (
    ''
  );
}

export default UserProfile;
