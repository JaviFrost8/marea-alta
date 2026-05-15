import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full grid grid-cols-1 items-center lg:grid-cols-12 py-20 px-10">
      <div className="font-heading flex flex-col items-center lg:items-start text-white pb-8 md:pb-4 md:col-span-3">
        <h2 className="">Marea Alta</h2>
        <h3 className="text-white/60">SABOR, ORIGEN Y ATLÁNTICO</h3>
      </div>
      <div className="pb-8 md:pb-4 col-span-6">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 text-white/60">
          <Link
            href={'/aviso-legal'}
            className="hover:text-white transition-colors duration-300"
          >
            Aviso legal
          </Link>
          <Link
            href={'/politicas-de-privacidad'}
            className="hover:text-white transition-colors duration-300"
          >
            Política de privacidad
          </Link>
          <Link
            href={'/politicas-de-cookies'}
            className="hover:text-white transition-colors duration-300"
          >
            Política de cookies
          </Link>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-end font-heading text-white/60 text-xs text-center md:text-start md:col-span-3">
        <span>&copy; {new Date().getFullYear()} MAREA ALTA</span>

        <a
          href="https://www.javidev.es"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          DESARROLLADO POR JAVIDEV
        </a>
      </div>
    </footer>
  );
};
