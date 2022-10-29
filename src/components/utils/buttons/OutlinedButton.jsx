import { Link } from 'react-router-dom';

function OutlinedButton(props) {
  const { label, linkTo, action } = props;
  return (
    <Link
      className='inline-block border border-titleText rounded px-3 py-3 font-bold text-titleText hover:bg-transparent max-h-max hover:bg-tertiary/25'
      to={linkTo}
      onClick={action}>
      {label}
    </Link>
  );
}

export default OutlinedButton;
