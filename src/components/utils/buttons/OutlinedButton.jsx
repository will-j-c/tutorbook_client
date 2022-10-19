import { Link } from "react-router-dom";

function OutlinedButton(props) {
  const { label, linkTo } = props;
  return (
    <Link
      className="inline-block border border-titleText rounded px-6 py-3 text-base font-bold text-titleText hover:bg-transparent hover:bg-tertiary/25"
      to={linkTo}>
      {label}
    </Link>
  );
}

export default OutlinedButton;
