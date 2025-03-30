export const navItems = [
  { name: 'Sobre', link: '#about' },
  { name: 'Projetos', link: '#projects' },
  { name: 'Depoimentos', link: '#testimonials' },
  { name: 'Contato', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'Eu priorizo a colaboração com os clientes, incentivando uma comunicação aberta. ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: '!w-full "h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Sou muito flexível com a comunicação em diferentes fusos horários.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'As tecnologias que eu utilizo',
    description: 'Estou sempre buscando melhorar.',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Entusiasta de tecnologia com paixão por desenvolvimento.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Atualmente aprendendo e desenvolvendo com Next/React',
    description: 'Em Direção ao Futuro',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Vamos começar um projeto juntos?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

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
    img: '/git.svg',
    link: 'https://github.com/Lxcier',
  },
  {
    id: 2,
    img: '/inst.svg',
    link: 'https://www.instagram.com/cier.digital/',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/lucaslucier/',
  },
];
