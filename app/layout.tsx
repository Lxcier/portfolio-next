import React from 'react';
import './globals.css';

//Importações do Next
import type { Metadata } from 'next';

// Importações de fontes
import { Inter, Lato } from 'next/font/google'; // Importando Inter e Lato

// Configuração da fonte Inter
const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // Configurações da fonte Inter (pequeno, médio, grande, extra-grande)
});

// Configuração da fonte Lato
const latoFont = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'], // Configurações da fonte Lato (pequeno, médio, grande, extra-grande)
});

export const metadata: Metadata = {
  title: 'Lucas Lucier | Portfólio',
  description:
    'Bem-vindo ao meu portfólio! Aqui você encontrará meus projetos, habilidades e experiências na área de desenvolvimento.',
  keywords: ['lucas lucier', 'portfólio', 'projetos', 'habilidades', 'experiências'],
  applicationName: 'Lucas Lucier | Portfólio',
  creator: 'CIER - Agência de Web Design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${interFont.variable} ${latoFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
