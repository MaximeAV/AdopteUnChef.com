import { useState } from 'react';
import React from 'react'
import './ImageUpload.css';
import 'whatwg-fetch'
import { storage } from "./firebase/firebase";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [progress, setProgress] = useState(0);

  
    const handleChange = (event) => {
      if (event.target.files[0]) {
        setImage(event.target.files[0]);
      }
    };
  
    const handleUpload = (event) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
            });
        }
      );

        /*setTimeout(() => {
            fetchDatas(event);
        }, 10000)*/
    };  

    const fetchDatas = async (event) => {
        event.preventDefault();
        console.log('Insert publication...')
        
        // POST request using fetch with error handling
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ');
        headers.append('Origin','http://localhost:3000');

        let uploadJson = {
            title: title,
            description: description,
            image: url,
            id_user: 2
        } 

        console.log(uploadJson);
        
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

            <p>Vous pouvez maintenant voir votre publication sur la page d'accueil</p>
    }
  
    return (
        <div className="imageupload">
          <input className="imageupload__input" type="text" placeholder='Titre' onChange={(event) => setTitle(event.target.value)} />
          <input className="imageupload__input" type="file" onChange={handleChange} />
          <button className="imageupload__button" onClick={handleUpload}>Charger l'image</button>
          <img src={url}/>
          <textarea className="imageupload__input" placeholder="Votre recette" rows="10" onChange={(event) => setDescription(event.target.value)}/>
          <button className="imageupload__button" onClick={fetchDatas} to="/">Ajouter la publication</button>
        </div>
    );
  };

  export default ImageUpload;