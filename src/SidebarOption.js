import React from 'react';
import "./SidebarOption.css";

    function SidebarOption({Icon, title, number, selected,onClick}) {
    return (
        <div className={`sidebaroption ${selected && "sidebaroption-active"}`}>
            <Icon onClick={onClick} />
            <h3 onClick={onClick}>{title}</h3>
            <p>{number}</p>
            
        </div>
       
    )
}

export default SidebarOption;
