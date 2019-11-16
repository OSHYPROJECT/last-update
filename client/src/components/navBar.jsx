import React, { Component } from 'react';
class NavBar extends Component {
   constructor(props){
       super(props)
      this.state = {
       data:[]
       };
   }
   render() {
     return (
       <div  className="navbar" id="title">
           <p id="like"> <img src="ola.png " width="50px" height="50px" /></p>
       </div>
     );
   }
 }
 export default NavBar;