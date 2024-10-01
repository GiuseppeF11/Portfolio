import React from "react";
import './LeftSide.css'
import Navbar from "./Navbar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function LeftSide() {
  

    return (
      <>
        <section className="container pt-20">
          <div className="tracking-wider">
              <h1 className="name">Giuseppe Failla</h1>
              <p className="role color-water">Junior Frontend Developer</p>
              <p className=" w-3/4 color-gray ">Costruisco soluzioni digitali efficienti e scalabili, trasformando problemi complessi in codice chiaro e funzionale</p>
          </div>

          <Navbar></Navbar>


          <div className="flex sites">
            <a target="blank" href="https://github.com/GiuseppeF11" className="me-10"><FaGithub /></a>
            <a target="blank"  href="https://www.linkedin.com/in/giuseppe-failla-96a759194/" className="me-10"><FaLinkedin /></a>
            <a target="blank"  href="https://www.codewars.com/users/GiuseppeF11" className="me-10"><SiCodewars /></a>
            <a target="blank"  href="https://www.instagram.com/giuseppefailla00/" className="me-10"><FaInstagram /></a>
          </div>
        </section>
        
      </>
    )
  }
  
  export default LeftSide
  