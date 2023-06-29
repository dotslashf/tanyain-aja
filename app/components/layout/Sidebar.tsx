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
    <div className="h-screen bg-gray-500 ">
      <div className="flex flex-col w-20 h-full overflow-hidden overflow-y-auto bg-white border-r border-gray-200 md:w-48 lg:w-64 py-7 scrollbar-y">
        <div className="px-6">
          <Link
            className="flex-none hidden text-xl font-semibold md:block"
            href="/"
            aria-label="Brand"
          >
            tanyain-aja
          </Link>
        </div>
        <nav
          className="flex flex-col flex-wrap justify-between w-full h-full p-4 lg:p-6"
          data-hs-accordion-always-open
        >
          <ul className="space-y-2.5">
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
        <div className="w-full p-4 lg:p-6">
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
