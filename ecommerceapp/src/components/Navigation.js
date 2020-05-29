import React, { Component } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Search from './Search'
import Cart from './Cart'
import './styles/shop.scss'
import Login from './Login'

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state={
        searchKey:'',
        srch:'',
        count:'',
        signIn:false
        }
    }
   

    componentDidMount() {
        // this.getApi();
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

    signLink=()=>{
        
    }

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
    <Link className="link" to="/login" onClick={()=>{this.setState({signIn:true})}}> Hello,sign-in</Link>}
  <Link className="link" to="/Sports">Sports</Link>
   <Link className="link" to="/Fun">Fun</Link>
   <Link className="link" to="/Artists">Artists</Link>
   <Link className="link" to="/Bookmarks">Bookmarks</Link>
   <h1 className="visitcount">Visit#:{this.state.count}</h1>
   {/* <h1 className="username">{this.props.username}</h1> */}
   </div>
   
   <div className="searchdiv">
       <input type="text" placeholder='Please search here' onChange={this.handleChange}></input>
   <Link to="/Search" >  <button type="submit" onClick={(e)=>this.setState({searchKey:this.state.srch})}>Search</button ></Link>
  
   </div>
   </div>
    <Switch>
    <Route exact path="/login" ><Login /> </Route> 
    <Route exact path="/Search" ><Search searchKey={this.state.searchKey} /> </Route> 
    <Route exact path="/" ><Search searchKey="Reactions" /> </Route>  
    <Route exact path="/Sports"><Search searchKey="Sports" /> </Route> 
    <Route exact path="/Fun" ><Search searchKey="fun" /></Route>  
    <Route exact path="/Artists"><Search searchKey="Artists" /> </Route> 
        <Route exact path="/Bookmarks"><Cart /></Route>  
    </Switch>
    </Router> 
  </div>  
           
   
     </React.Fragment> 
            </div>
        )
    }
}


    
    