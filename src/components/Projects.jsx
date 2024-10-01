import React, { useState } from 'react';
import './Projects.css'
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import CurrencyConverter from "../assets/projects/Currency Converter.png";
import Fastbites from "../assets/projects/Fastbites.png";
import Meridiano from "../assets/projects/Meridiano.png";
import Portfolio from "../assets/projects/Portfolio.png";
import Spotify from "../assets/projects/Spotify.png";
import Myflix from "../assets/projects/Myflix.png";

function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      date: '2024',
      name: 'Portfolio',
      description: "Un sito portfolio per presentarmi con le mie esperienze ed alcuni dei miei progetti. ",
      link: 'https://github.com/GiuseppeF11/Portfolio',
      image: Portfolio,
      documentations: [
        { name: 'React Icons', url: 'https://react-icons.github.io/react-icons/' },
        { name: 'Tailwind', url: 'https://tailwindcss.com/' },
      ],
      categories: ['React.js']
    },
    {
      date: '2024',
      name: 'Meridiano',
      description: "App per pianificare ed organizzare viaggi, rivivere avventure passate a sfogliare gli album dei ricordi",
      link: 'https://github.com/GiuseppeF11/travel-app',
      image: Meridiano,
      documentations: [
        { name: 'Swiper', url: 'https://swiperjs.com/' },
        { name: 'AOS.js', url: 'https://michalsnik.github.io/aos/' },
        { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
        { name: 'FontAwesome', url: 'https://fontawesome.com/' },
      ],
      categories: ['Laravel','Blade']
    },
    {
      date: '2024',
      name: Myflix,
      description: "Sito per consultare la più vasta libreria cinematografica, visualizzare i rispettivi trailer e creare una lista preferiti",
      link: 'https://github.com/GiuseppeF11/myflix',
      image: '/public/image/projects/Myflix.png',
      documentations: [
        { name: 'The Movie DB', url: 'https://www.themoviedb.org/' },
        { name: 'Swiper', url: 'https://swiperjs.com/' },
        { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
        { name: 'FontAwesome', url: 'https://fontawesome.com/' },
      ],
      categories: ['Vue.js','HTML','CSS','JavaScript']
    },
    {
      date: '2024',
      name: CurrencyConverter,
      description: "Web-App per eseguire la conversione delle valute sfruttando i dati forniti dalla Banca Centrale Europea",
      link: 'https://github.com/GiuseppeF11/currency-converter',
      image: '/public/image/projects/Currency Converter.png',
      documentations: [
        { name: 'Frankfurter', url: 'https://frankfurter.dev/' },
        { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
        { name: 'FontAwesome', url: 'https://fontawesome.com/' },
      ],
      categories: ['Vue.js','HTML','CSS','JavaScript']
    },
    {
      date: '2024',
      name: Fastbites,
      description: "App di food-delivery ideata per consumatori e ristoratori",
      link: 'https://github.com/alessiopalmieri001/Fast-Bites-Backend-Bf',
      image: '/public/image/projects/Fastbites.png',
      documentations: [
        { name: 'Braintree', url: 'https://www.braintreepayments.com/fr' },
        { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
        { name: 'FontAwesome', url: 'https://fontawesome.com/' },
      ],
      categories: ['Vue.js', 'Laravel']
    },
    {
      date: '2024',
      name: Spotify,
      description: "Emulazione della celebre app per la riproduzione musicale",
      link: 'https://github.com/GiuseppeF11/html-css-spotifyweb',
      image: '/public/image/projects/Spotify.png',
      documentations: [],
      categories: ['HTML', 'CSS']
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <a
            target="blank" 
            href={project.link}
            key={index}
            className={`project card grid grid-flow-col gap-5 my-5 p-8 transition-all duration-300 ${
            hoveredIndex !== null && hoveredIndex !== index ? 'brightness-50' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="col-span-2 pt-2">
            <img src={project.image} alt={project.name} />
          </div>
          <div className='col-span-4'>
            <h3 className="title color-white text-lg font-bold h-10 flex items-center mb-1 gap-1">
              {project.name.length > 30 ? `${project.name.slice(0, 30)}...` : project.name} <span className='text-sm icon'><MdOutlineArrowOutward /></span>
            </h3>
            <p className='text-sm mb-3'>{project.description}</p>
            <div className="documentations flex flex-wrap text-center gap-3 mb-3">
              {project.documentations.map((doc, i) => (
                <a target="blank"  href={doc.url} className="link whitespace-nowrap text-sm flex items-center gap-2" key={i}>
                  <FaLink /> {doc.name}
                </a>
              ))}
            </div>
            <div className="categories flex flex-wrap text-center gap-3">
              {project.categories.map((category, i) => (
                <span className="badge whitespace-nowrap text-xs" key={i}>{category}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </>
  );
}

export default Projects;
