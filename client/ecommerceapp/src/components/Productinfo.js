import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Cart from './Cart'
// import Cart from './Cart'
import './styles/shop.scss'
import Renderuser from './Renderuser'


export default class Productinfo extends Component {
constructor(props) {
    super(props);
    this.state={
  showCart:false,
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

console.log(this.state.count)
console.log(document.getElementsByClassName(this.props.id)[3].innerHTML)
var productObj={ 
productName:document.getElementsByClassName(this.props.id)[2].innerHTML ,
productUrl:document.getElementsByClassName(this.props.id)[0].src ,
productPrice:parseFloat(document.getElementsByClassName(this.props.id)[3].innerHTML),
productBrand:document.getElementsByClassName(this.props.id)[1].innerHTML,
productCount :parseInt(this.state.count)

}

//console.log(productObj)
//fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/gifs`, {
  fetch(`${'https://cors-anywhere.herokuapp.com/'}https://springboot-clothingstore.herokuapp.com/products/v1/products`, {  
method: 'POST',
 //  method:'PUT',
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
 },
 body: JSON.stringify( productObj )
 
});

this.setState({showCart:true})
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
    { (this.state.showCart==false) ?
    <div>
     
    <div className="orderDetails">
      <div className="renderDetails">
   {this.props.details[this.props.id]}
    </div>
<div className="otherParam">
  Quantity <ensp />
    <select value={this.state.count} onChange={this.selectQty} id="count" name="count" >
<option  value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<br/><br/>
<p>Free Shipping</p>
<br/><br/>
    <button onClick={this.saveItem}>Add to Cart</button>
    <Renderuser />
    </div>
    </div>
    </div>:

    <Cart />



    }

    </div>

  );
}
}


