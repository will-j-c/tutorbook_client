import FilledButton from '../utils/buttons/FilledButton';
function HowItWorks(props) {
  return (
    <div className="space-y-10 p-5 mt-5 text-titleText">
      <h1 className="text-center text-6xl font-extrabold text-secondaryTitleText mb-20">How it works</h1>

      <details className="group bg-primary p-6 md:w-5/6 mx-auto">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="font-semibold text-2xl">Step 1 - Sign up</h2>

          <span className="ml-1.5 flex-shrink-0 rounded-full p-1.5 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
          in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
          explicabo consequuntur distinctio corporis earum similique!
        </p>
      </details>

      <details className="group bg-primary p-6 md:w-5/6 mx-auto">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="font-semibold text-2xl">Step 2 - Create your tutor profile</h2>

          <span className="ml-1.5 flex-shrink-0 rounded-full p-1.5 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
          in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
          explicabo consequuntur distinctio corporis earum similique!
        </p>
      </details>

      <details className="group bg-primary p-6 md:w-5/6 mx-auto">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="font-semibold text-2xl">Step 3 - Search for assignments or wait for people to come to you!</h2>

          <span className="ml-1.5 flex-shrink-0 rounded-full p-1.5 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
          in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
          explicabo consequuntur distinctio corporis earum similique!
        </p>
      </details>
    </div>
  );
}

export default HowItWorks;
