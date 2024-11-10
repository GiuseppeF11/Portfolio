import React, { useEffect, useState } from "react";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "about", name: "ABOUT" },
    { id: "experiences", name: "EXPERIENCE" },
    { id: "projects", name: "PROJECTS" },
  ];

  //ATTIVAZIONE DEL LINK IN BASE ALL'ALTEZZA DELLO SCROLL
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; //+ 100px per i margin/padding eventuali
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  // SCROLL AL CLICK SUI LINK
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition + offset,
      });
    }
  };

  return (
    <nav className="routes-list max-lg:hidden">
      {sections.map((section) => (
        <a
          data-aos="fade-left"
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`route flex items-center ${
            activeSection === section.id ? "active" : ""
          }`}
          style={{ cursor: "pointer" }}
        >
          <div className="line"></div>
          <span>{section.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
