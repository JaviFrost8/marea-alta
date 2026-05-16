import React from 'react';
import { BigMenuItem } from './BigMenuItem';
import { GridMainDishes } from './GridMainDishes';

export const MainDishes = () => {
  return (
    <section className="w-full bg-neutral pt-12 lg:pt-28">
      <div className="flex flex-col items-center">
        <h2 className="font-heading font-semibold text-white">
          Platos principales
        </h2>
        <div className="bg-secondary h-0.5 w-16 mt-4"></div>
      </div>
      <BigMenuItem
        title="Del Océano"
        subtitle="Rodabayo a la Brasa de Encina"
        description="Pieza entera capturada de forma artesanal, servida con emulsión de ajos negros, espárragos de mar y patata ratte confitada en mantequilla de algas."
        price={42}
        image={'/images/rodabayo-plancha.webp'}
      />
      <BigMenuItem
        title="De la Tierra"
        subtitle="Solomillo de Wagyu A5"
        description="Selección premium de maduración controlada (45 días), acompañada de reducción de vino tinto Priorat, chalotas glaseadas y milhojas de tubérculos."
        price={68}
        image={'/images/solomillo-wagyu.webp'}
        reverse={true}
      />
      <GridMainDishes />
    </section>
  );
};
