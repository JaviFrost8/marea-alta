import React from 'react';
import { MenuItem } from './MenuItem';
import { PrimaryButton } from '../ui/PrimaryButton';
import Link from 'next/link';

export const Wines = () => {
  return (
    <section className="w-full pt-12 lg:pt-28 bg-neutral">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex flex-col w-full items-center">
          <h2 className="font-heading font-semibold text-white text-center">
            Vinos
          </h2>
          <div className="bg-secondary h-0.5 w-16 mt-4 mb-10"></div>
        </div>

        <h3 className="font-heading text-secondary font-semibold text-3xl mb-6">
          Recomendación Sommelier
        </h3>
        <p className="font-sans text-white/70">
          Tres vinos seleccionados para elevar cada experiencia en mesa.
        </p>
        <p className="font-sans text-white/50 text-sm">
          Carta completa de vinos disponible en restaurante
        </p>
      </div>
      <div className="pt-16 w-full px-4 lg:px-48">
        <MenuItem
          title="Terras Gauda Etiqueta Negra"
          description="Blanco atlántico elegante y complejo, con notas de fruta madura, hierbas finas y fondo mineral. Fresco y gastronómico."
          price={58}
        />
        <MenuItem
          title="Vega Sicilia Valbuena 5º"
          description="Tinto elegante y profundo, con fruta madura, notas especiadas y toques de madera fina. Estructurado, equilibrado y persistente."
          price={185}
        />
        <MenuItem
          title="Krug Grande Cuvée Champagne"
          description="Champagne excepcional de gran complejidad, con burbuja fina, notas de brioche, cítricos y frutos secos. Elegante, intenso y persistente."
          price={290}
        />
      </div>

      <div className="mt-28 text-center px-6 bg-white/5 py-16">
        <h3 className="font-heading text-white text-2xl mb-4">
          ¿Te apetece vivir la experiencia?
        </h3>

        <p className="font-sans text-white/60 mb-8 max-w-xl mx-auto">
          Reserva tu mesa y disfruta de Marea Alta con una selección de cocina y
          vinos pensada para el momento.
        </p>

        <Link href={'/reservas'}>
          <PrimaryButton text="RESERVAR MESA" />
        </Link>
      </div>
    </section>
  );
};
