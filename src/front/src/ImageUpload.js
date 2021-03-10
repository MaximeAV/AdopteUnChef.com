import { ReactComponent } from 'react';
import { Button } from '@material-ui/core'
import React from 'react'
import './ImageUpload.css';
import axios from 'axios';

class ImageUpload extends React.Component {

    state = {
        title:'',
        recette:'',
        selectedFile:null,
    }
    constructor(props){
        super(props);
        this.state = {
            title:'',
            recette:'',
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
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('./Images', fd)
            .then( res => {
                console.log(res);
            });
    }

    render(){
        return (
            <div className="imageupload">
                <input type="text" placeholder='Title' onChange={(e) => this.setState({title: e.target.value} )} />
                <textarea placeholder='Recette' rows="10" onChange={(e) => this.setState({recette: e.target.value} )}/>
                <input type="file" onChange={this.fileSelectHandler} />
                <Button onClick={(e) => this.handleUpload(e)}>
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