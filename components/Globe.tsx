'use client';
import React from 'react';
import { motion } from 'motion/react';
import dynamic from 'next/dynamic';

// Carregamento dinâmico do globo
const World = dynamic(() => import('./ui/globe').then((m) => m.World), {
  ssr: false,
});

// Configuração do componente com texto à esquerda e o globo à direita
export default function GlobeSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: '#062056',
    showAtmosphere: true,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 0.1,
    emissive: '#062056',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: 'rgba(255,255,255,0.7)',
    ambientLight: '#38bdf8',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: '#06b6d4',
    },
    {
      order: 2,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: '#3b82f6',
    },
    {
      order: 3,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: '#6366f1',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-around gap-20 md:gap-0 px-8 w-full h-screen md:h-auto">
      {/* Texto na Esquerda */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
          A Internet unindo clientes e produtos ao redor do mundo!
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Explore como nossos serviços conectam pessoas em todos os continentes. O mundo nunca
          esteve tão próximo. Compartilhe essa experiência e leve seu negócio além das fronteiras!
          🌍
        </p>
      </motion.div>

      {/* Globo na Direita */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center md:-mr-[80px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] cursor-grab">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </motion.div>
    </div>
  );
}
