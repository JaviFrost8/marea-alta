import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 bg-primary z-50">
      <div className="relative flex items-center px-6 md:px-10 lg:px-20 py-3">
        <div className="flex justify-start">
          <Link href={'/'}>
            <Image
              src={'/images/logo-marea-alta.webp'}
              alt="Logo de Marea Alta"
              width={120}
              height={100}
            />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:block font-semibold text-tertiary">
            <ul className="flex md:gap-6 lg:gap-10">
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
      </div>
    </header>
  );
};
