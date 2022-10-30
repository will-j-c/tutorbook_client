import { Link } from 'react-router-dom';

function FilledButton(props) {
  const { label, linkTo, action } = props;
  return (
    <Link
      className='inline-block rounded bg-tertiary px-3 py-3 font-bold text-primary hover:bg-transparent max-h-max hover:bg-tertiary/90'
      to={linkTo}
      onClick={action}>
      {label}
    </Link>
  );
}

export default FilledButton;
