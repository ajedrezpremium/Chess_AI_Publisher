import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JREDITION - Editorial Internacional de Ajedrez',
  description: 'Editorial especializada en ajedrez y ajedrez educativo. Más de 20 años formando campeones desde la escuela hasta la maestría.',
  keywords: ['ajedrez', 'editorial ajedrez', 'jredition', 'ajedrez educativo', 'libros ajedrez', 'Roberto Páramos'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
