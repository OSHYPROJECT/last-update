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
       <div id="title">
           <h1 className="name"> My project...Enjoy </h1>
       </div>
     );
   }
 }
 export default NavBar;