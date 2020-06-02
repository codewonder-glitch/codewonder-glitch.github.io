import React, { Component } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Productinfo from './Productinfo'
// import Cart from './Cart'
import './styles/shop.scss'
import data from './Data'
import menGif from './Assets/men.gif'

export default class Men extends Component {
    constructor(props) {
        super(props);
        this.state={
        searchKey:'',
        srch:'',
        count:'',
        htmlArray:[],
        showProduct:false,
        productId:'',
        menGif:null
        }
    }
   

    componentDidMount() {
    
     console.log("wen do u come here")
        if(this.props.searchKey!=undefined)
console.log("will see")
      
      this.callApi();   
         
     }
 
     componentDidUpdate(prevProps) {
       console.log("wen do u come here")
      // document.getElementById("menGif").style.display='none';
    //    console.log(this.props.searchKey)
    // if (this.props.showProduct!=prevProps.showProduct)
    // this.setState({showProduct:this.props.showProduct})
       if (this.props.searchKey!=prevProps.searchKey)
        {
          


              
          
        //   console.log(this.props.searchKey)
            this.callApi()
            
        }
            }
     

            showProduct=(e)=>{
                e.preventDefault();
                
                //console.log(this.state.htmlArray[e.target.id] )
                this.setState({productId:e.target.id})
                this.setState({showProduct:true})

            }

           
     
 
     async callAp1i() {
       // this.setState({searchKey:this.props.searchKey})
       var searchKey=this.props.searchKey
       axios({
        "method":"GET",
       // "url":"https://apidojo-forever1-v1.p.rapidapi.com/products/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"apidojo-forever21-v1.p.rapidapi.com",
        "x-rapidapi-key":"0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1",
        "useQueryString":true
        },"params":{
        "color_groups":"black",
        "start":"0",
        "rows":"20",
        "query":searchKey
        }
        })  
         .then((res) => {
           console.log(res.data)
         // {`img$i`}
           // this.setState({htmlArray:res.data.data});
             //console.log(res.data.response.docs[0].thumb_image)
             //console.log(this.state.htmlArray)
             //this.setState({img:res.data.data[0].images.downsized.url})
        
             let src;
         let htmlArray = res.data.response.docs.map((resObj,i) => 
           <div id={i} className="imagecontainer">
      
       <img className={i} id={i} onClick={this.showProduct} src={resObj.thumb_image} />
         <p className={i} style={{display:'none'}}>{resObj.brand}</p>
       <p className={i}>{resObj.title}</p>
       <p className={i}>{'$'+resObj.sale_price}</p>
       {/* <button id={i} value={resObj.thumb_image} onClick={this.saveImage} ></button> */}
       </div>
       
        );
         this.setState({htmlArray:htmlArray})
         this.setState({showProduct:false})
 
         })
         .catch((err) => {
         console.log ('error');
         })
         
       }
 
       
 
       saveImage=(e)=>{
        //  console.log(this.props.searchKey)
         var gifObj={ }
          gifObj={
           gifName: this.props.searchKey,
           gifCategory: this.props.searchKey,
           gifUrl: e.target.value
 
         }
         //console.log(gifObj["GifName"])
         fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/gifs`, {
           method: 'POST',
          //  method:'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( gifObj )
        });
        document.getElementById(e.target.id).disabled='true'
       }
       callApi=()=>{

        let htmlArray=data.map((resObj,i) => 
             <div id={i} className="imagecontainer">
        <div>
         <img className={i} id={i} onClick={this.showProduct} src={resObj.thumb_image} />
         </div>
         <div className="productDetails">
           <p className={`brand ${i}`} >{resObj.brand}</p>
         <p className={`title ${i}`}>{resObj.title}</p>
            <p  style={{display:'inline'}} className={`price ${i}`}>{resObj.sale_price}</p>$

         </div>
         </div>
          );
           this.setState({htmlArray:htmlArray})
           this.setState({showProduct:false})
   
          //  })
          //  .catch((err) => {
          //  console.log ('error');
          //  })
       }
 render(){
 
   return (
   
     <React.Fragment>
       <div>
         <div>
         { this.state.showProduct==false ?
        
   <div className="gridContainer">
    
   {this.state.htmlArray}
     </div> : <div> <Productinfo details={this.state.htmlArray} id={this.state.productId} / > </div>
     }
    
     {this.state.menGif}
   </div>
     </div>
     </React.Fragment> 
   )
 }
}