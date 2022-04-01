import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Agustin Bouzon',
    aria: 'Mi nombre es Agustin Bouzon',
  },
  title: {
    display: 'Tecnico Programador',
    aria: 'Estoy cursando el ultimo año de la escuela secundaria tecnica "Maria Sanchez De Thompson"',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Mi perfil de Github',
      icon: <GitHub />,
      href: 'https://github.com/AgustinBouzonn',
    },
    {
      display: 'LinkedIn',
      aria: 'Visita mi perfil de Linkedin',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/agustinbouzon/',
    },
    {
      display: 'CV',
      aria: 'Mira mi CV',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1FpOxCUWJ9QmM28iKgGLnkFxIriPMn6qI/view?usp=sharing',
    },
    {
      display: 'Email',
      aria: 'Contactame',
      icon: <Email />,
      href: 'mailto:AgustinBouzon9@gmail.com',
    },
  ],
};

export default config;
