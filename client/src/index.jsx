
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
                <div  className = 'app'>
                     <App />
                </div>
                
                <Other className = 'other' />
                <Users />
                <Work />
                <Comments />
            </div>
        )
    }
};

ReactDOM.render(<Main></Main>,document.getElementById("app"));
// ReactDOM.render(<Main></Main>,document.getElementById("users"))
