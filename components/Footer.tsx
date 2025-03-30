import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from '@/components/ui/button-magic';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="w-full px-8 pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl text-center font-semibold md:max-w-lg">
          Pronto para levar <span className="text-brand-100">sua</span> presença digital para o{' '}
          <span className="text-brand-100">próximo nível?</span>
        </h1>
        <p className="text-lg text-light-200 md:mt-10 my-5 text-center">
          Entre em contato comigo hoje e vamos discutir como eu posso ajudar você a atingir suas
          metas
        </p>
        <a href="mailto:dev.lxcier@gmail.com">
          <MagicButton title="Vamos conversar" icon={<FaLocationArrow />} position="right" />
        </a>
        <div className="w-full flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright &copy; 2025 Lucas Lucier
          </p>
          <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <a href={profile.link} target={'_blank'}>
                  <img src={profile.img} alt={profile.id.toString()} width={20} height={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
