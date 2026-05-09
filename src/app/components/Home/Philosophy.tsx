'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export const Philosophy = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center min-h-auto md:min-h-175 bg-white md:px-12 lg:px-16 xl:px-28 overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <div className="max-w-2xl md:pr-3">
          <div className="md:flex hidden w-full max-w-52 h-0.5 bg-secondary/70 mb-12"></div>
          <h2 className="text-center md:text-start font-heading text-3xl mt-12 md:mt-0 mb-4 lg:mb-12">
            Nuestra Filosofía
          </h2>
          <p className="text-center md:text-start font-sans lg:text-xl px-5 md:px-0 mb-8">
            En Marea Alta, la cocina es un diálogo constante con el océano. Cada
            ingrediente es seleccionado con un respeto absoluto por la
            estacionalidad y el origen, permitiendo que la frescura hable por sí
            misma.
          </p>
          <p className="text-center md:text-start font-sans lg:text-xl px-5 md:px-0 text-black/60">
            Nuestro equipo de chefs fusiona técnicas ancestrales con una visión
            vanguardista, creando platos que no solo alimentan el cuerpo, sino
            que cuentan historias de las profundidades marinas y las tradiciones
            costeras.
          </p>
          <Link
            className="flex justify-center md:justify-start items-center"
            href={'/quienes-somos'}
          >
            <div className="flex items-center justify-center text-secondary tracking-[1px] md:tracking-normal pb-1 w-fit border-b-2 border-secondary mt-8 md:mt-10 cursor-pointer group">
              DESCUBRE NUESTRA HISTORIA{' '}
              <span className="max-w-0 overflow-hidden group-hover:max-w-10 group-hover:ml-2 transition-all duration-300">
                ➜
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-full md:w-1/2 bg-white">
        <motion.div
          initial={!isMobile ? { opacity: 0, x: 50 } : { opacity: 0, y: 25 }}
          whileInView={!isMobile ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ amount: isMobile ? 0.2 : 0.5, once: true }}
          className="relative mt-14 md:my-28 w-full max-w-2xl h-72 sm:h-96 md:h-115 lg:h-175"
        >
          <Image
            src={'/images/chef-plato.webp'}
            alt="Foto de chef terminando el plato"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};
