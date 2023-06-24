const HowItWork = () => {
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl font-bold dark:text-white">
            Get Hired in
            <span className="text-blue-700"> 4 Quick Easy Steps</span>
          </h3>
          <p className="font-normal dark:text-white mt-3 max-w-lg">
            The Quickest and most effective way to get hired by the top firm
            working in your career interest areas
          </p>
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 z-10 relatives mt-5">
          <div className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:transform hover:scale-105 duration-300">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512">
                <path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" />
              </svg>

              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Create an account
              </h5>

              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                Signup for the job applicant profile, mention your
                qualifications, post experiences, and expertise, and scope your
                interest. Voila! You're all set to find your dream jobs.
              </p>
            </div>
            <div className="relative top-0 sm:top-14 sm:max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:transform hover:scale-105 duration-300">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Search Job
              </h5>

              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                Once you set your job hunting parameters, you'll find many
                openings related to your career interest on the home page and
                even filter out some of the best job openings.
              </p>
            </div>
            <div className="sm:max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:transform hover:scale-105 duration-300">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512">
                <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
              </svg>

              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Upload CV/ Resume
              </h5>

              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                From numerous job openings, shortlist the right-match vacancy to
                your profile and apply right after by uploading your CV/ Resume
                and answering a couple of querstions, if any.
              </p>
            </div>
            <div className="relative top-0 sm:top-14 sm:max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:transform hover:scale-105 duration-300">
              <svg
                className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512">
                <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
              </svg>

              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Get Job
              </h5>

              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                After applying, wait for some time, schedule an interview, and
                if everything goes right, then get hired more quickly than
                traditional hiring methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
