import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import axios from '../../api/axios';
function ConfirmAssignmentDeleteModal(props) {
  const [cookies] = useCookies();
  const { isOpen, toggleOpen, assignment_uuid } = props;

  const hidden = isOpen ? '' : 'hidden';

  const handleClose = (event) => {
    event.stopPropagation();
    if (event.target?.id === 'top-div' || event.target?.text === 'Cancel') {
      toggleOpen(false);
    }
  };

  const deleteAssignment = () => {
    axios
      .delete(`assignments/${assignment_uuid}`, {
        headers: { Authorization: `Bearer ${cookies.idToken}` }
      })
      .then(
        (response) => {
          toggleOpen(false);
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
          <span className="text-center">Are you sure you want to delete?</span>
          <div className='flex justify-center gap-5'>
            <OutlinedButton label="Cancel" action={handleClose} />
            <FilledButton label="Delete" action={deleteAssignment} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmAssignmentDeleteModal;
