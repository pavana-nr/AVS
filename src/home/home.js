import React, {Component} from 'react';
import './home.css';
import { MDBInput,MDBBtn  } from "mdbreact";
import firebase from 'firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Tabs from './tabs';


class Home extends Component{

    render(){
        return(
            <div className="container-fluid">           
             <div className="row">
                    <Tabs/>
            </div>
        </div>
        );
    }
}
export default Home;