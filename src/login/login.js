import React, {Component} from 'react';
import './login.css';
import { MDBInput,MDBBtn  } from "mdbreact";
import firebase from 'firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Login extends Component{

    login(params) {
        const { email, password } = params
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => ({ success: true, data: user }))
        .catch(({ message }) => ({ success: false, error: message }))
      }

    render(){
        return(
            <div className="container-fluid">           
             <div className="row align-items-center loginPage">
                <div className="col-md-7 col-sm-none backImg">
                    <div className="">
                        
                    </div>
                </div>
                <div className="col-md-5 col-12">
                    <div className="col-md-10 offset-md-1">
                        <MDBInput type="text" label="Email" />
                        <MDBInput type='password' label="Password" />
                        <MDBBtn color="primary" className="ml-0 mr-0 mt-3 mb-3  w-100">Submit</MDBBtn>
                        <div className="text-right">
                        <a className="font12 text-dark  pt-2" href="javascript:void(0);">Forgot Password?</a>
                        </div>
                        <div className="text-center"> Don't have an account?
                         {/* <a className="font12 text-dark pt-2" href="javascript:void(0);">SignUp</a> */}
                        <Link to="/signup">SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;