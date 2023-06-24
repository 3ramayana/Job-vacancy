import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/globalContext';

const JobPreview = () => {
  const { scrollTop, latestJob } = useContext(GlobalContext);

  return (
    <>
      <div className="md:mt-10">
        <div className="flex justify-center md:justify-between text-center md:text-left items-center max-w-screen-xl mx-auto px-4 py-10">
          <div>
            <h3 className="text-3xl font-bold dark:text-white">
              <span className="text-blue-700">Latest and Top </span>
              Job Openings
            </h3>
            <p className="font-normal dark:text-white mt-3 max-w-screen-sm">
              Discover the fresh job openings from the giant firms in which you
              might want to apply and take a chance to get hired by top fortune
              companies.
            </p>
          </div>
          <div className="hidden md:block">
            <Link to="/job-vacancy">
              <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={scrollTop}>
                View All Jobs
              </button>
            </Link>
          </div>
        </div>

        {/* Jobs Preview */}

        <div className="grid max-w-screen-xl mx-auto px-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {latestJob.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-xl bg-white dark:bg-gray-800 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <Link to={`/job-vacancy/${item.id}`}>
                  <div className="relative flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-white">
                      <img
                        src={item.company_image_url}
                        alt="Hotel"
                        className="object-cover h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-700 dark:text-white">
                        {item.company_name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.company_city}
                      </p>
                    </div>
                  </div>
                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700 dark:text-white font-bold">
                      {item.title}
                    </h2>
                    {item.job_status === 1 ? (
                      <span className="bg-teal-500 text-white text-xs font-semibold mr-2 px-3 py-0.5 rounded-full">
                        Open
                      </span>
                    ) : (
                      <span className="bg-rose-500 text-white text-xs font-semibold mr-2 px-3 py-0.5 rounded-full">
                        Close
                      </span>
                    )}
                    <p className="mt-3 text-sm text-slate-400">
                      {item.job_description.length > 100
                        ? `${item.job_description.substring(0, 100)} ...`
                        : `${item.job_description}`}
                    </p>
                    <div className="flex mt-5 gap-2">
                      <span className="text-blue-700 text-xs font-semibold px-4 py-0.5 bg-blue-100 rounded">
                        {item.job_type}
                      </span>
                      <span className="text-rose-700 text-xs font-semibold px-4 py-0.5 bg-rose-100 rounded">
                        {item.job_tenure}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="md:hidden px-4 py-10 grid justify-items-center">
          <Link to="/job-vacancy">
            <button
              type="button"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              onClick={scrollTop}>
              View All Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobPreview;
