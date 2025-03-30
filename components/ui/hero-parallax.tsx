'use client';
import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import MagicButton from '@/components/ui/button-magic';
import { ArrowDownIcon, LucideLink } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight';

const handleClick = () => {
  window.scrollTo({ top: 980, behavior: 'smooth' });
};

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 90, damping: 40, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-800, 152]), springConfig);
  return (
    <div
      ref={ref}
      className="max-w-[1440px] w-full overflow-hidden py-40 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-fit h-fit relative mx-auto pt-16 pb-20 md:py-40 px-4 w-full left-0 top-0 flex flex-col items-center text-center">
      <Spotlight width={1440} />

      <h1 className="w-full text-[34px] md:text-6xl font-extrabold leading-tight z-50">
        Transformando Ideias em <br />
        <span className="bg-gradient-to-t md:bg-gradient-to-b from-brand-200 to-brand-100 bg-clip-text text-transparent">
          Experiências Incríveis
        </span>
      </h1>
      <p className="w-full md:max-w-2xl text-[16px] md:text-2xl mt-5 leading-relaxed text-light-300 z-50 mb-10">
        Olá, Eu sou o Lucas, um Desenvolvedor Front-end apaixonado por tecnologia e design.
      </p>
      <MagicButton
        title={'Veja o meu trabalho'}
        icon={<ArrowDownIcon />}
        position={'right'}
        handleClick={() => handleClick()}
        otherClasses={'z-50'}
      />
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <Link href={product.link} target={'_blank'} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none transition-opacity duration-300"></div>
      <h2 className="absolute bottom-16 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xl font-bold transition-opacity duration-300">
        {product.title}
      </h2>
      <p className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-lg font-medium transition-opacity duration-300">
        Clique aqui para ver mais
      </p>
    </motion.div>
  );
};

export const Footer = () => {
  return (
    <footer className={'flex flex-col md:flex-row items-center justify-center w-full gap-12 my-32'}>
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-bold">Explore nossos projetos</h2>
        <p className="text-sm text-light-200 mt-2">
          Descubra como transformamos ideias em realidade.
        </p>
      </div>
      <MagicButton title={'Confira todos os projetos'} icon={<LucideLink />} position={'right'} />
    </footer>
  );
};
