import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import axios from '../../api/axios';

function MessageModal(props) {
  const navigate = useNavigate();
  const [cookies] = useCookies();
  const { isOpen, toggleOpen, source, user, tutor } = props;
  const hidden = isOpen ? '' : 'hidden';
  const text =
    source === 'assignment'
      ? 'Send a message about this assignment'
      : 'Send a message to the tutor';

  const [form, setForm] = useState({
    user: source === 'assignment' ? user : cookies.uuid,
    tutor: source === 'assignment' ? cookies.uuid : tutor,
    content: '',
    source: source,
    sender: source === 'assignment' ? 't' : 'u'
  });
  const handleClose = (event) => {
    event.stopPropagation();
    if (event.target?.id === 'top-div' || event.target?.text === 'Cancel') {
      setForm((previous) => {
        return { ...previous, content: '' };
      });
      toggleOpen(false);
    }
  };
  const handleChange = (event) => {
    if (event.target.type === 'textarea') {
      setForm((previous) => {
        return { ...previous, content: event.target.value };
      });
    }
  };

  const sendMessage = () => {
    axios
      .post(`messages/new`, form, {
        headers: { Authorization: `Bearer ${cookies.idToken}` }
      })
      .then(
        (response) => {
          toggleOpen(false);
          navigate('/messages');
        },
        (error) => {
          toast.error('Failed to post review');
        }
      );
  };

  return (
    <div
      className={`${hidden} fixed inset-0 bg-primary bg-opacity-50 overflow-y-auto h-screen w-screen flex justify-center z-40`}
      onClick={handleClose}
      id="top-div">
      <div className="text-tertiary bg-primary border shadow-lg mt-28 p-8 rounded h-max w-1/2">
        <div className="flex flex-col gap-5">
          <span className="text-center">{text}</span>
          <textarea className="resize h-20" onChange={handleChange} value={form.content} />
          <div className="flex justify-center gap-5">
            <OutlinedButton label="Cancel" action={handleClose} />
            <FilledButton label="Send" action={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageModal;
