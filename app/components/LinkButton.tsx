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
      className="w-full flex justify-center md:justify-start items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm font-semibold text-slate-700 rounded-md hover:bg-gray-300 transition-colors"
      onClick={onClick}
    >
      <Icon className="w-4 h-4 stroke-1" />
      <span className="hidden md:block">{children}</span>
    </button>
  ) : (
    <Link
      href={name.toLowerCase()}
      className="w-full flex justify-center md:justify-start items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm font-semibold text-slate-700 rounded-md hover:bg-gray-300 transition-colors"
    >
      <Icon className="w-4 h-4 stroke-1" />
      <span className="hidden md:block">{children}</span>
    </Link>
  );
};

export default LinkButton;
