import React, {useState, Component} from 'react';
import * as firebase from 'firebase';
import "firebase/storage";
import { MDBInput, MDBBtn, MDBAlert } from 'mdbreact';
import './file.css';


class Fileupload extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title:"",
            subject:"",
            description:"",
            image: null,
            fileUrl: "",
            fileName:"",
            userId:"",
            postedBy:""
        };
      }
      onChangeText = (key, value) => {
        this.setState({ [key]: value });
      };
    
      handleChange = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          console.log("Image file==>", image);
          this.setState(() => ({ image }));
          // this.setState(this.fileName , image.name);
          this.setState({
            fileName: image.name,
    })
        }
      };
    
      handleUpload = () => {
        const { image } = this.state;
        const uploadTask = firebase.storage().ref(`journals/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            // progress function ...
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({ progress });
          },
          error => {
            // Error function ...
            console.log(error);
          },
          () => {
            // complete function ...
            firebase.storage()
              .ref("journals")
              .child(image.name)
              .getDownloadURL()
              .then(fileUrl => {
                this.setState({ fileUrl });
              });
              this.postedBy = localStorage.getItem('postedBy');
              this.userId = localStorage.getItem('userId');
              this.setState({
                postedBy: this.postedBy,
               userId: this.userId
        })
              firebase.database().ref("journals").set(this.state);
          }
        );
      };
      render() {
    const { title, subject, description} = this.state;
        return (
          <div className="container">
              <div className="d-flex align-items-center justif-content-center hVh">
              <div className="col-md-10 offset-md-1">
                  <h2>Upload Your Journals</h2>
              <MDBInput type='text' getValue={e => this.onChangeText('title', e)} value={title} label='Title'/>
              <MDBInput type='text' getValue={e => this.onChangeText('subject', e)} value={subject} label='Subject'/>
              <div class="md-form">
                <textarea id="form7" class="md-textarea form-control" getValue={e => this.onChangeText('description', e)} value={description} rows="3"></textarea>
                <label for="form7">Description</label>
                </div>
              <input type="file" onChange={this.handleChange}/>
              <MDBBtn color='primary' className='ml-0 mr-0 mt-3 mb-3  w-100'  onClick={() => this.handleUpload()}>
                Submit
              </MDBBtn>
              </div>
              </div>
          </div>
        );
      }
    }
    
  export default Fileupload;