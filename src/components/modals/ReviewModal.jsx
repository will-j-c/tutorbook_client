function ReviewModal() {
  return (
    <div className='fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
      <fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
        <div className='space-y-2 col-span-full lg:col-span-1'>
          <p className='font-medium'>Profile</p>
          <p className='text-xs'>Adipisci fuga autem eum!</p>
        </div>
        <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-3'>
          <div className='col-span-full sm:col-span-3'>
            <label for='username' className='text-sm'>
              Username
            </label>
            <input
              id='username'
              type='text'
              placeholder='Username'
              className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
            />
          </div>
          <div className='col-span-full sm:col-span-3'>
            <label for='website' className='text-sm'>
              Website
            </label>
            <input
              id='website'
              type='text'
              placeholder='https://'
              className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
            />
          </div>
          <div className='col-span-full'>
            <label for='bio' className='text-sm'>
              Bio
            </label>
            <textarea
              id='bio'
              placeholder='
              className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'></textarea>
          </div>
          <div className='col-span-full'>
            <label for='bio' className='text-sm'>
              Photo
            </label>
            <div className='flex items-center space-x-2'>
              <img
                src='https://source.unsplash.com/30x30/?random'
                alt='
                className='w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700'
              />
              <button type='button' className='px-4 py-2 border rounded-md dark:border-gray-100'>
                Change
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default ReviewModal;
