import React from "react";
import './LeftSide.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function LeftSide() {
  

    return (
      <>
        <section className="container">
          <div className="tracking-wider">
              <h1 className="name">Giuseppe Failla</h1>
              <p className="role color-water">Junior Frontend Developer</p>
              <p className=" w-1/2 color-gray ">testo o frase ad effetto da inserire per sembrare acculturato e ricercato bla bla bla</p>
          </div>

          <nav className="routes-list">
            <a href="#" className="route flex items-center">
              <div className="line"></div> <span>ABOUT</span>
            </a>
            <a href="#" className="route flex items-center">
              <div className="line"></div> <span>EXPERIENCE</span>
            </a>
            <a href="#" className="route flex items-center">
              <div className="line"></div> <span>PROJECTS</span>
            </a>
          </nav>


          <div className="flex sites">
            <a href="" className="mx-5"><FaGithub /></a>
            <a href="" className="mx-5"><FaLinkedin /></a>
            <a href="" className="mx-5"><SiCodewars /></a>
            <a href="" className="mx-5"><FaInstagram /></a>
          </div>
        </section>
        
      </>
    )
  }
  
  export default LeftSide
  