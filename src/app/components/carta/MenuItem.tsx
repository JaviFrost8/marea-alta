import React from 'react';

interface MenuItemProps {
  title: string;
  description: string;
  price: number;
}

export const MenuItem = ({ title, description, price }: MenuItemProps) => {
  return (
    <div className="flex flex-col w-full mb-16">
      <div className="flex justify-between">
        <h2 className="font-heading text-xl text-secondary mb-4">{title}</h2>
        <span className="font-heading text-secondary text-xl pl-8 md:pl-0">
          {price}€
        </span>
      </div>
      <p className="font-sans text-white">{description}</p>
      <div className="h-px w-full bg-gray-600/40 mt-6"></div>
    </div>
  );
};
