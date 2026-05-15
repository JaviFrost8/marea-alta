import Image from 'next/image';
import React from 'react';

interface BigMenuItemProps {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  reverse?: boolean;
}

export const BigMenuItem = ({
  title,
  subtitle,
  description,
  price,
  image,
  reverse,
}: BigMenuItemProps) => {
  return (
    <div
      className={`flex ${reverse ? 'flex-row-reverse' : ''} w-full mt-28 px-28`}
    >
      <div className="flex flex-col justify-center w-1/2 my-20 px-20">
        <h2 className="text-secondary font-heading font-bold mb-4">{title}</h2>
        <h3 className="font-semibold font-heading text-white mb-4">
          {subtitle}
        </h3>
        <p className="font-sans text-white/70 mb-4">{description}</p>
        <span className="font-heading text-secondary text-xl font-semibold">
          {price}€
        </span>
      </div>
      <div className="relative w-1/2 h-200">
        <div className="w-full">
          <Image
            src={image}
            alt={`Foto del plato ${subtitle}`}
            fill
            className="object-cover object-center p-2 border border-secondary/30"
          />
        </div>
      </div>
    </div>
  );
};
