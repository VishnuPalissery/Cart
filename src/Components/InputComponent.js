import React from 'react';
import outputList from './OutputList';
const inputComponent = (props) => {
        return(
               <input type = 'text'  onKeyUp= {props.changed} placeholder = 'Search.....'/>
        );   }
export default inputComponent;