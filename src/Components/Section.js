import React from "react";

const section = ({title,description}) => {
    
    return(
        <div>
            <hr/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default section;
