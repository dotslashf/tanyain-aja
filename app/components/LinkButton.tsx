import Link from 'next/link';
import { IconType } from 'react-icons';
import clsx from 'clsx';

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
  const cssClass =
    'flex justify-center md:justify-start items-center px-3 gap-x-3.5 py-2 bg-slate-200 text-sm font-semibold rounded-md hover:bg-gray-300 transition-colors';
  return onClick ? (
    <button className={clsx(cssClass, 'w-full')} onClick={onClick}>
      <Icon className="w-4 h-4 stroke-1" />
      <span className="hidden md:block">{children}</span>
    </button>
  ) : (
    <Link href={name.toLowerCase()} className={cssClass}>
      <Icon className="w-4 h-4 stroke-1" />
      <span className="hidden md:block">{children}</span>
    </Link>
  );
};

export default LinkButton;
