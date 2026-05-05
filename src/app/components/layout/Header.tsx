import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <div className="sticky top-0 left-0 font-sans flex md:gap-8 bg-primary w-full px-20 py-2 z-50">
      <div className="flex flex-1 justify-start">
        <Link href={'/'}>
          <Image
            src={'/images/logo-marea-alta.webp'}
            alt="Logo de Marea Alta"
            width={120}
            height={100}
          />
        </Link>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <nav className="font-semibold text-tertiary">
          <ul className="flex gap-8">
            <li>
              <Link href={'/'}>Inicio</Link>
            </li>
            <li>
              <Link href={'/carta'}>Carta</Link>
            </li>
            <li>
              <Link href={'/reservas'}>Reservas</Link>
            </li>
            <li>
              <Link href={'/quienes-somos'}>El Alma</Link>
            </li>
            <li>
              <Link href={'/contacto'}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};
