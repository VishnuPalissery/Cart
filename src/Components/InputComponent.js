import React from 'react';
const inputComponent = ({changed}) => {
        return(
               <input type = 'text'  onKeyUp= {changed} placeholder = 'Search.....'/>
        );   }
export default inputComponent;