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
              <p className=" w-1/2 color-gray ">testo o frase ad effetto da inserire per sembrare acculturato e ricercato bla bla bla</p>
          </div>

          <Navbar></Navbar>


          <div className="flex sites">
            <a href="" className="me-10"><FaGithub /></a>
            <a href="" className="me-10"><FaLinkedin /></a>
            <a href="" className="me-10"><SiCodewars /></a>
            <a href="" className="me-10"><FaInstagram /></a>
          </div>
        </section>
        
      </>
    )
  }
  
  export default LeftSide
  