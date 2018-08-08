import React from 'react';


const CheckboxComponent = (props) => {

        return(
            <div>              
               <input type='checkbox'  checked={props.st}  onClick={props.clicked} />Only show products in stock
           </div>
        );

    
}

export default CheckboxComponent;