import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { deleteUser } from 'firebase/auth';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import axios from '../../api/axios';
function ConfirmProfileDeleteModal(props) {
  const [cookies] = useCookies();
  const { isOpen, toggleOpen, user_uuid } = props;
  const navigate = useNavigate();
  const hidden = isOpen ? '' : 'hidden';

  const handleClose = (event) => {
    
    if (event.target?.id === 'top-div' || event.target?.text === 'Cancel') {
      toggleOpen(false);
    }
  };

  const deleteProfile = () => {
    axios
      .delete(`users/delete/${user_uuid}`, {
        headers: { Authorization: `Bearer ${cookies.idToken}` }
      })
      .then(
        (response) => {
          deleteUser(auth.currentUser)
          toggleOpen(false);
          navigate('/');
        },
        (error) => {
          toast.error('Failed to delete');
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
          <span className="text-center">
            Are you sure you want to delete? This cannot be undone.
          </span>
          <div className="flex justify-center gap-5">
            <OutlinedButton label="Cancel" action={handleClose} />
            <FilledButton label="Delete" action={deleteProfile} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmProfileDeleteModal;
