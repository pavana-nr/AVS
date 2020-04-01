import React, {Component} from 'react';
import './signup.css';
import { MDBInput,MDBBtn  } from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Signup extends Component{
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
                      <form>
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <MDBInput type="text" name="fname" label="First Name" />
                          </div>
                          <div className="col-md-6 col-12">
                            <MDBInput type='text' name="lname" label="Last Name" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <MDBInput type="text" name="designation" label="Designation" />
                          </div>
                          <div className="col-md-6 col-12">
                            <MDBInput type='text' name="department" label="Department" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <MDBInput type="text" name="email" label="Email" />
                          </div>
                          <div className="col-md-6 col-12">
                            <MDBInput type='text' name="phonenum" label="Phone Number" />
                          </div>
                        </div>
                        <div className="details pt-2 pb-2">Paper/Course,Block details</div>
                        <div className="row">
                          <div className="col-md-12 col-12">
                          <div>Degree</div>
                          <div className="d-flex justify-content-between align-item-center">
                          <div class="form-check">
                          <input type="radio" class="form-check-input" id="materialChecked1" name="degree" value="ma"/>
                          <label class="form-check-label" for="materialChecked1">MA</label>
                          </div>
                          <div class="form-check">
                          <input type="radio" class="form-check-input" id="materialChecked2" name="degree" value="msc"/>
                          <label class="form-check-label" for="materialChecked2">Msc</label>
                          </div>
                          <div class="form-check">
                          <input type="radio" class="form-check-input" id="materialChecked3" name="degree" value="diploma"/>
                          <label class="form-check-label" for="materialChecked3">Diploma</label>
                          </div>
                          <div class="form-check">
                          <input type="radio" class="form-check-input" id="materialChecked4" name="degree" value="pgdiploma" />
                          <label class="form-check-label" for="materialChecked4">PG Diploma</label>
                          </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-12">
                          <MDBInput type='text' name="sem" label="Ex: Sem - I" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-12">
                          <MDBInput type='text' name="paper" label="Ex: Paper - I" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-12">
                          <div>Block</div>
                          <div className="d-flex justify-content-between align-item-center">
                          <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="materialChecked1" name="ma"/>
                          <label class="form-check-label" for="materialChecked1">I</label>
                          </div>
                          <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="materialChecked2" name="ba"/>
                          <label class="form-check-label" for="materialChecked2">II</label>
                          </div>
                          <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="materialChecked3" name="diploma"/>
                          <label class="form-check-label" for="materialChecked3">III</label>
                          </div>
                          <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="materialChecked4" name="pgdiploma" />
                          <label class="form-check-label" for="materialChecked4">IV</label>
                          </div>
                          <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="materialChecked5" name="pgdiploma" />
                          <label class="form-check-label" for="materialChecked5">All</label>
                          </div>
                            </div>
                          </div>
                        </div>
                        <MDBBtn color="primary" className="w-100 ml-0 mr-0 mt-4 mb-4">Sign Up</MDBBtn>
                        <div className="text-right">
                        </div>
                        <div className="text-center pt-2"> Already have an account? 
                        {/* <a className="font12 text-dark pt-2" href="javascript:void(0);">SignIn</a> */}
                        <Link to="/login">SignIn</Link>
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