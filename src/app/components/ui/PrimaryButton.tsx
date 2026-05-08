import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const PrimaryButton = ({ text }: ButtonProps) => {
  return (
    <button className="w-fit font-sans bg-secondary px-10 py-4 text-neutral font-semibold tracking-[3px] text-xs cursor-pointer hover:px-12 hover:text-white transition-all duration-300">
      {text}
    </button>
  );
};
