import React, { Component } from 'react';
import './login.css';
import { MDBInput, MDBBtn, MDBAlert } from 'mdbreact';
import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passowrd: '',
      errorText: '',
      showError: false,
      loading: false,
    };
  }

  login = () => {   
    const { email, password } = this.state 
    console.log(email, password)
    this.setState({ showError: false, errorText: '', loading: true});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        debugger;
        console.log(user);
        this.setState({loading: false});
      })
      .catch(({ message }) => {
          debugger;
        console.log(message);
        this.setState({showError: true, errorText: message, loading: false});
    });
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { email, password, loading, showError, errorText } = this.state;
    console.log(email, password)
    return (
      <div className='container-fluid'>
        <div className='row align-items-center loginPage'>
          <div className='col-md-7 col-sm-none backImg'>
            <div className=''></div>
          </div>
          <div className='col-md-5 col-12'>
            <div className='col-md-10 offset-md-1'>
              <MDBInput type='email' getValue={e => this.onChangeText('email', e)} value={email} label='Email' />
              <MDBInput type='password' value={password} getValue={e => this.onChangeText('password', e)} label='Password' />
              <MDBBtn color='primary' className='ml-0 mr-0 mt-3 mb-3  w-100' disabled={loading} onClick={() => this.login()}>
                Submit
              </MDBBtn>
              {showError && (<MDBAlert color="danger" >{errorText}</MDBAlert>)}              
              <div className='text-right'>
                <a className='font12 text-dark  pt-2' href='javascript:void(0);'>
                  Forgot Password?
                </a>
              </div>
              <div className='text-center'>
                {' '}
                Don't have an account?
                {/* <a className="font12 text-dark pt-2" href="javascript:void(0);">SignUp</a> */}
                <Link to='/signup'>SignUp</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
