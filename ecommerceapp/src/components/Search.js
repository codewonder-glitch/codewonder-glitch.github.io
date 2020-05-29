import React, { Component } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";

// import Cart from './Cart'
import './styles/shop.scss'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
        searchKey:'',
        srch:'',
        count:''
        }
    }
   

    componentDidMount() {
        // this.getApi();
    }

    render(){

        return(
       

<React.Fragment>
<div>
<h1>search </h1>
           
</div>
     </React.Fragment> 
           
        )
    }
}