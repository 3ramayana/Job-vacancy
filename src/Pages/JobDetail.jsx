import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Detail = () => {
  const [itemView, setItemView] = useState([]);
  let { idData } = useParams();

  useEffect(() => {
    const getItem = async (id) => {
      try {
        const item = await axios.get(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`
        );

        setItemView(item.data);
      } catch (error) {}
    };

    getItem(idData);
  }, [idData]);

  return (
    <>
      <Navbar />

      <div className="w-full mx-auto max-w-screen-xl my-24 px-4">
        <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
          <div className="p-10 rounded-lg bg-white dark:bg-gray-800 text-black shadow-xl lg:basis-3/4">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 overflow-hidden bg-gray-100 dark:bg-white border-2 border-white">
                <img
                  src={itemView.company_image_url}
                  alt="company"
                  className="object-cover h-full"
                />
              </div>
              <div>
                <h1 className="font-bold text-2xl dark:text-white">
                  {itemView.title}
                </h1>
                <div className="flex mt-3 gap-2">
                  <span className="text-blue-700 text-xs font-semibold px-4 py-0.5 bg-blue-100 rounded">
                    {itemView.job_type}
                  </span>
                  <span className="text-rose-700 text-xs font-semibold px-4 py-0.5 bg-rose-100 rounded">
                    {itemView.job_tenure}
                  </span>
                </div>
                <div>
                  {itemView.job_status === 1 ? (
                    <span className="bg-teal-500 text-white text-xs font-semibold mr-2 px-3 py-0.5 rounded-full">
                      Open
                    </span>
                  ) : (
                    <span className="bg-rose-500 text-white text-xs font-semibold mr-2 px-3 py-0.5 rounded-full">
                      Close
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-400">
              <h2 className="font-bold text-xl text-navy-700 dark:text-white mb-3">
                Job Description
              </h2>
              <p>{itemView.job_description}</p>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              <h2 className="font-bold text-xl text-navy-700 dark:text-white mb-3">
                Job Qualification
              </h2>
              <p>{itemView.job_qualification}</p>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              <h2 className="font-bold text-xl text-navy-700 dark:text-white mb-3">
                Salary
              </h2>
              <p className="font-medium text-base">
                Min{' '}
                <span className="bg-rose-500 text-white mr-2 px-3 py-0.5 rounded">
                  {Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(itemView.salary_min)}
                </span>{' '}
                - Max{' '}
                <span className="bg-teal-500 text-white mr-2 px-3 py-0.5 rounded">
                  {Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(itemView.salary_min)}
                </span>
              </p>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-white dark:bg-gray-800 text-black shadow-xl lg:basis-1/4 flex gap-2 flex-col">
            <div className="flex gap-2 items-center font-medium text-gray-800 dark:text-white">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512">
                <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
              </svg>
              <p>{itemView.company_name}</p>
            </div>

            <div className="flex gap-2 items-center font-medium text-gray-800 dark:text-white">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p>{itemView.company_city}</p>
            </div>

            <button
              type="button"
              className={`bg-blue-500 mt-5 px-5 py-3 font-medium text-base text-white duration-100 hover:bg-blue-600 rounded-lg w-full ${
                !itemView.job_status ? 'cursor-not-allowed' : ''
              }`}
              disabled={!itemView.job_status ? true : false}>
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Detail;
