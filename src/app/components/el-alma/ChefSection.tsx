'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

export const ChefSection = () => {
  return (
    <div className="flex w-full px-28">
      <div className="flex flex-col justify-center w-1/2 px-20">
        <h2 className="font-heading text-secondary mb-10 tracking-[2] text-2xl">
          MAESTRÍA Y PASIÓN
        </h2>
        <h3 className="font-heading text-white mb-4 text-xl">El equipo</h3>
        <p className="font-sans text-white/70 max-w-2xl mb-10 leading-relaxed text-xl">
          Detrás de cada plato existe una coreografía silenciosa de manos
          expertas. Bajo la dirección de nuestro Chef Ejecutivo, Luís Llobregat,
          el equipo de Marea Alta fusiona técnicas ancestrales de salazón y
          brasas con la precisión de la alta cocina contemporánea.
        </p>
        <div className="flex gap-20 w-full">
          <div className="flex flex-col gap-2">
            <span className="font-heading text-secondary text-2xl">15</span>
            <span className="text-white/50 text-xl">
              Artesanos de la Cocina
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-heading text-secondary text-2xl">3</span>
            <span className="text-white/50 text-xl">Sommeliers Expertos</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 m-1 p-20">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ amount: 0.3, once: true }}
          className="p-2 border border-secondary/30"
        >
          <div className="relative h-190">
            <Image
              src={'/images/chef-persona.webp'}
              alt="Foto de nuestro chef Luís Llobregat"
              fill
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
