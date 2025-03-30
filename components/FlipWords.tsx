import React from 'react';
import { FlipWordsUi } from './ui/flip-words';
import { items } from '@/data';

export function FlipWordsSection({ className }: { className?: string }) {
  return (
    <section
      id="modern-technologies"
      className={`h-auto w-full px-8 py-16 text-center ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-light-300 z-20">
        Tecnologias <span className={'text-brand-100'}>Modernas</span>
      </h2>
      <p className="mt-6 text-xl text-light-200">
        Construo seus sites usando tecnologias modernas como:
      </p>
      <div className="mt-8">
        <FlipWordsUi items={items} className="text-4xl font-semibold" />
      </div>
    </section>
  );
}

export default FlipWordsSection;
