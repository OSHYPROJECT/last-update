
import React, { Component } from 'react';


class App extends Component  {
    constructor(props){
        super(props)

       this.state = {
        data:[]
         
        };
    }
    
   
componentDidMount(){
    var that = this;
    $.ajax({
        url:"/imgs",
        type:"GET",
        dataType:"json",
        success:function(data){
        //   console.log(data);
          that.setState({data:data})
          console.log(that.state.data)
          
        },
        error:function(err){
          console.log(err)
        }
      });
    }

    render(){
        const listItems = this.state.data.map((img) =>
        <li>
        <img class="center" src={img.url}></img>
        <p  class="info">{img.imgInfo}</p>
        </li>
      );
        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}          


export default App;

