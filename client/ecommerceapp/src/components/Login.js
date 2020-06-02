import React, { Component } from 'react';
import Renderuser from './Renderuser'
import './styles/shop.scss'

// import './App.css';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
username:'',
password:'',
gotopage:false,
callParent:''
        }
    }

    componentDidMount=()=>{
      console.log("cuming")
    }
    // .then(response=> response.json())

    getApi=()=>{
     fetch(`${'https://cors-anywhere.herokuapp.com/'}https://springboot-clothingstore.herokuapp.com/giphy/v1/login/authenticate`, {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( {
            "userName":this.state.username,
    "userPassword":this.state.password
          } )}) .then((res)=>{
            
            return res.text()})
        
        
            .then((text)=>{
                console.log(text);
                var arr =  text.split(':')
            console.log(arr[1])
if(arr[1]=="true}"){
this.setState({gotopage:true})
this.setState({callParent:true})
// document.getElementsByClassName("App")[0].style.display="none"
}
else
alert("login failed")

            })
    
    
     
       .catch((err) => {
       console.log ('error')}
       )
    }
    login=(e)=>{
        e.preventDefault()
        this.getApi()

    }

    textChange=(e)=>{
        e.preventDefault()
        if(e.target.name=="username")
        this.setState({username:e.target.value})
        else
        this.setState({password:e.target.value})
    }

    callParent=(e)=>{
        e.preventDefault()
        
        document.getElementsByClassName("login")[0].style.display="none"
        
    }



render(){
  return (
      <React.Fragment>
              <div className="login">
                  
    { this.state.gotopage ==false &&
        <div>
   
   <form style={{border:"4px solid purple"}}>
  <div className="container">
    <h1>Sign In</h1>
  
    <hr />

    <label ><b>UserName</b></label>
    <input type="text" placeholder="Enter Email" name="username" required onChange={this.textChange}/>

    <label ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required onChange={this.textChange} />

   
   
    
    {/* <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> */}

    <div className="clearfix">
      {/* <button type="button" class="cancelbtn">Cancel</button> */}
      <button type="submit" className="signinbtn" onClick={this.login}>Sign In</button>
    </div>
  </div>
</form>

<div className="cancel">
    <button id="cancel" type="submit" onClick={this.callParent}>X</button>
    </div>
    </div>
   }
  

       {this.state.gotopage==true &&
        <Renderuser username={this.state.username}/>} 
     
        {this.state.callParent==true &&
        this.props.callParent()}

    </div>
    </React.Fragment>

  );
}
}


export default Login;