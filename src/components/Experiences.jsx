import React, { useState } from 'react';
import { FaLink } from "react-icons/fa6";
import './Experiences.css';

const Experiences = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      start: '2000',
      end: '2001',
      url: 'https://github.com/GiuseppeF11/myflix',
      title: "Full-Stack Developer at XYZ Tech",
      details: "Developed and maintained web applications using React, Node.js, and MongoDB. Focused on optimizing performance and creating responsive UI components.",
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ["JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      start: '2000',
      end: '2001',
      url: 'https://github.com/GiuseppeF11/myflix',
      title: "Frontend Developer at Digital Solutions",
      details: "Created dynamic, user-friendly web interfaces using Vue.js and Tailwind CSS. Collaborated closely with UX/UI teams to ensure seamless user experiences.",
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ["Vue.js", "Tailwind CSS", "JavaScript", "UI/UX"]
    },
    {
      start: '2000',
      end: '2001',
      url: 'https://github.com/GiuseppeF11/myflix',
      title: "Software Engineer at Tech Innovators",
      details: "Built scalable backend services with Python and Django. Integrated third-party APIs and worked on improving data management systems.",
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ["Python", "Django", "APIs", "SQL"]
    },
    {
      start: '2000',
      end: '2001',
      url: 'https://github.com/GiuseppeF11/myflix',
      title: "Junior Developer at Startup Hub",
      details: "Assisted in the development of mobile and web applications, focusing on improving performance and implementing new features using React Native.",
      documentations: [
        { name: 'The Movie DB', url: '#' }
      ],
      categories: ["React Native", "JavaScript", "Wordpress", "Next.js", "Firebase", "SQL"]
    }
  ];

  return (
    <>
      {experiences.map((experience, index) => (
        <a
          key={index}
          className={`card grid grid-flow-col gap-5 my-5 p-8 transition-all duration-300 ${
            hoveredIndex !== null && hoveredIndex !== index ? 'brightness-50' : 'https://github.com/GiuseppeF11/myflix'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="text-xs h-10 flex items-center">
            {experience.start} <span className="line"></span> {experience.end}
          </div>
          <div>
            <h3 className="title text-lg font-bold h-10 flex items-center mb-4">
              {experience.title.length > 30 ? `${experience.title.slice(0, 30)}...` : experience.title}
            </h3>
            <p className="text-sm mb-3">{experience.details}</p>
            <div className="documentations flex flex-wrap text-center gap-3 mb-3">
              {experience.documentations.map((doc, i) => (
                <a href={doc.url} className="link whitespace-nowrap text-sm flex items-center gap-2" key={i}>
                  <FaLink /> {doc.name}
                </a>
              ))}
            </div>
            <div className="categories flex flex-wrap text-center gap-3">
              {experience.categories.map((category, i) => (
                <span className="badge whitespace-nowrap text-xs" key={i}>{category}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default Experiences;
