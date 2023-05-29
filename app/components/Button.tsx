"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  danger,
  disabled,
  fullWidth,
  onClick,
  secondary,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex
        justify-center
        py-2
        px-3
        rounded-md
        text-sm
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        transition
      `,
        disabled && "bg-gray-300 text-gray-500 cursor-not-allowed",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger && "bg-red-500 hover:bg-rose-600 focus-visible:ring-rose-500",
        !secondary &&
          !danger &&
          "bg-orange-300 hover:bg-orange-400 focus-visible:ring-orange-500"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
