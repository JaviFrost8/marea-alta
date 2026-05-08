import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Navlink } from '../ui/Navlink';

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
              height={120}
              className="h-16 w-auto"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:block font-semibold text-tertiary">
            <ul className="flex justify-center items-center md:gap-6 lg:gap-10 h-15">
              <li>
                <Navlink href={'/'} label="Inicio" />
              </li>
              <li>
                <Navlink href={'/carta'} label="Carta" />
              </li>
              <li>
                <Navlink href={'/reservas'} label="Reservas" />
              </li>
              <li>
                <Navlink href={'/quienes-somos'} label="El Alma" />
              </li>
              <li>
                <Navlink href={'/contacto'} label="Contacto" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
