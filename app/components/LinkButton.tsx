import Link from 'next/link';
import { IconType } from 'react-icons';

interface LinkButtonProps {
  children: React.ReactNode;
  name: string;
  icon: IconType;
  onClick?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  name,
  children,
  icon: Icon,
  onClick,
}) => {
  return onClick ? (
    <button
      className="w-full flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm font-semibold text-slate-700 rounded-md hover:bg-gray-300 dark:bg-gray-900 dark:text-white transition-colors"
      onClick={onClick}
    >
      <Icon className="w-3.5 h-3.5 stroke-1" />
      {children}
    </button>
  ) : (
    <Link
      href={name.toLowerCase()}
      className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm font-semibold text-slate-700 rounded-md hover:bg-gray-300 dark:bg-gray-900 dark:text-white transition-colors"
    >
      <Icon className="w-3.5 h-3.5 stroke-1" />
      {children}
    </Link>
  );
};

export default LinkButton;
