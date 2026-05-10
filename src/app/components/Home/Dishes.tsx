import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Dishes = () => {
  return (
    <section className="w-full bg-white pb-24">
      <div className="pt-16 lg:px-20 lg:pt-28">
        <h2 className="font-heading mb-8 font-semibold text-center lg:text-start">
          Joyas de Marea Alta
        </h2>
        <div className="flex justify-between flex-col lg:flex-row items-center">
          <p className="font-sans max-w-2xl text-black/60 text-center px-2 lg:px-0 lg:text-start">
            Una cocina basada en el producto, el equilibrio y los pequeños
            detalles. Tres creaciones que reflejan nuestra manera de entender el
            sabor, el ritmo y la experiencia frente al mar.
          </p>
          <Link
            href="/carta"
            className="font-heading text-secondary mt-6 lg:mt-0 group"
          >
            VER CARTA COMPLETA{' '}
            <span className="overflow-hidden opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
              ➜
            </span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-20 gap-20 mt-24">
        <div>
          <div className="relative h-125 overflow-hidden group">
            <Image
              src={'/images/ostras.webp'}
              alt="Ostras con granizado de pepino"
              fill
              className="object-cover object-center transition-all duration-700 ease-out group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110"
            />
          </div>
          <div className="flex flex-col mt-6 px-2">
            <div className="h-px w-full bg-secondary mb-6"></div>
            <div className="flex justify-between items-center">
              <h2 className="font-heading text-2xl pr-3">
                Ostras del Cantábrico
              </h2>
              <span className="font-heading text-2xl text-secondary font-semibold">
                42€
              </span>
            </div>
            <p className="font-sans text-black/60 leading-relaxed mt-3">
              Selección de 4 ostras con granizado de pepino, gin-tonic y perlas
              de lima kaffir.
            </p>
          </div>
        </div>

        <div>
          <div className="relative h-125 overflow-hidden group">
            <Image
              src={'/images/arroz-meloso.webp'}
              alt="Arroz meloso de Bogavante"
              fill
              className="object-cover object-[center_65%] transition-all duration-700 ease-out group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110"
            />
          </div>
          <div className="flex flex-col mt-6 px-2">
            <div className="h-px w-full bg-secondary mb-6"></div>
            <div className="flex justify-between items-center">
              <h2 className="font-heading text-2xl pr-3">
                Arroz Meloso de Bogavante
              </h2>
              <span className="font-heading text-2xl text-secondary font-semibold">
                38€
              </span>
            </div>
            <p className="font-sans text-black/60 leading-relaxed mt-3">
              Elaborado con arroz bomba del Delta, bogavante azul y un fondo
              intenso de roca.
            </p>
          </div>
        </div>

        <div>
          <div className="relative h-125 overflow-hidden group">
            <Image
              src={'/images/postre-chocolate.webp'}
              alt="Texturas de Chocolate 70%"
              fill
              className="object-cover object-[center_65%] transition-all duration-700 ease-out group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110"
            />
          </div>
          <div className="flex flex-col mt-6 px-2">
            <div className="h-px w-full bg-secondary mb-6"></div>
            <div className="flex justify-between items-center">
              <h2 className="font-heading text-2xl pr-3">
                Texturas de Chocolate 70%
              </h2>
              <span className="font-heading text-2xl text-secondary font-semibold">
                14€
              </span>
            </div>
            <p className="font-sans text-black/60 leading-relaxed mt-3">
              Mousse, brownie, tierra de cacao y helado de chocolate negro con
              cristales de sal Maldon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
