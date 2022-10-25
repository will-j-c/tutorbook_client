import dayjs from 'dayjs';
function AssignmentCard(props) {
  console.log(props.assignment);
  const { published_at, user, title, filled, description } = props.assignment;
  console.log(dayjs(published_at).format('DD MMMM YYYY'))
  return (
    <a href="#" className="relative block overflow-hidden rounded-lg border border-gray-100 p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {title}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">{`Posted by ${user.first_name}`}</p>
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>

      <dl className="mt-6 flex">
        <div className="flex flex-col">
          <dt className="text-sm font-medium">Published</dt>
          <dd className="text-xs">{dayjs(published_at).format('DD MMMM YYYY')}</dd>
        </div>

      </dl>
    </a>
  );
}

export default AssignmentCard;
