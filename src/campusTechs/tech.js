import React from "react";

export default function Tech(prop) {
    return (
        
        <div id={prop.elem.user_id} className="tech">
            <h1>{prop.elem.name}</h1>
            <h3>{prop.elem.email}</h3> 
        </div>
        
    )
}