import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="bg-yellow-200 py-10 sm:px-4 shadow-md ">
        <div className=" flex justify-between items-center ">
          <a href="" className=" mx-auto flex ">
            <img src="icon.png" className="flex w-10 h-12" />
            <span className="text-center text-2xl font-serif bg-white p-2">
              &nbsp; C O N C E P T - B U I L D I N G - W I T H - H E N R Y{' '}
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto " id="mobile-menu">
            <ul className="flex  md:flex-row md:space-x-9  md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="bg-blue-100 p-2 text-gray-600">
                    {' '}
                    GMAT videos
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="bg-blue-100 p-2 text-gray-600">
                    {' '}
                    Verbal Section
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="bg-blue-100 p-2 text-gray-600"> Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="bg-blue-100 p-2 text-gray-600">
                    {' '}
                    Free Downloads
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <span className="bg-blue-100 p-2 text-gray-600">
                    {' '}
                    Contact Henry!
                  </span>
                </a>
              </li>

              {/* <li>
                <button
                  href="#"
                  className=" p-3 bg-indigo-700 text-white
                  md:hover:bg-indigo-800 
                   rounded-lg"
                >
                  Buy your membership!
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
