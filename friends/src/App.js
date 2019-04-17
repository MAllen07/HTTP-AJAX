import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import FriendsList from "./Component/FriendsList";
import { Route, } from 'react-router-dom';
import FriendsForm from "./Component/FriendsForm";



class App extends Component {

  constructor (props) {
    super(props)
    this.state ={
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("response:", response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.error("you got an error:", err));
  }

  postFriend = friend => {
    // e.preventDefault();
    axios
    .post("http://localhost:5000/friends", friend)
    .then(response =>{
      console.log("post response", response)
      this.setState({ friends: response.data})
    })
    .catch(err => console.error('post error:', err))
  }

  updateFriend = (friend, id) => {
    console.log('post friend.. ')
    // e.preventDefault();
    axios
    .put(`http://localhost:5000/friends/${id}`, friend)
    .then(response =>{
      console.log("put response", response.data)
      this.setState({ friends: response.data})
    })
    .catch(err => console.error('put/update error:', err))
  }

  deleteFriend = id => {
    console.log('delete friend.. ')
    // e.preventDefault();
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response =>{
      console.log("delete response", response.data)
      this.setState({ friends: response.data})
    })
    .catch(err => console.error('delete error:', err))
  }


 changeFriendHandler = e => {
   this.setState({
    friendInfo: {
      ...this.state.friendInfo,
      [e.target.name]: e.target.value
          }
   })
 }
  
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <Route exact path="/" render={props => <FriendsList {...props} updateFriend={this.updatefriend} deleteFriend={this.deleteFriend} friends={this.state.friends}/> }/>
      
        <FriendsForm 
          postFriend={this.postFriend}
        />
        
      </div>
    );
  }
}

export default App;
