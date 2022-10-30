import dayjs from 'dayjs';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import Avatar from '../avatars/Avatar';
import ConfirmAssignmentDeleteModal from '../modals/ConfirmDeleteModal';
import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';

function AssignmentCard(props) {
  const { published_at, user, title, filled, description, assignment_uuid } = props.assignment;
  const [cookies] = useCookies();
  const [deleteAssignmentModalOpen, setDeleteAssignmentModalOpen] = useState(false);
  const toggleDeleteModal = (event) => {
    setDeleteAssignmentModalOpen((previous) => !previous);
    if (event?.target?.text !== 'Delete') {
      window.location.reload(true);
    }
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
              <OutlinedButton label="Edit" />
              <OutlinedButton label="Delete" action={toggleDeleteModal} />
            </>
          ) : (
            <FilledButton label="Message" />
          )}
        </div>
      </div>
      <ConfirmAssignmentDeleteModal isOpen={deleteAssignmentModalOpen} toggleOpen={toggleDeleteModal} assignment_uuid={assignment_uuid} />
    </div>
  );
}

export default AssignmentCard;
