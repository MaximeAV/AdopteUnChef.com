import { ReactComponent } from 'react';
import { Button } from '@material-ui/core'
import React from 'react'
import './ImageUpload.css';
import axios from 'axios';
import 'whatwg-fetch'
import { storage } from "./firebase/firebase";

class ImageUpload extends React.Component {

    state = {
        title:'',
        description:'',
        selectedFile: '',
        url: '',
    }
    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:'',
            selectedFile: null,
        }
        this.handleUpload= this.handleUpload.bind(this)
    }

    

    /* handleUpload(event){
        event.preventDefault();
        console.log('onUpload : ',this.state);
        this.fileUploadHandler();
    } */

    /* fileSelectHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    } */

    /* fileUploadHandler = () => {
        const fd = new FormData(); */
        /*fd.append('title', this.state.title);
        fd.append('description', this.state.description);
        fd.append('image', image);
        fd.append('id_user', id_user);
        axios.post('http://localhost:4000/api/db/publications/addPublication', fd)
            .then( res => {
                console.log(res);
            });
        */
       /* fd.append(
           "image",
           this.state.selectedFile,
           this.state.selectedFile.name
       );

       axios.post("http://localhost:4000/api/db/publications/addPublication", fd);
    } */

    /* handleSubmit(event){
        event.preventDefault();
        console.log('Register user...')
        
        // POST request using fetch with error handling
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ');
        headers.append('Origin','http://localhost:3000');

        let uploadJson = {
            title: this.state.title,
            description: this.state.description,
            image: null,
            id_user: 2
        }
        
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: headers,
            body: JSON.stringify(uploadJson)
        };
        fetch("http://localhost:4000/api/db/publications/addPublication", requestOptions)
            .then(async res => {
                const data = await res.json();
                // check for error response
                if (!res.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || res.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    } */

    /* imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload = () =>  {
            if (reader.readyState === 2){
                this.setState({selectedFile: reader.result})
            }
        }
        this.setState({selectedFile: reader.readAsDataURL(e.target.files[0])})
        var fs = require('bro-fs');
        fs.writeFile('test.jpg', reader, function (err) {
            if (err) return console.log(err);
            console.log('Ca marche');
        })
    } */

    handleChange = e => {
        let selectedFile;
        if (e.target.files[0]) {
            this.setState({
                selectedFile: e.target.files[0]
            })
            selectedFile = e.target.files[0];
            console.log(e.target.files[0]);
            console.log(selectedFile);
        }
    };

    handleUpload = () => {
        const uploadTask = storage.ref(`images/${this.state.selectedFile.name}`).put(this.state.selectedFile);
        uploadTask.on(
          "state_changed",
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(this.state.selectedFile.name)
              .then(url => {
                this.setState({url: url});
              });
          }
        );
      };

    render(){
        return (
            <div className="imageupload">
                <input type="text" placeholder='Title' onChange={(e) => this.setState({title: e.target.value} )} />
                <textarea placeholder='Description' rows="10" onChange={(e) => this.setState({description: e.target.value} )}/>
                <input type="file" onChange={(e) => this.handleChange(e)} />
                <Button onClick={(e) => this.handleSubmit(e)}>
                    Upload
                </Button>
                <Button onClick={this.handleUpload} >
                    test euplod de la video
                </Button>
                <img src={this.state.selectedFile} />
            </div>
        )
    }
}

export default ImageUpload;