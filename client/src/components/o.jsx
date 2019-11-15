import React, { Component } from 'react';
class Users extends Component  {
   constructor(props){
       super(props)
      this.state = {
       data:[]
       };
   }
componentDidMount(){
   var that = this;
   $.ajax({
       url:"/userinfo",
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
       var users = [];
       if(Array.isArray(this.state.data)){
           users =this.state.data;
       }
       var listUsers = users.map((userinfo) =>
       <div id="user">
        <h4 id= "owner">owner</h4>
        <h2 id = "u">  <img id= "pic" src = {userinfo.pp}/>
          {userinfo.name}</h2>
          <h3 font-size="10px"
 >{userinfo.location}</h3>
          </div>
     );
       return (
           <div   > {listUsers} </div>
              
          
       )
   }
}
export default Users;