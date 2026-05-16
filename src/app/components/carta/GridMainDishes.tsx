import React from 'react';

export const GridMainDishes = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full px-2 lg:px-28 py-8 lg:py-32 gap-4 lg:gap-14">
      <div className="border border-t-secondary border-secondary/30 px-8 py-14">
        <h2 className="font-heading text-white font-semibold mb-4">
          Arroz meloso de Bogavante
        </h2>
        <p className="font-sans text-white/70 mb-4">
          Elaborado con arroz bomba del Delta, bogavante azul y un fondo intenso
          de roca.
        </p>
        <span className="text-secondary font-semibold text-xl">38€</span>
      </div>
      <div className="border border-t-secondary border-secondary/30 px-8 py-14">
        <h2 className="font-heading text-white font-semibold mb-4">
          Bacalao Skrei al Pil-Pil
        </h2>
        <p className="font-sans text-white/70 mb-4">
          Confitado a baja temperatura, servido con sus propias kokotxas y
          crujiente de su piel.
        </p>
        <span className="text-secondary font-semibold text-xl">36€</span>
      </div>
      <div className="border border-t-secondary border-secondary/30 px-8 py-14">
        <h2 className="font-heading text-white font-semibold mb-4">
          Cordero Lechal de Aranda
        </h2>
        <p className="font-sans text-white/70 mb-4">
          Costillar glaseado en su propio jugo con puré de manzana ácida y menta
          fresca.
        </p>
        <span className="text-secondary font-semibold text-xl">34€</span>
      </div>
    </div>
  );
};
