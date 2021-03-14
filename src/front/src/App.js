import { React, useState} from 'react';
import './App.css';
import Publication from './publication/Publication';
import './ImageUpload.css';
import ImageUpload from './ImageUpload';


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

  const handlePublications = (event) => {
    event.preventDefault();
    console.log('Get publications from database...')
    
    // POST request using fetch with error handling
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ');
    headers.append('Origin','http://localhost:3000');
    
    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: headers,
    };
    fetch('http://localhost:4000/api/db/publications/', requestOptions)
        .then(async res => {
            const data = await res.json();
            console.log(data);
            setPublications(data.reverse());
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

  return (
    <div className="app">
        <div className="app__header">
        </div>

        <button onClick={handlePublications}>Charger publis</button>

        {
          publications.map(publication =>(
            <Publication username="Username" description={publication.description} image={publication.image}/>
          ))
        }
        
    </div>
  );
}

export default App;
