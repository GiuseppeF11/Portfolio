import React from "react";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const sections = [
    { id: "about", name: "ABOUT" },
    { id: "experiences", name: "EXPERIENCE" },
    { id: "projects", name: "PROJECTS" },
  ];

  // Inizializzazione di AOS
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <nav className="routes-list max-lg:hidden">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          spy={true}
          smooth={true}
          offset={-(window.innerHeight / 3)}
          duration={500}
          className="route flex items-center"
          activeClass="active"
          style={{ cursor: "pointer" }}
        >
          <div className="line"></div>
          <span>{section.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
