import React from "react";
import "../Allcss/Card.css";
function Card(props) {
  return (
    <div className="timeline--item">
      <div className="timeline--icon">{props.icon}</div>
      <span className="timeline--date">{props.year}</span>
      <h3 className="timeline--title">{props.title}</h3>
      <h2 className="timeline--university">{props.University}</h2>
      <p className="timeline--text">{props.marks}</p>
    </div> 
   );
   
}

export default Card;
