import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="container mx-auto py-8">
          <form className="w-full max-w-sm mx-auto p-8 rounded-md shadow-md bg-white dark:bg-gray-800">
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2 text-navy-700 dark:text-white"
                htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="email"
                id="email"
                name="email"
                placeholder="john@mail.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2 text-navy-700 dark:text-white"
                htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                id="password"
                name="password"
                placeholder="********"
              />
            </div>
            <button
              className="mt-5 w-full bg-blue-700 text-white text-base font-bold py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
              type="submit">
              Login
            </button>
            <Link to="/">
              <button
                className="mt-5 w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 text-base font-bold py-2 px-4 rounded-md hover:bg-blue-8  transition duration-300"
                type="submit">
                Cancel
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
