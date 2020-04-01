import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { MDBInput,MDBBtn  } from "mdbreact";
import Signup from './login/singup';
import {userRef} from './firebase';

function App() {
  return (
    <Router>
    
    <div className="App">
      <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/Signup" component={Signup}/>   
       <Route path="/login" component={Login}/>
      </Switch>
    
      {/* <div className="container-fluid">
        <div className="col-12">
          <div className="row align-items-center loginPage"> 
            <div className="col-md-6 offset-md-3 col-12">
              <div className="card loginCard">
                <MDBInput label="Email" />
                <MDBInput type='password' label="Password" />
                <MDBBtn color="primary" className="m-0">Submit</MDBBtn>
                <a className="font12 text-dark text-right pt-2" href="javascript:void(0);">Forgot Password?</a>
                <div>Don't have an account? <a className="font12 text-dark text-right pt-2" href="javascript:void(0);">SignUp</a></div>
              </div>
            </div>
          </div>
        </div> 
      </div>    */}
      
    </div>
    </Router>
    
  );
  
}

export default App;
