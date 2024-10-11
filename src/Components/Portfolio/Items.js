import React from 'react'
import "../Portfolio/Portfolio.css"
import { FaArrowRight } from 'react-icons/fa';

function Items({projectItems})  {
  return (
    <>
     {projectItems.map((projectItem) => {
      const {id, img , category , title , description} = projectItem ;
      return (
        <div className='project--items card card-two' key={id}>
          <div className='protfolio--img-wrapper'>
            <img src={img} alt='' className='protfolio--img'/>
          </div>  
   
          <span className='protfolio--category text-cs'>{category}</span>
          <h3 className='protfolio--title'>{title}</h3>
          <p className='protfolio--decription'>{description}</p>
 
           <a href='' className='link'>
            See Pricing
            <FaArrowRight className='link--icon'></FaArrowRight>
          </a>
        </div>
      )
     })} 
  </>
  )
}

export default Items
