import React from "react";
import './LeftSide.css'
import Navbar from "./Navbar";
import Social from './Social';


function LeftSide() {
  

    return (
      <>
        <section className="container pt-20">
          <div className="tracking-wider">
              <h1 className="max-lg:text-4xl lg:text-5xl font-bold mb-3">Giuseppe Failla</h1>
              <p className="role color-water">Junior Frontend Developer</p>
              <p className=" md:w-3/4 color-gray mb-5">Creo soluzioni digitali, trasformando problemi complessi in codice chiaro e funzionale.</p>
          </div>

          <Navbar></Navbar>

          <div className="flex sites my-5 gap-20 max-lg:hidden">
            <Social></Social>
          </div>
          
        </section>
        
      </>
    )
  }
  
  export default LeftSide
  