import type { Metadata } from 'next';
import { Manrope, Noto_Serif } from 'next/font/google';
import './globals.css';
import { Header } from './components/layout/Header';

const notoSerif = Noto_Serif({
  variable: '--noto-serif',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Marea Alta Restaurante',
  description: 'Restaurante Marea Alta en Chiclana de la Frontera',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${notoSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-primary antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
