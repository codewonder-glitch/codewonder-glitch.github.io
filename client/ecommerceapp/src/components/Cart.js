import React, { Component } from 'react';

import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";


import './styles/shop.scss'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            htmlArray:[],
         
        searchKey:'',
        srch:'',
        count:'2',
        inputhtmlArray:[],
        users:[{firstName:"visa"}],
        inputTextArr:[],
        item1:'',
        item2:'',
        item3:'',
        item4:'',
        item5:'',
        item6:'',
        item7:'',
        putid:'',
        putvalue:''

        
        }
        this.handletextChange = this.handletextChange.bind(this);
    }
   

    componentDidMount=()=> {
this.getApi()
    }
        getApi=async()=> {

            var htmlArr=[], inputArr=[],productIds=[]

            await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://springboot-clothingstore.herokuapp.com/products/v1/products`, {
                method:'GET',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               }
               }).then(response=> response.json()) .then(data=>{
                   htmlArr= data.map((dt,i)=>{
                    inputArr.push(dt.productCount)
                    productIds.push(dt.productId)
                  
    return(
    <div className="cartContainer">
        <div className="Image">
        <img src={dt.productUrl}/>
        </div>
        <div className="productInfo">
        <p>{dt.productName}</p>
        <p>{dt.productBrand}</p>
        <p>In Stock</p>
        <button className="btndelete" type="submit" value={dt.productId} onClick={this.orderDelete}> Delete</button>
        <button className="btnupdate" type="submit" value={dt.productId} onClick={this.updateDb}>Qty Update</button>
        
        </div>
        <div className="price">
        $<p id={dt.productId} style={{display:'inline'}}>{dt.productCount * dt.productPrice}</p>
        </div>
       
        {/* <button value={dt.productID} onClick={this.gifUpdate}> Update</button> */}
        </div>
    )
                    
      }  ) 
console.log(inputArr)
this.setState({count:inputArr.length})
      if(inputArr.length==1){
        var temp=inputArr[0]
this.setState({item1:temp})
      }

      else if(inputArr.length==2){
      this.setState({item1:inputArr[0]})
      this.setState({item2:inputArr[1]})
      }
      else if(inputArr.length==3){
        this.setState({item1:inputArr[0]})
        this.setState({item2:inputArr[1]})
        this.setState({item3:inputArr[2]})
        }
        else if(inputArr.length==4){
          this.setState({item1:inputArr[0]})
          this.setState({item2:inputArr[1]})
          this.setState({item3:inputArr[2]})
          this.setState({item4:inputArr[3]})
          }
          else if(inputArr.length==5){
            this.setState({item1:inputArr[0]})
            this.setState({item2:inputArr[1]})
            this.setState({item3:inputArr[2]})
            this.setState({item4:inputArr[3]})
            this.setState({item5:inputArr[4]})
            }
            else if(inputArr.length==6){
              this.setState({item1:inputArr[0]})
              this.setState({item2:inputArr[1]})
              this.setState({item3:inputArr[2]})
              this.setState({item4:inputArr[3]})
              this.setState({item5:inputArr[4]})
              this.setState({item6:inputArr[5]})
              }
              else if(inputArr.length==7){
                this.setState({item1:inputArr[0]})
                this.setState({item2:inputArr[1]})
                this.setState({item3:inputArr[2]})
                this.setState({item4:inputArr[3]})
                this.setState({item5:inputArr[4]})
                this.setState({item6:inputArr[5]})
                this.setState({item6:inputArr[6]})
                }
      
      this.setState({htmlArray:htmlArr})
      
//       let inputTextArr=this.state.users.map((el, i) => (
//         <div key={i}>
//  <input type="text" placeholder="First Name" name={i} value={el.firstName} onChange={this.handleChange} />

//         </div>          
      // ))
    //this.setState({inputTextArr:inputTextArr})
     
     } ).catch((err) => 
                console.log (err)
                )
        }
    
        orderDelete=async(e)=>{
            e.preventDefault()
            console.log(e.target.value)
            console.log(e.target.className)
           await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://springboot-clothingstore.herokuapp.com/products/v1/products/`+e.target.value, {
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

        updateDb=async(e)=>{
          e.preventDefault()
          console.log(e.target.value)
          console.log(this.state.putvalue)
          var mult=this.state.putvalue
          var id=e.target.value
        
            // await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/gifs/`+this.state.urlChange, {
                await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://springboot-clothingstore.herokuapp.com/products/v1/products/`+e.target.value,  {
            method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({productCount:parseFloat(this.state.putvalue)})      }  )
              .then(response => response.json())
              .then((data)=>{
      //parseFloat(this.state.putvalue)
          console.log(data)
          var i=data.productCount*data.productPrice
          document.getElementById(id).innerHTML=i
         //console.log( document.getElementById(e.target.value))
             //this.getApi()
              })

              
            }

              handletextChange(event) {
                 event.preventDefault()
              this.setState({[event.target.name]: event.target.value})
             this.setState({putid:event.target.id})
             this.setState({putvalue:event.target.value})
             }
        
handleSubmit=(e)=>{
  e.preventDefault()
console.log("are u coming here")
this.updateDb()

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
       <form id="form1" onSubmit={this.handleSubmit}>
{this.state.count==1 &&
   <div className="inputContainer">
       <input className='input' id={1} type="text"  name="item1" value={this.state.item1} onChange={this.handletextChange} /></div>}
       {this.state.count==2 &&
       <div className="inputContainer">
        <input className='input' id={1} type="text"  name="item1" value={this.state.item1} onChange={this.handletextChange}></input>
       <input className='input' id={2} type="text"  name="item2" value={this.state.item2} onChange={this.handletextChange}></input> </div>}
       {this.state.count==3 &&
       <div className="inputContainer">
        <input className='input' id={1} type="text"  name="item1" value={this.state.item1} onChange={this.handletextChange}></input>
       <input className='input' id={2} type="text"  name="item2" value={this.state.item2} onChange={this.handletextChange}></input> 
       <input className='input'id={3} type="text"  name="item3" value={this.state.item3} onChange={this.handletextChange}></input></div> }
       {this.state.count==4 &&
       <div className="inputContainer">
        <input className='input' id={1} type="text"  name="item1" value={this.state.item1} onChange={this.handletextChange}></input>
       <input className='input' id={2} type="text"  name="item2" value={this.state.item2} onChange={this.handletextChange}></input> 
       <input className='input'id={3} type="text"  name="item3" value={this.state.item3} onChange={this.handletextChange}></input>
       <input className='input'id={4} type="text"  name="item4" value={this.state.item4} onChange={this.handletextChange}></input></div> }
       {this.state.count==5 &&
       <div className="inputContainer">
        <input className='input' id={1} type="text"  name="item1" value={this.state.item1} onChange={this.handletextChange}></input>
       <input className='input' id={2} type="text"  name="item2" value={this.state.item2} onChange={this.handletextChange}></input> 
       <input className='input'id={3} type="text"  name="item3" value={this.state.item3} onChange={this.handletextChange}></input>
       <input className='input'id={4} type="text"  name="item4" value={this.state.item4} onChange={this.handletextChange}></input>
       <input className='input' id={5} type="text"  name="item5" value={this.state.item5} onChange={this.handletextChange}></input> </div> }
       {this.state.count==6 &&
           <div className="inputContainer">
        <input className='input' id={1} type="text"  name="item1" value={this.state.item1} onChange={this.handletextChange}></input>
       <input className='input' id={2} type="text"  name="item2" value={this.state.item2} onChange={this.handletextChange}></input> 
       <input className='input'id={3} type="text"  name="item3" value={this.state.item3} onChange={this.handletextChange}></input>
       <input className='input'id={4} type="text"  name="item4" value={this.state.item4} onChange={this.handletextChange}></input>
       <input className='input' id={5} type="text"  name="item5" value={this.state.item5} onChange={this.handletextChange}></input> 
       <input className='input'id={6} type="text"  name="item6" value={this.state.item6} onChange={this.handletextChange}></input></div> } 
       {this.state.count>=7 &&
       <div className="inputContainer">
        <input className='input' id={1} type="text"  name="item1" value={this.state.item1} onChange={this.handletextChange}></input>
       <input className='input' id={2} type="text"  name="item2" value={this.state.item2} onChange={this.handletextChange}></input> 
       <input className='input'id={3} type="text"  name="item3" value={this.state.item3} onChange={this.handletextChange}></input>
       <input className='input'id={4} type="text"  name="item4" value={this.state.item4} onChange={this.handletextChange}></input>
       <input className='input' id={5} type="text"  name="item5" value={this.state.item5} onChange={this.handletextChange}></input> 
       <input className='input'id={6} type="text"  name="item6" value={this.state.item6} onChange={this.handletextChange}></input>
       <input className='input'id={7} type="text"  name="item7" value={this.state.item7} onChange={this.handletextChange}></input></div> }
          </form>

 
   
   </div>  
   
     </React.Fragment> 
           
        )
    }
}