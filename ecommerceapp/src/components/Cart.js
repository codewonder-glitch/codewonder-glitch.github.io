import React, { Component } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";


import './styles/shop.scss'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            htmlArray:[],
        searchKey:'',
        srch:'',
        count:''
        }
    }
   

    componentDidMount() {
this.getApi()
    }
        getApi=async()=> {
            var htmlArr=[]
            await fetch('/products/v1/products', {
                method:'GET',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               }
               }).then(response=> response.json()) .then(data=>{
               
                console.log(data)
                htmlArr= data.map((dt,i)=>{
    return(
    <div className="imageContainer">
        <img id={dt.productID} src={dt.productUrl}/>
        <p>{dt.productBrand}</p>
        <p>{dt.productName}</p>
        <input type="text" onChange={this.qtyChange} value={dt.productCount}/>
        <p>{dt.productCount}</p>
        <p>{dt.productPrice}</p>
        <button id={dt.productID} onClick={this.orderDelete}> Delete</button>
        {/* <button value={dt.productID} onClick={this.gifUpdate}> Update</button> */}
        </div>
    )
                    
      }  )    
      this.setState({htmlArray:htmlArr})
     } ).catch((err) => 
                console.log ('error')
                )
        }
    
        orderDelete=(e)=>{
            e.preventDefault()
            alert("Gif Deleted")
            console.log(e.target.id)
            fetch('/products/v1/products/1', {
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
        gifUpdate=(e)=>{
            e.preventDefault()
            
            // this.setState({urlChange:e.target.value})
        }

        qtyChange=(e)=>{
e.preventDefault()

        }
    render(){

        return(
         

<React.Fragment>
   <div>
       {this.state.htmlArray}
       <h1>search </h1>
   </div>
   
           
   
     </React.Fragment> 
           
        )
    }
}