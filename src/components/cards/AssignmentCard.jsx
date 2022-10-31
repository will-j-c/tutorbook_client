import dayjs from 'dayjs';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import Avatar from '../avatars/Avatar';
import ConfirmAssignmentDeleteModal from '../modals/ConfirmAssignmentDeleteModal';
import EditAssignmentModal from '../modals/EditAssignmentModal';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';

function AssignmentCard(props) {
  const { published_at, user, title, description, assignment_uuid } = props.assignment;
  const toggleOpen  = props.toggleOpen;
  const setAssignmentUser = props.setAssignmentUser;
  const [cookies] = useCookies();
  const [deleteAssignmentModalOpen, setDeleteAssignmentModalOpen] = useState(false);
  const [editAssignmentModalOpen, setEditAssignmentModalOpen] = useState(false);

  const toggleDeleteModal = (event) => {
    setDeleteAssignmentModalOpen((previous) => !previous);
    if (event?.target?.text !== 'Delete') {
      window.location.reload(true);
    }
  };

  const toggleEditModal = (event) => {
    setEditAssignmentModalOpen((previous) => !previous);
    if (event?.target?.text !== 'Edit') {
      window.location.reload(true);
    }
  };

  const handleMessageClick = () => {
    setAssignmentUser(user.id);
    toggleOpen();
  }

  return (
    <div className="relative overflow-hidden rounded-lg p-8 bg-primary text-titleText">
      <div className="justify-between sm:flex">
        <div>
          <h3 className="text-xl font-bold text-secondaryTitleText">{title}</h3>
          <div className="flex items-center gap-5 mt-3">
            <Avatar size="h-10" profile_img_url={user.profile_img_url} />
            <p className="mt-1 text-xs font-medium">
              Posted by <span className="text-secondaryTitleText">{user.first_name}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm  mb-12">{description}</p>
      </div>

      <div className="flex gap-6 absolute bottom-4 w-full">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-secondaryTitleText">Published</p>
          <p className="text-xs">{dayjs(published_at).format('DD MMMM YYYY')}</p>
        </div>
        <div className="flex gap-3">
          {cookies.uuid === user.user_uuid ? (
            <>
              <OutlinedButton label="Edit" action={toggleEditModal} />
              <OutlinedButton label="Delete" action={toggleDeleteModal} />
            </>
          ) : cookies.user_type !== '1' ? (
            <FilledButton label="Message" action={handleMessageClick} />
          ) : (
            ''
          )}
        </div>
      </div>
      <ConfirmAssignmentDeleteModal
        isOpen={deleteAssignmentModalOpen}
        toggleOpen={toggleDeleteModal}
        assignment_uuid={assignment_uuid}
      />
      <EditAssignmentModal
        isOpen={editAssignmentModalOpen}
        toggleOpen={toggleEditModal}
        assignment_uuid={assignment_uuid}
        title={title}
        description={description}
      />
    </div>
  );
}

export default AssignmentCard;
