import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/globalContext';

const Footer = () => {
  const { scrollTop } = useContext(GlobalContext);

  return (
    <>
      <footer className="max-w-screen-xl mx-auto bg-white dark:bg-gray-900 mt-20">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Get Latest Job Updates
              </h1>
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <form className="w-full max-w-sm">
                  <label
                    htmlFor="default-email"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Email sign-up
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="default-email"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white transition duration-300"
                      placeholder="Enter your email here..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Quick Link
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  onClick={scrollTop}
                  to="/"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  Home
                </Link>
                <Link
                  onClick={scrollTop}
                  to="/job-vacancy"
                  className='"text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"'>
                  Jobs
                </Link>
                <Link
                  onClick={scrollTop}
                  to="/about"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  About
                </Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Legal
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="/#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  Term of Use
                </a>
                <a
                  href="/#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  Help Center
                </a>
                <a
                  href="/#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" onClick={scrollTop}>
              <img
                className="h-8 mr-3"
                src="https://flowbite.com/docs/images/logo.svg"
                alt=""
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                DreamJob
              </span>
            </Link>
            <div className="flex -mx-2">
              <a
                href="https://gitlab.com/3ramayana"
                target="_blank"
                rel="noreferrer"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="GitLab">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  fill="none"
                  viewBox="0 0 448 512">
                  <path d="M48 32H400C426.5 32 448 53.5 448 80V432C448 458.5 426.5 480 400 480H48C21.5 480 0 458.5 0 432V80C0 53.5 21.5 32 48 32zM382.1 224.9L337.5 108.5C336.6 106.2 334.9 104.2 332.9 102.9C331.3 101.9 329.5 101.3 327.7 101.1C325.9 100.9 324 101.2 322.3 101.8C320.6 102.5 319 103.5 317.8 104.9C316.6 106.3 315.7 107.9 315.2 109.7L285 201.9H162.1L132.9 109.7C132.4 107.9 131.4 106.3 130.2 104.9C128.1 103.6 127.4 102.5 125.7 101.9C123.1 101.2 122.1 100.1 120.3 101.1C118.5 101.3 116.7 101.9 115.1 102.9C113.1 104.2 111.5 106.2 110.6 108.5L65.94 224.9L65.47 226.1C59.05 242.9 58.26 261.3 63.22 278.6C68.18 295.9 78.62 311.1 92.97 321.9L93.14 322L93.52 322.3L161.4 373.2L215.6 414.1C217.1 415.1 220.9 416.9 223.9 416.9C226.9 416.9 229.9 415.1 232.3 414.1L286.4 373.2L354.8 322L355 321.9C369.4 311 379.8 295.8 384.8 278.6C389.7 261.3 388.1 242.9 382.5 226.1L382.1 224.9z" />
                </svg>
              </a>
              <a
                href="https://github.com/3ramayana"
                target="_blank"
                rel="noreferrer"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Github">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  fill="none"
                  viewBox="0 0 448 512">
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
