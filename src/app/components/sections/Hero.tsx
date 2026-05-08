'use client';
import Image from 'next/image';
import { PrimaryButton } from '../ui/PrimaryButton';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden -mt-20">
      {/* Imagen del Hero */}
      <Image
        src={'/images/hero.webp'}
        alt="Foto del hero de restaurante Marea Alta"
        fill
        className="object-cover object-[50%_60%]"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative flex flex-col justify-center items-center Z-10"
      >
        <h1 className="text-white text-4xl font-heading mb-5">Marea Alta</h1>
        <h2 className="font-heading text-secondary tracking-[3px]">
          UNA EXPERIENCIA GASTRONÓMICA
        </h2>

        <Link className="mt-8 mb-8" href={'/reservas'}>
          <PrimaryButton text="RESERVAR MESA" />
        </Link>
      </motion.div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3.5"
        stroke="white"
        className="absolute bottom-10 size-6 animate-bounce"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};
