import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";

// import Cart from './Cart'
import './styles/shop.scss'


export default class Productinfo extends Component {
constructor(props) {
    super(props);
    this.state={
  
    count:1,
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
console.log(this.state.count)
console.log(document.getElementsByClassName(this.props.id)[3].innerHTML)
var productObj={ 
productName:document.getElementsByClassName(this.props.id)[2].innerHTML ,
productUrl:document.getElementsByClassName(this.props.id)[0].src ,
productPrice:parseFloat("21.32"),
productBrand:document.getElementsByClassName(this.props.id)[1].innerHTML,
productCount :parseInt(this.state.count)
}

//console.log(productObj)
//fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/gifs`, {
  fetch('/products/v1/products', {  
method: 'POST',
 //  method:'PUT',
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
 },
 body: JSON.stringify( productObj )
 
});

 }

 selectQty=(e)=>
 {
   e.preventDefault()
   //console.log(e.target.value)
this.setState({count:e.target.value})
//console.log(this.state.count)
 }
 render(){
  
  return (
    <div>
    <div className="renderDetails">
    {this.props.details[this.props.id]}
    </div>
<div>
  <h3>Quantity</h3>
    <select value={this.state.count} onChange={this.selectQty} id="count" name="count" >
<option  value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
    <button onClick={this.saveItem}>Add to Cart</button>
    </div>

    </div>

  );
}
}


