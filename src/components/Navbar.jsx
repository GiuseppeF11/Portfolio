import React, { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'about', name: 'ABOUT' },
    { id: 'experiences', name: 'EXPERIENCE' },
    { id: 'projects', name: 'PROJECTS' }
  ];

  //ATTIVAZIONE DEL LINK IN BASE ALL'ALTEZZA DELLO SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; //+ 100px per i margin/padding eventuali
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  // SCROLL AL CLICK SUI LINK
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -80; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition + offset,
      });
    }
  };

  return (
    <nav className="routes-list">
      {sections.map((section) => (
        <a 
          key={section.id} 
          onClick={() => handleClick(section.id)}
          className={`route flex items-center ${activeSection === section.id ? 'active' : ''}`}
          style={{ cursor: 'pointer' }}
        >
          <div className="line"></div>
          <span>{section.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
