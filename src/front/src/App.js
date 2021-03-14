import { React, useState} from 'react';
import './App.css';
import Publication from './publication/Publication';
import ImageUpload from './ImageUpload';
import './ImageUpload.css';
import ImageUploadTest from './imageuploadTest';


function App() {
  const [publications, setPublications] = useState([
    {
      username: "Yoann",
      description: "Ceci est une salade",
      image: "https://images.unsplash.com/photo-1564345440082-155c43c5532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
      username: "Paul",
      description: "Ceci est un burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80"
    },
    {
      username: "Maxime",
      description: "Ceci est une pastabox",
      image:"",
    }
  ])

  return (
    <div className="app">

        <ImageUploadTest />

        <div className="app__header">
          <h1>AdopteUnChef.com</h1>
        </div>

        {
          publications.map(publication =>(
            <Publication username={publication.username} description={publication.description} image={publication.image}/>
          ))
        }
        
    </div>
  );
}

export default App;
