import React from 'react';
const outputList = (props) => {
    const style = {
        textAlign: 'center', 
        margin: 'auto',
        width: '50%',
        border: '1px solid #ccc',
        padding: '30px',
        boxShadow: '0 2px 3px solid #ccc'
    }

    const table = {
        color: 'black',
        textAlign: 'center',
        padding: '20px'
    }
    const tr = {
        textAlign: 'center',
        padding: '20px',
        color: 'red'
    }
    let search_data = props.textdata;
    const name1 = props.list.map((element,index) => {  //array of elements in stock

        if(element.inStock === true){
            return (<tr key = {index}>
                <td style = {table}>{element.name}</td>
                <td style = {table}>{element.price}</td>
            </tr>);
        }
    });
    const name2 = props.list.map((element,index) => { //array contains all elements
        if(element.inStock === true){
            return (<tr key = {index}>
                <td style = {table}>{element.name}</td>
                <td style = {table}>{element.price}</td>
            </tr>);
        }
        else{
            return (<tr key = {index}>
                <td style = {tr}>{element.name}</td>
                <td style = {tr}>{element.price}</td>
            </tr>);
        }
    
    });
    if(props.flag === 0){                             //checked display
    return(<div style = {style}>
        <table style = {table}>
            <tr>
                <th style = {table}>Name</th>
                <th style = {table}>Price</th>
            </tr>

            {props.check ? name1 : name2}
        </table>
    </div>);
}
else
 {                                                   //serached display
    const searchedProduct= props.list.filter(({name})=>(name.includes(search_data)))
    let name3;

    if(searchedProduct.length!==0){
        console.log(searchedProduct);

     name3=searchedProduct.map((element,index) => {
         if(element.inStock === true){
            return (<tbody><tr key = {index}>
                <td style = {table}>{element.name}</td>
                <td style = {table}>{element.price}</td>
            
            </tr></tbody>);}
            else{
                return (<tbody><tr key = {index}>
                    <td style = {tr}>{element.name}</td>
                    <td style = {tr}>{element.price}</td>
                  
                </tr></tbody>);
            }
        })
        return(<div style = {style}>
            <table style = {table}>
            <thead>
                <tr>
                    <th style = {table}>Name</th>
                    <th style = {table}>Price</th>
                </tr>
                </thead>
                <div>
                {name3}
                </div>
            </table>
        </div>);
    }else{
        window.alert("Not Found,Try Again..!")  
       
                                             //notfound message 
    return(""
        /*<div style = {style}>
        <table style = {table}>
        <thead>
            <tr>
                <th style = {table}>Name</th>
                <th style = {table}>Price</th>
            </tr>
            </thead>

            {props.check ? name1 : name2}
        </table>
    </div>*/);
    }    
 }
};

export default outputList;