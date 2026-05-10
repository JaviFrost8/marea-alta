'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

export const TheScenery = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  } as const;

  return (
    <section className="w-full my-24">
      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ amount: 0.2, once: true }}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="font-heading text-secondary mb-4">EL ESCENARIO</h2>
        <h3 className="font-sans text-white text-center mx-4">
          Un refugio junto al mar donde la gastronomía y el diseño conviven en
          equilibrio.
        </h3>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, once: true }}
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 lg:gap-10 md:h-[80vh] md:px-10 lg:mx-16 mt-20"
      >
        {/* IMAGEN GRANDE */}
        <motion.div
          variants={item}
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.01 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ amount: 0.4, once: true }}
          className="relative md:col-span-2 md:row-span-2 overflow-hidden h-[50vh] md:h-auto"
        >
          <Image
            src="/images/grid1.webp"
            alt="Foto del interior del restaurante"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* IMAGEN 2 */}
        <motion.div
          variants={item}
          className="relative overflow-hidden h-[35vh] md:h-auto"
        >
          <Image
            src="/images/grid2.webp"
            alt="Foto del interior del restaurante"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* IMAGEN 3 */}
        <motion.div
          variants={item}
          className="relative overflow-hidden h-[35vh] md:h-auto"
        >
          <Image
            src="/images/grid3.webp"
            alt="Foto del interior del restaurante"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
