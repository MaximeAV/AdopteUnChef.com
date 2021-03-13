import { ReactComponent } from 'react';
import { Button } from '@material-ui/core'
import React from 'react'
import './ImageUpload.css';
import axios from 'axios';
import 'whatwg-fetch'

class ImageUpload extends React.Component {

    state = {
        title:'',
        description:'',
        selectedFile:null,
    }
    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:'',
        }
        this.handleUpload= this.handleUpload.bind(this)
    }

    handleUpload(event){
        event.preventDefault();
        console.log('onUpload : ',this.state);
        this.fileUploadHandler();
    }

    fileSelectHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        /*fd.append('title', this.state.title);
        fd.append('description', this.state.description);
        fd.append('image', image);
        fd.append('id_user', id_user);
        axios.post('http://localhost:4000/api/db/publications/addPublication', fd)
            .then( res => {
                console.log(res);
            });
        */
       fd.append(
           "myFile",
           this.state.selectedFile,
           this.state.selectedFile.name
       );

       axios.post("/api/uploadFile", fd);
    }

    handleSubmit(event){
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
            image: "test image",
            id_user: 2
        }
        
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: headers,
            body: JSON.stringify(uploadJson)
        };
        fetch('http://localhost:4000/api/db/publications/addPublication', requestOptions)
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
    }

    render(){
        return (
            <div className="imageupload">
                <input type="text" placeholder='Title' onChange={(e) => this.setState({title: e.target.value} )} />
                <textarea placeholder='Description' rows="10" onChange={(e) => this.setState({description: e.target.value} )}/>
                <input type="file" onChange={this.fileSelectHandler} />
                <Button onClick={(e) => this.handleSubmit(e)}>
                    Upload
                </Button>
                <Button onClick={this.fileUploadHandler} >
                    test euplod de la video
                </Button>
            </div>
        )
    }
}

export default ImageUpload;