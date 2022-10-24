import { Link } from "react-router-dom";

function SideNav(props) {
  const { setOpen, open } = props;
  const handleClick = () => {
    setOpen(false)
  }
  return open ? (
    <section className="fixed inset-y-0 right-0 z-50 flex text-titleText w-6/12 bg-primary">
      <div className="w-screen max-w-sm">
        <div className="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
          <div className="overflow-y-scroll">
            <header className="flex h-16 items-center justify-start">
              <button
                onClick={handleClick}
                aria-label="Close menu"
                className="h-4 w-4 border-gray-200"
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </header>

            <nav className="flex flex-col divide-y divide-gray-200 text-sm font-bold">
              <Link className="pr-6 py-3 text-titleText font-bold transition text-sm focus:text-titleText/75">
                Browse Tutors
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  ) : (
    ''
  );
}

export default SideNav;
