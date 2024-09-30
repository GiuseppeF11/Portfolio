import React, { useState } from 'react';
import './Projects.css'
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      date: '2024',
      name: 'Portfolio',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt tempore facilis ut, totam quas distinctio, aliquam quae dicta necessitatibus expedita sint velit voluptatem molestiae id perspiciatis soluta illum nemo?",
      link: 'https://github.com/GiuseppeF11/Portfolio',
      image: '/public/image/projects/Portfolio.png',
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ['React.js']
    },
    {
      date: '2024',
      name: 'Meridiano',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt tempore facilis ut, totam quas distinctio, aliquam quae dicta necessitatibus expedita sint velit voluptatem molestiae id perspiciatis soluta illum nemo?",
      link: 'https://github.com/GiuseppeF11/travel-app',
      image: '/public/image/projects/Meridiano.png',
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ['Laravel']
    },
    {
      date: '2024',
      name: 'Myflix',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt tempore facilis ut, totam quas distinctio, aliquam quae dicta necessitatibus expedita sint velit voluptatem molestiae id perspiciatis soluta illum nemo?",
      link: 'https://github.com/GiuseppeF11/myflix',
      image: '/public/image/projects/Myflix.png',
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ['Vue.js']
    },
    {
      date: '2024',
      name: 'Currency Converter',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt tempore facilis ut, totam quas distinctio, aliquam quae dicta necessitatibus expedita sint velit voluptatem molestiae id perspiciatis soluta illum nemo?",
      link: 'https://github.com/GiuseppeF11/currency-converter',
      image: '/public/image/projects/Currency Converter.png',
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ['Vue.js']
    },
    {
      date: '2024',
      name: 'Fastbites',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt tempore facilis ut, totam quas distinctio, aliquam quae dicta necessitatibus expedita sint velit voluptatem molestiae id perspiciatis soluta illum nemo?",
      link: 'https://github.com/alessiopalmieri001/Fast-Bites-Backend-Bf',
      image: '/public/image/projects/Fastbites.png',
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ['Vue.js', 'Laravel']
    },
    {
      date: '2024',
      name: 'Spotify',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt tempore facilis ut, totam quas distinctio, aliquam quae dicta necessitatibus expedita sint velit voluptatem molestiae id perspiciatis soluta illum nemo?",
      link: 'https://github.com/GiuseppeF11/html-css-spotifyweb',
      image: '/public/image/projects/Spotify.png',
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ['HTML', 'CSS']
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <a
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
                <a href={doc.url} className="link whitespace-nowrap text-sm flex items-center gap-2" key={i}>
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
