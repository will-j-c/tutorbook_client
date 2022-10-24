import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebaseConfig';
import { signOut } from 'firebase/auth';

function LogOutButton(props) {
  const { setOpen } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    setOpen(false);
    signOut(auth);
    navigate('/');
  };
  return (
    <button
      className="inline-block rounded bg-tertiary px-6 py-3 text-base font-bold text-primary hover:bg-transparent hover:bg-tertiary/90"
      onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogOutButton;
