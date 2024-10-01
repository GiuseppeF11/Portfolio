import React, { useState } from 'react';
import { FaLink } from "react-icons/fa6";
import './Experiences.css';
import { FaArrowUpLong } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import Boolean_Certificate from "../assets/documents/Certificato Boolean.jpg"
import HDI_Certificate from "../assets/documents/HDI.jpeg"
import Diploma from "../assets/documents/Diploma.jpg"

const Experiences = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      start: '10/2023',
      end: '04/2024',
      url: 'https://boolean.careers/?_gl=1*1beejpl*_up*MQ..*_ga*MzQ4ODQ1Mzc5LjE3Mjc3ODY0NTA.*_ga_Z7YQ75GL74*MTcyNzc4NjQ0OS4xLjAuMTcyNzc4NjQ0OS4wLjAuMA..',
      title: "Jr Full Stack Web Developer Trainee",
      agency: "Boolean Tech Academy",
      details: "Corso intensivo di 700 ore, dedicato allo studio delle principali tecnologie utilizzate nello Sviluppo Web.",
      documentations: [
        { 
          icon: <TbCertificate />,
          name: 'Certificato', 
          url: Boolean_Certificate
        }
      ],
      categories: ["HTML","CSS","JavaScript","Laravel","Vue.js","PHP", "MySQL"]
    },
    {
      start: '09/2022',
      end: '09/2023',
      url: 'https://www.instagram.com/aavirzi/',
      title: "Welfare Advisor - Consulente assicurativo",
      agency: "A.A. Virzì Srl",
      details: "Azienda di consulenza assicurativa, finanziaria e brokeraggio.",
      documentations: [
        { 
          icon: <TbCertificate />,
          name: 'Certificato', 
          url: HDI_Certificate 
        }
      ],
      categories: ["Consulenza", "Vendita", "Time Management", "Problem Solving"]
    },
    {
      start: '10/2020',
      end: '10/2022',
      url: 'https://www.unict.it/it/didattica/lauree-triennali/2023-2024/biotecnologie',
      title: "Corso di Laurea Triennale in Biotecnologie",
      agency: "Univeristà di Catania",
      details: "",
      documentations: [],
      categories: ["Biologia Generale", "Genetica", "Economia Aziendale", "Inglese", "Informatica", "Matematica"]
    },
    {
      start: '2020',
      end: '2021',
      url: 'https://www.misericordie.it/',
      title: "Servizio Civile",
      agency: "Misericordia San Leone",
      details: "Servizio come ambulanziere e trasporto disabili",
      documentations: [],
      categories: ["First Aid", "CPR", "BLS", "Driving Skills","Stress Management"]
    },
    {
      start: '2014',
      end: '2019',
      url: 'https://www.misericordie.it/',
      title: "Diploma Scientifico",
      agency: "Liceo Scientifico e Linguistico 'Principe Umberto di Savoia' ",
      details: "100/100",
      documentations: [
        { 
          icon: <TbCertificate />,
          name: 'Certificato', 
          url: Diploma 
        }
      ],
      categories: ["First Aid", "CPR", "BLS", "Driving Skills","Stress Management"]
    }
  ];

  // Funzione per convertire una stringa MM/YYYY in un oggetto Date
  const convertToDate = (dateStr) => {
    const [month, year] = dateStr.split('/');
    return new Date(`${year}-${month}-01`);
  };

  // Funzione per ordinare le esperienze in base alla data di fine
  const sortedExperiences = experiences.sort((a, b) => {
    const dateA = convertToDate(a.end);
    const dateB = convertToDate(b.end);
    return dateB - dateA; 
  });

  return (
    <>
      {sortedExperiences.map((experience, index) => (
        <a
        target='blank'
          href={experience.url}
          key={index}
          className={`card grid grid-flow-col gap-5 my-5 p-8 transition-all duration-300 ${
            hoveredIndex !== null && hoveredIndex !== index ? 'brightness-50' : 'https://github.com/GiuseppeF11/myflix'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="date font-semibold h-10 text-gray-500  flex items-center justify-start overflow-hidden">
            {experience.start}
        
            <span className="line bg-gray-500"></span>

            {experience.end}  
          </div>

          <div>
            <h3 className="title text-lg font-bold">
              {experience.title}
            </h3>
            <h5 className='text-sm font-semibold text-gray-400 mb-5'>{experience.agency}</h5>
            <p className="text-sm mb-3">{experience.details}</p>
            <div className="documentations flex flex-wrap text-center gap-3 mb-3">
              {experience.documentations.map((doc, i) => (
                <a target='blank' href={doc.url} className="link whitespace-nowrap text-sm flex items-center gap-2" key={i}>
                  {doc.icon}  {doc.name}
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
