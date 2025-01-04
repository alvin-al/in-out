import React from "react";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const MyButton = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`min-w-12 px-2 h-10 border-gray-800 border rounded-md flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
