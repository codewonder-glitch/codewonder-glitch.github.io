import React, { Component } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";


import './styles/shop.scss'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            htmlArray:[],
            inputArr:[],
        searchKey:'',
        srch:'',
        count:'',
        inputhtmlArray:[],
        why:'3',
        id:0
        
        }
    }
   

    componentDidMount=()=> {
this.getApi()
    }
        getApi=async()=> {
            var htmlArr=[], inputtextArr=[]
            await fetch('/products/v1/products', {
                method:'GET',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               }
               }).then(response=> response.json()) .then(data=>{
               var temp=[]
                console.log(data)
                htmlArr= data.map((dt,i)=>{
temp.push(dt.productCount)
                   this.setState({inputArr:temp})
                   console.log(this.state.inputArr[i])
    return(
    <div className="cartContainer">
        <div className="Image">
        <img src={dt.productUrl}/>
        </div>
        <div className="productInfo">
        <p>{dt.productName}</p>
        <p>{dt.productBrand}</p>
        <p>{dt.productId}</p>
        <p>In Stock</p>
        <button className="btn" type="submit" value={dt.productId} onClick={this.orderDelete}> Delete</button>
        <p contentEditable="true" id={i} onChange={(e)=>this.qtyChange(e,i)}>{dt.productCount}</p>
        <p>{dt.productCount}</p>
        </div>
        <div clasName="price">
        $<p  style={{display:'inline'}}>{dt.productPrice}</p>
        </div>
       
        {/* <button value={dt.productID} onClick={this.gifUpdate}> Update</button> */}
        </div>
    )
                    
      }  ) 
      
    //   inputtextArr=this.state.inputArr.map((dt,i)=>{
    //       return(
    //     <input type="text" id={i} onChange={(e)=>this.qtyChange(i,e)} value={dt}/>
          
    //   )})
    //   this.setState({inputhtmlArray:inputtextArr})
      this.setState({htmlArray:htmlArr})
     } ).catch((err) => 
                console.log ('error')
                )
        }
    
        orderDelete=async(e)=>{
            e.preventDefault()
            alert("Gif Deleted")
            console.log(e.target.value)
            console.log(e.target.className)
           await fetch(`/products/v1/products/`+e.target.value, {
                method: 'DELETE',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
        //       .then( => {
        //    // let updatedEmployees = [...this.state.employees].filter(i => i.id !== id);
        //        // this.setState({employees: updatedEmployees});
        //       });
              this.getApi()
    
        }

        updateDb=async()=>{
            document.getElementById(this.state.urlChange).src=this.state.filePath
            // await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/gifs/`+this.state.urlChange, {
                await fetch('/products/v1/products'+1,  {
            method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({gifUrl:this.state.filePath})      }  )
              .then(response => response.json())
              .then((data)=>{
      
          
             
              })}
        

        qtyChange=(e,i)=>{
// e.preventDefault()
this.setState({id:e.target.id})
var temp=this.state.htmlArray
    temp[this.state.id].text=e.target.value;
    this.setState({htmlArray:temp})
    console.log(e.target.value )



// var temp=this.state.inputArr[e.target.id];
// console.log(temp[e.target.id])
// temp[e.target.id]=32
// console.log(temp[e.target.id])
// this.setState({inputArr[e.target.id]:temp[e.target.id]})
// this.state.inputArr[i]=e.target.value
        //   temp[e.target.id].text=e.target.value
          //this.setState({htmlArray:temp})
// this.setState({:e.target.value})
// let newItems = [...this.state.inputArr];
// newItems[i] = e.target.value;
//  this.setState({ inputArr:this.state.inputArr });
}

change=(e)=>{
e.preventDefault()
this.setState({why:e.target.value})
}
    render(){

        return(
         

<React.Fragment>
   <div className="cartParent">
       {this.state.htmlArray}
     {this.state.inputhtmlArray}
     {/* <p value={this.state.why} onChange={this.change}></p> */}
   </div>
   
           
   
     </React.Fragment> 
           
        )
    }
}