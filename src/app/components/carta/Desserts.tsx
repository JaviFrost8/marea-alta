import React from 'react';
import { MenuItem } from './MenuItem';

export const Desserts = () => {
  return (
    <section className="flex flex-col w-full pt-28 pb-16 bg-primary">
      <div className="flex flex-col w-full items-center">
        <h2 className="font-heading font-semibold text-white text-center">
          Postres Artesanales
        </h2>
        <div className="bg-secondary h-0.5 w-16 mt-4 mb-20"></div>
      </div>
      <div className="px-4 lg:px-48">
        <MenuItem
          title="Texturas de Chocolate 70%"
          description="Mousse, brownie, tierra de cacao y helado de chocolate negro con cristales de sal Maldon."
          price={14}
        />
        <MenuItem
          title="Lemon Pie Revisitado"
          description="Crema de limón de Sorrento, merengue italiano flameado y base de sableé artesana."
          price={12}
        />
        <MenuItem
          title="Sorbete de Fruta de la Pasión"
          description="Infusión de hierbabuena fresca y espuma ligera de coco orgánico."
          price={10}
        />
      </div>
    </section>
  );
};
