import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const Social = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const socials = [
    {
      name: "Github",
      icon: <FaGithub />,
      aos: "fade-down",
      url: "https://github.com/GiuseppeF11",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      aos: "fade-down",
      url: "https://www.linkedin.com/in/giuseppe-failla-96a759194/",
    },
    {
      name: "Codewars",
      icon: <SiCodewars />,
      aos: "fade-down",
      url: "https://www.codewars.com/users/GiuseppeF11",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      aos: "fade-down",
      url: "https://www.instagram.com/giuseppefailla00/",
    },
    {
      name: "CV",
      icon: <FaFileDownload />,
      aos: "fade-down",
      url: "/src/assets/documents/Giuseppe Failla CV.pdf",
    },
  ];
  return (
    <>
      {socials.map((app) => (
        <a data-aos={app.aos} target="blank" href={app.url} >
          {" "}
          {app.icon}
        </a>
      ))}
    </>
  );
};
export default Social;
