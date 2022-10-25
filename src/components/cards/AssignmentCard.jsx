import dayjs from 'dayjs';
import FilledButton from '../utils/buttons/FilledButton';

function AssignmentCard(props) {
  const { published_at, user, title, filled, description } = props.assignment;

  return (
    <div className='relative overflow-hidden rounded-lg p-8 bg-primary text-titleText'>
      <div className='justify-between sm:flex'>
        <div>
          <h3 className='text-xl font-bold text-secondaryTitleText'>{title}</h3>

          <p className='mt-1 text-xs font-medium'>`Posted by <span className='text-secondaryTitleText'>{user.first_name}</span></p>
        </div>
      </div>

      <div className='mt-4 sm:pr-8'>
        <p className='text-sm  mb-12'>{description}</p>
      </div>

      <div className='flex gap-6 absolute bottom-4 w-full'>
        <div className='flex flex-col'>
          <p className='text-sm font-medium text-secondaryTitleText'>Published</p>
          <p className='text-xs'>{dayjs(published_at).format('DD MMMM YYYY')}</p>
        </div>
        <div>
          <FilledButton label='Message' />
        </div>
      </div>
    </div>
  );
}

export default AssignmentCard;
