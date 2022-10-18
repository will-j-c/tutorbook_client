import { Link } from "react-router-dom";

function SideNav(props) {
  const { setOpen, open } = props;
  const handleClick = () => {
    setOpen(false)
  }
  return open ? (
    <section class="fixed inset-y-0 right-0 z-50 flex text-titleText w-6/12 bg-primary">
      <div class="w-screen max-w-sm">
        <div class="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
          <div class="overflow-y-scroll">
            <header class="flex h-16 items-center justify-start">
              <button
                onClick={handleClick}
                aria-label="Close menu"
                class="h-4 w-4 border-gray-200"
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </header>

            <nav class="flex flex-col divide-y divide-gray-200 text-sm font-bold">
              <Link href="" class="pr-6 py-3 text-titleText font-bold transition text-sm focus:text-titleText/75">
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
