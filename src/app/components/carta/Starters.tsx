import React from 'react';
import { MenuItem } from './MenuItem';

export const Starters = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-32">
        <div className="w-full lg:w-1/3">
          <h2 className="font-heading text-white mb-6 text-xl">
            Entrantes del mar
          </h2>
          <p className="font-sans text-white/70 w-full lg:w-3/4 leading-relaxed text-xl">
            Una selección de los tesoros más frescos de nuestras costas,
            preparados con técnicas ancestrales y un toque de vanguardia.
          </p>
        </div>
        <div className="w-full mt-14 lg:mt-0 lg:w-2/3">
          <MenuItem
            title="Ostras Gouthier Especial"
            description="Selección de 4 ostras con granizado de pepino, gin-tonic y perlas de lima kaffir."
            price={32}
          />
          <MenuItem
            title="Carpaccio de Carabinero"
            description="Láminas de carabinero real con esencia de sus cabezas, piñones tostados y emulsión de algas."
            price={28}
          />
          <MenuItem
            title="Vieiras braseadas"
            description="Sobre crema de tupinambo, crujiente de jamón ibérico y aire de mar."
            price={24}
          />
        </div>
      </div>
    </section>
  );
};
