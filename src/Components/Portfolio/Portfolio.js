import React, { useState } from 'react'
import "../Portfolio/Portfolio.css";
import Items from './Items'


  
import { projects } from '../../data'

function Portfolio() {

  const [projectItems , setMenuItems] = useState (projects);
  
 
  return (   
    <div>
      <section className='Portfolio container' id='work'>
      <h2 className="section--title text-cs">Project</h2>
      <p className="section--subtitle">
        My <span>Cases</span>
      </p>
 
       

      <div className='Portfolio--container container grid'>
       <Items projectItems={projectItems}/>
      </div>
      </section>
      
    </div>
  )
}

export default Portfolio
