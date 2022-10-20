import { Link } from 'react-router-dom';

function FilledButton(props) {
  const { label, linkTo, action } = props;
  return (
    <Link
      className="inline-block rounded bg-tertiary px-6 py-3 text-base font-bold text-primary hover:bg-transparent hover:bg-tertiary/90"
      to={linkTo}
      onClick={action}>
      {label}
    </Link>
  );
}

export default FilledButton;
