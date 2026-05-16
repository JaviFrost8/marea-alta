'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

export const AlmaHero = () => {
  return (
    <div>
      <section className="flex w-full">
        <div className="relative flex flex-col justify-center items center w-full h-screen overflow-hidden">
          <div
            className="absolute inset-0 pb-20 overflow-hidden"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, black 65%, transparent 90%)',
              maskImage:
                'linear-gradient(to bottom, black 65%, transparent 90%)',
            }}
          >
            <Image
              src={'/images/aboutHero.webp'}
              alt="Fotografía de las olas del mar."
              fill
              priority
              className="object-cover object-center overflow-hidden"
            />
          </div>

          <div className="absolute inset-0 bg-[#001226]/70"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="flex flex-col items-center z-10 w-full mb-20"
          >
            <h3 className="font-heading text-secondary tracking-[3px]">
              SOBRE NOSOTROS
            </h3>
            <h2 className="font-heading text-4xl lg:text-7xl text-white text-center my-2">
              El Alma de Marea Alta
            </h2>
            <div className="h-0.5 bg-secondary w-36 mt-4 lg:mt-6"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
