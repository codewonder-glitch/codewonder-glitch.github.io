import React, { Component } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Search from './Search'
import Cart from './Cart'
import './styles/shop.scss'
import Login from './Login'
import menGif from './Assets/men.gif'
import Data from './Data'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import Renderuser from './Renderuser';
// import Dropdown from 'react-bootstrap/Dropdown'

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state={
         menGif:'',   
        searchKey:'',
        srch:'',
        count:'',
        signIn:false
        }
    }
   

    componentDidMount() {
        // this.getApi();

       
           
            
    }


    getApi1=async()=> {
        var htmlArr=[]
        await fetch(`${'https://cors-anywhere.herokuapp.com/'}'https://glacial-woodland-21756.herokuapp.com/giphy/v1/visitor/count`, {
            method:'GET',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           }
           }) .then(res => res.json()) .then(data=>{
            this.setState({count:data})
           }).catch((err) => 
           console.log (err)
           )
   }
    handleChange=(e)=>{
        e.preventDefault()
        this.setState({srch:e.target.value})
    }

    senttoChild=()=>{
       

        this.setState({signIn:true})
  
    }

    showGif=(e)=>{
         //e.preventDefault()
        var timesRun = 0;
var interval = setInterval(()=>{
    console.log(timesRun)
    // if (timesRun==0)
    this.setState({menGif:<img src={menGif} />})
    timesRun += 1;
   
    if(timesRun === 10){
        clearInterval(interval);
         document.getElementById("menGif1").style.display='none';
    }
    //do whatever here..
}, 300);
  

         }
        

//         timerFn=()=>{

            
            
//         }

    

    render(){

        return(
           <div>

<React.Fragment>
     <div className="container">
 
      <Router>
     
         <div className="route">
        <div className="flex">
        
           <div> <h1>Shopper's stop</h1></div>
    <Link className="link" to="/" > </Link>
    { this.state.signIn==false &&
    <Link className="link" to="/login" > Hello,sign-in</Link>}
  {/* <Link className="link" to="/search">Sports</Link> */}
   <Link className="link" to="/men" onClick={this.showGif}>Men</Link>
   <Link className="link" to="/women">Women</Link>
   <Link className="link" to="/kids">Kids</Link>
   <Link className="link" to="/Cart">Cart</Link>
   <div><h1 className="visitcount">Visit#:{this.state.count}</h1></div>
   {/* <h1 className="username">{this.props.username}</h1> */}
   </div>
   
   </div>
   <div className="Route">
    <Switch>
   
   <Route exact path="/login" ><Login callParent={this.senttoChild} /> </Route> 
      {/*<Route exact path="/Search" ><Search searchKey={this.state.searchKey} /> </Route> */}
    <Route exact path="/men" ><Men searchKey="men" showProduct={false} /> </Route>   
    <Route exact path="/women"><Women searchKey="women" showProduct={false} /> </Route> 
    <Route exact path="/kids" ><Kids searchKey="kids" showProduct={false}/></Route>  
  
        <Route exact path="/Cart"><Cart /></Route>   
        <Route exact path="/" ><Renderuser/> </Route> 
    </Switch>
    </div>
    </Router> 
  </div>  
  <div id="menGif1" style={{display:'block'}}>
         {this.state.menGif}  
         </div>
     </React.Fragment> 
            </div>
        )
    }
}

// callParent={this.senttoChild}
    
    