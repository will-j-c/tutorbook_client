import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import TutorCard from '../cards/TutorCard';
import ReviewCard from '../cards/ReviewCard';

function TutorShow() {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState(null);
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

  const callTutorReviewsRoute = async (route) => {
    axios.get(route, { headers: { Authorization: `Bearer ${cookies.idToken}` } }).then(
      (response) => {
        setReviews(response.data);
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
    callTutorReviewsRoute(`reviews/${uuid}/list`);
  }, []);

  return data && reviews ? (
    <div className="grid grid-cols-1 px-2 md:grid-cols-3 mt-5">
      <div className="col-span-2">
        <TutorCard tutor={data} isFull={true} />
      </div>
      {reviews.length !== 0 ? (
        <div className='mt-16 mx-auto overflow-auto'>
          {reviews.map((review) => {
            return <ReviewCard review={review} />;
          })}
        </div>
      ) : (
        <div className="bg-primary">
          <h1 className="text-titleText">No reviews yet</h1>
        </div>
      )}
    </div>
  ) : (
    ''
  );
}

export default TutorShow;
