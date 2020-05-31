import React, { Component } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Search from './Search'
import Cart from './Cart'
import './styles/shop.scss'
import Login from './Login'
import menGif from './Assets/men.gif'
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

        axios({
            "method":"GET",
            "url":"https://apidojo-forever21-v1.p.rapidapi.com/products/search",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"apidojo-forever21-v1.p.rapidapi.com",
            "x-rapidapi-key":"0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1",
            "useQueryString":true
            },"params":{
            "color_groups":"black",
            "start":"0",
            "rows":"20",
            "query":"men"
            }
            })
            .then((response)=>{
            //   console.log(response)
            })
            .catch((error)=>{
              console.log(error)
            })
    }


    getApi=async()=> {
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
         e.preventDefault()
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
        
            <h1>Shopper's stop</h1>
    <Link className="link" to="/" > Reactions</Link>
    { this.state.signIn==false &&
    <Link className="link" to="/login" > Hello,sign-in</Link>}
  <Link className="link" to="/search">Sports</Link>
   <Link className="link" to="/men" onClick={this.showGif}>Men</Link>
   <Link className="link" to="/women">Women</Link>
   <Link className="link" to="/kids">Kids</Link>
   <Link className="link" to="/summer">summer</Link>
   <h1 className="visitcount">Visit#:{this.state.count}</h1>
   {/* <h1 className="username">{this.props.username}</h1> */}
   </div>
   
   <div className="searchdiv">
       <input type="text" placeholder='Please search here' onChange={this.handleChange}></input>
   <Link to="/Search" >  <button type="submit" onClick={(e)=>this.setState({searchKey:this.state.srch})}>Search</button ></Link>
  
   </div>
   </div>
    <Switch>
    <Route exact path="/login" ><Login callParent={this.senttoChild} /> </Route> 
    <Route exact path="/Search" ><Search searchKey={this.state.searchKey} /> </Route> 
    <Route exact path="/men" ><Search searchKey="men" showProduct={false} /> </Route>  
    <Route exact path="/women"><Search searchKey="women" showProduct={false} /> </Route> 
    <Route exact path="/kids" ><Search searchKey="kids" showProduct={false}/></Route>  
    <Route exact path="/summer"><Search searchKey="jewelery" showProduct={false} /> </Route> 
        <Route exact path="/Bookmarks"><Cart /></Route>  
    </Switch>
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
    
    