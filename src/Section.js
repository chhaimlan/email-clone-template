import React from 'react';
import './Section.css';



function Section({Icon, title,color,selected, onClick}) {
    
    return (
        <div className={`section ${selected && "section-selected"}`}
          style={{
              borderBottom: `3px solid ${color}`,
              color:`${selected && color}`,
          }}
        >
            <Icon  onClick={onClick}/>
            <h4 onClick={onClick}>{title}</h4>
        </div>
    )
}

export default Section
