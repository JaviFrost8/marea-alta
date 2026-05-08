'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  href: string;
  label: string;
  close?: () => void;
}

export const Navlink = ({ href, label }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`relative py-8 group inline-block transition-all duration-300 hover:text-secondary hover:-translate-y-1 ${isActive && 'text-secondary -translate-y-1'}`}
    >
      {label}
      <span
        className={`absolute left-0 w-full bottom-7 h-0.5 bg-secondary transition-all origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
      ></span>
    </Link>
  );
};
