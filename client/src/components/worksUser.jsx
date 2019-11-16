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
       <div className="Fo" id="box2">
        <p><img src = {work.pic} id="image"  width= "35px" height="35px"/> {work.name1} </p>
        <p>{work.location1}</p>
        </div>
     );
       return (
           <div> {listWorks} </div>
              
          
       )
   }
}
export default Work;