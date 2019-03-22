import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import login from './pages/Login';
import timeline  from './pages/Timeline';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={login}/>
          <Route path="/timeline" component={timeline}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
