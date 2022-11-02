import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import axios from '../../api/axios';
function AssignmentModal(props) {
  const [cookies] = useCookies();
  const { isOpen, toggleOpen } = props;

  const hidden = isOpen ? '' : 'hidden';
  const [form, setForm] = useState({
    title: '',
    description: '',
    published: true
  });

  const handleClose = (event) => {
    event.stopPropagation();
    if (event.target?.id === 'top-div' || event.target?.text === 'Cancel') {
      setForm({
        title: '',
        description: '',
        published: true
      });
      toggleOpen(false);
    }
  };

  const handleChange = (event) => {
    if (event.target.type === 'text') {
      setForm((previous) => {
        return { ...previous, title: event.target.value };
      });
    }
    if (event.target.type === 'textarea') {
      setForm((previous) => {
        return { ...previous, description: event.target.value };
      });
    }
  };

  const postAssignment= () => {
    axios
      .post(`assignments/create`, form, {
        headers: { Authorization: `Bearer ${cookies.idToken}` }
      })
      .then(
        (response) => {
          toggleOpen(false);
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
          <label>Title</label>
          <input type="text" onChange={handleChange} value={form?.title} />
          <label>Description of assignment</label>
          <textarea className="resize h-60" onChange={handleChange} value={form?.description} />
          <div className="flex gap-5 justify-center">
            <OutlinedButton label="Cancel" action={handleClose} />
            <FilledButton label="Create" action={postAssignment} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentModal;
