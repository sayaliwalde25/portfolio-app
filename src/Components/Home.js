import React from "react";
import "../Allcss/Home.css";

import profile from "../Images/home/sayali-2.jpg";
 
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";



function Home() {
  return ( 
    <section className="home" id="home"> 
      <div className="home--wrapper">
      <div className="home--container container">
        <p className="home--subtitle text-cs">
          Hello , <span>My Name Is</span>
        </p>

        <h1 className="home--title text-cs">
          <span>Sayali</span> walde 
        </h1>

        <p className="home--job">
          <span className="text-cs">I Am</span> <b>Web Developer</b>
        </p>

        <div className="home--img-wrapper">
          <div className="home--banner">
            <img src={profile} alt="" className="home--profile" />
          </div>
        </div> 

        <p className="home--data home--data-one">
           <span className="text-lg">
            6 <b>+</b>
           </span>

           <span className="text-sm text-cs">
            months  of  <span>Experience</span>
           </span>
        </p> 

         <p className="home--data home--data-two">
           <span className="text-lg">
              5
           </span>

           <span className="text-sm text-cs">
            Completed  <span> Project </span>
           </span>
        </p>  
        

        <p className="home--text">
          From France, Paris. I have rich experience in web design , also I Am
          good at wordpress. I love to talk with you about our unique
        </p>
 
        <div className="home--socials">
          <a href="" className="home--socials-link">
            <FaTwitter />
          </a>
          <a href="" className="home--socials-link">
            <FaDribbble />
          </a>
          <a href="" className="home--socials-link">
            <FaBehance />
          </a>
        </div>
          
        <div className="home--btns">
            <a href="" className="btn">
            Download CV</a>
            <a href="" className="hero--link  text-cs">
              My Skills
            </a>
          </div>
        </div>
      </div>
    
     

       
    </section>
  );
}

export default Home;
