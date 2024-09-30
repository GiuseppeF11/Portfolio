import React, { useState } from "react";
import './RightSide.css';
import { FaLink } from "react-icons/fa6";

function RightSide() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      start: '2000',
      end: '2001',
      title: "Full-Stack Developer at XYZ Tech",
      details: "Developed and maintained web applications using React, Node.js, and MongoDB. Focused on optimizing performance and creating responsive UI components.",
      documentations: [
        {
          name: 'The Movie DB',
          url: '#'
        }
      ],
      categories: ["JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      start: '2000',
      end: '2001',
      title: "Frontend Developer at Digital Solutions",
      details: "Created dynamic, user-friendly web interfaces using Vue.js and Tailwind CSS. Collaborated closely with UX/UI teams to ensure seamless user experiences.",
      documentations: [
        {
          name: 'The Movie DB',
          url: '#'
        }
      ],
      categories: ["Vue.js", "Tailwind CSS", "JavaScript", "UI/UX"]
    },
    {
      start: '2000',
      end: '2001',
      title: "Software Engineer at Tech Innovators",
      details: "Built scalable backend services with Python and Django. Integrated third-party APIs and worked on improving data management systems.",
      documentations: [
        {
          name: 'The Movie DB',
          url: '#'
        }
      ],
      categories: ["Python", "Django", "APIs", "SQL"]
    },
    {
      start: '2000',
      end: '2001',
      title: "Junior Developer at Startup Hub",
      details: "Assisted in the development of mobile and web applications, focusing on improving performance and implementing new features using React Native.",
      documentations: [
        {
          name: 'The Movie DB',
          url: '#'
        }
      ],
      categories: ["React Native", "JavaScript", "Wordpress", "Next.js", "Firebase", "SQL"]
    }
  ];

  return (
    <>
      <div id="about" className="right-side pt-20">
        {/* ABOUT */}
        <section  className="introduction color-gray  px-8">
                <p>
                  Adolescenza (scuola, passioni, esperienze e aneddoti)

                  Back in <a href="#">2012</a>, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. <a href="#">Fast-forward</a> to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                </p>
                
                <p>
                  esperienze cruciali e formazione che mi ha portato alle attuali scelte
                  Back in 2012, I decided to try my hand at creating custom <a href="#">Tumblr</a> themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                </p>
                
                <p id="experience">
                  tutto ciò che riguarda la mia esperienza nell'ambito tecnologico
                  Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of <a href="#">coding and web development</a>. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                </p>
          </section>
        {/* EXPERIENCES */}
        <section className="experiences">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`card grid grid-flow-col gap-5 mb-5 p-8 transition-all duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? 'brightness-50'
                  : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-xs h-10 flex items-center">
                {experience.start} <span className="line"></span> {experience.end}
              </div>
              <div>
                <h3 className="title color-white text-lg font-bold h-10 flex items-center mb-4">
                  {experience.title.length > 30 ? `${experience.title.slice(0, 30)}...` : experience.title}
                </h3>
                <p className="text-sm mb-3">{experience.details}</p>
                <div className="documentations flex flex-wrap text-center gap-3 mb-3">
                  {experience.documentations.map((doc, i) => (
                    <a href={doc.url} className="whitespace-nowrap text-sm flex items-center gap-2" key={i}>
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
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default RightSide;




         
