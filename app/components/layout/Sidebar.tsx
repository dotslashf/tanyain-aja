import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { BsBoxArrowLeft, BsHouse, BsPerson } from 'react-icons/bs';
import LinkButton from '../LinkButton';

const Sidebar = () => {
  const sidebar = [
    {
      name: 'Timeline',
      icon: BsHouse,
    },
    {
      name: 'Profile',
      icon: BsPerson,
    },
  ];

  return (
    <div className="h-screen bg-gray-500 dark:bg-slate-900">
      <div className="sticky inset-x-0 top-0 z-20 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="w-5 h-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-screen justify-start -translate-x-full transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 py-7 overflow-y-auto scrollbar-y flex flex-col lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
        <div className="px-6">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            href="/"
            aria-label="Brand"
          >
            tanyain-aja
          </Link>
        </div>
        <nav
          className="flex flex-col flex-wrap justify-between w-full h-full p-6"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            {sidebar.map((item) => {
              return (
                <li key={item.name.toLowerCase()}>
                  <LinkButton name={item.name} icon={item.icon}>
                    {item.name}
                  </LinkButton>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="w-full px-6">
          <LinkButton
            name="Sign Out"
            icon={BsBoxArrowLeft}
            onClick={() => signOut()}
          >
            Sign Out
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
