import React from 'react';
//import './App.css'
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
        textAlign: 'center',
        padding: '20px'
    }
    const tr = {
        textAlign: 'center',
        padding: '20px',
        color: 'red'
    }
    let check = props.check;
    let f = props.flag;
    let search_data = props.textdata;
    if(props.flag === 0){
    const name = props.list.map((element,index) => {

        if(element.inStock === true){
            return (<tr key = {index}>
                <td style = {tr}>{element.name}</td>
                <td style = {tr}>{element.price}</td>
            </tr>);
        }
    });


    const name2 = props.list.map((element,index) => {
       
            return (<tr key = {index}>
                <td style = {table}>{element.name}</td>
                <td style = {table}>{element.price}</td>
            </tr>);
    
    });
    return(<div style = {style}>
        <table style = {table}>
            <tr>
                <th style = {table}>Name</th>
                <th style = {table}>Price</th>
            </tr>

            {props.check ? name : name2}
        </table>
    </div>);
}
else
 {

    const searchedProduct= props.list.filter(({name})=>name===search_data)
    let name;

    if(searchedProduct.length!==0){
        console.log(searchedProduct);

        name=searchedProduct.map((element,index) => {
            return (<tbody><tr key = {index}>
                <td style = {table}>{element.name}</td>
                <td style = {table}>{element.price}</td>
                <td style = {table}>{element.inStock?"Available":"Not Available"}</td>
            </tr></tbody>);
        })

        return(<div style = {style}>
            <table style = {table}>
            <thead>
                <tr>
                    <th style = {table}>Name</th>
                    <th style = {table}>Price</th>
                    <th style = {table}>Stock</th>
                </tr>
                </thead>
    
                {name}
            </table>
        </div>);
    }else{
        window.alert("Not Found..!")
        return "";
    }    
 }
};

export default outputList;