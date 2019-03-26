import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import UserInfo from './components/UserInfo'
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Hobby from './components/Hobby'
import HobbyProvider from './providers/HobbyProvider';


class App extends Component {
 
  render() {
    return (
      <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/user/info" component={UserInfo} />
        <HobbyProvider>
          <Route exact path="/user/hobbies" component={Hobby} />
        </HobbyProvider>
        <Route component={NoMatch}/>
      </Switch>
      </>
    );
  }
}

export default App;
