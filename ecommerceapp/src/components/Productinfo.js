import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";

// import Cart from './Cart'
import './styles/shop.scss'


export default class Productinfo extends Component {
constructor(props) {
    super(props);
    this.state={
  
    count:'',
    // htmlArray:[],
    // showProduct:false,
    // productId:''
    }
}


componentDidMount() {

 
     
 }

 saveItem=(e)=>{
e.preventDefault()
alert("Gif saved in Bookmarks")
console.log(this.props.searchKey)
var productObj={ 
products_name:'visa' ,
product_url:'fef' ,
product_price:20.0 ,
product_brand:"gv" ,
product_count :2
}

console.log(productObj)
fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/gifs`, {
  method: 'POST',
 //  method:'PUT',
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
 },
 body: JSON.stringify( productObj )
 
});

 }

 selectQty=(e)=>{
this.setState({count:e.target.value})
console.log(this.state.count)
 }
 render(){
   
  return (
    <div>
    <div className="renderDetails">
    {this.props.details[this.props.id]}
    </div>
<div>
  <h3>Quantity</h3>
    <select onchange={this.selectQty} id="count" name="count" >
<option  value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
    <button onClick={this.state.saveItem}>Add to Cart</button>
    </div>

    </div>

  );
}
}


