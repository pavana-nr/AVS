import React from 'react';
import './App.css';
import Login from './login/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './login/singup';
import './firebase';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/Signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
