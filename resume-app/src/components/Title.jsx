import React from "react";
import "./Title.css";

const Title = ({name}) => {

  return (
    <div className="container">
      <h2>{name.firstName}</h2>
      <h3>{name.lastName}</h3>
    </div>
    
  );
};

export default Title;
