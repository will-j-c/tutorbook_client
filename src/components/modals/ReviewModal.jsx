import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import axios from '../../api/axios';
function ReviewModal(props) {
  const [cookies] = useCookies();
  const { isOpen, toggleOpen, tutor_uuid } = props;

  const hidden = isOpen ? '' : 'hidden';
  const [form, setForm] = useState({
    user: cookies.uuid,
    tutor: tutor_uuid,
    rating: '',
    review_text: ''
  });
  const handleClose = (event) => {
    event.stopPropagation();
    if (event.target?.id === 'top-div' || event.target?.text === 'Cancel') {
      toggleOpen(false);
    }
  };
  const handleChange = (event) => {
    console.log(event.target.type);
    if (event.target.type === 'radio') {
      setForm((previous) => {
        return { ...previous, rating: event.target.value };
      });
    }
    if (event.target.type === 'textarea') {
      setForm((previous) => {
        return { ...previous, review_text: event.target.value };
      });
    }
  };

  const postComment = () => {
    axios
      .post(`reviews/${tutor_uuid}`, form, {
        headers: { Authorization: `Bearer ${cookies.idToken}` }
      })
      .then(
        (response) => {
          console.log(response);
          toggleOpen(false);
        },
        (error) => {
          toast.error('Failed to post review');
        }
      );
  };

  return (
    <div
      className={`${hidden} fixed inset-0 bg-primary bg-opacity-50 overflow-y-auto h-screen w-screen flex justify-center`}
      onClick={handleClose}
      id="top-div">
      <div className="text-tertiary bg-primary border shadow-lg mt-28 p-8 rounded h-max w-1/2">
        <div className="flex flex-col gap-5">
          <textarea className="resize h-60" onChange={handleChange} />
          <span className="text-center">How was your experience?</span>
          <ul className="flex justify-center gap-5">
            <li>
              <input type="radio" name="rating" value="1" onChange={handleChange} />
            </li>
            <li>
              <input type="radio" name="rating" value="2" onChange={handleChange} />
            </li>
            <li>
              <input type="radio" name="rating" value="3" onChange={handleChange} />
            </li>
            <li>
              <input type="radio" name="rating" value="4" onChange={handleChange} />
            </li>
            <li>
              <input type="radio" name="rating" value="5" onChange={handleChange} />
            </li>
          </ul>
          {/* <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-10 h-10 dark:text-yellow-500">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button> */}
          <div className="flex gap-5 justify-center">
            <OutlinedButton label="Cancel" action={handleClose} />
            <FilledButton label="Post" action={postComment} />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ReviewModal;
