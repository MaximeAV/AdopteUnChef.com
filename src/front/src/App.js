import { React, useState} from 'react';
import './App.css';
import Publication from './publication/Publication';
import './ImageUpload.css';


function App() {
  const [publications, setPublications] = useState([])

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
        <button className="app__button" onClick={handlePublications}>Charger les publications</button>
        {
          publications.map(publication =>(
            <Publication title={publication.title} username="Username" description={publication.description} image={publication.image}/>
          ))
        }
        
    </div>
  );
}

export default App;
