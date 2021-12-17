import React from "react";
import "./jobsCard.css";


const Jobs = ({jobs}) => {
    return(
        <div className="jobs-container">
            <h3>{jobs.option1}</h3>
            <h3>{jobs.option2}</h3>
            <h3>{jobs.option3}</h3>
        </div>
    )
}

export default Jobs;