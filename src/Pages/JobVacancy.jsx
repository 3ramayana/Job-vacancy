import { useContext } from 'react';
import { GlobalContext } from '../Context/globalContext';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Jobs = () => {
  const { data, handleView } = useContext(GlobalContext);

  return (
    <>
      <Navbar />
      <div className="mt-10">
        {/* JOBS CARD */}
        <div className="">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-xl bg-white dark:bg-gray-800 p-3 shadow-lg hover:shadow-xl duration-300 ">
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
                        ? `${item.job_description.substring(0, 70)} ...`
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
                    <div className="mt-5 sm:flex sm:gap-2">
                      <button
                        type="button"
                        className={`bg-blue-500 mb-4 sm:mb-0 px-4 py-2 text-white duration-100 hover:bg-blue-600 text-sm rounded-lg font-semibold w-full md:w-auto ${
                          !item.job_status ? 'cursor-not-allowed' : ''
                        }`}
                        disabled={!item.job_status ? true : false}>
                        Apply Now
                      </button>
                      <button
                        type="button"
                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 font-semibold rounded-lg text-sm px-4 py-2 w-full md:w-auto dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        onClick={() => handleView(item.id)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
