import React, { Component } from 'react';
import Moment from 'moment';

class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    var that = this;
    $.ajax({
      url: "/Reviewers",
      type: "GET",
      success: function (data) {
        //   console.log(data);
        that.setState({ comments: data })
        console.log(that.state.data)
      },
      error: function (err) {
        console.log(err)
      }
    });
  }
  render() {
    var cc = [];
    if (Array.isArray(this.state.comments)) {
      cc = this.state.comments;
    }
    var listcomments = cc.map((Reviewers) =>
      <div id = "div" >
        
          <p >{Moment(Reviewers.time).format('dd MMM YYYY')}</p>
          <h3 id="username ">
            <img width="30px" height="30px" src={Reviewers.profilePic} /> {Reviewers.userName} </h3>
          <p >{Reviewers.comment}</p>
   
   
      </div>
    );
    return (
      <div>
        <div id = "div">
        <h3> Sign up to join the conversation </h3>
        <p> Add your feedback for project creater by signing in or signing up</p>
        <button id="butt"> sign up with email </button>
        </div>
        <div >
          {listcomments}
        </div>
      </div>)
  }
}
export default Comments;