import React from "react";
 

const Link = ({ filter, active , children, onClick }) => (
    <a	
    className="filter__link" 
    href='#'
    onClick={e => {
        e.preventDefault();
        onClick(filter);
    }}
 >
    {children}
 </a>
)
 
export default Link;