import React, { Component } from 'react'


import './App.css'
import Main from './Main'
import SignIn from './SignIn'
import { auth } from './firebase'
import {Route, Switch} from 'react-router-dom'

class App extends Component {

  state = {
    uid: null,
  }

  componentWillMount(){
    const uid = localStorage.getItem('uid')
    if(uid){
      this.setState({uid})
    }
    auth.onAuthStateChanged((user) => {
        if(user){
          this.handleAuth(user)
        }else{
          this.signOut()
        }
    })
  }

  handleAuth = (user) => {
    this.setState({uid: user.uid })
    localStorage.setItem('uid', user.uid)
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({uid: null})
    localStorage.removeItem('uid')
    auth.signOut()
  }

  render() {
    return (
      <div className="App">
      <Switch>
          <Route path="/signin" Component={SignIn}/>
          <Route path="/notes" render={() => <Main signOut={this.signOut} uid={this.state.uid}/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
