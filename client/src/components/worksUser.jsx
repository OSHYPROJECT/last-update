import React, { Component } from 'react';
class Work extends Component  {
   constructor(props){
       super(props)
      this.state = {
       data:[]
       };
   }
componentDidMount(){
   var that = this;
   $.ajax({
       url:"/information",
       type:"GET",
       success:function(data){
         console.log(data);
         that.setState({data:data})
         console.log(that.state.data)
       },
       error:function(err){
         console.log(err)
       }
     });
   }
   render(){
       var info = [];
       if(Array.isArray(this.state.data)){
        info =this.state.data;
       }
       var listWorks= info.map((work) =>
       <div>
           <p>{work.name1}</p>
           <p>{work.location1}</p>
        <img src = {work.pic}/>
          </div>
     );
       return (
           <div> {listWorks} </div>
              
          
       )
   }
}
export default Work;