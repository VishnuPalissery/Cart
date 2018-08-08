import React from 'react';
const inputComponent = ({changed}) => {
        return(
               <input type = 'text'  onChange= {changed} placeholder = 'Search.....'/>
        );   }
export default inputComponent;