import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function DotBackground({ children, className }: Props) {
  return (
    <div className={`relative w-full flex flex-col items-center ${className}`}>
      <div
        className={cn(
          'absolute inset-0 opacity-25 -z-[1]',
          '[background-size:20px_20px]',
          '[background-image:radial-gradient(#c350f9_1px,transparent_1px)]',
          'dark:[background-image:radial-gradient(#c350f9_1px,transparent_1px)]'
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {children}
    </div>
  );
}
