import { SiAppwrite, SiFigma, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';

export const projects = [
  {
    id: 1,
    title: 'Corretora Fênix - Administração Milionária',
    des: 'A Corretora Fênix é especialista em imóveis e veículos, oferecendo um atendimento personalizado e eficiente para suas necessidades. Seu site moderno, desenvolvido com Vue, proporciona uma experiência de navegação ágil e intuitiva.',
    img: '/p1.svg',
    iconLists: ['/vue.svg', '/tail.svg', '/js.svg'],
    link: 'https://corretora-fenix.vercel.app/',
  },
  {
    id: 2,
    title: 'Mtrek - Mercado Livre de Energia',
    des: 'Conheça a Mtrek e economize até 25% na sua conta de energia e ainda ganhe cashback!',
    img: '/p2.svg',
    iconLists: ['/vue.svg', '/tail.svg', '/js.svg'],
    link: 'https://mtrek-psi.vercel.app/',
  },
  {
    id: 3,
    title: 'Lista de Contatos',
    des: 'A lista de contatos, criada com React, oferece uma interface interativa e eficiente para gerenciar suas informações com facilidade.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/ts.svg', '/redux.svg'],
    link: 'https://contatos-tau.vercel.app',
  },
  {
    id: 4,
    title: 'Project - The Chosen',
    des: 'A página dedicada à série *The Chosen* combina HTML, SCSS (SASS) e JavaScript para oferecer uma experiência visualmente impressionante e interativa. O design elegante e as funcionalidades dinâmicas capturam a essência da série com perfeição.',
    img: '/p4.svg',
    iconLists: ['/html.svg', '/sass.svg', '/js.svg'],
    link: 'https://project-thechosen.vercel.app/',
  },
];

export const testimonials = [
  {
    quote:
      ' O trabalho de Lucas é verdadeiramente excepcional. Mesmo com o curto tempo que tivemos para conversar, ficou claro o quanto ele é dedicado e habilidoso. A qualidade do seu trabalho e seu profissionalismo são notáveis, e tenho certeza de que ainda vamos realizar muitos projetos incríveis juntos. Recomendo Lucas sem hesitação para qualquer projeto de front-end.',
    name: 'Leonardo Constancio',
    title: 'Diretor de Arte Sênior na Startup Mtrek',
    avatar: '/leo.jfif',
  },
  {
    quote:
      'A colaboração com o Lucas foi fantástica do início ao fim. Ele foi sempre acessível e manteve uma comunicação clara, garantindo que o projeto fosse entregue dentro do prazo e conforme as especificações. A sua capacidade de resolver problemas rapidamente e de se adaptar às mudanças nos requisitos tornou o processo muito mais suave. Altamente recomendado para qualquer projeto.',
    name: 'Valdemir Fênix',
    title: 'Corretor Imóbiliario',
    avatar: '/corretor.jpeg',
  },
];

export const companies = [
  {
    id: 1,
    name: 'Mtrek Cashbacks',
    img: '/mtrek-logo.png',
  },
  {
    id: 2,
    name: 'Corretora Fênix',
    img: '/cf-logo.png',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Engenheiro Frontend',
    desc: 'Trabalhei no desenvolvimento de uma plataforma web, utilizando HTML, CSS e Javascript.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Desenvolvimento de Site',
    desc: 'Projetei e desenvolvi sites utilizando Vue ou React, potencializando a interatividade',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelancer Web Dev',
    desc: 'Forneci serviços de criação de site, logo, banner e marca para um cliente, desde o conceito até o lançamento. ',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Desenvolvedor Frontend Junior',
    desc: 'Desenvolvimento e manutenção de recursos voltados ao usuário usando tecnologias front-end modernas.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/assets/icons/git.svg',
    link: 'https://github.com/Lxcier',
  },
  {
    id: 2,
    img: '/assets/icons/wha.svg',
    link: 'https://whatsa.me/5511940844167/?t=Ol%C3%A1!%20Encontrei%20seu%20portf%C3%B3lio%20e%20tenho%20interesse%20nos%20seus%20servi%C3%A7os.%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es?',
  },
  {
    id: 3,
    img: '/assets/icons/link.svg',
    link: 'https://www.linkedin.com/in/lucaslucier/',
  },
];

export const items = [
  {
    word: 'NextJs',
    icon: <SiNextdotjs className="text-gray-800 dark:text-gray-200 w-12 h-12" />,
  },
  { word: 'ReactJs', icon: <FaReact className="text-blue-500 w-12 h-12" /> },
  { word: 'Vue.js', icon: <FaVuejs className="text-green-500 w-12 h-12" /> },
  { word: 'NodeJS', icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
  { word: 'Typescript', icon: <SiTypescript className="text-blue-700 w-12 h-12" /> },
  { word: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-500 w-12 h-12" /> },
  { word: 'Appwrite', icon: <SiAppwrite className="text-pink-500 w-12 h-12" /> },
  { word: 'Figma', icon: <SiFigma className="text-purple-600 w-12 h-12" /> },
];
