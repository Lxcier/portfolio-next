import React from 'react';
import { HeroParallaxDemo } from '@/components/Hero';
import { DotBackground } from '@/components/ui/dots-background';
import Footer from '@/components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <DotBackground>
        <HeroParallaxDemo />
        <div className={'z-50 max-w-[1440px] w-full mx-auto'}>
          {children}
          <Footer />
        </div>
      </DotBackground>
    </main>
  );
};
export default Layout;
