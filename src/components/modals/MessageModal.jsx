import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import axios from '../../api/axios';

function MessageModal(props) {
  const [cookies] = useCookies();
  const { isOpen, toggleOpen, tutor_uuid } = props;
  console.log(props);
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
          <span className="text-center">Start a new conversation</span>
          <textarea className="resize h-60" onChange={handleChange} />

          <div className="flex gap-5 justify-center">
            <OutlinedButton label="Cancel" action={handleClose} />
            <FilledButton label="Send" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default MessageModal;
