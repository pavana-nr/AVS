import React, { Component } from 'react';
import './signup.css';
import { MDBInput, MDBBtn, MDBAlert, MDBIcon } from 'mdbreact';
import firebase from 'firebase'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props)  
    this.state = {
      firstName: 'test',
      lastName: 'user', 
      phonenumber: '', 
      email: '', 
      password: '', 
      confirmPassword: '', 
      designation: '', 
      department: '', 
      semister: '', 
      paper: '',
      errorText: '',
      showError: false
    }
  }
  


  signup = () => {   
    debugger;
    const { firstName, lastName, phonenumber, email, designation, password, confirmPassword,  department, semister, paper } = this.state
    if(password !== confirmPassword) return 
    const params = { firstName, lastName, phonenumber, email, designation, department, semister, paper }
    this.setState({ showError: false, errorText: '', loading: true});
    firebase
      .auth().createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        alert('account created')
        console.log(user)
        firebase.firestore().collection('users').add(params).then((response) => {
          alert('account added to users table')
          console.log(response)
          this.setState({loading: false});
        }).catch(({ message }) => {
          console.log(message);
          this.setState({showError: true, errorText: message, loading: false});
        });        
      })
      .catch(({ message }) => {
        console.log(message);
        this.setState({showError: true, errorText: message, loading: false});
    });
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { firstName, lastName, errorText, showError, phonenumber, email, designation, department, semister, paper, password, confirmPassword, loading } = this.state
    return (
      <div className='container-fluid'>
        <div className='row align-items-center loginPage'>
          <div className='col-md-7 col-sm-none backImg'>
            <div className=''></div>
          </div>
          <div className='col-md-5 col-12'>
            <div className='col-md-12'>
              <form>
                <div className='row'>
                  <div className='col-md-6 col-12'>
                    <MDBInput getValue={e => this.onChangeText('firstName', e)} value={firstName} type='text' name='fname' label='First Name' />
                  </div>
                  <div className='col-md-6 col-12'>
                    <MDBInput getValue={e => this.onChangeText('lastName', e)}  value={lastName} type='text' name='lname' label='Last Name' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-12'>
                    <MDBInput getValue={e => this.onChangeText('email', e)}  value={email} type='text' name='email' label='Email' />
                  </div>
                  <div className='col-md-6 col-12'>
                    <MDBInput getValue={e => this.onChangeText('phonenumber', e)}  value={phonenumber} type='text' name='phonenum' label='Phone Number' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-12'>
                    <MDBInput getValue={e => this.onChangeText('password', e)}  value={password} type='password' name='password' label='Password' />
                  </div>
                  <div className='col-md-6 col-12'>
                    <MDBInput getValue={e => this.onChangeText('confirmPassword', e)}  value={confirmPassword} type='password' name='confirmPassword' label='Confirm Password' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-12'>
                    <MDBInput getValue={e => this.onChangeText('designation', e)}  value={designation} type='text' name='designation' label='Designation' />
                  </div>
                  <div className='col-md-6 col-12'>
                    <MDBInput getValue={e => this.onChangeText('department', e)}  value={department} type='text' name='department' label='Department' />
                  </div>
                </div>
                <div className='details pt-2 pb-2'>Paper/Course,Block details</div>
                <div className='row'>
                  <div className='col-md-12 col-12'>
                    <div>Degree</div>
                    <div className='d-flex justify-content-between align-item-center'>
                      <div class='form-check'>
                        <input type='radio' class='form-check-input' id='materialChecked1' name='degree' value='ma' />
                        <label class='form-check-label' for='materialChecked1'>
                          MA
                        </label>
                      </div>
                      <div class='form-check'>
                        <input type='radio' class='form-check-input' id='materialChecked2' name='degree' value='msc' />
                        <label class='form-check-label' for='materialChecked2'>
                          Msc
                        </label>
                      </div>
                      <div class='form-check'>
                        <input type='radio' class='form-check-input' id='materialChecked3' name='degree' value='diploma' />
                        <label class='form-check-label' for='materialChecked3'>
                          Diploma
                        </label>
                      </div>
                      <div class='form-check'>
                        <input type='radio' class='form-check-input' id='materialChecked4' name='degree' value='pgdiploma' />
                        <label class='form-check-label' for='materialChecked4'>
                          PG Diploma
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 col-12'>
                    <MDBInput getValue={e => this.onChangeText('semister', e)} value={semister} type='text' name='sem' label='Ex: Sem - I' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 col-12'>
                    <MDBInput getValue={e => this.onChangeText('paper', e)} value={paper} type='text' name='paper' label='Ex: Paper - I' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 col-12'>
                    <div>Block</div>
                    <div className='d-flex justify-content-between align-item-center'>
                      <div class='form-check'>
                        <input type='checkbox' class='form-check-input' id='materialChecked1' name='ma' />
                        <label class='form-check-label' for='materialChecked1'>
                          I
                        </label>
                      </div>
                      <div class='form-check'>
                        <input type='checkbox' class='form-check-input' id='materialChecked2' name='ba' />
                        <label class='form-check-label' for='materialChecked2'>
                          II
                        </label>
                      </div>
                      <div class='form-check'>
                        <input type='checkbox' class='form-check-input' id='materialChecked3' name='diploma' />
                        <label class='form-check-label' for='materialChecked3'>
                          III
                        </label>
                      </div>
                      <div class='form-check'>
                        <input type='checkbox' class='form-check-input' id='materialChecked4' name='pgdiploma' />
                        <label class='form-check-label' for='materialChecked4'>
                          IV
                        </label>
                      </div>
                      <div class='form-check'>
                        <input type='checkbox' class='form-check-input' id='materialChecked5' name='pgdiploma' />
                        <label class='form-check-label' for='materialChecked5'>
                          All
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <MDBBtn color='primary' className='w-100 ml-0 mr-0 mt-4 mb-4' onClick={()=> this.signup()} disabled={loading} >
                  {loading ? <MDBIcon icon="spinner" /> : "Sign Up"}
                </MDBBtn>
                {showError && (<MDBAlert color="danger" >{errorText}</MDBAlert>)}              
                <div className='text-right'></div>
                <div className='text-center pt-2'>
                  {' '}
                  Already have an account?
                  {/* <a className="font12 text-dark pt-2" href="javascript:void(0);">SignIn</a> */}
                  <Link to='/login'>SignIn</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
