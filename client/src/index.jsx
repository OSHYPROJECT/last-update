import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/navBAr.jsx";
import App from "./components/y.jsx";
import Users from "./components/o.jsx";
import Comments from './components/s.jsx';
import Other from './components/h.jsx';
import Work from './components/worksUser.jsx';
class Main extends Component {
   constructor(props){
       super(props)
   }
   render(){
       return (
           <div>
               <Work/>
               <App />
               <br></br>
               <Other />
               <br></br>
               <Users />
               <Comments />
           </div>
       )
   }
};
ReactDOM.render(<Main></Main>,document.getElementById("app"));
