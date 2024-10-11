import React, { useState } from 'react'
import {links} from '../data'

import { BsMoon, BsSun } from "react-icons/bs";


import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
 
import "../Allcss/Header.css"
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';




const getStorageTheme = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
}
function Header() {

  const [showMenu , setShowMenu] = useState(false);
  const [scrollNav , setScrollNav] = useState(false);
  const [theme , setTheme] = useState(getStorageTheme);
 
  const [isSidebarOpen, setSidebarOpen] = useState(true);


  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
       setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  };

  const toggleTheme = () => {
    if (theme === 'light-theme'){
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() =>{
    window.addEventListener('scroll',changeNav);
  },[]);

  useEffect(() =>{
    document.body.classList.toggle('on-scroll' , showMenu);
  },[showMenu]);

  useEffect(() =>{
     document.documentElement.className = theme;
     localStorage.setItem('theme',theme);
  },[theme]);
  return (
    <header className={`${scrollNav ? 'scroll-header':''}
    header`}>
      <nav className='nav'>
        <Link to='/' onClick={scrollTop} className='nav--logo text-cs'>
          Miller
        </Link>

      <div className={`${showMenu ? 'nav--menu show-menu':'nav--menu'}`}>
             <div className='nav--data'>
            <ul className='nav--list'>
                {links.map(({name , path}, index) =>{
                    return(
                        <li className='nav--item' key={index}>
                              <Link 
                                 className='nav--link text-cs' 
                                  to={path} 
                                  spy={true} 
                                  hashSpy={true}
                                  smooth={true} 
                                  offset={-150} 
                                  duration={500} 
                               >
                                  {name}
                              </Link>
                        </li>
                        
                    )
                })}
            </ul>
            </div>
      <div className="header--socials">
           <a href="" className="header--socials-link">
             <FaTwitter />
           </a>
           <a href="" className="header--socials-link">
             <FaDribbble />
           </a>
           <a href="" className="header--socials-link">
             <FaBehance />
           </a>
      </div>
   </div>
   <div className='nav--btns'>
    <div className='theme--toggle' onClick={toggleTheme}>
      {theme === 'light-theme' ? <BsMoon/> : <BsSun/>}
    </div>

    <div className={`${showMenu ? 'nav--toggle animate--toggle'
    :'nav--toggle'}`} onClick={() =>
      setShowMenu(!showMenu)}>
       <span></span>
       <span></span>
    </div>
   </div>
</nav>
</header>
  )
}

export default Header